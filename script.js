// Language Selectinu outline idaan vendi ulla code


let select = document.getElementById('lang')
let langSelect = document.getElementById('lgse')
let emailInput = document.getElementById('emailInput')
let emailPlc = document.getElementById('emailplc')


select.addEventListener('focus',(e)=>{
    langSelect.classList.add('focused')
})

select.addEventListener('blur',()=>{
    langSelect.classList.remove('focused')
})


emailInput.addEventListener('focus',()=>{
    emailPlc.classList.add('active')
})


emailInput.addEventListener('blur',()=>{
    emailPlc.classList.remove('active')
})


let signInBtn = document.querySelectorAll('.btn-sign')
signInBtn.forEach((e)=>{
    e.addEventListener('click',()=>{
        window.location = "https://www.netflix.com/login"
    })
})