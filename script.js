fetch('schedule.json')
  .then(response => response.json())
  .then(data => {
    const dateRow = document.getElementById('date-row');
    const weekdayRow = document.getElementById('weekday-row');
    const tbody = document.getElementById('table-body');

    // Insertar fechas y días
    data.dates.forEach(date => {
      const th = document.createElement('th');
      th.textContent = date;
      dateRow.appendChild(th);
    });

    data.days.forEach(day => {
      const th = document.createElement('th');
      th.textContent = day;
      weekdayRow.appendChild(th);
    });

    // Insertar horarios por ingeniero
    data.engineers.forEach(engineer => {
      const row = document.createElement('tr');

      const label = document.createElement('td');
      label.className = 'label';
      label.textContent = engineer.shift;
      row.appendChild(label);

      engineer.schedule.forEach(hour => {
        const cell = document.createElement('td');
        cell.textContent = hour ? `${engineer.name} ${hour}` : '';
        if (hour) cell.classList.add(engineer.shift);
        row.appendChild(cell);
      });

      tbody.appendChild(row);
    });
  });
