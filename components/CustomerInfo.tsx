import  { useState } from 'react';
import { Send, Phone, Save } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Button } from './ui/button';



export interface CustomerInfoType{
    name: string;
    lastName: string;
    phoneNumber: string;
    email: string;
}
interface CustomerInfoProps {
  customerInfo: CustomerInfoType;
  onCustomerInfo: (customerInfo: CustomerInfoType) => void;
  showConfirmationInfo: (show: boolean )=> void;
}
export function CustomerInfo({customerInfo, onCustomerInfo, showConfirmationInfo}: CustomerInfoProps){

    const [localInfo, setlocalInfo] = useState<CustomerInfoType>(customerInfo);


    const handleChange = (field: keyof CustomerInfoType, value: string) => {
        setlocalInfo(prev => ({ ...prev, [field]: value }));
    };

    const handleSave = () => {
        onCustomerInfo(localInfo);
        showConfirmationInfo(true);
    };
    return(
    <Card>
      <CardHeader>
        <CardTitle>Información de Contacto</CardTitle>
        <p className="text-sm text-muted-foreground">
          Ingrsa tus datos
        </p>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Información básica */}
        <div className="space-y-4 items-center">
          <h4 className="text-sm text-muted-foreground uppercase tracking-wide">Contacto Principal</h4>
            <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
                <div className="space-y-2">
                <Label htmlFor="phone" className="flex items-center gap-2">
                    <Phone className="h-4 w-4" />
                    Nombre
                </Label>
                <Input
                    id="name"
                    type="text"
                    value={localInfo?.name}
                    onChange={(e) => handleChange('name', e.target.value)}
                />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
                <div className="space-y-2">
                <Label htmlFor="phone" className="flex items-center gap-2">
                    <Phone className="h-4 w-4" />
                    Apellido
                </Label>
                <Input
                    id="lastName"
                    type="text"
                    value={localInfo?.lastName}
                    onChange={(e) => handleChange('lastName', e.target.value)}
                />
                </div>
            </div>


            <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
                <div className="space-y-2">
                <Label htmlFor="phone" className="flex items-center gap-2">
                    <Phone className="h-4 w-4" />
                    Teléfono
                </Label>
                <Input
                    id="phoneNumber"
                    type="tel"
                    value={localInfo?.phoneNumber}
                    onChange={(e) => handleChange('phoneNumber', e.target.value)}
                    placeholder="+54 9 11 1234-5678"
                />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
                <div className="space-y-2">
                <Label htmlFor="phone" className="flex items-center gap-2">
                    <Send className="h-4 w-4" />
                    Email
                </Label>
                <Input
                    id="email"
                    type="text"
                    onChange={(e) => handleChange('email', e.target.value)}
                    value={localInfo?.email}
                />
                </div>
            </div>
        </div>

       
      
        {/* Botones de acción */}

          <div className="flex gap-3 pt-4 border-t">
            <Button onClick={handleSave} className="flex items-center gap-2">
              <Save className="h-4 w-4" />
              Guardar cambios
            </Button>
          </div>
      </CardContent>
    </Card>
    );

}
