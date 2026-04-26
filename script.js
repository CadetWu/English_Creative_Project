function scrollGallery(direction) {
  const gallery = document.getElementById("gallery");
  const width = gallery.clientWidth;

  gallery.scrollBy({
    left: width * direction,
    behavior: "smooth"
  });
}
