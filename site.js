
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
     WEB3FORMS CONTACT FORM
     ========================================= */

  const form = document.getElementById('contact-form');

  if (form) {

    const submitButton = document.getElementById(
      'contact-submit'
    );

    const formStatus = document.getElementById(
      'form-status'
    );

    // Display feedback below the form
    function showStatus(message, isSuccess) {

      formStatus.hidden = false;
      formStatus.textContent = message;

      formStatus.style.marginTop = '24px';
      formStatus.style.fontSize = '15px';
      formStatus.style.lineHeight = '1.6';

      formStatus.style.color = isSuccess
        ? '#426548'
        : '#a43c4c';

    }


    // Handle form submission
    form.addEventListener('submit', async (event) => {

      event.preventDefault();

      // Prevent duplicate submissions
      if (submitButton.disabled) {
        return;
      }

      submitButton.disabled = true;
      submitButton.textContent = 'Sending...';

      formStatus.hidden = true;
      formStatus.textContent = '';

      try {

        // Collect form information
        const formData = new FormData(form);

        // Send to Web3Forms
        const response = await fetch(
          'https://api.web3forms.com/submit',
          {
            method: 'POST',
            body: formData,
            headers: {
              'Accept': 'application/json'
            }
          }
        );

        const result = await response.json();

        if (response.ok && result.success) {

          // Submission successful
          showStatus(
            "Message sent successfully! Thank you for reaching out. I'll get back to you as soon as possible.",
            true
          );

          // Clear the form
          form.reset();

        } else {

          // Web3Forms rejected the submission
          showStatus(
            result.message ||
            'Something went wrong. Please try again.',
            false
          );

        }

      } catch (error) {

        // Network or connection error
        showStatus(
          'Unable to send your message right now. Please check your connection and try again.',
          false
        );

      } finally {

        // Restore submit button
        submitButton.disabled = false;
        submitButton.textContent = 'Send Message ↗';

      }

    });

  }

});
