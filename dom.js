const body = document.body
const div = document.createElement('div')

// div.textContent = 'Hey there! Hope you are good.'
// div.innerHTML = '<strong>Hey</strong> there! Hope you are good.' //not secure

div.textContent = 'Hey there! Hope you are good.'
// const strong = document.createElement('strong')
// strong.innerText = 'Hey'
// div.append(strong) //secure

div.style.color = 'pink'
body.append(div)
