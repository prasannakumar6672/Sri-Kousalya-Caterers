import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { LanguageProvider } from "@/lib/language";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MobileBottomBar } from "@/components/layout/MobileBottomBar";

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

export function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <LanguageProvider>
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1">
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
          {/* Clears the fixed mobile action bar */}
          <div className="h-[68px] lg:hidden" aria-hidden="true" />
          <MobileBottomBar />
        </div>
      </LanguageProvider>
    </BrowserRouter>
  );
}

export default App;
