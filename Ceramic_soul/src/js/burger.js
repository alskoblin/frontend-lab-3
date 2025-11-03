document.addEventListener('DOMContentLoaded', () => {
  const closeBtn = document.querySelector('.menu-close');
  const burgerCheckbox = document.querySelector('.burger-checkbox');

  if (closeBtn && burgerCheckbox) {
    closeBtn.addEventListener('click', () => {
      burgerCheckbox.checked = false;
    });
  } else {
    console.warn('Menu elements not found');
  }
});