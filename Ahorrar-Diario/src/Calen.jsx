import React, { useState } from 'react';
import './Calendar.css'; // Estilo personalizado para el calendario con Tailwind CSS

const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [savedDates, setSavedDates] = useState([]);

  const handleSaveDate = () => {
    // Guarda la fecha actual en el estado de fechas guardadas
    setSavedDates([...savedDates, selectedDate]);
  };

  const isDateSaved = date => savedDates.some(d => d.toDateString() === date.toDateString());
  const isToday = date => date.toDateString() === new Date().toDateString();

  const getDayClassName = date => {
    if (isDateSaved(date)) return 'bg-green-500';
    if (isToday(date)) return 'bg-blue-500';
    return '';
  };

  const renderCalendar = () => {
    const days = [];
    const startDate = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), 1);
    const endDate = new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1, 0);
    const startDay = startDate.getDay();

    for (let i = 1; i <= endDate.getDate(); i++) {
      const currentDate = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), i);
      const className = `day ${getDayClassName(currentDate)}`;
      days.push(
        <div key={i} className={className} onClick={() => setSelectedDate(currentDate)}>
          {i}
        </div>
      );
    }

    return (
      <div className="calendar">
        <div className="header">
          <button onClick={() => setSelectedDate(new Date(selectedDate.getFullYear(), selectedDate.getMonth() - 1, 1))}>Anterior</button>
          <h2>{selectedDate.toLocaleString('default', { month: 'long' })} {selectedDate.getFullYear()}</h2>
          <button onClick={() => setSelectedDate(new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1, 1))}>Siguiente</button>
        </div>
        <div className="days">{days}</div>
        <button onClick={handleSaveDate}>Confirmar Ahorro</button>
      </div>
    );
  };

  return renderCalendar();
};

export default Calendar;
