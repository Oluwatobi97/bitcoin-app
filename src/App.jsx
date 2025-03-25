import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import LoadingSpinner from "./components/LoadingSpinner";
import Home from "./Page/Home";
import Dashboard from "./Page/Dashboard";
import Buy from "./Page/Buy";
import Sell from "./Page/Sell";
import Send from "./Page/Send";
import Receive from "./Page/Receive";
import Profile from "./Page/Profile";
import Settings from "./Page/Settings";
import ProtectedRoute from "./Componet/ProtectedRoute";
import Header from "./Componet/Header";
import Contact from "./Page/Contact";
import About from "./Page/About";
import Trades from "./Page/Trades";
import Invest from "./Page/Invest";
import Footer from "./Componet/Footer";

// Lazy load pages
const Login = lazy(() => import("./Page/LogIn"));
const Signup = lazy(() => import("./Page/Sign"));

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Header />
        <main className="flex-grow">
          <Navbar />
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              {/* Public Routes */}
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/about" element={<About />} />
              <Route path="/trades" element={<Trades />} />
              <Route path="/invest" element={<Invest />} />

              {/* Protected Routes */}
              <Route
                path="/dashboard"
                element={
                  <ProtectedRoute>
                    <Dashboard />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/buy"
                element={
                  <ProtectedRoute>
                    <Buy />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/sell"
                element={
                  <ProtectedRoute>
                    <Sell />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/send"
                element={
                  <ProtectedRoute>
                    <Send />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/receive"
                element={
                  <ProtectedRoute>
                    <Receive />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/profile"
                element={
                  <ProtectedRoute>
                    <Profile />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/settings"
                element={
                  <ProtectedRoute>
                    <Settings />
                  </ProtectedRoute>
                }
              />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
