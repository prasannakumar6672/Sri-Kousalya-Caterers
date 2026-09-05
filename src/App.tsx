import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { LanguageProvider } from "@/lib/language";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

import { Home } from "@/pages/Home";
import { About } from "@/pages/About";
import { Menu } from "@/pages/Menu";
import { Services } from "@/pages/Services";
import { Packages } from "@/pages/Packages";
import { GalleryPage } from "@/pages/Gallery";
import { Contact } from "@/pages/Contact";
import { Quote } from "@/pages/Quote";
import { NotFound } from "@/pages/NotFound";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function AppLayout() {
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className={`flex-1 ${isHome ? "" : "pt-[64px] sm:pt-[76px]"}`}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/services" element={<Services />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/quote" element={<Quote />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <LanguageProvider>
        <AppLayout />
      </LanguageProvider>
    </BrowserRouter>
  );
}

export default App;
