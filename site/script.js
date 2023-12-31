document.addEventListener("DOMContentLoaded", function() {
  var words = document.querySelectorAll(".word");
  var video = document.getElementById("video-background");

  words.forEach(function(word) {
    word.addEventListener("mouseover", function() {
      var newVideo = this.getAttribute("data-video");
      video.src = newVideo;
    });

    word.addEventListener("mouseleave", function() {
      video.src = "default-video.mp4";
    });
  });
});
function navigateToPage(pageUrl) {
  window.location.href = pageUrl;
}
document.addEventListener('DOMContentLoaded', function() {
  // Додаємо клас для з'явлення сторінки
  document.body.classList.add('fade-in');
});