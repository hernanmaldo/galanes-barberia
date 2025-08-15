import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Clock, Scissors, Sparkles, Baby } from "lucide-react";
import { useState } from "react";

interface Service {
  name: string;
  duration: string;
  price: string;
  description: string;
}

interface ServiceProps {
  onSelectService: (service: Service) => void;
}


export function Services({ onSelectService }: ServiceProps) {

    const [selectedService] = useState(null);

  const handleSelect = (service: Service) => {
    onSelectService?.(service);
  };
  const services = [
    {
      category: "Cortes de Cabello",
      icon: Scissors,
      items: [
        { name: "Corte Clásico", duration: "30 min", price: "$2500", description: "Corte tradicional con tijera y máquina" },
        { name: "Corte Moderno", duration: "45 min", price: "$3000", description: "Estilos actuales y tendencias" },
        { name: "Corte + Barba", duration: "60 min", price: "$4000", description: "Servicio completo de corte y arreglo de barba" },
      ]
    },
    {
      category: "Barba y Bigote",
      icon: Sparkles,
      items: [
        { name: "Arreglo de Barba", duration: "30 min", price: "$2000", description: "Perfilado y arreglo profesional" },
        { name: "Afeitado Clásico", duration: "45 min", price: "$2800", description: "Afeitado tradicional con navaja" },
        { name: "Tratamiento Barba", duration: "40 min", price: "$3200", description: "Limpieza, hidratación y styling" },
      ]
    },
    {
      category: "Tratamientos de Piel",
      icon: Sparkles,
      items: [
        { name: "Limpieza Facial", duration: "50 min", price: "$3500", description: "Limpieza profunda y hidratación" },
        { name: "Tratamiento Anti-Age", duration: "60 min", price: "$4500", description: "Rejuvenecimiento y cuidado premium" },
      ]
    },
    {
      category: "Servicios Infantiles",
      icon: Baby,
      items: [
        { name: "Corte Niños (hasta 12 años)", duration: "25 min", price: "$2000", description: "Atención especializada para niños" },
        { name: "Primer Corte", duration: "30 min", price: "$2200", description: "Experiencia única para el primer corte" },
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Nuestros <span className="text-gradient-gold">Servicios</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Servicios personalizados con turno previo para garantizar la mejor atención
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {services.map((category, categoryIndex) => (
            <Card key={categoryIndex} className="bg-card border-border hover:border-primary/50 transition-colors">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-gold rounded-full flex items-center justify-center">
                    <category.icon className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <span className="text-foreground">{category.category}</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.items.map((service, serviceIndex) => (
                
                  <a key={serviceIndex}
                       href="#booking"
                       onClick={() => handleSelect(service)}
                       className={`flex justify-between items-start p-4 rounded-lg transition-colors cursor-pointer
                         ${selectedService === service ? "bg-primary text-primary-foreground" : "bg-muted hover:bg-muted/80"}`}>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <h4 className="font-semibold text-foreground">{service.name}</h4>
                        <Badge variant="secondary" className="text-xs">
                          <Clock className="w-3 h-3 mr-1" />
                          {service.duration}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">{service.description}</p>
                    </div>
                    <div className="text-right ml-4">
                      <div className="text-xl font-bold text-primary">{service.price}</div>
                    </div>
                  </a>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Booking Section (eliminada)*/}

      </div>
    </section>
  );
}