
const calendar =document.querySelector('#app-calendar');
const monthSelect = document.querySelector('.sm')

console.log(monthSelect);

const isWeekend = day=>{
    return day % 7 === 6 || day % 7 ===0;
}


const getDayName = day =>{

    var months=["January","February","March","April","May","June","July","August","September","October","November","December"];

    
    const date = new Date(Date.UTC(2016, 0, day));

    const options = { weekday : "long"};
    
    return new Intl.DateTimeFormat("en-US", options).format(date);

}

for(let day = 1;day<=31; day++){
     


    const weekend = isWeekend(day);

    let name = "";

    if(day<=7){
        const dayName = getDayName(day);
        name = `<div class = "name">${dayName}</div>`;
    }

   

    calendar.insertAdjacentHTML("beforeend", `<div class="day ${weekend ? "weekend": "" }" >${name}${day}</div>`);
} 

document.querySelectorAll("#app-calendar .day" ).forEach(day =>{
    day.addEventListener('click', event =>{
        event.currentTarget.classList.toggle("selected");
    });
})