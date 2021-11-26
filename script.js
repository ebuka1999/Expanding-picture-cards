const panels = document.querySelectorAll('.panel')

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active');
    })
})

function removeActiveClasses(){
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}

// function myFunction(){
//     let checkbox = document.getElementById('checkbox');
//     let text = document.getElementById('toggle-text');
//     if (checkbox.checked == true) {
//         document.body.style.backgroundColor = "black";
//         text.innerHTML = "Switch to Dark Mode"
//     }else{
//         document.body.style.backgroundColor = "white";
//     }
// }



  


