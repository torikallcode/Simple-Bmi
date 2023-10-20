const bb = document.querySelector("#bb")
const tb = document.querySelector("#tb")
const btn = document.querySelector("#btn")
const h1 = document.querySelector("h1")

btn.addEventListener("click" , function(){
    const bmi = bb.value / ((tb.value / 100) ** 2)
    let kateg;
    if (bmi < 18.5){
        kateg = "Underweight"
    } else if (bmi < 24.9){
        kateg = "Normal weight"
    } else if (bmi < 29.9){
        kateg = "Overweight"
    } else {
        kateg = "Obesitas"
    }
    h1.innerHTML = `Bmi anda adalah ${bmi} dengan kategori (${kateg})`
})


