import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { Booking } from "./components/Booking";
import { Products } from "./components/Products";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { useState } from "react";


export default function App() {


  interface Service {
    name: string;
    duration: string;
    price: string;
    description: string;
  }

  const [selectedService, setSelectedService] = useState<Service | null>(null);
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Services onSelectService={(service) => setSelectedService(service)} />
        <Booking selectedService={selectedService} />
        <Products />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}