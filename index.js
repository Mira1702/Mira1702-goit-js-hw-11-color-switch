const refs = {
    btnStart: document.querySelector('button[data-action="start"]'),
    btnStop: document.querySelector('button[data-action="stop"]')
},
colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
],
randomIntegerFromInterval = (max) => {
    return Math.floor(Math.random() * (max + 1));
},

setRandomColor = () => {
    const _color = colors[randomIntegerFromInterval(colors.length - 1)]
    console.log(_color)
    document.body.style.backgroundColor = _color
}

let intervalId = undefined;

refs.btnStart.addEventListener('click', e => intervalId = intervalId ?
  intervalId :
    setInterval(() => setRandomColor(), 1000)
)
  
refs.btnStop.addEventListener('click', e => clearInterval(intervalId))