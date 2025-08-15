import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ShoppingCart, Star, Package } from "lucide-react";
import { useState } from "react";

export function Products() {
  const [cart, setCart] = useState<{[key: number]: number}>({});

  const products = [
    {
      id: 1,
      name: "Aceite para Barba Premium",
      price: 14000,
      originalPrice: 15000,
      image: "https://http2.mlstatic.com/D_NQ_NP_2X_918741-MLA46127036268_052021-F.webp",
      rating: 4.8,
      category: "Cuidado de Barba",
      description: "Sir Fausto Barberia Men Culture Oleo Fortalecedor Barba 30ml"
    },
    {
      id: 2,
      name: "Sir Fausto Men´s Culture Serum Oleo Soft Para Barba X 30",
      price: 17000,
      image: "https://http2.mlstatic.com/D_NQ_NP_2X_673700-MLU74134639286_012024-F.webp",
      rating: 4.9,
      category: "Cuidado de Barba",
      description: "Crema rica en aloe vera para un afeitado suave y sin irritación"
    },
    {
      id: 3,
      name: "Sir Fausto Men's Culture Forming Paste Cera Modelante X 50ml",
      price: 11390,
      image: "https://http2.mlstatic.com/D_NQ_NP_2X_625854-MLA84480110887_052025-F.webp",
      rating: 4.7,
      category: "Styling",
      description: "Cera de acabado mate para looks naturales con fijación duradera"
    },
    {
      id: 4,
      name: "Cera Old Wax Fijacion Extra Fuerte Sir Fausto X 100ml Barber",
      price: 14990,
      originalPrice: 17000,
      image: "https://http2.mlstatic.com/D_NQ_NP_2X_859953-MLU72579701584_112023-F.webp",
      rating: 4.6,
      category: "Styling",
      description: "Bálsamo calmante y hidratante para después del afeitado",
    },
    {
      id: 5,
      name: "Sir Fausto Men´s Shampoo Tratamiento P / Caída X 250 Ml",
      price: 15000,
      image: "https://http2.mlstatic.com/D_NQ_NP_2X_965942-MLU74421656068_022024-F.webp",
      rating: 4.8,
      category: "Cuidado Capilar",
      description: "Champú especializado con zinc pyrithione para cabello sano"
    },
    {
      id: 6,
      name: "Kit Completo Barbería",
      price: 12000,
      originalPrice: 15000,
      image: "https://http2.mlstatic.com/D_NQ_NP_2X_985447-MLA69854778571_062023-F.webp",
      rating: 4.9,
      category: "Kits",
      description: "Kit completo con aceite, crema de afeitar, cera y after shave",
      badge: "Premium"
    }
  ];

  const addToCart = (productId: number) => {
    setCart(prev => ({
      ...prev,
      [productId]: (prev[productId] || 0) + 1
    }));
  };

  const getTotalItems = () => {
    return Object.values(cart).reduce((sum, quantity) => sum + quantity, 0);
  };

  return (
    <section id="products" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Nuestros <span className="text-gradient-gold">Productos</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Productos premium seleccionados especialmente para el cuidado masculino
          </p>
          
          {/* Cart Counter */}
          {getTotalItems() > 0 && (
            <div className="mt-6">
              <Button 
                variant="outline" 
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                <ShoppingCart className="w-4 h-4 mr-2" />
                Carrito ({getTotalItems()})
              </Button>
            </div>
          )}
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card key={product.id} className="group bg-background border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl">
              <CardHeader className="p-0">
                <div className="relative w-full h-64 bg-white overflow-hidden rounded-t-lg">
                  <ImageWithFallback
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain"
                  />
                  {product.badge && (
                    <Badge 
                      className="absolute top-3 left-3 bg-gradient-gold text-primary-foreground"
                    >
                      {product.badge}
                    </Badge>
                  )}
                  <div className="absolute top-3 right-3 bg-background/90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center space-x-1">
                    <Star className="w-3 h-3 text-yellow-500 fill-current" />
                    <span className="text-xs font-medium">{product.rating}</span>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="p-6 mt-auto">
                <div className="mb-2">
                  <Badge variant="secondary" className="text-xs mb-2">
                    <Package className="w-3 h-3 mr-1" />
                    {product.category}
                  </Badge>
                </div>
                
                <CardTitle className="text-lg mb-2 text-foreground group-hover:text-primary transition-colors">
                  {product.name}
                </CardTitle>
                
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {product.description}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-primary">
                      ${product.price.toLocaleString()}
                    </span>
                    {product.originalPrice && (
                      <span className="text-sm text-muted-foreground line-through ">
                        ${product.originalPrice.toLocaleString()}
                      </span>
                    )}
                  </div>
                </div>
              </CardContent>

              <CardFooter className="p-6 pt-0 mt-auto">
                <Button 
                  onClick={() => addToCart(product.id)}
                  className="w-full bg-gradient-gold bg-primary/90 text-primary-foreground"
                >
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  {cart[product.id] ? `En carrito (${cart[product.id]})` : 'Agregar al carrito'}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Shopping Info */}
        <Card className="mt-12 bg-muted border-border">
          <CardContent className="p-8 text-center">
            <h3 className="text-xl font-bold mb-4 text-foreground">Información de Compra</h3>
            <div className="grid md:grid-cols-3 gap-6 text-sm text-muted-foreground">
              <div>
                <div className="text-primary font-semibold mb-1">🚚 Envío</div>
                <p>Envío gratis en compras superiores a $8000</p>
              </div>
              <div>
                <div className="text-primary font-semibold mb-1">💳 Pago</div>
                <p>Efectivo, transferencia o tarjeta de crédito</p>
              </div>
              <div>
                <div className="text-primary font-semibold mb-1">📦 Retiro</div>
                <p>Retiro en local sin costo adicional</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}