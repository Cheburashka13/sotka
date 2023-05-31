


let user_input = document.querySelector (".exp1")
let user_send = document.querySelector (".send")
let correct_ans = 150 

user_input.addEventListener ('mouseover', function () {user_input.style.background =  'white'})
user_input.addEventListener ('mouseout', function () {user_input.style.background =  '#BCCCCB'})

user_send.addEventListener ('click', function () {
  if (user_input.value==correct_ans)
{alert ('Правильно') 
window.location.href="file:///C:/Users/%D0%98%D0%B2%D0%B0%D0%BD%20%D0%98%D0%B2%D0%B0%D0%BD%D0%BE%D0%B2%D0%B8%D1%87/AppData/Local/Programs/Algoritmika/vscode/data/extensions/algoritmika.algopython-20230510.152437.0/data/student/2440878/Project_Frontend/index.html"

}


})

