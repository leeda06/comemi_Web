var now = new Date();
var year = now.getFullYear();
var month = now.getMonth() + 1;

const datesContainerDiv = document.querySelector(".dates.container");
const modalContainer = document.querySelector(".modal-container");

const setCalendar = (year1, month1) => {
    var titleYearDiv = document.querySelector('.year');
    var titleMonthDiv = document.querySelector('.month');
    titleYearDiv.innerHTML = `${year1}년`;
    if (month1 < 10) {
        titleMonthDiv.innerHTML = `0${month1}월`;
    } else {
        titleMonthDiv.innerHTML = `${month1}월`;
    }
    var nowD = new Date();
    var yearD = now.getFullYear();
    var monthD = now.getMonth() + 1;
    var todayD = now.getDate();

    var firstDateDay = new Date(year1, month1 - 1, 1).getDay();
    var lastDate = new Date(year1, month1 - 1 + 1, 0).getDate();
    var totalCells = 36;

    datesContainerDiv.replaceChildren();

    for (let i = 0; i < totalCells; i++) {
        let dateItemDiv = document.createElement('div');
        dateItemDiv.classList.add("date");
        dateItemDiv.classList.add("item");

        let date = i + 1;
        if (date > 0 && date <= lastDate) {
            dateItemDiv.classList.add("item-HOVER");
            dateItemDiv.innerHTML = date;
            dateItemDiv.style.border = "1px solid #2d2d2d";

            if (date === todayD && month1 === monthD && year1 === year  ) {
                dateItemDiv.style.border = "2px solid #2e7816";
            }
            
            dateItemDiv.addEventListener('click', () => {
                displayTasksModal(year1, month1, date);  
            });
        }

        datesContainerDiv.appendChild(dateItemDiv);
    }

    let firstDateDiv = datesContainerDiv.firstElementChild;
    firstDateDiv.style.gridColumnStart = firstDateDay + 1;

    let firstSeturday = 7 - (firstDateDay + 1) + 1;
    let seturdayDivs = datesContainerDiv.querySelectorAll(`.date.item:nth-child(7n+${firstSeturday})`);
    for (let dateItem of seturdayDivs) {
        dateItem.style.color = "#00b3ff";
    }

    let firstSunday = (7 - firstDateDay + 1) % 7;
    let sundayDivs = datesContainerDiv.querySelectorAll(`.date.item:nth-child(7n+${firstSunday})`);
    for (let dateItem of sundayDivs) {
        dateItem.style.color = "red";
    }

    const leftDiv = document.getElementsByClassName("left")[0];
    leftDiv.onclick = () => {
        month1--;

        if (month1 == 0) {
            year1--;
            month1 = 12;
        }

        setCalendar(year1, month1);
    }

    const monthTitleDiv = document.getElementsByClassName('month')[0];
    monthTitleDiv.onclick = () => {
        const now = new Date();
        const year = now.getFullYear();
        const month = now.getMonth() + 1;
        setCalendar(year, month);
    };

    const rightDiv = document.getElementsByClassName("right")[0];
    rightDiv.onclick = () => {
        month1++;

        if (month1 == 13) {
            year1++;
            month1 = 1;
        }
        setCalendar(year1, month1);
    }
}

const displayTasksModal = (year, month, date) => {
    const modalContent = `
        <div class="modal">
            <div id="modal_title">${year}.${month}.${date} 오.코.테</div>
            <div class="sub">
            <div class="modal-line"></div>
                <div class="sub-text" id="modal-whoIsThis">
                    <div class="sub-title">누가 하는가?</div>
                    <div class="sub-detail">누가 하는가</div>
                </div>
                <div class="sub-line"></div>
                <div class="sub-text" id="modal-problem">
                    <div class="sub-title">오늘의 문제는?</div>
                    <div class="sub-detail">문제1</div>
                </div>
                <div class="modal-line"></div>
            </div>
            <div class="modal-comment">
            </div>
            <button class="bi bi-x-lg" id="closeBtn" onclick="closeModal()"></button>
        </div>
    `;

    modalContainer.innerHTML = modalContent;
    modalContainer.style.display = 'flex'; 
}

const closeModal = () => {
    modalContainer.style.display = 'none';
}

setCalendar(year, month);
