// import { countries } from "../../../Downloads/Telegram Desktop/data"

const denNoch = document.querySelector('body')
const hedNight = document.querySelector('.nightt')
const colorBoolen = false
function myfunction() {
    denNoch.style.backgroundColor = 'rgb(20, 21, 26)'
    
}


let flagBox = document.querySelector('.flag-card ')



for (let countriesIn of countries) {
    let vesCard = `
    <div class="box-card">
    <img class="imgs" src=${countriesIn.flags.png} alt="F">
    <div class="car-value">
        <h2 class="flag-name top">${countriesIn.name}</h2>
        <div class="mar-population top flex">
            <p class="population font">Population :</p>
            <p class="population-id">${countriesIn.population}</p>
        </div>
        <div class="mar-population top-el flex">
            <p class="region font">Region :</p>
            <p class="region-id">${countriesIn.region}</p>
        </div>
        <div class="mar-population top-el flex">
            <p class="capital font">Capital :</p>
            <p class="capital-id">${countriesIn.capital}</p>
        </div>
    </div>
</div>`

    flagBox.insertAdjacentHTML('beforeend', vesCard)
}

let flagSelect = document.querySelector('.flags ')

for (let countriesIn of countries) {
    let vesCard = `
    <option class="salact_value-africa" value=${countriesIn.name}>${countriesIn.name}</option>
      `
    flagSelect.insertAdjacentHTML('beforeend', vesCard)
}
let inputSearch = document.getElementById('mysearchId')


let flags = document.getElementById('flags')
console.log(flags)

inputSearch.addEventListener('change', (e) => {
    let name1 = e.target.value
    let d
    if(name1){
         d = countries?.filter((e) => e.name === name1) || []
       
        countries = d 
    }else{
        countries=countries
    }
    
    console.log(d)

    for (let countriesIn of countries) {
        let vesCard = `
    <div class="box-card">
    <img class="imgs" src=${countriesIn.flags.png} alt="F">
    <div class="car-value">
        <h2 class="flag-name top">${countriesIn.name}</h2>
        <div class="mar-population top flex">
            <p class="population font">Population :</p>
            <p class="population-id">${countriesIn.population}</p>
        </div>
        <div class="mar-population top-el flex">
            <p class="region font">Region :</p>
            <p class="region-id">${countriesIn.region}</p>
        </div>
        <div class="mar-population top-el flex">
            <p class="capital font">Capital :</p>
            <p class="capital-id">${countriesIn.capital}</p>
        </div>
    </div>
</div>`

        flagBox.insertAdjacentHTML('beforeend', vesCard)
    }
})

// function myFunctionSearch() {
//     var input, filter, ul, li, a, i,div, txtValue;
//     input = document.getElementById("mysearchId");

//     filter = input.value.toUpperCase();
//     ul = document.querySelector(".flag-card");

//     li = ul.getElementsByTagName("div");
//     console.log(ul,'ul')
//     console.log(li,'li')
//     for (i = 0; i < li.length; i++) {
//         a = li[i].getElementsByTagName("div")?.[0];
//         txtValue = a.textContent || a.innerText;
//         if (txtValue.toUpperCase().indexOf(filter) > -1) {
//             div[i].style.display = "none";
    
//         } else {
//             div[i].style.display = "none";
        

//         }
//     }
// }
