import Header from "@/components/Header";
import About from "@/components/About";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        <About />
        <Gallery />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
