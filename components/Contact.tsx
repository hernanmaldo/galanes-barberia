import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { MapPin, Phone, Clock, Mail, MessageCircle, Instagram, Facebook } from "lucide-react";

export function Contact() {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Ubicación",
      details: ["Italia 184", "Sunchales, Santa Fe", "Argentina"],
      action: "Ver en Maps"
    },
    {
      icon: Phone,
      title: "Teléfono",
      details: ["+54 9 3493-406260"],
      action: "Llamar"
    },
    {
      icon: Clock,
      title: "Horarios",
      details: ["Lunes a Viernes", "15:00 - 21:00 hs", "Sábados consultar"],
      action: "Reservar"
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@galanesbarberia.com", "consultas@galanesbarberia.com"],
      action: "Escribir"
    }
  ];

  const socialLinks = [
    { icon: Instagram, name: "Instagram", handle: "@galanesbarberia", color: "bg-pink-600" },
    { icon: Facebook, name: "Facebook", handle: "Galanes Barbería", color: "bg-blue-600" },
    { icon: MessageCircle, name: "WhatsApp", handle: "+54 9 3493-406260", color: "bg-green-600" }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-gradient-gold">Contacto</span> y Ubicación
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Visitanos en nuestro local o contactanos para reservar tu turno
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            {contactInfo.map((info, index) => (
              <Card key={index} className="bg-card border-border hover:border-primary/50 transition-colors">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-gold rounded-full flex items-center justify-center">
                      <info.icon className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <span className="text-foreground">{info.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-1 mb-4">
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-muted-foreground">{detail}</p>
                    ))}
                  </div>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    {info.action}
                  </Button>
                </CardContent>
              </Card>
            ))}

            {/* Social Media */}
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-foreground">Seguinos en Redes</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {socialLinks.map((social, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors">
                    <div className="flex items-center space-x-3">
                      <div className={`w-8 h-8 ${social.color} rounded-full flex items-center justify-center`}>
                        <social.icon className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <div className="font-medium text-foreground">{social.name}</div>
                        <div className="text-sm text-muted-foreground">{social.handle}</div>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm">Seguir</Button>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Map and Quick Actions */}
          <div className="lg:col-span-2 space-y-6">
            {/* Map Placeholder */}
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-foreground">Nuestra Ubicación</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="w-full h-96 bg-muted rounded-lg flex items-center justify-center relative overflow-hidden">
                  {/* Simulated Map */}
                  <div className="absolute inset-0 bg-gradient-to-br from-green-100 to-blue-100 opacity-50"></div>
                  <div className="relative z-10 text-center">
                    <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h4 className="font-bold text-foreground mb-2">Italia 184, Sunchales</h4>
                    <p className="text-muted-foreground mb-4">Santa Fe, Argentina</p>
                    <Button className="bg-gradient-gold hover:bg-primary/90 text-primary-foreground">
                      Abrir en Google Maps
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-gradient-gold text-primary-foreground">
                <CardContent className="p-6 text-center">
                  <Phone className="w-8 h-8 mx-auto mb-4" />
                  <h3 className="font-bold mb-2">Reserva por Teléfono</h3>
                  <p className="text-primary-foreground/90 text-sm mb-4">
                    Llamanos directamente para reservar tu turno
                  </p>
                  <Button 
                    variant="secondary"
                    className="bg-background text-foreground hover:bg-background/90"
                  >
                    +54 9 3493-406260
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-green-600 text-white">
                <CardContent className="p-6 text-center">
                  <MessageCircle className="w-8 h-8 mx-auto mb-4" />
                  <h3 className="font-bold mb-2">WhatsApp Directo</h3>
                  <p className="text-white/90 text-sm mb-4">
                    Chatea con nosotros para consultas rápidas
                  </p>
                  <Button 
                    variant="secondary"
                    className="bg-white text-green-600 hover:bg-white/90"
                  >
                    Abrir WhatsApp
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}