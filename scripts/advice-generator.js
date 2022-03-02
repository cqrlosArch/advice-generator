const templateAdvice = document.getElementById('template-advice').content;
const advice = document.querySelector('.advice');

const getAdvice = async () => {
  const response = await fetch('https://api.adviceslip.com/advice');
  const { slip } = await response.json();
  return slip;
};

const createAdvice = async () => {
  const slip = await getAdvice();
  templateAdvice.querySelector('.advice__title').textContent = `advice #${slip.id}`;
  templateAdvice.querySelector('.advice__text').textContent = slip.advice;
  const clone = document.importNode(templateAdvice, true);
  advice.appendChild(clone);
};

document.addEventListener('click', (e) => {
  if (e.target.closest('.advice__dice')) {
    advice.innerHTML = '';
    createAdvice();
  }
});

export default createAdvice;
