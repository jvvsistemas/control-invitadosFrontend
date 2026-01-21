document.addEventListener("DOMContentLoaded", () => {
  const track = document.getElementById("galeriaTrack");

  const imagenes = [
    
    "./images/photos/1.jpg",
    "./images/photos/3.jpg",
    "./images/photos/7.jpg",
    "./images/photos/8a.jpg",
    "./images/photos/14.jpg",
    "./images/photos/19.jpg",
    "./images/photos/21.jpg",
    "./images/photos/24.jpg",
    "./images/photos/28.jpg",
    "./images/photos/30.jpg"
  ];

  // duplicamos para efecto infinito
  const total = imagenes.concat(imagenes);

  total.forEach(src => {
    const card = document.createElement("div");
    card.className = "galeria-item";
    card.style.backgroundImage = `url(${src})`;
    track.appendChild(card);
  });
});
