import { Outlet } from "react-router-dom";
import { Toaster } from "@/components/ui/sonner";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useAuthStore } from "@/services/useAuthStore";
import { useEffect } from "react";
function Layout() {
  const checkAuth = useAuthStore((state) => state.checkAuth);

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);
  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <Toaster position="top-center"  />
      <Navbar />

      <main>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default Layout;
