document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');
  
    var calendar = new FullCalendar.Calendar(calendarEl, {
      initialView: 'dayGridMonth',
      initialDate: '2023-05-07',
      headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay'
      },
      events: [
        {
          title: 'Evento todo el día',
          start: '2023-05-01'
        },
        {
          title: 'Evento todos los días',
          start: '2023-05-07',
          end: '2023-05-10'
        },
        {
          groupId: '999',
          title: 'Repite evento',
          start: '2023-05-09T16:00:00'
        },
        {
          groupId: '999',
          title: 'Repite evento',
          start: '2023-05-16T16:00:00'
        },
        {
          title: 'Conferencia',
          start: '2023-05-11',
          end: '2023-05-13'
        },
        {
          title: 'Reuniones',
          start: '2023-05-12T10:30:00',
          end: '2023-05-12T12:30:00'
        },
        {
          title: 'Almuerzo',
          start: '2023-05-12T12:00:00'
        },
        {
          title: 'Reuniones',
          start: '2023-05-12T14:30:00'
        },
        {
          title: 'Fiesta de cumpleaños',
          start: '2023-05-13T07:00:00'
        },
        {
          title: 'Click for Google',
          url: 'http://google.com/',
          start: '2023-05-28'
        }
      ]
    })
    calendar.render();
    });