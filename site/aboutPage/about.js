function navigateToPage(pageUrl) {
  window.location.href = pageUrl;
}

document.addEventListener('DOMContentLoaded', function() {
  document.body.classList.add('fade-in');
});

function expandContainer(containerId) {
  var container = document.getElementById(containerId);
  var videoContainer = container.querySelector(".video-container");

  if (container.classList.contains("expanded")) {
    // If the container is already expanded, collapse it
    container.style.height = "50%";
    videoContainer.style.maxHeight = "0";
    videoContainer.style.display = "none";
    container.classList.remove("expanded");
  } else {
    // If the container is not expanded, expand it
    container.style.height = "100%";
    videoContainer.style.maxHeight = "100%"; // Змінено на 100% для більшої висоти відео
    videoContainer.style.display = "block";
    container.classList.add("expanded");
  }
};

$(document).ready(function() {
  $('.thumbnails img').on('click', function() {
    var imgSrc = $(this).attr('src');
    $('.preview img').attr('src', imgSrc);
  });
});

