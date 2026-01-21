document.addEventListener("DOMContentLoaded", () => {
  const track = document.getElementById("galeriaTrack");

  const imagenes = [
    
    "https://res.cloudinary.com/dnpevelfb/image/upload/v1769016209/1_b5vz3w.jpg",
    "https://res.cloudinary.com/dnpevelfb/image/upload/v1769016212/3_ahebjd.jpg",
    "https://res.cloudinary.com/dnpevelfb/image/upload/v1769016215/7_ivqmz8.jpg",
    "https://res.cloudinary.com/dnpevelfb/image/upload/v1769016213/8a_a2aqaw.jpg",
    "https://res.cloudinary.com/dnpevelfb/image/upload/v1769016214/14_iklnl3.jpg",
    "https://res.cloudinary.com/dnpevelfb/image/upload/v1769016218/19_jbzixh.jpg",
    "https://res.cloudinary.com/dnpevelfb/image/upload/v1769016211/21_ntl97g.jpg",
    "https://res.cloudinary.com/dnpevelfb/image/upload/v1769016216/24_jio6jc.jpg",
    "https://res.cloudinary.com/dnpevelfb/image/upload/v1769016211/28_drn7iu.jpg",
    "https://res.cloudinary.com/dnpevelfb/image/upload/v1769016212/30_j5mayq.jpg",
    "https://res.cloudinary.com/dnpevelfb/image/upload/v1769016212/29_czdnwo.jpg"
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
