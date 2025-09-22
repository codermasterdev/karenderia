FullCalendar.globalLocales.push(function () {
  'use strict';

  var ptBr = {
    code: 'pt-br',
    buttonText: {
      prev: 'Anterior',
      next: 'PrÃ³ximo',
      today: 'Hoje',
      month: 'MÃªs',
      week: 'Semana',
      day: 'Dia',
      list: 'Lista',
    },
    weekText: 'Sm',
    allDayText: 'dia inteiro',
    moreLinkText: function(n) {
      return 'mais +' + n
    },
    noEventsText: 'NÃ£o hÃ¡ eventos para mostrar',
  };

  return ptBr;

}());
