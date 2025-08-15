
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { MapPin, Phone, Clock, Instagram, Facebook, MessageCircle, Heart } from "lucide-react";

export function Footer() {
  const quickLinks = [
    { name: "Inicio", href: "#hero" },
    { name: "Servicios", href: "#services" },
    { name: "Productos", href: "#products" },
    { name: "Contacto", href: "#contact" }
  ];

  const services = [
    "Corte de Cabello",
    "Arreglo de Barba",
    "Afeitado Clásico",
    "Tratamientos Faciales",
    "Servicios Infantiles"
  ];

  const legalLinks = [
    "Política de Privacidad",
    "Términos y Condiciones",
    "Aviso Legal",
    "Cookies"
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-gold rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-bold">GB</span>
              </div>
              <h3 className="text-xl font-bold text-gradient-gold">Galanes Barbería</h3>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Redefinimos el arte del cuidado para caballeros. Experiencia única, 
              atención personalizada y productos premium.
            </p>
            <div className="flex space-x-3">
              <Button size="icon" variant="outline" className="border-primary hover:bg-primary hover:text-primary-foreground">
                <Instagram className="w-4 h-4" />
              </Button>
              <Button size="icon" variant="outline" className="border-primary hover:bg-primary hover:text-primary-foreground">
                <Facebook className="w-4 h-4" />
              </Button>
              <Button size="icon" variant="outline" className="border-primary hover:bg-primary hover:text-primary-foreground">
                <MessageCircle className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-foreground mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-foreground mb-4">Servicios</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <span className="text-muted-foreground text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-foreground mb-4">Contacto</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <div className="text-sm text-muted-foreground">
                  <p>Italia 184</p>
                  <p>Sunchales, Santa Fe</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-sm text-muted-foreground">+54 9 3493-406260</span>
              </div>
              <div className="flex items-start space-x-2">
                <Clock className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <div className="text-sm text-muted-foreground">
                  <p>Lunes a Viernes</p>
                  <p>15:00 - 21:00 hs</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm text-muted-foreground">
            © 2024 Galanes Barbería. Todos los derechos reservados.
          </div>
          
          <div className="flex flex-wrap gap-4 text-xs text-muted-foreground">
            {legalLinks.map((link, index) => (
              <a 
                key={index}
                href="#"
                className="hover:text-primary transition-colors"
              >
                {link}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-border text-center">
          <p className="text-xs text-muted-foreground flex items-center justify-center space-x-1">
            <span>Desarrollado con</span>
            <Heart className="w-3 h-3 text-red-500 fill-current" />
            <span>por elHerno</span>
          </p>
        </div>
      </div>
    </footer>
  );
}