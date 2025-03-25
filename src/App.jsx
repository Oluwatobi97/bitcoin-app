import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Page/Home";
import LogIn from "./Page/LogIn";
import Sign from "./Page/Sign";
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

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-grow">
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/sign" element={<Sign />} />
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
      </main>
      <Footer />
    </div>
  );
}

export default App;
