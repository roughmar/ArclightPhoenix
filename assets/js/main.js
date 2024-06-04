document.addEventListener('DOMContentLoaded', function () {
    const cardLinks = document.querySelectorAll('.card-popup');
    
    cardLinks.forEach(link => {
      link.addEventListener('mouseover', function () {
        const cardImage = link.querySelector('.card-image');
        cardImage.style.display = 'block';
      });
      
      link.addEventListener('mouseout', function () {
        const cardImage = link.querySelector('.card-image');
        cardImage.style.display = 'none';
      });
    });
  });
  