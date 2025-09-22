FullCalendar.globalLocales.push(function () {
  'use strict';

  var bn = {
    code: 'bn',
    week: {
      dow: 0, // Sunday is the first day of the week.
      doy: 6, // The week that contains Jan 1st is the first week of the year.
    },
    buttonText: {
      prev: 'à¦ªà§à¦à¦¨à§',
      next: 'à¦¸à¦¾à¦®à¦¨à§',
      today: 'à¦à¦',
      month: 'à¦®à¦¾à¦¸',
      week: 'à¦¸à¦ªà§à¦¤à¦¾à¦¹',
      day: 'à¦¦à¦¿à¦¨',
      list: 'à¦¤à¦¾à¦²à¦¿à¦à¦¾',
    },
    weekText: 'à¦¸à¦ªà§à¦¤à¦¾à¦¹',
    allDayText: 'à¦¸à¦¾à¦°à¦¾à¦¦à¦¿à¦¨',
    moreLinkText: function(n) {
      return '+à¦à¦¨à§à¦¯à¦¾à¦¨à§à¦¯ ' + n
    },
    noEventsText: 'à¦à§à¦¨à§ à¦à¦­à§à¦¨à§à¦ à¦¨à§à¦',
  };

  return bn;

}());
