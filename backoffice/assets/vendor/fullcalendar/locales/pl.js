FullCalendar.globalLocales.push(function () {
  'use strict';

  var pl = {
    code: 'pl',
    week: {
      dow: 1, // Monday is the first day of the week.
      doy: 4, // The week that contains Jan 4th is the first week of the year.
    },
    buttonText: {
      prev: 'Poprzedni',
      next: 'NastÄpny',
      today: 'DziÅ',
      month: 'MiesiÄc',
      week: 'TydzieÅ',
      day: 'DzieÅ',
      list: 'Plan dnia',
    },
    weekText: 'Tydz',
    allDayText: 'CaÅy dzieÅ',
    moreLinkText: 'wiÄcej',
    noEventsText: 'Brak wydarzeÅ do wyÅwietlenia',
  };

  return pl;

}());
