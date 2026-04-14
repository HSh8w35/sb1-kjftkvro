import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import { useAuth } from '../contexts/AuthContext';
import {
  Bell,
  Calendar,
  Lightbulb,
  Users,
  Download,
  XCircle,
  Mail,
  Mic,
  MessageSquare,
  LogOut,
  BookOpen,
  Anchor
} from 'lucide-react';

interface Tab {
  id: string;
  label: string;
  icon: any;
}

const tabs: Tab[] = [
  { id: 'contact', label: 'Contact Inquiries', icon: MessageSquare },
  { id: 'speaking', label: 'Speaking Inquiries', icon: Mic },
  { id: 'newsletter', label: 'Newsletter Subscribers', icon: Mail },
  { id: 'field-notes', label: 'Field Notes', icon: BookOpen },
  { id: 'notifications', label: 'Email Notifications', icon: Bell },
  { id: 'reports', label: 'Scheduled Reports', icon: Calendar },
  { id: 'suggestions', label: 'Keyword Suggestions', icon: Lightbulb },
  { id: 'competitors', label: 'Competitor Analysis', icon: Users },
  { id: 'exports', label: 'Export Reports', icon: Download },
];

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('contact');
  const { signOut } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut();
    navigate('/login');
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'contact':
        return <ContactInquiriesTab />;
      case 'speaking':
        return <SpeakingInquiriesTab />;
      case 'newsletter':
        return <NewsletterSubscribersTab />;
      case 'field-notes':
        return <FieldNotesTab />;
      case 'notifications':
        return <NotificationsTab />;
      case 'reports':
        return <ScheduledReportsTab />;
      case 'suggestions':
        return <KeywordSuggestionsTab />;
      case 'competitors':
        return <CompetitorAnalysisTab />;
      case 'exports':
        return <ExportsTab />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-lg shadow-sm">
          <div className="border-b border-gray-200">
            <div className="px-6 py-4 flex justify-between items-start">
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
                <p className="mt-2 text-sm text-gray-600">
                  Manage form submissions, newsletter subscribers, notifications, reports, and SEO analytics
                </p>
              </div>
              <button
                onClick={handleLogout}
                className="flex items-center space-x-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition"
              >
                <LogOut className="w-4 h-4" />
                <span>Logout</span>
              </button>
            </div>

            <nav className="flex space-x-4 px-6 overflow-x-auto">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center space-x-2 py-4 px-3 border-b-2 whitespace-nowrap ${
                      activeTab === tab.id
                        ? 'border-blue-600 text-blue-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </nav>
          </div>

          <div className="p-6">
            {renderTabContent()}
          </div>
        </div>
      </div>
    </div>
  );
}

