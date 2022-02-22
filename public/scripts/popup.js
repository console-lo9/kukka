function getCookie() {
  var cookieData = document.cookie;
  if (cookieData.indexOf("todayCookie=done") < 0) {
    $(".popup").show();
  } else {
    $(".popup").hide();
  }
}

$(document).ready(function () {
  $(".popup").show();
  getCookie();
});

$("#close-popup-btn").click(getCookie);

function set() {
  var isNoMoreToday = $(".close__check-box")[0].checked;
  function setCookieToday(name, value, expireDays) {
    var todayDate = new Date();
    todayDate.setDate(todayDate.getDate() + expireDays);

    document.cookie =
      name +
      "=" +
      escape(value) +
      "; path=/; expires=" +
      todayDate.toUTCString() +
      ";";
  }

  if (isNoMoreToday === true) {
    setCookieToday("todayCookie", "done", 1);
    $(".popup").hide();
  } else {
    $(".popup").hide();
  }
}
