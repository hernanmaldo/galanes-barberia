import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { CustomCalendar } from "./CustomCalendar";
import { Alert, AlertDescription } from "./ui/alert";
import { Separator } from "./ui/separator";
import { Clock, Calendar as CalendarIcon, CheckCircle, AlertCircle, User, Scissors } from "lucide-react";
import { format, addDays, isSameDay, startOfToday, isBefore } from "date-fns";
import { es } from "date-fns/locale";

interface TimeSlot {
  time: string;
  available: boolean;
  id: string;
}

interface BookingData {
  date: Date | undefined;
  time: string;
  service?: string;
}
interface BookingProps {
  selectedService: {
    name: string;
    description: string;
    price: string;
    duration: string;
  } | null; // null si no hay servicio seleccionado
}

export function Booking({selectedService}: BookingProps) {

  const [selectedDate, setSelectedDate] = useState<Date | undefined>();
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [bookingData, setBookingData] = useState<BookingData>({
    date: undefined,
    time: ""
  });

  const serviceToShow = selectedService ?? {
    name: "Corte Clásico",
    duration: "30 min",
    price: "$2500",
    description: "Corte tradicional con tijera y máquina",
  };
  const today = startOfToday();

  // Generar días disponibles (ejemplo: martes a sábado, próximas 4 semanas)
  const availableDates = Array.from({ length: 28 }, (_, i) => addDays(today, i))
    .filter(date => {
      const dayOfWeek = date.getDay();
      return dayOfWeek >= 2 && dayOfWeek <= 6; // Martes (2) a Sábado (6)
    });

  // Horarios disponibles por día
  const getAvailableTimeSlots = (date: Date | undefined): TimeSlot[] => {
    if (!date) return [];
    
    const baseSlots = [
      "15:00", "15:30", "16:00", "16:30", 
      "17:00", "17:30", "18:00", "18:30",
      "19:00", "19:30", "20:00", "20:30"
    ];

    // Simular algunos horarios ocupados
    const occupiedSlots = ["16:30", "18:00", "19:30"];
    
    return baseSlots.map(time => ({
      time,
      available: !occupiedSlots.includes(time),
      id: `${format(date, 'yyyy-MM-dd')}-${time}`
    }));
  };

  const timeSlots = getAvailableTimeSlots(selectedDate);

  const handleDateSelect = (date: Date | undefined) => {
    setSelectedDate(date);
    setSelectedTime(""); // Reset time when date changes
  };

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
  };

  const handleConfirmBooking = () => {
    if (selectedDate && selectedTime) {
      setBookingData({
        date: selectedDate,
        time: selectedTime,
        service: "Corte + Barba" // Default service
      });
      setShowConfirmation(true);
    }
  };

  const handleNewBooking = () => {
    setShowConfirmation(false);
    setSelectedDate(undefined);
    setSelectedTime("");
    setBookingData({ date: undefined, time: "" });
  };

  const isDateAvailable = (date: Date) => {
    return availableDates.some(availableDate => isSameDay(date, availableDate));
  };

  const isDateDisabled = (date: Date) => {
    return isBefore(date, today) || !isDateAvailable(date);
  };

  if (showConfirmation) {
    return (
      <section id="booking" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Card className="bg-card border-border">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                
                <h2 className="text-3xl font-bold mb-4 text-foreground">
                  ¡Turno <span className="text-gradient-gold">Confirmado!</span>
                </h2>
                
                <p className="text-muted-foreground mb-8">
                  Tu turno ha sido reservado exitosamente. Te esperamos en Galanes Barbería.
                </p>

                <div className="bg-muted rounded-lg p-6 mb-8">
                  <h3 className="font-bold text-foreground mb-4">Detalles de tu Turno</h3>
                  <div className="space-y-3 text-left">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <CalendarIcon className="w-4 h-4 text-primary" />
                        <span className="text-muted-foreground">Fecha:</span>
                      </div>
                      <span className="font-medium text-foreground">
                        {bookingData.date ? format(bookingData.date, "EEEE, d 'de' MMMM", { locale: es }) : ""}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4 text-primary" />
                        <span className="text-muted-foreground">Horario:</span>
                      </div>
                      <span className="font-medium text-foreground">{bookingData.time} hs</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Scissors className="w-4 h-4 text-primary" />
                        <span className="text-muted-foreground">Servicio:</span>
                      </div>
                      <span className="font-medium text-foreground">{bookingData.service}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <User className="w-4 h-4 text-primary" />
                        <span className="text-muted-foreground">Ubicación:</span>
                      </div>
                      <span className="font-medium text-foreground">Italia 184, Sunchales</span>
                    </div>
                  </div>
                </div>

                <Alert className="mb-6 bg-yellow-600/10 border-yellow-600/20">
                  <AlertCircle className="h-4 w-4 text-yellow-600" />
                  <AlertDescription className="text-yellow-600">
                    <strong>Importante:</strong> Si necesitás cancelar o reprogramar tu turno, 
                    contactanos con al menos 2 horas de anticipación.
                  </AlertDescription>
                </Alert>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    onClick={handleNewBooking}
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    Reservar Otro Turno
                  </Button>
                  <Button 
                    className="bg-green-600 hover:bg-green-700 text-white"
                  >
                    💬 Confirmar por WhatsApp
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="booking" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Reservá tu <span className="text-gradient-gold">Turno</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Elegí la fecha y horario que mejor se adapte a vos. Te garantizamos atención personalizada.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Calendar Section */}
            <Card className="bg-background border-border">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <CalendarIcon className="w-5 h-5 text-primary" />
                  <span className="text-foreground">Seleccionar Fecha</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {/* Custom Calendar */}
                  <CustomCalendar
                    selected={selectedDate}
                    onSelect={handleDateSelect}
                    month={currentMonth}
                    onMonthChange={setCurrentMonth}
                    isDateDisabled={isDateDisabled}
                  />

                  {/* Legend */}
                  <div className="flex flex-wrap gap-4 text-sm">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-primary rounded-full"></div>
                      <span className="text-muted-foreground">Fecha seleccionada</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-accent rounded-full"></div>
                      <span className="text-muted-foreground">Disponible</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-muted rounded-full"></div>
                      <span className="text-muted-foreground">No disponible</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Time Slots Section */}
            <Card className="bg-background border-border">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Clock className="w-5 h-5 text-primary" />
                  <span className="text-foreground">Seleccionar Horario</span>
                </CardTitle>
                {selectedDate && (
                  <p className="text-sm text-muted-foreground">
                    {format(selectedDate, "EEEE, d 'de' MMMM", { locale: es })}
                  </p>
                )}
              </CardHeader>
              <CardContent>
                {!selectedDate ? (
                  <div className="text-center py-12">
                    <Clock className="w-12 h-12 text-muted-foreground mx-auto mb-4 opacity-50" />
                    <p className="text-muted-foreground">
                      Primero seleccioná una fecha para ver los horarios disponibles
                    </p>
                  </div>
                ) : timeSlots.length === 0 ? (
                  <div className="text-center py-12">
                    <AlertCircle className="w-12 h-12 text-yellow-600 mx-auto mb-4" />
                    <p className="text-muted-foreground mb-2">
                      No hay horarios disponibles para esta fecha
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Probá con otro día o contactanos directamente
                    </p>
                  </div>
                ) : (
                  <div className="space-y-6">
                    {/* Available Time Slots */}
                    <div>
                      <h4 className="font-medium text-foreground mb-3">Horarios Disponibles</h4>
                      <div className="grid grid-cols-3 gap-3">
                        {timeSlots
                          .filter(slot => slot.available)
                          .map((slot) => (
                            <Button
                              key={slot.id}
                              variant={selectedTime === slot.time ? "default" : "outline"}
                              onClick={() => handleTimeSelect(slot.time)}
                              className={`h-12 ${
                                selectedTime === slot.time
                                  ? "bg-gradient-gold text-primary-foreground hover:bg-primary/90"
                                  : "border-border hover:border-primary hover:bg-accent"
                              }`}
                            >
                              {slot.time}
                            </Button>
                          ))}
                      </div>
                    </div>

                    {/* Occupied Time Slots */}
                    {timeSlots.filter(slot => !slot.available).length > 0 && (
                      <div>
                        <h4 className="font-medium text-muted-foreground mb-3">No Disponibles</h4>
                        <div className="grid grid-cols-3 gap-3">
                          {timeSlots
                            .filter(slot => !slot.available)
                            .map((slot) => (
                              <Button
                                key={slot.id}
                                variant="outline"
                                disabled
                                className="h-12 opacity-50"
                              >
                                {slot.time}
                              </Button>
                            ))}
                        </div>
                      </div>
                    )}

                    <Separator />

                    {/* Service Info */}

                    <div className="bg-muted rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium text-foreground">Servicio:</span>
                        <Badge className="bg-gradient-gold text-primary-foreground">Premium</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">{serviceToShow.description} ({serviceToShow.duration})</p>
                      <p className="text-sm text-muted-foreground">
                        Podés modificar el servicio al confirmar el turno
                      </p>
                    </div>
                      
                      
                    {/* Confirm Button */}
                    <Button
                      onClick={handleConfirmBooking}
                      disabled={!selectedDate || !selectedTime}
                      className="w-full h-12 bg-primary/90 hover:bg-primary/100 text-primary-foreground disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {!selectedDate || !selectedTime
                        ? "Seleccioná fecha y horario"
                        : "Confirmar Turno"
                      }
                    </Button>

                    {/* Help Text */}
                    <p className="text-xs text-muted-foreground text-center">
                      Al confirmar, podrás finalizar la reserva por WhatsApp o teléfono
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Additional Info */}
          <Card className="mt-8 bg-muted border-border">
            <CardContent className="p-6">
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <Clock className="w-6 h-6 text-primary mx-auto mb-2" />
                  <h4 className="font-medium text-foreground mb-1">Horarios</h4>
                  <p className="text-sm text-muted-foreground">Martes a Sábado<br />15:00 - 21:00 hs</p>
                </div>
                <div>
                  <AlertCircle className="w-6 h-6 text-primary mx-auto mb-2" />
                  <h4 className="font-medium text-foreground mb-1">Importante</h4>
                  <p className="text-sm text-muted-foreground">Llegá 5 minutos antes<br />de tu turno</p>
                </div>
                <div>
                  <CheckCircle className="w-6 h-6 text-primary mx-auto mb-2" />
                  <h4 className="font-medium text-foreground mb-1">Confirmación</h4>
                  <p className="text-sm text-muted-foreground">Te contactaremos para<br />confirmar los detalles</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}