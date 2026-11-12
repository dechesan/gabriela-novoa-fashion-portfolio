
/* =========================================
   GABRIELA NOVOA — PORTFOLIO
   Website JavaScript
   ========================================= */

document.addEventListener('DOMContentLoaded', () => {

  /* =========================================
     MOBILE NAVIGATION
     ========================================= */

  const toggle = document.querySelector('.mobile-toggle');
  const nav = document.querySelector('.site-nav');

  if (toggle && nav) {

    // Open and close the mobile menu
    toggle.addEventListener('click', () => {

      const isOpen = nav.classList.toggle('open');

      toggle.setAttribute(
        'aria-expanded',
        isOpen ? 'true' : 'false'
      );

    });

    // Close menu when a navigation link is clicked
    nav.querySelectorAll('a').forEach(link => {

      link.addEventListener('click', () => {

        nav.classList.remove('open');

        toggle.setAttribute('aria-expanded', 'false');

      });

    });

  }

  /* =========================================
     CONTACT FORM
     ========================================= */

  // Contact submissions are handled by Web3Forms.
  // No JavaScript is needed for the form.
  // The form submits directly to:
  // https://api.web3forms.com/submit

});
