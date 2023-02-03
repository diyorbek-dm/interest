function percent(sum, percent, year) {
  return Math.floor(sum * percent * year) / 100
}

let button = document.getElementById('button-end')

button.addEventListener('click', function () {
  let sum = document.getElementById('sum')
  let year = document.getElementById('lend')
  let sumError = document.getElementById('sum-error')
  let lendError = document.getElementById('lend-error')

  if (sum.value == '') {
    sumError.innerHTML = 'Enter sum'
    sum.style.border = '2px solid #FE5252'
    button.style.backgroundColor = '#FE5252'
  } else if (year.value == '') {
    lendError.innerHTML = 'Enter year'
    year.style.border = '2px solid #FE5252'
  } else {
    sumError.innerHTML = ''
    sum.style.border = '2px solid #42CF36'

    lendError.innerHTML = ''
    year.style.border = '2px solid #42CF36'

    button.style.backgroundColor = '#42CF36'

    document.getElementById('res').innerHTML = `Return interest: ${percent(sum.value, 6, year.value)}$ 
    <br> <center>Annual rate: 6%</center>`

    console.log(localStorage.getItem('name'))
    console.log(localStorage.getItem('password'))
  }
})