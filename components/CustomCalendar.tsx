import { Button } from "./ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { 
  format, 
  startOfMonth, 
  endOfMonth, 
  startOfWeek, 
  endOfWeek, 
  addDays, 
  isSameDay, 
  isSameMonth, 
  addMonths, 
  subMonths,
  startOfToday
} from "date-fns";
import { es } from "date-fns/locale";

interface CustomCalendarProps {
  selected?: Date;
  onSelect?: (date: Date | undefined) => void;
  month: Date;
  onMonthChange: (month: Date) => void;
  isDateDisabled?: (date: Date) => boolean;
}

export function CustomCalendar({
  selected,
  onSelect,
  month,
  onMonthChange,
  isDateDisabled
}: CustomCalendarProps) {
  const today = startOfToday();
  
  // Obtener el primer día del mes
  const monthStart = startOfMonth(month);
  const monthEnd = endOfMonth(month);
  
  // Obtener el primer día de la semana que contiene el primer día del mes
  // startOfWeek con weekStartsOn: 1 hace que empiece en lunes
  const calendarStart = startOfWeek(monthStart, { weekStartsOn: 1 });
  const calendarEnd = endOfWeek(monthEnd, { weekStartsOn: 1 });
  
  // Generar todas las fechas para mostrar en el calendario
  const dates = [];
  let currentDate = calendarStart;
  
  while (currentDate <= calendarEnd) {
    dates.push(currentDate);
    currentDate = addDays(currentDate, 1);
  }
  
  // Días de la semana
  const weekDays = ['Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sá', 'Do'];
  
  const handleDateClick = (date: Date) => {
    if (isDateDisabled && isDateDisabled(date)) return;
    onSelect?.(date);
  };
  
  const handlePrevMonth = () => {
    onMonthChange(subMonths(month, 1));
  };
  
  const handleNextMonth = () => {
    onMonthChange(addMonths(month, 1));
  };
  
  return (
    <div className="w-full custom-calendar">
      {/* Header con navegación */}
      <div className="flex items-center justify-between mb-6">
        <Button
          variant="outline"
          size="icon"
          onClick={handlePrevMonth}
          className="border-border hover:border-primary shrink-0"
        >
          <ChevronLeft className="w-4 h-4" />
        </Button>
        
        <h3 className="text-lg font-bold text-foreground capitalize text-center flex-1 mx-4">
          {format(month, "MMMM yyyy", { locale: es })}
        </h3>
        
        <Button
          variant="outline"
          size="icon"
          onClick={handleNextMonth}
          className="border-border hover:border-primary shrink-0"
        >
          <ChevronRight className="w-4 h-4" />
        </Button>
      </div>
      
      {/* Grilla del calendario */}
      <div className="w-full">
        {/* Header con días de la semana */}
        <div className="calendar-grid mb-4">
          {weekDays.map((day) => (
            <div
              key={day}
              className="calendar-cell h-10 border-b border-border/30 font-semibold text-primary text-sm min-h-[40px]"
            >
              {day}
            </div>
          ))}
        </div>
        
        {/* Grilla de fechas */}
        <div className="calendar-grid">
          {dates.map((date, index) => {
            const isCurrentMonth = isSameMonth(date, month);
            const isToday = isSameDay(date, today);
            const isSelected = selected && isSameDay(date, selected);
            const isDisabled = isDateDisabled ? isDateDisabled(date) : false;
            
            return (
              <button
                key={index}
                onClick={() => handleDateClick(date)}
                disabled={isDisabled}
                className={`
                  calendar-cell font-medium text-sm relative
                  ${!isCurrentMonth 
                    ? 'text-muted-foreground/30 cursor-default' 
                    : isDisabled
                    ? 'text-muted-foreground/40 cursor-not-allowed'
                    : 'text-foreground hover:bg-accent hover:text-accent-foreground cursor-pointer'
                  }
                  ${isToday && !isSelected 
                    ? 'text-primary' 
                    : 'text-accent-foreground'
                  }
                  ${isSelected 
                    ? 'bg-accent text-accent-foreground ring-2 ring-primary/30' 
                    : ''
                  }
                  ${!isDisabled && isCurrentMonth && !isSelected && !isToday
                    ? 'hover:bg-muted hover:scale-105'
                    : ''
                  }
                `}
              >
                <span className="relative z-10 select-none font-variant-numeric tabular-nums">
                  {format(date, 'd')}
                </span>
                
                {/* Indicador de día disponible */}
                {isCurrentMonth && !isDisabled && !isSelected && !isToday && (
                  <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-primary rounded-full opacity-60"></div>
                )}
              </button>
            );
          })}
        </div>
      </div>
      
      {/* Información adicional */}
      <div className="mt-6 p-4 bg-muted/50 rounded-lg border border-border/30">
        <div className="flex items-center justify-center space-x-6 text-xs text-muted-foreground">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-gradient-gold rounded-full"></div>
            <span>Seleccionado</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-accent rounded-full ring-2 ring-primary/30"></div>
            <span>Hoy</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-muted rounded-full relative">
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-primary rounded-full"></div>
            </div>
            <span>Disponible</span>
          </div>
        </div>
      </div>
      


    </div>
  );
}