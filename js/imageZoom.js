// Image Zoom
const zoom = document.querySelector(".zoom");
const zoom_img = document.querySelector(".zoom_content");
const imgs = document.querySelectorAll(".play-photo img");
const photoContainer = document.querySelector('.play-photo');
const closeBtn = document.querySelector(".close");

imgs.forEach((e) => e.addEventListener('click', displayImgZoom));

function displayImgZoom() {
    const arr = this.src.split('/');
    const src = arr[arr.length - 1];
    photoContainer.classList.add('hidden');
    zoom.classList.remove('hidden');
    zoom_img.src = 'img/' + src;
};

function closeImgZoom() {
    photoContainer.classList.remove('hidden');
    zoom.classList.add('hidden');
}

closeBtn.addEventListener('click', closeImgZoom);
