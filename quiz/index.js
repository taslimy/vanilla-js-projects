const correctAnswers = ['B', 'B', 'B', 'B'];
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');

form.addEventListener('submit', e => {
  e.preventDefault();

  let score = 0;

  const userAnswers = [
    form.q1.value,
    form.q2.value,
    form.q3.value,
    form.q4.value
  ];

  userAnswers.forEach((answer, index) => {
    answer === correctAnswers[index] ? score += 25 : null;
  });

  // show result
  scrollTo(0,0) // scrollTo dont need window.scrollTo its infered. 
  result.classList.remove('d-none');

  let output = 0;

  const timer = setInterval(() => {
    result.querySelector('span').textContent = `${output}%`;
    output === score ? clearInterval(timer) : output++
  }, 10);

});

// on 71.

// let x = 0;

// const timer = setInterval(() => {
//   console.log('hello')
//   x++
//   x === 5 ? clearInterval(timer) : x
// }, 1000);

// window object (global object)

// console.log(outerHeight)

// console.log(document.querySelector('form'))

// setTimeout(() => {

// }, 3000)