function ContactInquiriesTab() {
  const [inquiries, setInquiries] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [statusFilter, setStatusFilter] = useState('all');
  const [typeFilter, _setTypeFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedRow, setExpandedRow] = useState<string | null>(null);
  const [selectedInquiries, setSelectedInquiries] = useState<string[]>([]);

  useEffect(() => {
    fetchInquiries();
  }, [statusFilter, typeFilter, searchQuery]);

  const fetchInquiries = async () => {
    setLoading(true);
    let query = supabase
      .from('contact_inquiries')
      .select('*')
      .order('created_at', { ascending: false });

    if (statusFilter !== 'all') {
      query = query.eq('status', statusFilter);
    }

    if (typeFilter !== 'all') {
      query = query.eq('inquiry_type', typeFilter);
    }

    if (searchQuery) {
      query = query.or(`name.ilike.%${searchQuery}%,email.ilike.%${searchQuery}%,property_name.ilike.%${searchQuery}%`);
    }

    const { data, error } = await query;

    if (!error && data) {
      setInquiries(data);
    }
    setLoading(false);
  };

  const updateStatus = async (id: string, status: string) => {
    const updates: any = { status };
    if (status === 'read' && !inquiries.find(i => i.id === id)?.read_at) {
      updates.read_at = new Date().toISOString();
    }
    if (status === 'responded') {
      updates.responded_at = new Date().toISOString();
    }

    await supabase
      .from('contact_inquiries')
      .update(updates)
      .eq('id', id);

    await fetchInquiries();
  };

  const batchUpdateStatus = async (status: string) => {
    if (selectedInquiries.length === 0) return;

    const updates: any = { status };
    if (status === 'read') {
      updates.read_at = new Date().toISOString();
    }
    if (status === 'responded') {
      updates.responded_at = new Date().toISOString();
    }

    await Promise.all(
      selectedInquiries.map(id =>
        supabase
          .from('contact_inquiries')
          .update(updates)
          .eq('id', id)
      )
    );

    setSelectedInquiries([]);
    await fetchInquiries();
  };

  const deleteInquiry = async (id: string) => {
    if (!confirm('Are you sure you want to delete this inquiry?')) return;

    await supabase
      .from('contact_inquiries')
      .delete()
      .eq('id', id);

    await fetchInquiries();
  };

  const exportToCSV = () => {
    const headers = ['Name', 'Email', 'Property', 'Role', 'Phone', 'Type', 'Message', 'Status', 'Submitted'];
    const rows = inquiries.map(i => [
      i.name,
      i.email,
      i.property_name || '',
      i.role || '',
      i.phone || '',
      i.inquiry_type || '',
      i.message,
      i.status,
      new Date(i.created_at).toLocaleString()
    ]);

    const csv = [headers, ...rows].map(row => row.map(cell => `"${cell}"`).join(',')).join('\n');
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `contact_inquiries_${Date.now()}.csv`;
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
  };

  const stats = {
    total: inquiries.length,
    new: inquiries.filter(i => i.status === 'new').length,
    read: inquiries.filter(i => i.status === 'read').length,
    responded: inquiries.filter(i => i.status === 'responded').length,
    archived: inquiries.filter(i => i.status === 'archived').length,
  };

  return (
    <div className="space-y-6">
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <div className="flex items-start justify-between">
          <div className="flex items-start">
            <MessageSquare className="w-5 h-5 text-blue-600 mt-0.5 mr-3" />
            <div>
              <h3 className="text-sm font-medium text-blue-900">Contact Inquiries</h3>
              <p className="mt-1 text-sm text-blue-700">
                Manage contact form submissions from potential clients
              </p>
            </div>
          </div>
          <button
            onClick={exportToCSV}
            className="px-3 py-1 text-sm bg-blue-600 text-white rounded hover:bg-blue-700 flex items-center space-x-1"
          >
            <Download className="w-4 h-4" />
            <span>Export CSV</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <div className="text-2xl font-bold text-gray-900">{stats.total}</div>
          <div className="text-xs text-gray-500">Total Inquiries</div>
        </div>
        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <div className="text-2xl font-bold text-blue-600">{stats.new}</div>
          <div className="text-xs text-gray-500">New</div>
        </div>
        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <div className="text-2xl font-bold text-yellow-600">{stats.read}</div>
          <div className="text-xs text-gray-500">Read</div>
        </div>
        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <div className="text-2xl font-bold text-green-600">{stats.responded}</div>
          <div className="text-xs text-gray-500">Responded</div>
        </div>
        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <div className="text-2xl font-bold text-gray-600">{stats.archived}</div>
          <div className="text-xs text-gray-500">Archived</div>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0 mb-4">
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="all">All Status</option>
              <option value="new">New</option>
              <option value="read">Read</option>
              <option value="responded">Responded</option>
              <option value="archived">Archived</option>
            </select>
            <input
              type="text"
              placeholder="Search by name, email, or property..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          {selectedInquiries.length > 0 && (
            <div className="flex space-x-2">
              <button
                onClick={() => batchUpdateStatus('read')}
                className="px-3 py-2 text-sm bg-yellow-600 text-white rounded hover:bg-yellow-700"
              >
                Mark Read ({selectedInquiries.length})
              </button>
              <button
                onClick={() => batchUpdateStatus('responded')}
                className="px-3 py-2 text-sm bg-green-600 text-white rounded hover:bg-green-700"
              >
                Mark Responded ({selectedInquiries.length})
              </button>
              <button
                onClick={() => batchUpdateStatus('archived')}
                className="px-3 py-2 text-sm bg-gray-600 text-white rounded hover:bg-gray-700"
              >
                Archive ({selectedInquiries.length})
              </button>
            </div>
          )}
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left">
                  <input
                    type="checkbox"
                    checked={selectedInquiries.length === inquiries.length && inquiries.length > 0}
                    onChange={(e) => {
                      if (e.target.checked) {
                        setSelectedInquiries(inquiries.map(i => i.id));
                      } else {
                        setSelectedInquiries([]);
                      }
                    }}
                    className="rounded"
                  />
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Email
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Property
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Type
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Submitted
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {loading ? (
                <tr>
                  <td colSpan={8} className="px-6 py-4 text-center text-gray-500">
                    Loading...
                  </td>
                </tr>
              ) : inquiries.length === 0 ? (
                <tr>
                  <td colSpan={8} className="px-6 py-4 text-center text-gray-500">
                    No inquiries found
                  </td>
                </tr>
              ) : (
                inquiries.map((inquiry) => (
                  <>
                    <tr key={inquiry.id} className={inquiry.status === 'new' ? 'bg-blue-50' : ''}>
                      <td className="px-6 py-4">
                        <input
                          type="checkbox"
                          checked={selectedInquiries.includes(inquiry.id)}
                          onChange={(e) => {
                            if (e.target.checked) {
                              setSelectedInquiries([...selectedInquiries, inquiry.id]);
                            } else {
                              setSelectedInquiries(selectedInquiries.filter(id => id !== inquiry.id));
                            }
                          }}
                          className="rounded"
                        />
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">{inquiry.name}</div>
                        {inquiry.role && <div className="text-sm text-gray-500">{inquiry.role}</div>}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {inquiry.email}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {inquiry.property_name || '-'}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {inquiry.inquiry_type || '-'}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          inquiry.status === 'new'
                            ? 'bg-blue-100 text-blue-800'
                            : inquiry.status === 'read'
                            ? 'bg-yellow-100 text-yellow-800'
                            : inquiry.status === 'responded'
                            ? 'bg-green-100 text-green-800'
                            : 'bg-gray-100 text-gray-800'
                        }`}>
                          {inquiry.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {new Date(inquiry.created_at).toLocaleDateString()}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <button
                          onClick={() => setExpandedRow(expandedRow === inquiry.id ? null : inquiry.id)}
                          className="text-blue-600 hover:text-blue-900 mr-4"
                        >
                          {expandedRow === inquiry.id ? 'Hide' : 'View'}
                        </button>
                        <button
                          onClick={() => deleteInquiry(inquiry.id)}
                          className="text-red-600 hover:text-red-900"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                    {expandedRow === inquiry.id && (
                      <tr>
                        <td colSpan={8} className="px-6 py-4 bg-gray-50">
                          <div className="space-y-4">
                            <div>
                              <div className="text-xs font-medium text-gray-500 uppercase mb-1">Message</div>
                              <div className="text-sm text-gray-900 whitespace-pre-wrap">{inquiry.message}</div>
                            </div>
                            {inquiry.phone && (
                              <div>
                                <div className="text-xs font-medium text-gray-500 uppercase mb-1">Phone</div>
                                <div className="text-sm text-gray-900">{inquiry.phone}</div>
                              </div>
                            )}
                            <div className="flex space-x-2">
                              {inquiry.status !== 'read' && (
                                <button
                                  onClick={() => updateStatus(inquiry.id, 'read')}
                                  className="px-3 py-1 text-sm bg-yellow-600 text-white rounded hover:bg-yellow-700"
                                >
                                  Mark as Read
                                </button>
                              )}
                              {inquiry.status !== 'responded' && (
                                <button
                                  onClick={() => updateStatus(inquiry.id, 'responded')}
                                  className="px-3 py-1 text-sm bg-green-600 text-white rounded hover:bg-green-700"
                                >
                                  Mark as Responded
                                </button>
                              )}
                              {inquiry.status !== 'archived' && (
                                <button
                                  onClick={() => updateStatus(inquiry.id, 'archived')}
                                  className="px-3 py-1 text-sm bg-gray-600 text-white rounded hover:bg-gray-700"
                                >
                                  Archive
                                </button>
                              )}
                            </div>
                          </div>
                        </td>
                      </tr>
                    )}
                  </>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function SpeakingInquiriesTab() {
  const [inquiries, setInquiries] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [statusFilter, setStatusFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedRow, setExpandedRow] = useState<string | null>(null);
  const [selectedInquiries, setSelectedInquiries] = useState<string[]>([]);

  useEffect(() => {
    fetchInquiries();
  }, [statusFilter, searchQuery]);

  const fetchInquiries = async () => {
    setLoading(true);
    let query = supabase
      .from('speaking_inquiries')
      .select('*')
      .order('created_at', { ascending: false });

    if (statusFilter !== 'all') {
      query = query.eq('status', statusFilter);
    }

    if (searchQuery) {
      query = query.or(`name.ilike.%${searchQuery}%,email.ilike.%${searchQuery}%,organization.ilike.%${searchQuery}%`);
    }

    const { data, error } = await query;

    if (!error && data) {
      setInquiries(data);
    }
    setLoading(false);
  };

  const updateStatus = async (id: string, status: string) => {
    const updates: any = { status };
    if (status === 'read' && !inquiries.find(i => i.id === id)?.read_at) {
      updates.read_at = new Date().toISOString();
    }
    if (status === 'responded') {
      updates.responded_at = new Date().toISOString();
    }

    await supabase
      .from('speaking_inquiries')
      .update(updates)
      .eq('id', id);

    await fetchInquiries();
  };

  const batchUpdateStatus = async (status: string) => {
    if (selectedInquiries.length === 0) return;

    const updates: any = { status };
    if (status === 'read') {
      updates.read_at = new Date().toISOString();
    }
    if (status === 'responded') {
      updates.responded_at = new Date().toISOString();
    }

    await Promise.all(
      selectedInquiries.map(id =>
        supabase
          .from('speaking_inquiries')
          .update(updates)
          .eq('id', id)
      )
    );

    setSelectedInquiries([]);
    await fetchInquiries();
  };

  const deleteInquiry = async (id: string) => {
    if (!confirm('Are you sure you want to delete this inquiry?')) return;

    await supabase
      .from('speaking_inquiries')
      .delete()
      .eq('id', id);

    await fetchInquiries();
  };

  const exportToCSV = () => {
    const headers = ['Name', 'Email', 'Organization', 'Role', 'Phone', 'Event Type', 'Event Date', 'Audience', 'Context', 'Status', 'Submitted'];
    const rows = inquiries.map(i => [
      i.name,
      i.email,
      i.organization || '',
      i.role || '',
      i.phone || '',
      i.event_type || '',
      i.event_date || '',
      i.audience || '',
      i.context,
      i.status,
      new Date(i.created_at).toLocaleString()
    ]);

    const csv = [headers, ...rows].map(row => row.map(cell => `"${cell}"`).join(',')).join('\n');
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `speaking_inquiries_${Date.now()}.csv`;
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
  };

  const stats = {
    total: inquiries.length,
    new: inquiries.filter(i => i.status === 'new').length,
    read: inquiries.filter(i => i.status === 'read').length,
    responded: inquiries.filter(i => i.status === 'responded').length,
    archived: inquiries.filter(i => i.status === 'archived').length,
  };

  return (
    <div className="space-y-6">
      <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-4">
        <div className="flex items-start justify-between">
          <div className="flex items-start">
            <Mic className="w-5 h-5 text-indigo-600 mt-0.5 mr-3" />
            <div>
              <h3 className="text-sm font-medium text-indigo-900">Speaking Inquiries</h3>
              <p className="mt-1 text-sm text-indigo-700">
                Manage speaking engagement requests and event inquiries
              </p>
            </div>
          </div>
          <button
            onClick={exportToCSV}
            className="px-3 py-1 text-sm bg-indigo-600 text-white rounded hover:bg-indigo-700 flex items-center space-x-1"
          >
            <Download className="w-4 h-4" />
            <span>Export CSV</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <div className="text-2xl font-bold text-gray-900">{stats.total}</div>
          <div className="text-xs text-gray-500">Total Inquiries</div>
        </div>
        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <div className="text-2xl font-bold text-blue-600">{stats.new}</div>
          <div className="text-xs text-gray-500">New</div>
        </div>
        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <div className="text-2xl font-bold text-yellow-600">{stats.read}</div>
          <div className="text-xs text-gray-500">Read</div>
        </div>
        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <div className="text-2xl font-bold text-green-600">{stats.responded}</div>
          <div className="text-xs text-gray-500">Responded</div>
        </div>
        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <div className="text-2xl font-bold text-gray-600">{stats.archived}</div>
          <div className="text-xs text-gray-500">Archived</div>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0 mb-4">
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="all">All Status</option>
              <option value="new">New</option>
              <option value="read">Read</option>
              <option value="responded">Responded</option>
              <option value="archived">Archived</option>
            </select>
            <input
              type="text"
              placeholder="Search by name, email, or organization..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          {selectedInquiries.length > 0 && (
            <div className="flex space-x-2">
              <button
                onClick={() => batchUpdateStatus('read')}
                className="px-3 py-2 text-sm bg-yellow-600 text-white rounded hover:bg-yellow-700"
              >
                Mark Read ({selectedInquiries.length})
              </button>
              <button
                onClick={() => batchUpdateStatus('responded')}
                className="px-3 py-2 text-sm bg-green-600 text-white rounded hover:bg-green-700"
              >
                Mark Responded ({selectedInquiries.length})
              </button>
              <button
                onClick={() => batchUpdateStatus('archived')}
                className="px-3 py-2 text-sm bg-gray-600 text-white rounded hover:bg-gray-700"
              >
                Archive ({selectedInquiries.length})
              </button>
            </div>
          )}
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left">
                  <input
                    type="checkbox"
                    checked={selectedInquiries.length === inquiries.length && inquiries.length > 0}
                    onChange={(e) => {
                      if (e.target.checked) {
                        setSelectedInquiries(inquiries.map(i => i.id));
                      } else {
                        setSelectedInquiries([]);
                      }
                    }}
                    className="rounded"
                  />
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Email
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Organization
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Event Type
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Event Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Submitted
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {loading ? (
                <tr>
                  <td colSpan={9} className="px-6 py-4 text-center text-gray-500">
                    Loading...
                  </td>
                </tr>
              ) : inquiries.length === 0 ? (
                <tr>
                  <td colSpan={9} className="px-6 py-4 text-center text-gray-500">
                    No inquiries found
                  </td>
                </tr>
              ) : (
                inquiries.map((inquiry) => (
                  <>
                    <tr key={inquiry.id} className={inquiry.status === 'new' ? 'bg-blue-50' : ''}>
                      <td className="px-6 py-4">
                        <input
                          type="checkbox"
                          checked={selectedInquiries.includes(inquiry.id)}
                          onChange={(e) => {
                            if (e.target.checked) {
                              setSelectedInquiries([...selectedInquiries, inquiry.id]);
                            } else {
                              setSelectedInquiries(selectedInquiries.filter(id => id !== inquiry.id));
                            }
                          }}
                          className="rounded"
                        />
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">{inquiry.name}</div>
                        {inquiry.role && <div className="text-sm text-gray-500">{inquiry.role}</div>}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {inquiry.email}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {inquiry.organization || '-'}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {inquiry.event_type || '-'}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {inquiry.event_date || '-'}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          inquiry.status === 'new'
                            ? 'bg-blue-100 text-blue-800'
                            : inquiry.status === 'read'
                            ? 'bg-yellow-100 text-yellow-800'
                            : inquiry.status === 'responded'
                            ? 'bg-green-100 text-green-800'
                            : 'bg-gray-100 text-gray-800'
                        }`}>
                          {inquiry.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {new Date(inquiry.created_at).toLocaleDateString()}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <button
                          onClick={() => setExpandedRow(expandedRow === inquiry.id ? null : inquiry.id)}
                          className="text-blue-600 hover:text-blue-900 mr-4"
                        >
                          {expandedRow === inquiry.id ? 'Hide' : 'View'}
                        </button>
                        <button
                          onClick={() => deleteInquiry(inquiry.id)}
                          className="text-red-600 hover:text-red-900"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                    {expandedRow === inquiry.id && (
                      <tr>
                        <td colSpan={9} className="px-6 py-4 bg-gray-50">
                          <div className="space-y-4">
                            <div>
                              <div className="text-xs font-medium text-gray-500 uppercase mb-1">Event Context & Objectives</div>
                              <div className="text-sm text-gray-900 whitespace-pre-wrap">{inquiry.context}</div>
                            </div>
                            {inquiry.audience && (
                              <div>
                                <div className="text-xs font-medium text-gray-500 uppercase mb-1">Audience</div>
                                <div className="text-sm text-gray-900">{inquiry.audience}</div>
                              </div>
                            )}
                            {inquiry.phone && (
                              <div>
                                <div className="text-xs font-medium text-gray-500 uppercase mb-1">Phone</div>
                                <div className="text-sm text-gray-900">{inquiry.phone}</div>
                              </div>
                            )}
                            <div className="flex space-x-2">
                              {inquiry.status !== 'read' && (
                                <button
                                  onClick={() => updateStatus(inquiry.id, 'read')}
                                  className="px-3 py-1 text-sm bg-yellow-600 text-white rounded hover:bg-yellow-700"
                                >
                                  Mark as Read
                                </button>
                              )}
                              {inquiry.status !== 'responded' && (
                                <button
                                  onClick={() => updateStatus(inquiry.id, 'responded')}
                                  className="px-3 py-1 text-sm bg-green-600 text-white rounded hover:bg-green-700"
                                >
                                  Mark as Responded
                                </button>
                              )}
                              {inquiry.status !== 'archived' && (
                                <button
                                  onClick={() => updateStatus(inquiry.id, 'archived')}
                                  className="px-3 py-1 text-sm bg-gray-600 text-white rounded hover:bg-gray-700"
                                >
                                  Archive
                                </button>
                              )}
                            </div>
                          </div>
                        </td>
                      </tr>
                    )}
                  </>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function NewsletterSubscribersTab() {
  const [subscribers, setSubscribers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [statusFilter, setStatusFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSubscribers, setSelectedSubscribers] = useState<string[]>([]);

  useEffect(() => {
    fetchSubscribers();
  }, [statusFilter, searchQuery]);

  const fetchSubscribers = async () => {
    setLoading(true);
    let query = supabase
      .from('newsletter_subscribers')
      .select('*')
      .order('subscribed_at', { ascending: false });

    if (statusFilter === 'active') {
      query = query.eq('is_active', true);
    } else if (statusFilter === 'inactive') {
      query = query.eq('is_active', false);
    }

    if (searchQuery) {
      query = query.ilike('email', `%${searchQuery}%`);
    }

    const { data, error } = await query;

    if (!error && data) {
      setSubscribers(data);
    }
    setLoading(false);
  };

  const toggleStatus = async (id: string, currentStatus: boolean) => {
    await supabase
      .from('newsletter_subscribers')
      .update({ is_active: !currentStatus })
      .eq('id', id);

    await fetchSubscribers();
  };

  const deleteSubscriber = async (id: string) => {
    if (!confirm('Are you sure you want to delete this subscriber?')) return;

    await supabase
      .from('newsletter_subscribers')
      .delete()
      .eq('id', id);

    await fetchSubscribers();
  };

  const exportToCSV = () => {
    const headers = ['Email', 'Source', 'Status', 'Subscribed Date'];
    const rows = subscribers.map(s => [
      s.email,
      s.source || 'footer',
      s.is_active ? 'Active' : 'Inactive',
      new Date(s.subscribed_at).toLocaleString()
    ]);

    const csv = [headers, ...rows].map(row => row.map(cell => `"${cell}"`).join(',')).join('\n');
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `newsletter_subscribers_${Date.now()}.csv`;
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
  };

  const exportSelected = () => {
    const selected = subscribers.filter(s => selectedSubscribers.includes(s.id));
    const headers = ['Email', 'Source', 'Status', 'Subscribed Date'];
    const rows = selected.map(s => [
      s.email,
      s.source || 'footer',
      s.is_active ? 'Active' : 'Inactive',
      new Date(s.subscribed_at).toLocaleString()
    ]);

    const csv = [headers, ...rows].map(row => row.map(cell => `"${cell}"`).join(',')).join('\n');
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `newsletter_subscribers_selected_${Date.now()}.csv`;
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
  };

  const stats = {
    total: subscribers.length,
    active: subscribers.filter(s => s.is_active).length,
    inactive: subscribers.filter(s => !s.is_active).length,
  };

  return (
    <div className="space-y-6">
      <div className="bg-green-50 border border-green-200 rounded-lg p-4">
        <div className="flex items-start justify-between">
          <div className="flex items-start">
            <Mail className="w-5 h-5 text-green-600 mt-0.5 mr-3" />
            <div>
              <h3 className="text-sm font-medium text-green-900">Newsletter Subscribers</h3>
              <p className="mt-1 text-sm text-green-700">
                Manage newsletter subscriptions and export subscriber lists
              </p>
            </div>
          </div>
          <button
            onClick={exportToCSV}
            className="px-3 py-1 text-sm bg-green-600 text-white rounded hover:bg-green-700 flex items-center space-x-1"
          >
            <Download className="w-4 h-4" />
            <span>Export All CSV</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <div className="text-2xl font-bold text-gray-900">{stats.total}</div>
          <div className="text-xs text-gray-500">Total Subscribers</div>
        </div>
        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <div className="text-2xl font-bold text-green-600">{stats.active}</div>
          <div className="text-xs text-gray-500">Active</div>
        </div>
        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <div className="text-2xl font-bold text-gray-600">{stats.inactive}</div>
          <div className="text-xs text-gray-500">Inactive</div>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0 mb-4">
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="all">All Subscribers</option>
              <option value="active">Active Only</option>
              <option value="inactive">Inactive Only</option>
            </select>
            <input
              type="text"
              placeholder="Search by email..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          {selectedSubscribers.length > 0 && (
            <button
              onClick={exportSelected}
              className="px-3 py-2 text-sm bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Export Selected ({selectedSubscribers.length})
            </button>
          )}
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left">
                  <input
                    type="checkbox"
                    checked={selectedSubscribers.length === subscribers.length && subscribers.length > 0}
                    onChange={(e) => {
                      if (e.target.checked) {
                        setSelectedSubscribers(subscribers.map(s => s.id));
                      } else {
                        setSelectedSubscribers([]);
                      }
                    }}
                    className="rounded"
                  />
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Email
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Source
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Subscribed Date
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {loading ? (
                <tr>
                  <td colSpan={6} className="px-6 py-4 text-center text-gray-500">
                    Loading...
                  </td>
                </tr>
              ) : subscribers.length === 0 ? (
                <tr>
                  <td colSpan={6} className="px-6 py-4 text-center text-gray-500">
                    No subscribers found
                  </td>
                </tr>
              ) : (
                subscribers.map((subscriber) => (
                  <tr key={subscriber.id}>
                    <td className="px-6 py-4">
                      <input
                        type="checkbox"
                        checked={selectedSubscribers.includes(subscriber.id)}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setSelectedSubscribers([...selectedSubscribers, subscriber.id]);
                          } else {
                            setSelectedSubscribers(selectedSubscribers.filter(id => id !== subscriber.id));
                          }
                        }}
                        className="rounded"
                      />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {subscriber.email}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {subscriber.source || 'footer'}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        subscriber.is_active
                          ? 'bg-green-100 text-green-800'
                          : 'bg-gray-100 text-gray-800'
                      }`}>
                        {subscriber.is_active ? 'Active' : 'Inactive'}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {new Date(subscriber.subscribed_at).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button
                        onClick={() => toggleStatus(subscriber.id, subscriber.is_active)}
                        className="text-blue-600 hover:text-blue-900 mr-4"
                      >
                        {subscriber.is_active ? 'Deactivate' : 'Activate'}
                      </button>
                      <button
                        onClick={() => deleteSubscriber(subscriber.id)}
                        className="text-red-600 hover:text-red-900"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function NotificationsTab() {
  const [notifications, setNotifications] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [newNotification, setNewNotification] = useState({
    recipient_email: '',
    notification_type: 'validation_failure',
    is_enabled: true,
  });

  useEffect(() => {
    fetchNotifications();
  }, []);

  const fetchNotifications = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('email_notifications')
      .select('*')
      .order('created_at', { ascending: false });

    if (!error && data) {
      setNotifications(data);
    }
    setLoading(false);
  };

  const addNotification = async () => {
    if (!newNotification.recipient_email) return;

    const { error } = await supabase
      .from('email_notifications')
      .insert([newNotification]);

    if (!error) {
      await fetchNotifications();
      setNewNotification({
        recipient_email: '',
        notification_type: 'validation_failure',
        is_enabled: true,
      });
    }
  };

  const toggleNotification = async (id: string, currentStatus: boolean) => {
    await supabase
      .from('email_notifications')
      .update({ is_enabled: !currentStatus })
      .eq('id', id);

    await fetchNotifications();
  };

  const deleteNotification = async (id: string) => {
    await supabase
      .from('email_notifications')
      .delete()
      .eq('id', id);

    await fetchNotifications();
  };

  return (
    <div className="space-y-6">
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <div className="flex items-start">
          <Bell className="w-5 h-5 text-blue-600 mt-0.5 mr-3" />
          <div>
            <h3 className="text-sm font-medium text-blue-900">Email Notifications</h3>
            <p className="mt-1 text-sm text-blue-700">
              Configure email alerts for validation failures, weekly reports, and other events.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Add New Notification</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <input
            type="email"
            placeholder="Email address"
            value={newNotification.recipient_email}
            onChange={(e) => setNewNotification({ ...newNotification, recipient_email: e.target.value })}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <select
            value={newNotification.notification_type}
            onChange={(e) => setNewNotification({ ...newNotification, notification_type: e.target.value })}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="validation_failure">Validation Failure</option>
            <option value="weekly_report">Weekly Report</option>
            <option value="scheduled_report">Scheduled Report</option>
            <option value="keyword_suggestion">Keyword Suggestion</option>
          </select>
          <button
            onClick={addNotification}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Add Notification
          </button>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Email
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Type
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Last Sent
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {loading ? (
                <tr>
                  <td colSpan={5} className="px-6 py-4 text-center text-gray-500">
                    Loading...
                  </td>
                </tr>
              ) : notifications.length === 0 ? (
                <tr>
                  <td colSpan={5} className="px-6 py-4 text-center text-gray-500">
                    No notifications configured
                  </td>
                </tr>
              ) : (
                notifications.map((notification) => (
                  <tr key={notification.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {notification.recipient_email}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {notification.notification_type.replace(/_/g, ' ')}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        notification.is_enabled
                          ? 'bg-green-100 text-green-800'
                          : 'bg-red-100 text-red-800'
                      }`}>
                        {notification.is_enabled ? 'Enabled' : 'Disabled'}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {notification.last_sent_at
                        ? new Date(notification.last_sent_at).toLocaleDateString()
                        : 'Never'}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button
                        onClick={() => toggleNotification(notification.id, notification.is_enabled)}
                        className="text-blue-600 hover:text-blue-900 mr-4"
                      >
                        {notification.is_enabled ? 'Disable' : 'Enable'}
                      </button>
                      <button
                        onClick={() => deleteNotification(notification.id)}
                        className="text-red-600 hover:text-red-900"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function ScheduledReportsTab() {
  const [reports, setReports] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [newReport, setNewReport] = useState({
    report_name: '',
    report_type: 'seo_performance',
    frequency: 'weekly',
    recipient_emails: '',
  });

  useEffect(() => {
    fetchReports();
  }, []);

  const fetchReports = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('scheduled_reports')
      .select('*')
      .order('created_at', { ascending: false });

    if (!error && data) {
      setReports(data);
    }
    setLoading(false);
  };

  const addReport = async () => {
    if (!newReport.report_name || !newReport.recipient_emails) return;

    const emailArray = newReport.recipient_emails.split(',').map(e => e.trim());
    const nextScheduled = new Date();
    nextScheduled.setDate(nextScheduled.getDate() + 1);

    const { error } = await supabase
      .from('scheduled_reports')
      .insert([{
        ...newReport,
        recipient_emails: emailArray,
        next_scheduled_at: nextScheduled.toISOString(),
      }]);

    if (!error) {
      await fetchReports();
      setNewReport({
        report_name: '',
        report_type: 'seo_performance',
        frequency: 'weekly',
        recipient_emails: '',
      });
    }
  };

  const toggleReport = async (id: string, currentStatus: boolean) => {
    await supabase
      .from('scheduled_reports')
      .update({ is_active: !currentStatus })
      .eq('id', id);

    await fetchReports();
  };

  const deleteReport = async (id: string) => {
    await supabase
      .from('scheduled_reports')
      .delete()
      .eq('id', id);

    await fetchReports();
  };

  return (
    <div className="space-y-6">
      <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
        <div className="flex items-start">
          <Calendar className="w-5 h-5 text-purple-600 mt-0.5 mr-3" />
          <div>
            <h3 className="text-sm font-medium text-purple-900">Scheduled Reports</h3>
            <p className="mt-1 text-sm text-purple-700">
              Automatically generate and email SEO reports on a regular schedule.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Create New Report</h3>
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Report name"
              value={newReport.report_name}
              onChange={(e) => setNewReport({ ...newReport, report_name: e.target.value })}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <select
              value={newReport.report_type}
              onChange={(e) => setNewReport({ ...newReport, report_type: e.target.value })}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="seo_performance">SEO Performance</option>
              <option value="keyword_analysis">Keyword Analysis</option>
            </select>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <select
              value={newReport.frequency}
              onChange={(e) => setNewReport({ ...newReport, frequency: e.target.value })}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="daily">Daily</option>
              <option value="weekly">Weekly</option>
              <option value="monthly">Monthly</option>
            </select>
            <input
              type="text"
              placeholder="Email addresses (comma-separated)"
              value={newReport.recipient_emails}
              onChange={(e) => setNewReport({ ...newReport, recipient_emails: e.target.value })}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <button
            onClick={addReport}
            className="w-full md:w-auto px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Create Report
          </button>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Report Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Type
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Frequency
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Next Run
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {loading ? (
                <tr>
                  <td colSpan={6} className="px-6 py-4 text-center text-gray-500">
                    Loading...
                  </td>
                </tr>
              ) : reports.length === 0 ? (
                <tr>
                  <td colSpan={6} className="px-6 py-4 text-center text-gray-500">
                    No scheduled reports configured
                  </td>
                </tr>
              ) : (
                reports.map((report) => (
                  <tr key={report.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {report.report_name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {report.report_type.replace(/_/g, ' ')}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {report.frequency}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        report.is_active
                          ? 'bg-green-100 text-green-800'
                          : 'bg-gray-100 text-gray-800'
                      }`}>
                        {report.is_active ? 'Active' : 'Inactive'}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {report.next_scheduled_at
                        ? new Date(report.next_scheduled_at).toLocaleDateString()
                        : 'Not scheduled'}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button
                        onClick={() => toggleReport(report.id, report.is_active)}
                        className="text-blue-600 hover:text-blue-900 mr-4"
                      >
                        {report.is_active ? 'Pause' : 'Activate'}
                      </button>
                      <button
                        onClick={() => deleteReport(report.id)}
                        className="text-red-600 hover:text-red-900"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function KeywordSuggestionsTab() {
  const [suggestions, setSuggestions] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [generating, setGenerating] = useState(false);
  const [pageRoute, setPageRoute] = useState('/');

  useEffect(() => {
    fetchSuggestions();
  }, []);

  const fetchSuggestions = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('keyword_suggestions')
      .select('*')
      .order('relevance_score', { ascending: false });

    if (!error && data) {
      setSuggestions(data);
    }
    setLoading(false);
  };

  const generateSuggestions = async () => {
    setGenerating(true);

    const { data: { session } } = await supabase.auth.getSession();
    if (!session) {
      alert('Please log in to generate suggestions');
      setGenerating(false);
      return;
    }

    try {
      const response = await fetch(
        `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/generate-keyword-suggestions`,
        {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${session.access_token}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            pageRoute,
            currentKeywords: [],
            pageContent: '',
          }),
        }
      );

      if (response.ok) {
        await fetchSuggestions();
      }
    } catch (error) {
      console.error('Error generating suggestions:', error);
    }

    setGenerating(false);
  };

  const updateStatus = async (id: string, status: string) => {
    await supabase
      .from('keyword_suggestions')
      .update({ status })
      .eq('id', id);

    await fetchSuggestions();
  };

  return (
    <div className="space-y-6">
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
        <div className="flex items-start">
          <Lightbulb className="w-5 h-5 text-yellow-600 mt-0.5 mr-3" />
          <div>
            <h3 className="text-sm font-medium text-yellow-900">Keyword Suggestions</h3>
            <p className="mt-1 text-sm text-yellow-700">
              AI-generated keyword recommendations with relevance scores and search volume data.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Generate New Suggestions</h3>
        <div className="flex space-x-4">
          <select
            value={pageRoute}
            onChange={(e) => setPageRoute(e.target.value)}
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="/">Home</option>
            <option value="/about">About</option>
            <option value="/services">Services</option>
            <option value="/insights">Insights</option>
            <option value="/speaking">Speaking</option>
          </select>
          <button
            onClick={generateSuggestions}
            disabled={generating}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            {generating ? 'Generating...' : 'Generate Suggestions'}
          </button>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Keyword
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Page
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Relevance
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Volume
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Competition
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {loading ? (
                <tr>
                  <td colSpan={7} className="px-6 py-4 text-center text-gray-500">
                    Loading...
                  </td>
                </tr>
              ) : suggestions.length === 0 ? (
                <tr>
                  <td colSpan={7} className="px-6 py-4 text-center text-gray-500">
                    No suggestions yet. Generate some keywords to get started.
                  </td>
                </tr>
              ) : (
                suggestions.map((suggestion) => (
                  <tr key={suggestion.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {suggestion.suggested_keyword}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {suggestion.page_route}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <div className="flex items-center">
                        <div className="w-16 bg-gray-200 rounded-full h-2 mr-2">
                          <div
                            className="bg-blue-600 h-2 rounded-full"
                            style={{ width: `${suggestion.relevance_score}%` }}
                          />
                        </div>
                        <span>{Math.round(suggestion.relevance_score)}%</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {suggestion.search_volume.toLocaleString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-2 text-xs font-semibold rounded-full ${
                        suggestion.competition_level === 'low'
                          ? 'bg-green-100 text-green-800'
                          : suggestion.competition_level === 'medium'
                          ? 'bg-yellow-100 text-yellow-800'
                          : 'bg-red-100 text-red-800'
                      }`}>
                        {suggestion.competition_level}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        suggestion.status === 'approved'
                          ? 'bg-green-100 text-green-800'
                          : suggestion.status === 'rejected'
                          ? 'bg-red-100 text-red-800'
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {suggestion.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium space-x-2">
                      {suggestion.status === 'pending' && (
                        <>
                          <button
                            onClick={() => updateStatus(suggestion.id, 'approved')}
                            className="text-green-600 hover:text-green-900"
                          >
                            Approve
                          </button>
                          <button
                            onClick={() => updateStatus(suggestion.id, 'rejected')}
                            className="text-red-600 hover:text-red-900"
                          >
                            Reject
                          </button>
                        </>
                      )}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function CompetitorAnalysisTab() {
  const [competitors, setCompetitors] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [analyzing, setAnalyzing] = useState(false);
  const [newCompetitor, setNewCompetitor] = useState({
    name: '',
    url: '',
    keywords: '',
  });

  useEffect(() => {
    fetchCompetitors();
  }, []);

  const fetchCompetitors = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('competitor_analysis')
      .select('*')
      .order('last_scraped_at', { ascending: false });

    if (!error && data) {
      setCompetitors(data);
    }
    setLoading(false);
  };

  const analyzeCompetitor = async () => {
    if (!newCompetitor.url) return;

    setAnalyzing(true);

    const { data: { session } } = await supabase.auth.getSession();
    if (!session) {
      alert('Please log in to analyze competitors');
      setAnalyzing(false);
      return;
    }

    try {
      const keywords = newCompetitor.keywords.split(',').map(k => k.trim()).filter(k => k);

      const response = await fetch(
        `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/analyze-competitor`,
        {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${session.access_token}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            competitorUrl: newCompetitor.url,
            competitorName: newCompetitor.name,
            keywordsToTrack: keywords,
          }),
        }
      );

      if (response.ok) {
        await fetchCompetitors();
        setNewCompetitor({ name: '', url: '', keywords: '' });
      }
    } catch (error) {
      console.error('Error analyzing competitor:', error);
    }

    setAnalyzing(false);
  };

  const deleteCompetitor = async (id: string) => {
    await supabase
      .from('competitor_analysis')
      .delete()
      .eq('id', id);

    await fetchCompetitors();
  };

  return (
    <div className="space-y-6">
      <div className="bg-green-50 border border-green-200 rounded-lg p-4">
        <div className="flex items-start">
          <Users className="w-5 h-5 text-green-600 mt-0.5 mr-3" />
          <div>
            <h3 className="text-sm font-medium text-green-900">Competitor Analysis</h3>
            <p className="mt-1 text-sm text-green-700">
              Track competitor SEO metrics, keywords, and content strategies.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Analyze New Competitor</h3>
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Competitor name"
              value={newCompetitor.name}
              onChange={(e) => setNewCompetitor({ ...newCompetitor, name: e.target.value })}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <input
              type="url"
              placeholder="Competitor URL (https://...)"
              value={newCompetitor.url}
              onChange={(e) => setNewCompetitor({ ...newCompetitor, url: e.target.value })}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <input
            type="text"
            placeholder="Keywords to track (comma-separated)"
            value={newCompetitor.keywords}
            onChange={(e) => setNewCompetitor({ ...newCompetitor, keywords: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <button
            onClick={analyzeCompetitor}
            disabled={analyzing}
            className="w-full md:w-auto px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            {analyzing ? 'Analyzing...' : 'Analyze Competitor'}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {loading ? (
          <div className="col-span-2 text-center py-8 text-gray-500">
            Loading...
          </div>
        ) : competitors.length === 0 ? (
          <div className="col-span-2 text-center py-8 text-gray-500">
            No competitors analyzed yet. Add one to get started.
          </div>
        ) : (
          competitors.map((competitor) => (
            <div key={competitor.id} className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">{competitor.competitor_name}</h4>
                  <a
                    href={competitor.competitor_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-blue-600 hover:text-blue-800"
                  >
                    {competitor.competitor_url}
                  </a>
                </div>
                <button
                  onClick={() => deleteCompetitor(competitor.id)}
                  className="text-red-600 hover:text-red-800"
                >
                  <XCircle className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-3">
                <div>
                  <div className="text-xs text-gray-500 uppercase">Meta Title</div>
                  <div className="text-sm text-gray-900">{competitor.meta_title || 'N/A'}</div>
                </div>
                <div>
                  <div className="text-xs text-gray-500 uppercase">Meta Description</div>
                  <div className="text-sm text-gray-900 line-clamp-2">
                    {competitor.meta_description || 'N/A'}
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 pt-2 border-t">
                  <div>
                    <div className="text-xs text-gray-500">Keyword Count</div>
                    <div className="text-lg font-semibold text-gray-900">{competitor.keyword_count}</div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500">Content Length</div>
                    <div className="text-lg font-semibold text-gray-900">
                      {competitor.content_length.toLocaleString()}
                    </div>
                  </div>
                </div>
                <div className="pt-2 border-t">
                  <div className="text-xs text-gray-500 mb-1">Tracked Keywords</div>
                  <div className="flex flex-wrap gap-1">
                    {competitor.keywords_tracked?.map((keyword: string, idx: number) => (
                      <span
                        key={idx}
                        className="inline-flex px-2 py-1 text-xs bg-gray-100 text-gray-700 rounded"
                      >
                        {keyword}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="text-xs text-gray-500 pt-2">
                  Last analyzed: {new Date(competitor.last_scraped_at).toLocaleString()}
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

function ExportsTab() {
  const [exporting, setExporting] = useState(false);
  const [exportHistory, setExportHistory] = useState<any[]>([]);
  const [exportConfig, setExportConfig] = useState({
    exportType: 'analytics',
    format: 'csv',
  });

  useEffect(() => {
    fetchExportHistory();
  }, []);

  const fetchExportHistory = async () => {
    const { data, error } = await supabase
      .from('export_history')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(10);

    if (!error && data) {
      setExportHistory(data);
    }
  };

  const handleExport = async () => {
    setExporting(true);

    const { data: { session } } = await supabase.auth.getSession();
    if (!session) {
      alert('Please log in to export reports');
      setExporting(false);
      return;
    }

    try {
      const response = await fetch(
        `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/export-report`,
        {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${session.access_token}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(exportConfig),
        }
      );

      if (response.ok) {
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `${exportConfig.exportType}_${Date.now()}.${exportConfig.format}`;
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);

        await fetchExportHistory();
      }
    } catch (error) {
      console.error('Error exporting report:', error);
    }

    setExporting(false);
  };

  return (
    <div className="space-y-6">
      <div className="bg-teal-50 border border-teal-200 rounded-lg p-4">
        <div className="flex items-start">
          <Download className="w-5 h-5 text-teal-600 mt-0.5 mr-3" />
          <div>
            <h3 className="text-sm font-medium text-teal-900">Export Reports</h3>
            <p className="mt-1 text-sm text-teal-700">
              Download SEO data and analytics in CSV, JSON, or HTML formats.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Export Configuration</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Report Type
            </label>
            <select
              value={exportConfig.exportType}
              onChange={(e) => setExportConfig({ ...exportConfig, exportType: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="analytics">SEO Analytics</option>
              <option value="keywords">SEO Keywords</option>
              <option value="keyword_suggestions">Keyword Suggestions</option>
              <option value="competitor_analysis">Competitor Analysis</option>
              <option value="audit_log">Audit Log</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Format
            </label>
            <select
              value={exportConfig.format}
              onChange={(e) => setExportConfig({ ...exportConfig, format: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="csv">CSV</option>
              <option value="json">JSON</option>
              <option value="pdf">HTML (Print to PDF)</option>
            </select>
          </div>
        </div>
        <button
          onClick={handleExport}
          disabled={exporting}
          className="w-full md:w-auto px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
        >
          <Download className="w-4 h-4" />
          <span>{exporting ? 'Exporting...' : 'Export Report'}</span>
        </button>
      </div>

      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-medium text-gray-900">Export History</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Export Type
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Format
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  File Size
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Exported At
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {exportHistory.length === 0 ? (
                <tr>
                  <td colSpan={4} className="px-6 py-4 text-center text-gray-500">
                    No exports yet
                  </td>
                </tr>
              ) : (
                exportHistory.map((export_item) => (
                  <tr key={export_item.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {export_item.export_type.replace(/_/g, ' ')}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 uppercase">
                      {export_item.file_format}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {(export_item.file_size / 1024).toFixed(2)} KB
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {new Date(export_item.created_at).toLocaleString()}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function FieldNotesTab() {
  const [notes, setNotes] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState<string | null>(null);

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('field_notes')
      .select('id, title, slug, category, is_published, is_flagship, published_at')
      .order('published_at', { ascending: false });

    if (!error && data) setNotes(data);
    setLoading(false);
  };

  const setFlagship = async (id: string) => {
    setSaving(id);
    await supabase.from('field_notes').update({ is_flagship: false }).neq('id', id);
    await supabase.from('field_notes').update({ is_flagship: true }).eq('id', id);
    await fetchNotes();
    setSaving(null);
  };

  const clearFlagship = async () => {
    setSaving('clear');
    await supabase.from('field_notes').update({ is_flagship: false }).neq('id', '00000000-0000-0000-0000-000000000000');
    await fetchNotes();
    setSaving(null);
  };

  const currentFlagship = notes.find(n => n.is_flagship);

  return (
    <div className="p-6">
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-1">Field Notes Management</h2>
        <p className="text-sm text-gray-500">Designate one Field Note as the Flagship Perspective. It will appear prominently above all other notes.</p>
      </div>

      {currentFlagship && (
        <div className="mb-6 flex items-center gap-3 p-4 bg-amber-50 border border-amber-200 rounded-lg">
          <Anchor className="w-5 h-5 text-amber-600 shrink-0" />
          <div className="flex-1">
            <p className="text-sm font-semibold text-amber-800">Current Flagship</p>
            <p className="text-sm text-amber-700">{currentFlagship.title}</p>
          </div>
          <button
            onClick={clearFlagship}
            disabled={saving === 'clear'}
            className="text-xs text-amber-600 hover:text-amber-800 border border-amber-300 px-3 py-1 rounded hover:bg-amber-100 transition-colors"
          >
            {saving === 'clear' ? 'Clearing...' : 'Clear Flagship'}
          </button>
        </div>
      )}

      {loading ? (
        <div className="flex justify-center py-12">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-amber-600" />
        </div>
      ) : (
        <div className="overflow-hidden border border-gray-200 rounded-lg">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Published</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Flagship</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {notes.map((note) => (
                <tr key={note.id} className={note.is_flagship ? 'bg-amber-50' : 'hover:bg-gray-50'}>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      {note.is_flagship && <Anchor className="w-4 h-4 text-amber-600 shrink-0" />}
                      <span className="text-sm font-medium text-gray-900">{note.title}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{note.category}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {new Date(note.published_at).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${note.is_published ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-600'}`}>
                      {note.is_published ? 'Published' : 'Draft'}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {note.is_flagship ? (
                      <span className="inline-flex items-center gap-1 px-2 py-1 text-xs font-semibold rounded-full bg-amber-100 text-amber-800">
                        <Anchor className="w-3 h-3" /> Flagship
                      </span>
                    ) : (
                      <button
                        onClick={() => setFlagship(note.id)}
                        disabled={!!saving}
                        className="text-xs text-gray-500 hover:text-amber-700 border border-gray-200 hover:border-amber-300 px-3 py-1 rounded hover:bg-amber-50 transition-colors disabled:opacity-50"
                      >
                        {saving === note.id ? 'Setting...' : 'Set as Flagship'}
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}