console.log("arsalan")
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');


const gradients = {
  grey: 'linear-gradient(135deg, #bdbdbd 60%, #757575 100%)',
  white: 'linear-gradient(135deg, #fff 60%, #e0e0e0 100%)',
  blue: 'linear-gradient(135deg, #42a5f5 60%, #1565c0 100%)',
  yellow: 'linear-gradient(135deg, #fff176 60%, #fbc02d 100%)',
  random: null // will be handled separately
};

function getRandomGradient() {
  // Generate two random colors
  const color1 = `#${Math.floor(Math.random()*16777215).toString(16).padStart(6, '0')}`;
  const color2 = `#${Math.floor(Math.random()*16777215).toString(16).padStart(6, '0')}`;
  return `linear-gradient(135deg, ${color1} 60%, ${color2} 100%)`;
}

buttons.forEach(function (button) {
  button.addEventListener('click', function (e) {
    const id = e.target.id;
    if (id === 'random') {
      body.style.background = getRandomGradient();
    } else if (gradients[id]) {
      body.style.background = gradients[id];
    }
  });
});