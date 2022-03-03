const advice = document.querySelector('.advice');

const getAdvice = async () => {
  const response = await fetch('https://api.adviceslip.com/advice');
  const { slip } = await response.json();
  return slip;
};

const createAdvice = async () => {
  const slip = await getAdvice();
  advice.querySelector('.advice__title').textContent = `advice #${slip.id}`;
  advice.querySelector('.advice__text').textContent = slip.advice;
};

document.addEventListener('click', (e) => {
  if (e.target.closest('.advice__dice')) {
    createAdvice();
  }
});
export default createAdvice;
