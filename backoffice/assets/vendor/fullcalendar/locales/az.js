FullCalendar.globalLocales.push(function () {
  'use strict';

  var az = {
    code: 'az',
    week: {
      dow: 1, // Monday is the first day of the week.
      doy: 4, // The week that contains Jan 4th is the first week of the year.
    },
    buttonText: {
      prev: 'ÆvvÉl',
      next: 'Sonra',
      today: 'Bu GÃ¼n',
      month: 'Ay',
      week: 'HÉftÉ',
      day: 'GÃ¼n',
      list: 'GÃ¼ndÉm',
    },
    weekText: 'HÉftÉ',
    allDayText: 'BÃ¼tÃ¼n GÃ¼n',
    moreLinkText: function(n) {
      return '+ daha Ã§ox ' + n
    },
    noEventsText: 'GÃ¶stÉrmÉk Ã¼Ã§Ã¼n hadisÉ yoxdur',
  };

  return az;

}());
