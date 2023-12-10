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

window.addEventListener('scroll', () => {
  const blurText = document.querySelector('.blur-text');
  const scrollPosition = window.scrollY;

  if (scrollPosition > 45) {
    blurText.style.filter = 'blur(5px)';
  } else {
    blurText.style.filter = 'none';
  }
});
