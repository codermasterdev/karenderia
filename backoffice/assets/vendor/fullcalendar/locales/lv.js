FullCalendar.globalLocales.push(function () {
  'use strict';

  var lv = {
    code: 'lv',
    week: {
      dow: 1, // Monday is the first day of the week.
      doy: 4, // The week that contains Jan 4th is the first week of the year.
    },
    buttonText: {
      prev: 'Iepr.',
      next: 'NÄk.',
      today: 'Å odien',
      month: 'MÄnesis',
      week: 'NedÄÄ¼a',
      day: 'Diena',
      list: 'Dienas kÄrtÄ«ba',
    },
    weekText: 'Ned.',
    allDayText: 'Visu dienu',
    moreLinkText: function(n) {
      return '+vÄl ' + n
    },
    noEventsText: 'Nav notikumu',
  };

  return lv;

}());
