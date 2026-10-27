const video = document.getElementById('Logo');

video.addEventListener('ended', () => {
  video.pause(); 
});

let indiceAtual = 0;

function mudarSlide(direcao){
    const track = document.getElementById('carouselTrack');
    const slide = document.querySelectorAll('.carousel-slide');
    const totalSlides = slide.length;

    indiceAtual += direcao;

    if(indiceAtual){
        indiceAtual = totalSlides - 1;
    }
    else if (indiceAtual >= totalSlides){
        indiceAtual = 0;
    }

    const deslocamento = -indiceAtual * 100;
    track.style.transform = `translateX(${deslocamento}%)`
}

window.addEventListener('pageshow', function(event) {
    var iframe = document.getElementById('myIframe');
    iframe.src = iframe.src; 
  });