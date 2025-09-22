FullCalendar.globalLocales.push(function () {
  'use strict';

  var hi = {
    code: 'hi',
    week: {
      dow: 0, // Sunday is the first day of the week.
      doy: 6, // The week that contains Jan 1st is the first week of the year.
    },
    buttonText: {
      prev: 'à¤ªà¤¿à¤à¤²à¤¾',
      next: 'à¤à¤à¤²à¤¾',
      today: 'à¤à¤',
      month: 'à¤®à¤¹à¥à¤¨à¤¾',
      week: 'à¤¸à¤ªà¥à¤¤à¤¾à¤¹',
      day: 'à¤¦à¤¿à¤¨',
      list: 'à¤à¤¾à¤°à¥à¤¯à¤¸à¥à¤à¥',
    },
    weekText: 'à¤¹à¤«à¥à¤¤à¤¾',
    allDayText: 'à¤¸à¤­à¥ à¤¦à¤¿à¤¨',
    moreLinkText: function(n) {
      return '+à¤à¤§à¤¿à¤ ' + n
    },
    noEventsText: 'à¤à¥à¤ à¤à¤à¤¨à¤¾à¤à¤ à¤à¥ à¤ªà¥à¤°à¤¦à¤°à¥à¤¶à¤¿à¤¤ à¤à¤°à¤¨à¥ à¤à¥ à¤²à¤¿à¤',
  };

  return hi;

}());
