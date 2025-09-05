import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Booking } from "./components/Booking";
import { Products } from "./components/Products";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";



export default function App() {

/*
  interface Service {
    name: string;
    duration: string;
    price: string;
    description: string;
  }
*/
  //const [selectedService, setSelectedService] = useState<Service | null>(null);
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Booking />
        <Products />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}