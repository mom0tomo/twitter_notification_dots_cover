
window.addEventListener("load", main, false);

function main(e) {
  setInterval(jsLoaded, 3);

  function jsLoaded() {
    const notification_dots = document.querySelectorAll("[aria-live='polite']");
    if (notification_dots != null) {
      for (i = 0; i < notification_dots.length; i++) {
        notification_dots[i].style.display = "none";
      }
    }
  }
}
