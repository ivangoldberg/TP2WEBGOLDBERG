// Cambiar navbar al hacer scroll
window.addEventListener('scroll', function() {
  const navbar = document.querySelector('.navbar');
  navbar.classList.toggle('scrolled', window.scrollY > 50);
});
// Asegúrate de que este script se ejecute después de que el DOM esté completamente cargado.
// Puedes envolverlo en un evento 'DOMContentLoaded' o colocarlo al final de <body>.

document.addEventListener('DOMContentLoaded', function() {
  // Inicializa el Swiper para la sección de "Qué trae tu Caja?"
  // Asegúrate de que 'mySwiperCaja' sea la clase que usa tu Swiper.
  const mySwiperCaja = new Swiper('.mySwiperCaja', {
    // Configura aquí tus opciones de Swiper
    slidesPerView: 1, // Muestra una slide a la vez por defecto
    spaceBetween: 20, // Espacio entre slides
    loop: true, // Para que el slider sea infinito

    // Si quieres que se muestren más de una slide en pantallas grandes
    breakpoints: {
      // Cuando el ancho de la ventana es >= 768px
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      // Cuando el ancho de la ventana es >= 992px
      992: {
        slidesPerView: 3, // Por ejemplo, 3 slides visibles a la vez
        spaceBetween: 40,
      }
    },

    // Paginación (los puntos de navegación)
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

    // Flechas de navegación (si las quieres)
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // Scrollbar (si la quieres)
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });
});