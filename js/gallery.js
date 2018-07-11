function activateGallery() {
  let thumbnails = document.querySelectorAll("#gallery-thumbs > div > img");
  let mainImage = document.querySelector("#gallery-photo img");

  const currentClass = "current";
  const galleryClass = "gallery-info";

  thumbnails.forEach( function(thumbnail) {
    thumbnail.addEventListener("click", function(){
      // Set clicked image as main image.
      let newImageSrc = thumbnail.dataset.largeVersion;
      mainImage.setAttribute("src", newImageSrc);

      //Set current in aside thumbnails
      document.querySelector("."+currentClass).classList.remove(currentClass);
      thumbnail.parentNode.classList.add(currentClass);

      // Update image info.
      let galleryInfo = document.querySelector("#gallery-info");
      let title       = galleryInfo.querySelector(".title");
      let description = galleryInfo.querySelector(".description");
      title.innerHTML = thumbnail.dataset.title;
      description.innerHTML = thumbnail.dataset.description;
    });
  });
}
