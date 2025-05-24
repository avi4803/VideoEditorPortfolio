function toggleVolume(btn) {
  const video = document.getElementById("customVideo");
  const icon = document.getElementById("speakerIcon");

  if (video.muted) {
    video.muted = false;
    icon.innerHTML = `
      <path d="M5 9V15H9L14 20V4L9 9H5Z" />
      <path d="M16 8C17.1046 9.10457 18 10.5523 18 12C18 13.4477 17.1046 14.8954 16 16" />
      <path d="M19 5C21.2091 7.20914 22 9.55228 22 12C22 14.4477 21.2091 16.7909 19 19" />
    `;
  } else {
    video.muted = true;
    icon.innerHTML = `
      <path d="M16.5 12L19 14.5M19 9.5L16.5 12M5 9V15H9L14 20V4L9 9H5Z" />
    `;
  }
}
document.addEventListener("DOMContentLoaded", () => {
  const videoCards = document.querySelectorAll(".video-card");

  videoCards.forEach((card) => {
    const video = card.querySelector("video");
    const btn = card.querySelector(".volume-toggle");
    const icon = card.querySelector(".speaker-icon");

    btn.addEventListener("click", () => {
      video.muted = !video.muted;

      icon.innerHTML = video.muted
        ? `<path d="M16.5 12L19 14.5M19 9.5L16.5 12M5 9V15H9L14 20V4L9 9H5Z" />`
        : `<path d="M5 9V15H9L14 20V4L9 9H5Z" />
           <path d="M16 8C17.1046 9.10457 18 10.5523 18 12C18 13.4477 17.1046 14.8954 16 16" />
           <path d="M19 5C21.2091 7.20914 22 9.55228 22 12C22 14.4477 21.2091 16.7909 19 19" />`;
    });
  });
});
