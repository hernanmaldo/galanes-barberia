import { Card, CardContent } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Award, Users, Clock, Star } from "lucide-react";

export function About() {
  const stats = [
    { icon: Award, label: "Años de Experiencia", value: "15+" },
    { icon: Users, label: "Clientes Satisfechos", value: "2000+" },
    { icon: Clock, label: "Horas de Servicio", value: "10000+" },
    { icon: Star, label: "Calificación", value: "4.9/5" },
  ];

  return (
    <section id="about" className="relative py-20 bg-card">
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://galanesbarberia.com.ar/wp-content/uploads/2024/11/barberia-peluqueria-hombre-sunchales-santa-fe-2-movil.jpg"
          alt="Interior elegante de barbería con sillones de cuero y ambiente clásico"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/0"></div>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <ImageWithFallback
              src="https://galanesbarberia.com.ar/wp-content/uploads/2024/04/barberia-sunchales-2024-cristian-peluquero.jpg"
              alt="Barbero profesional trabajando con precisión en corte de cabello"
              className="rounded-lg shadow-2xl"
            />
            <div className="absolute -bottom-5 -right-3 w-32 h-32 bg-gold-solid rounded-full flex items-center justify-center shadow-xl">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-foreground">15+</div>
                <div className="text-xs text-primary-foreground">AÑOS</div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="relative space-y-8">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                Sobre <span className="text-gradient-gold">Galanes Barbería</span>
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  En Galanes Barbería, no somos una barbería más. Redefinimos el arte del cuidado 
                  para caballeros, combinando técnicas tradicionales con las últimas tendencias 
                  en estilo masculino.
                </p>
                <p>
                  Nuestro compromiso es brindar una experiencia única y personalizada, donde cada 
                  cliente recibe atención exclusiva y premium. Desde cortes clásicos hasta estilos 
                  modernos, cuidamos cada detalle para que te sientas como un verdadero galán.
                </p>
                <p>
                  Ofrecemos servicios especializados no solo para adultos, sino también atención 
                  exclusiva y premium para los más pequeños de la familia.
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <Card key={index} className="bg-muted border-border">
                  <CardContent className="p-4 text-center">
                    <stat.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                    <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Values */}
            <div className="border-l-4 border-primary pl-6">
              <h3 className="text-xl font-bold mb-3 text-foreground">Nuestros Valores</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>✓ Excelencia en cada servicio</li>
                <li>✓ Atención personalizada y exclusiva</li>
                <li>✓ Técnicas tradicionales y modernas</li>
                <li>✓ Productos de primera calidad</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}