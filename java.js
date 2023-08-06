let interval
const timer = document.getElementById('timer')
const startBtn = document.querySelector('.startBtn')
let inputValue = document.getElementById('minutes')
let time = 0
let timerRunning = false
function run(e) {
  const checkingNumber = parseInt(inputValue.value)
  if (isNaN(checkingNumber)) {
    alert(`Enter a number!`)
    return
  }

  if (!timerRunning) {
    if (time === 0) {
      time = inputValue.value * 60
    }

    interval = setInterval(() => {
      let minutes = Math.floor(time / 60)
      let seconds = time % 60
      let newTime = `${minutes}m:${seconds.toString().padStart(2, '0')}s`
      timer.innerHTML = newTime
      time--

      if (time < 0) {
        clearInterval(interval)
        timerRunning = false
        e.target.textContent = 'Start'
        e.target.style.backgroundColor = '#3e4359'
        timer.innerHTML = `Time is over!`
        shake()
      }
    }, 1000)
    e.target.textContent = 'Pause'
    e.target.style.backgroundColor = '#5a6181'
    timerRunning = true
  } else {
    clearInterval(interval)
    e.target.textContent = 'Start'
    e.target.style.backgroundColor = '#3e4359'
    timerRunning = false
  }
}

document.querySelector('.startBtn').onclick = run

function reset() {
  clearInterval(interval)
  timerRunning = false
  startBtn.textContent = 'Start'
  startBtn.style.backgroundColor = '#3e4359'
  time = 0
  timer.innerHTML =
    '<label for="minutes">Reset</label> <input type="text" id="minutes" class="form-control" placeholder="Enter"/>'
  inputValue = document.getElementById('minutes')
}

document.querySelector('.resetBtn').onclick = reset

function shake() {
  const timeisOver = document.querySelector('.background') 
  timeisOver.classList.add('shake')
  setTimeout(() => {
    timeisOver.classList.remove('shake')
  }, 500)
}