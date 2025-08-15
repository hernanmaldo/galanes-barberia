import { Button } from "./ui/button";
import { Calendar, ShoppingBag, Scissors } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center leather-texture">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://galanesbarberia.com.ar/wp-content/uploads/2024/11/hero-barberia-sunchales-2.jpg"
          alt="Interior elegante de barbería con sillones de cuero y ambiente clásico"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Main Title 
        
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-gradient-gold">Galanes</span>
            <br />
            <span className="text-foreground">Barbería</span>
          </h1>
          */}

          {/* Subtitle */}
          <h1 className=" leading-none mt-30 md:mt-4 font-playfair heading-title " >
            NO SOLO ES UN CORTE DE CABELLO
          </h1>

          {/* Features */}
          <div className="flex flex-wrap justify-left gap-6 mb-12 mt-12">
            <div className="flex items-center space-x-2 text-foreground">
              <Scissors className="w-5 h-5 text-primary" />
              <span>Cortes Personalizados</span>
            </div>
            <div className="flex items-center space-x-2 text-foreground">
              <Calendar className="w-5 h-5 text-primary" />
              <span>Turno Previo</span>
            </div>
            <div className="flex items-center space-x-2 text-foreground">
              <ShoppingBag className="w-5 h-5 text-primary" />
              <span>Productos Premium</span>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-left items-center">
            <Button 
              size="lg" 
              variant="outline" 
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 text-lg"
            >
              <a href="#services" className="flex items-center">
                <Calendar className="w-5 h-5 mr-2" />
                Reserva tu Turno
              </a>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 text-lg"
            >
              <a href="#products" className="flex items-center">
                <ShoppingBag className="w-5 h-5 mr-2" />
                Ver Productos
              </a>
            </Button>
          </div>

          {/* Location Info */}
          <div className="flex flex-wrap justify-left gap-6 mt-12 text-muted-foreground">
            <p className="text-sm">📍 Italia 184, Sunchales, Santa Fe 🕒 Lunes a Viernes: 15:00 - 21:00</p>
          </div>
        </div>
      </div>

    </section>
  );
}