(function () {
  "use strict";

  document.addEventListener("DOMContentLoaded", function () {
    var contrast = localStorage.getItem("high-contrast");

    if (contrast) switchMode("high-contrast", "normal");
  });

  let switchSVG = document.getElementById("activate-high-contrast");
  switchSVG.addEventListener("click", function () {
    switchMode("high-contrast", "normal");
    localStorage.setItem("high-contrast", "true");
  });

  let normalButton = document.getElementById("activate-normal");
  normalButton.addEventListener("click", function () {
    switchMode("normal", "high-contrast");
    localStorage.removeItem("high-contrast");
  });

  function switchMode(newMode, prevMode) {
    var link = document.querySelector(
      'link[rel=stylesheet][href*="' + prevMode + '"]'
    );
    link.parentNode.removeChild(link);

    link = document.createElement("link");

    link.type = "text/css";
    link.rel = "stylesheet";
    link.href = "CSS/" + newMode + ".css";

    document.head.appendChild(link);
  }
})();
