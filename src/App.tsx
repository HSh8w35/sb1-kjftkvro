import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { AuthProvider } from './contexts/AuthContext';
import Layout from './components/Layout';
import ScrollToTop from './components/ScrollToTop';
import ProtectedRoute from './components/ProtectedRoute';
import Home from './pages/Home';

const Possibilities = lazy(() => import('./pages/Possibilities'));
const About = lazy(() => import('./pages/About'));
const Story = lazy(() => import('./pages/Story'));
const OurApproach = lazy(() => import('./pages/OurApproach'));
const Services = lazy(() => import('./pages/Services'));
const Testimonials = lazy(() => import('./pages/Testimonials'));
const Insights = lazy(() => import('./pages/Insights'));
const FieldNotes = lazy(() => import('./pages/FieldNotes'));
const FAQ = lazy(() => import('./pages/FAQ'));
const Speaking = lazy(() => import('./pages/Speaking'));
const WhoWeWorkWith = lazy(() => import('./pages/WhoWeWorkWith'));
const PossibilityAssessmentLanding = lazy(() => import('./pages/PossibilityAssessmentLanding'));
const Login = lazy(() => import('./pages/Login'));
const AdminDashboard = lazy(() => import('./pages/AdminDashboard'));

function App() {
  return (
    <Router>
      <AuthProvider>
        <ScrollToTop />
        <Suspense fallback={<div className="min-h-screen bg-[#F6F1E8]" />}>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/possibilities" element={<Possibilities />} />
              <Route path="/our-approach" element={<OurApproach />} />
              <Route path="/about" element={<About />} />
              <Route path="/story" element={<Story />} />
              <Route path="/lets-talk" element={<Services />} />
              <Route path="/perspectives" element={<Insights />} />
              <Route path="/field-notes" element={<FieldNotes />} />
              <Route path="/field-notes/:slug" element={<FieldNotes />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/testimonials" element={<Testimonials />} />
              <Route path="/speaking" element={<Speaking />} />
              <Route path="/who-we-work-with" element={<WhoWeWorkWith />} />
              <Route path="/possibility-assessment" element={<PossibilityAssessmentLanding />} />
              <Route path="/admin" element={
                <ProtectedRoute>
                  <AdminDashboard />
                </ProtectedRoute>
              } />
            </Route>
          </Routes>
        </Suspense>
      </AuthProvider>
    </Router>
  );
}

export default App;
