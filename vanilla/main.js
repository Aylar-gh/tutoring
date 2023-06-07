import './style.css';

console.log("testing");

let name = 'Aylar';
console.log(`My name is ${name}`);

const a = `
  <p>
    <label for="name">enter name</label>
    <input id="myname" type="text"/>
    <br><br>
    <div class="box"></div>
    <div>Hello <span id="msg">${name}</span></div>
    <button id="btn">test</button>
  </p>
`;

document.getElementById('app').innerHTML = a;

//click handler logic
function clickHandler() {
  name = document.getElementById('myname').value;
  alert(`clicked by ${name}`);
  document.getElementById('message').innerHTML = `Hello ${name}`;
}
document.getElementById('btn').addEventListener('click', clickHandler);
//typing handler logic
function changeHandler(){
  name=document.getElementById('myname').value;
  document.getElementById('msg').innerHTML=name;

document.getElementById('myname').addEventListener('keyup',changeHandler)
//show/hide boxes
if (name==='hi'){
  const boxes = document.getElementsByClassName('box');
  boxes[0].classList.add('display')
}else{
  document.getElementsByClassName('box')[0].classList.remove('display')
}
}
document.getElementById('myname').addEventListener('keyup',changeHandler)
