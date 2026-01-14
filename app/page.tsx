import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Blog } from "@/components/Blog";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="text-white bg-black font-inter min-h-screen scroll-smooth">
      <Navbar />
      <main>
        <div id="home"><Hero /></div>
        <div id="about"><About /></div>
        <div id="blogs"><Blog /></div>
        <div id="contact"><Contact /></div>
      </main>
      <Footer />
    </div>
  );
}
