
var tablinks = document.getElementsByClassName('tab-links');
var tabcontents = document.getElementsByClassName('tab-contents');
var sidemenu = document.getElementsByClassName('sidemenu');

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove('active-link');
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove('active-tab');
    }
    event.currentTarget.classList.add('active-link');
    document.getElementById(tabname).classList.add('active-tab');
}
// Contact Me
const scriptURL = 'https://script.google.com/macros/s/AKfycbxtlTp5v-kBBbxZdaOs2mVAcnS4foezXeY9bFxP2_TcQBiDDQfkxBCU0t8yM7ANZpA/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById('msg')
form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        msg.innerHTML = 'Message sent succesfully'
        setTimeout(function(){
            msg.innerHTML = ''
        },5000)
        form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})

// Responsive side navbar


function openmenu(){
    sidemenu.style.right = '0';
}
function closemenu(){
    sidemenu.style.right = '-200px';
}