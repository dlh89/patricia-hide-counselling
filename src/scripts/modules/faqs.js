export default class Faqs {
    constructor() {
      const questions = document.querySelectorAll('.js-faq-question');

      if (!questions.length){
        // no FAQs on this page
        return;
      }

      // Expand the initial active faq
      const activeFaq = document.querySelector('.faqs__faq--active');
      this.expandFaq(activeFaq);

      this.setUpFaqListeners(questions);
    }

    setUpFaqListeners(questions) {
      questions.forEach((question) => {
        question.addEventListener('click', () => {
            this.hideActiveFaqs();
            const faq = question.parentElement;
            this.expandFaq(faq);
        });
      });
    }

    expandFaq(faq) {
      const associatedAnswer = faq.querySelector('.js-faq-answer');
      faq.classList.add('faqs__faq--active');
      associatedAnswer.style.maxHeight = `${associatedAnswer.scrollHeight}px`;
      associatedAnswer.setAttribute('aria-hidden', 'false');
    }

    hideActiveFaqs() {
      const activeFaqs = document.querySelectorAll('.faqs__faq--active');
      activeFaqs.forEach(function(faq) {
        faq.classList.remove('faqs__faq--active');
      });

      const answers = document.querySelectorAll('.js-faq-answer');

      answers.forEach(function(answer) {
        answer.style.maxHeight = 0;
        answer.setAttribute('aria-hidden', 'true');
      });
    }
  }
  