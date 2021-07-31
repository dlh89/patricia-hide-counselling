export default class Faqs {
    constructor() {
      const questions = document.querySelectorAll('.js-faq-question');

      if (!questions.length){
        // no FAQs on this page
        return;
      }

      // Give the first answer a px height as it starts open and transition won't work on non px value
      const answers = document.querySelectorAll('.js-faq-answer');
      answers[0].style.maxHeight = `${answers[0].scrollHeight}px`;

      questions.forEach((question) => {
        question.addEventListener('click', () => {
            this.hideActiveQuestions();
            const associatedAnswer = question.nextElementSibling;
            associatedAnswer.classList.add('faqs__answer--active');
            associatedAnswer.style.maxHeight = `${associatedAnswer.scrollHeight}px`;
            associatedAnswer.setAttribute('aria-hidden', 'false');
        });
      });
    }

    hideActiveQuestions() {
      const answers = document.querySelectorAll('.js-faq-answer');

      answers.forEach(function(answer) {
        answer.style.maxHeight = 0;
        answer.setAttribute('aria-hidden', 'true');
      });
    }
  }
  