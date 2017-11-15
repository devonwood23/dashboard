'use strict'

let swapBtn = document.getElementById('swapBtn');

function swapCSS() {
  let styles = document.getElementById('stylesheet');
  
  console.log(styles.getAttribute("href"));
  
  if (styles.getAttribute("href") == "css/styles-two.css") {
    styles.setAttribute("href", "css/style.css");
  } else {
    styles.setAttribute("href", "css/styles-two.css");
  }
  
}

swapBtn.addEventListener('click', swapCSS);