import { CountUp } from 'https://cdnjs.cloudflare.com/ajax/libs/countup.js/2.0.7/countUp.js'
let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}


window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}


function countStart(){
  const $counters = document.querySelectorAll(".icons h3"),
        options = {
          useEasing: true,
          useGrouping: true,
          separator: ",",
          decimal: "."
        };

  $counters.forEach( (item) => {
    const value = item.dataset.value;
    const counter = new CountUp(item, value, options);
    counter.start();
  });
}

new Waypoint({
  element: document.querySelector('.icons-container'),
  handler: function() {
    countStart()
    //this.destroy() //for once
  },
  offset: '50%'
});