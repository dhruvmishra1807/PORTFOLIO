var typed = new Typed('#element', {
  strings: ['Web Developer.', 'FrontEnd Developer.', 'DSA Enthusiast.'],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 500,
  loop: true
});

let sidemenu = document.getElementById("sidemenu");
let openM = document.querySelector(".bx-menu");
let closeM = document.querySelector(".bx-exit");
let headertext=document.getElementsByClassName("header-text");
let links=document.getElementsByClassName("links");

openM.addEventListener("click", () => {
  sidemenu.classList.toggle("active");
  // headertext.classList.toggle("opace");
  // links.classList.toggle("opace");

})
closeM.addEventListener("click", () => {
  sidemenu.classList.toggle("active");
  // headertext.classList.toggle("opace");
  // links.classList.toggle("opace");
})
window.onscroll = () => {
  sidemenu.classList.remove("active");
}

// ---google from---

const scriptURL = 'https://script.google.com/macros/s/AKfycbw5aRV60pINs17COpFzMnekRpoxFnN2kctYNHdoG7HPi_iyWdJisfVQXfg99fm5QJ7S/exec'
const form = document.forms['myform']
let msg=document.getElementById("msg");

form.addEventListener('submit', e => {
  msg.innerHTML="Submitting..."
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then(response => {
      msg.innerHTML="Message Sent Successfully."
      setTimeout(()=>{
        msg.innerHTML=""
      },5000)
      form.reset();
    })
    .catch(error => console.error('Error!', error.message))
})
