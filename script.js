const calanderCell = document.querySelectorAll('.calander-cell');
const dayOfWeek = document.querySelectorAll(".day-of-week");
const monthTitle = document.querySelector("#month-title")
let month; 
let year;

let today = new Date();
month = today.getMonth();
year = today.getFullYear();



setMonth(month, year);

function setMonth(m, y) {
    let month = m;
    let year = y;

    let currentMonth = new Date(y, m);
    monthTitle.innerHTML = currentMonth.toLocaleDateString(undefined, {month: 'long', year: 'numeric'});

    let monthDays = getDaysInMonth(month, year);
    let currentPosition = retrieveFirstDayMonth(month, year);
    parseInt(currentPosition);

    let dayCounter = 0;
    for (let i = 0; i < calanderCell.length; i++) {
      if (currentPosition == calanderCell.length) {    //makes sure we do not set anything past lengh of calander cells. 
        break;
      }
      calanderCell[currentPosition].innerHTML = monthDays[dayCounter];
      if (calanderCell[currentPosition].innerHTML == "undefined") {
        calanderCell[currentPosition].innerHTML = "";
        break;
      } 
      dayCounter += 1; 
      currentPosition += 1;
    }
}

function getDaysInMonth(month, year) {
    var date = new Date(year, month, 1);
    var days = [];

    
    while (date.getMonth() === month) {
      days.push(date.getDate());
      date.setDate(date.getDate() + 1);
    }

    return days;
  }

function retrieveFirstDayMonth(month, year) {
  let date = new Date(year, month, 1);
  let firstDay = date.getDay();
  return firstDay;

}


document.querySelector('.back').addEventListener("click", (e) => {
  for (let i = 0; i < calanderCell.length; i++) {
    calanderCell[i].innerHTML = "";
  }

  month -=1
  if (month == -1) {
    year -= 1; 
    month = 11;
  }
  setMonth(month, year);

});

document.querySelector('.next').addEventListener("click", () => {
  for (let i = 0; i < calanderCell.length; i++) {
    calanderCell[i].innerHTML = "";
  }
  month +=1
  if (month == 12) {
    year += 1; 
    month = 0;
  }
  setMonth(month, year);
});

document.addEventListener('keyup', (event) => {
  if (event.key == "ArrowRight") {
    for (let i = 0; i < calanderCell.length; i++) {
      calanderCell[i].innerHTML = "";
    }
    month +=1
    if (month == 12) {
      year += 1; 
      month = 0;
    }
    setMonth(month, year);
    
  }
}, false);

document.addEventListener('keyup', (event) => {
  if (event.key == "ArrowLeft") {
    for (let i = 0; i < calanderCell.length; i++) {
      calanderCell[i].innerHTML = "";
    }
  
    month -=1
    if (month == -1) {
      year -= 1; 
      month = 11;
    }
    setMonth(month, year);
    
  }
}, false);

