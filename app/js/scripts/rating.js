export function rating() {
  const rating =  document.querySelector('.rating');

  if(rating) {
    const stars = rating.querySelectorAll('.rating__star');

    stars.forEach((star, i) => {
      star.addEventListener('click', (e) => {
        e.preventDefault();

        let currentStarLevel = i + 1;

        stars.forEach((star, j) => {
          if (currentStarLevel >= j + 1) {
            star.classList.add('_checked');
          } else {
            star.classList.remove('_checked');
          }

        })
      })
    })
  }
}