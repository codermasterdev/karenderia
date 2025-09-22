function noDots(str, debug = false) {
    str = str.replace(/[ÙÙÙÙÙÙÙÙ]/gu, '');

    // \b not working with unicode chars in JavaScript
    str = str.replace(/Ù(\s+|$)/gu, 'Úº\$1');
    str = str.replace(/Ù(\s+|$)/gu, 'ÙÙï¹³\$1');

    str = str.replace(/[Ø¨ØªØ«Ù]/gu, 'Ù®');
    str = str.replace(/Ù/gu, 'Ù');

    str = str.replace(/Ù/gu, 'Ú¡');
    str = str.replace(/Ù/gu, 'Ù¯');

    str = str.replace(/Ø´/gu, 'Ø³');
    str = str.replace(/Øº/gu, 'Ø¹');
    str = str.replace(/Ø°/gu, 'Ø¯');
    str = str.replace(/Ø²/gu, 'Ø±');
    str = str.replace(/Ø¶/gu, 'Øµ');
    str = str.replace(/Ø¸/gu, 'Ø·');
    str = str.replace(/Ø©/gu, 'Ù');
    str = str.replace(/[Ø¬Ø®]/gu, 'Ø­');

    str = str.replace(/[Ø£Ø¥Ø¢]/gu, 'Ø§');
    str = str.replace(/Ø¤/gu, 'Ù');
    str = str.replace(/Ø¦/gu, 'Ù');

    return str;
}

function getNoDots() {
    var text = document.getElementById("comment").value;
    
    document.getElementById("comment").value = noDots(text);
    
    return false;
}

function copyToClipboard() {
  // get the textarea
  var copyText = document.getElementById("comment");

  // select the textarea
  copyText.select();
  copyText.setSelectionRange(0, 99999); // for mobile devices

  // copy the text inside the textarea
  document.execCommand("copy");
  
  document.getElementById("copy").select();

  // alert the copied text
  alert("ØªÙ Ø§ÙÙØ³Ø® Ø¨ÙØ¬Ø§Ø­!");
}

function newString() {
    document.getElementById("comment").value = "";
    //document.getElementById("comment").select();
}

if ("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker
      .register("serviceWorker.js")
      .then(res => console.log("service worker registered"))
      .catch(err => console.log("service worker not registered", err))
  })
}