let apikey="879028a45ef8021329637c80ebb0bb9b"
let form = document.querySelector("form")
// let apiKey = "FILL YOUR API KEY"
form.addEventListener("submit",(e)=>{
    e.preventDefault()
    let city = document.getElementById("city").value
    console.log(city) 
    let getDetails = async()=>{
        let output1 = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`)
        let output2 = await  output1.json()
        console.log(output2)
        let degree = Math.round(output2.main.temp - 273)
        let humidValue = Math.round(output2.main.humidity)
        let desc = output2.weather[0].main

        let temp = document.querySelector("#temp_value")
        let humid = document.querySelector("#humid_value")
        let h3 = document.querySelector("h3")
        temp.innerHTML=` <p>${degree}<sup>0</sup>C</p>`
        humid.innerHTML=` <p>${humidValue} kmph</p>`

        h3.innerHTML=desc
    }
    getDetails()

})