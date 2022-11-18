function openGalleryImage(e) {
  const clickedImageUrl = e.style.backgroundImage
    .slice(4, -1)
    .replace(/['"]/g, "");
  const gallery = e.closest("div .Gallery");
  const galleryItemsList = gallery.querySelectorAll(".Gallery-image");
  const galleryItemsArray = Array.from(galleryItemsList);
  const allUrls = galleryItemsArray.map((x) =>
    x.style.backgroundImage.slice(4, -1).replace(/['"]/g, "")
  );
  const currentUrlIndex = allUrls.indexOf(clickedImageUrl);

  SimpleLightbox.open({
    items: allUrls,
    startAt: currentUrlIndex,
    bindToItems: false,
  });
}

function openGallery(id) {
  const html = document.getElementsByTagName("html")[0];
  html.classList.add("no-scroll");
  const navBar = document.getElementById("topNavBar");
  navBar.hidden = true;
  const gallery = document.getElementById("gallery-" + id);
  const card = document.getElementById("card-" + id);
  gallery.classList.remove("hide-gallery");
  gallery.classList.add("Gallery--active");
  card.classList.add("Card--active");
}

function closeAll() {
  const galleryActv = document.querySelector(".Gallery--active");
  const cardActv = document.querySelector(".Card--active");
  if (galleryActv) {
    galleryActv.classList.remove("Gallery--active");
    galleryActv.classList.remove("hide-gallery");
  }
  if (cardActv) {
    cardActv.classList.remove("Card--active");
  }
  const navBar = document.getElementById("topNavBar");
  navBar.hidden = false;
  const html = document.getElementsByTagName("html")[0];
  html.classList.remove("no-scroll");
}
