import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Layout from './components/Layout';
import ScrollToTop from './components/ScrollToTop';
import ProtectedRoute from './components/ProtectedRoute';
import Home from './pages/Home';
import Possibilities from './pages/Possibilities';
import About from './pages/About';
import Story from './pages/Story';
import OurApproach from './pages/OurApproach';
import Services from './pages/Services';
import Testimonials from './pages/Testimonials';
import Insights from './pages/Insights';
import FieldNotes from './pages/FieldNotes';
import FAQ from './pages/FAQ';
import Speaking from './pages/Speaking';
import WhoWeWorkWith from './pages/WhoWeWorkWith';
import Login from './pages/Login';
import AdminDashboard from './pages/AdminDashboard';

function App() {
  return (
    <Router>
      <AuthProvider>
        <ScrollToTop />
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
            <Route path="/admin" element={
              <ProtectedRoute>
                <AdminDashboard />
              </ProtectedRoute>
            } />
          </Route>
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
