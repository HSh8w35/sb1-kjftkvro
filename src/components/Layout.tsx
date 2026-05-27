import { Link, useLocation, Outlet } from 'react-router-dom';
import NewsletterSignup from './NewsletterSignup';

function Layout() {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <div className="min-h-screen bg-[#F6F1E8]">
      <nav className="fixed w-full bg-[#F6F1E8]/95 backdrop-blur-sm z-50 border-b border-[#B87333]/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="hidden md:flex space-x-8">
              <div className="relative flex flex-col items-center">
                <Link
                  to="/"
                  className={`transition-colors font-medium ${
                    isActive('/') ? 'text-[#8B6F47]' : 'text-[#2E2A26] hover:text-[#1F2A44]'
                  }`}
                >
                  Welcome
                </Link>
                {isActive('/') && (
                  <img
                    src="/Transl_Key_only.webp"
                    alt=""
                    className="h-9 w-auto opacity-80 mt-1"
                  />
                )}
              </div>
              <div className="relative flex flex-col items-center">
                <Link
                  to="/possibilities"
                  className={`transition-colors font-medium ${
                    isActive('/possibilities') ? 'text-[#8B6F47]' : 'text-[#2E2A26] hover:text-[#1F2A44]'
                  }`}
                >
                  Work With Heidi
                </Link>
                {isActive('/possibilities') && (
                  <img
                    src="/Transl_Key_only.webp"
                    alt=""
                    className="h-9 w-auto opacity-80 mt-1"
                  />
                )}
              </div>
              <div className="relative flex flex-col items-center">
                <Link
                  to="/our-approach"
                  className={`transition-colors font-medium ${
                    isActive('/our-approach') ? 'text-[#8B6F47]' : 'text-[#2E2A26] hover:text-[#1F2A44]'
                  }`}
                >
                  Approach
                </Link>
                {isActive('/our-approach') && (
                  <img
                    src="/Transl_Key_only.webp"
                    alt=""
                    className="h-9 w-auto opacity-80 mt-1"
                  />
                )}
              </div>
              <div className="relative flex flex-col items-center">
                <Link
                  to="/about"
                  className={`transition-colors font-medium ${
                    isActive('/about') ? 'text-[#8B6F47]' : 'text-[#2E2A26] hover:text-[#1F2A44]'
                  }`}
                >
                  About HSH
                </Link>
                {isActive('/about') && (
                  <img
                    src="/Transl_Key_only.webp"
                    alt=""
                    className="h-9 w-auto opacity-80 mt-1"
                  />
                )}
              </div>
              <div className="relative group flex flex-col items-center">
                <Link
                  to="/perspectives"
                  className={`transition-colors font-medium ${
                    isActive('/perspectives') ? 'text-[#8B6F47]' : 'text-[#2E2A26] hover:text-[#1F2A44]'
                  }`}
                >
                  Perspectives
                </Link>
                {isActive('/perspectives') && (
                  <img
                    src="/Transl_Key_only.webp"
                    alt=""
                    className="h-9 w-auto opacity-80 mt-1"
                  />
                )}
                <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 px-3 py-2 bg-[#2E2A26] text-white text-xs rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 whitespace-nowrap pointer-events-none z-50 shadow-lg">
                  Our point of view on leadership, independence, and long-term performance.
                  <div className="absolute left-1/2 -translate-x-1/2 -top-1 w-2 h-2 bg-[#2E2A26] rotate-45"></div>
                </div>
              </div>
              <div className="relative group flex flex-col items-center">
                <Link
                  to="/field-notes"
                  className={`transition-colors font-medium ${
                    isActive('/field-notes') ? 'text-[#8B6F47]' : 'text-[#2E2A26] hover:text-[#1F2A44]'
                  }`}
                >
                  Field Notes
                </Link>
                {isActive('/field-notes') && (
                  <img
                    src="/Transl_Key_only.webp"
                    alt=""
                    className="h-9 w-auto opacity-80 mt-1"
                  />
                )}
                <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 px-3 py-2 bg-[#2E2A26] text-white text-xs rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 whitespace-nowrap pointer-events-none z-50 shadow-lg">
                  Practical insights drawn from active advisory work and complex operating environments.
                  <div className="absolute left-1/2 -translate-x-1/2 -top-1 w-2 h-2 bg-[#2E2A26] rotate-45"></div>
                </div>
              </div>
              <div className="relative flex flex-col items-center">
                <Link
                  to="/faq"
                  className={`transition-colors font-medium ${
                    isActive('/faq') ? 'text-[#8B6F47]' : 'text-[#2E2A26] hover:text-[#1F2A44]'
                  }`}
                >
                  FAQ
                </Link>
                {isActive('/faq') && (
                  <img
                    src="/Transl_Key_only.webp"
                    alt=""
                    className="h-9 w-auto opacity-80 mt-1"
                  />
                )}
              </div>
            </div>
            <Link
              to="/lets-talk#contact"
              className="bg-[#8B6F47] text-white px-6 py-2.5 rounded-lg hover:bg-[#6F5838] transition-all shadow-md hover:shadow-lg"
            >
              Let's Talk
            </Link>
          </div>
        </div>
      </nav>

      <main><Outlet /></main>

      <footer className="bg-[#F6F1E8] text-[#2E2A26] py-12 border-t border-[#B87333]/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            <div className="group cursor-pointer">
              <Link to="/">
                <img
                  src="/Translucent_Logo_on_home_page.webp"
                  alt="Heidi Stone Hospitality"
                  className="h-32 md:h-40 w-auto transition-all duration-500 drop-shadow-[0_0_20px_rgba(184,115,51,0.4)] group-hover:drop-shadow-[0_0_35px_rgba(184,115,51,0.7)] group-hover:brightness-110"
                />
              </Link>
            </div>
            <div>
              <h4 className="text-[#2E2A26] font-semibold mb-4">Navigate</h4>
              <ul className="space-y-2">
                <li>
                  <Link to="/" className="hover:text-[#8B6F47] transition-colors">
                    Welcome
                  </Link>
                </li>
                <li>
                  <Link to="/possibilities" className="hover:text-[#8B6F47] transition-colors">
                    Work With Heidi
                  </Link>
                </li>
                <li>
                  <Link to="/our-approach" className="hover:text-[#8B6F47] transition-colors">
                    Approach
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="hover:text-[#8B6F47] transition-colors">
                    About HSH
                  </Link>
                </li>
                <li className="relative group">
                  <Link to="/perspectives" className="hover:text-[#8B6F47] transition-colors">
                    Perspectives
                  </Link>
                  <div className="absolute left-0 top-full mt-2 px-3 py-2 bg-[#2E2A26] text-white text-xs rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 whitespace-nowrap pointer-events-none z-50 shadow-lg">
                    Our point of view on leadership, independence, and long-term performance.
                    <div className="absolute left-6 -top-1 w-2 h-2 bg-[#2E2A26] rotate-45"></div>
                  </div>
                </li>
                <li className="relative group">
                  <Link to="/field-notes" className="hover:text-[#8B6F47] transition-colors">
                    Field Notes
                  </Link>
                  <div className="absolute left-0 top-full mt-2 px-3 py-2 bg-[#2E2A26] text-white text-xs rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 whitespace-nowrap pointer-events-none z-50 shadow-lg">
                    Practical insights drawn from active advisory work and complex operating environments.
                    <div className="absolute left-6 -top-1 w-2 h-2 bg-[#2E2A26] rotate-45"></div>
                  </div>
                </li>
                <li>
                  <Link to="/faq" className="hover:text-[#8B6F47] transition-colors">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-[#2E2A26] font-semibold mb-4">Connect</h4>
              <ul className="space-y-2">
                <li>
                  <a href="mailto:heidi@heidistonehospitality.com" className="hover:text-[#8B6F47] transition-colors">
                    Email Us
                  </a>
                </li>
                <li>
                  <Link to="/lets-talk#contact" className="hover:text-[#8B6F47] transition-colors">
                    Let's Talk
                  </Link>
                </li>
                <li>
                  <Link to="/speaking" className="hover:text-[#8B6F47] transition-colors">
                    Speaking & Engagements
                  </Link>
                </li>
                <li>
                  <Link to="/testimonials" className="hover:text-[#8B6F47] transition-colors">
                    Board & Client Perspective
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <NewsletterSignup />
            </div>
          </div>
          <div className="border-t border-[#B87333]/20 pt-8 text-center text-[#2E2A26]/60">
            <p>&copy; 2025 Heidi Stone Hospitality LLC. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Layout;
