let urlApi = "https://mindhub-xj03.onrender.com/api/amazing";
let events = [];

async function getEventsData(urlApi) {
    try {
        const response = await fetch(urlApi);
        const data = await response.json();
        console.log(data);

        bringPercentageAttendance(data);
        loadPercentage(data);
        listCategories(data);
        upcomingEventsLoad(data);
        pastEventsLoad(data);

    } catch (error) {
        console.log(error)
    }
}
getEventsData(urlApi);

let arrayMayorPercentage = [];
let arrayMinorPercentage = [];
let arrayCapacity = [];

function bringPercentageAttendance(data) {
    let names = [];
    for (let name of data.events) {
        if (!names.includes(name.name) && (name.assistance != undefined)) {
            names.push(name.name);
        }
    }
    let percentage = [];
    for (let attendance of data.events) {
        if (attendance.assistance != undefined) {
            percentage.push((attendance.assistance) / (attendance.capacity) * 100);
        }
    }
    let roundedpercent = percentage.map((num) => {
        return num.toFixed(2);
    });
    let values = names.map((name, index) => {
        return { name: name, value: roundedpercent[index] };
    });
    sortedValues = values.sort(function (a, b) {
        if (a.value > b.value) {
            return -1;
        }
        if (a.value < b.value) {
            return 1;
        }
        return 0;
    });

    let mayorPercentage = sortedValues.slice(0, 5);
    arrayMayorPercentage = mayorPercentage.map(text => {
        return text.name + ': ' + text.value + ' %.';
    });

    let lowerPercentage = sortedValues.slice(13, 18).reverse();
    arrayMinorPercentage = lowerPercentage.map(text => {
        return text.name + ': ' + text.value + ' %.';
    });

    let namesI = [];
    for (let name of data.events) {
        namesI.push(name.name);
    }
    let capacity = [];
    for (let capacityI of data.events) {
        capacity.push(capacityI.capacity);
    }
    let valuesI = names.map((name, index) => {
        return { name: name, value: capacity[index] };
    });

    let sortedcapacity = valuesI.sort((function (a, b) {
        if (a.value > b.value) {
            return -1;
        }
        if (a.value < b.value) {
            return 1;
        }
        return 0;
    }));

    let mayorCapacity = sortedcapacity.slice(0, 5);
    arrayCapacity = mayorCapacity.map(text => {
        return text.name + ': ' + text.value + '.';
    });

}

// TABLE SHOW STATS

function loadPercentage() {
    let container = document.getElementById('generals');
    let tableDraw = '';

    for (let i = 0; i < 5; i++) {

        let mayorPercentage = arrayMayorPercentage[i];
        let minorPercentage = arrayMinorPercentage[i];
        let maximumCapacity = arrayCapacity[i];

        tableDraw += `<tr>
        <td>${mayorPercentage}</td>
        <td>${minorPercentage}</td>
        <td>${maximumCapacity}</td>
    </tr>`;
    };
    container.innerHTML = tableDraw;
}

let categories = [];
function listCategories(data) {
    for (let events of data.events) {
        if (!categories.includes(events.category)) {
            categories.push(events.category);
        }
    }
}

// FUTURE & PAST TABLE
function eventFuture(data) {
    let currentDate = new Date(data.currentDate);
    let eventDate = new Date(data.date);
    return eventDate > currentDate;
}

function eventPast(data) {
    let currentDate = new Date(data.currentDate);
    let eventDate = new Date(data.date);
    return eventDate < currentDate;
}

function upcomingEventsLoad(data) {
    let upcomingE = "";
    let categories = [];

    for (const event of data.events) {
        if (!categories.includes(event.category) && !eventPast(event)) {
            let total = 0;
            let estimate = 0;
            let capacity = 0;
            let percentageAverage = 0;

            categories.push(event.category);
            for (const evEnt of data.events) {
                if (evEnt.category == event.category && evEnt.estimate != undefined) {
                    total = evEnt.estimate * evEnt.price;
                    estimate += evEnt.estimate;
                    capacity += evEnt.capacity;
                }
                percentageAverage = ((estimate)/capacity)*100;
            }
            upcomingE += createTrFp(event, total, percentageAverage);
        }
    }
    loadfutures(upcomingE);
}


function loadfutures(upcomingE) {
    let container = document.getElementById('future');
    container.innerHTML = upcomingE;
}


function pastEventsLoad(data) {
    let pastE = "";
    let categories = [];

    for (const event of data.events) {
        if (!categories.includes(event.category) && !eventFuture(event)) {
            let total = 0;
            let assistance = 0;
            let capacity = 0;
            let percentageAverage = 0;

            categories.push(event.category);
            for (const evEnt of data.events) {
                if (evEnt.category == event.category && evEnt.assistance != undefined) {
                    total = evEnt.assistance * evEnt.price;
                    assistance += evEnt.assistance;
                    capacity += evEnt.capacity;
                }
                percentageAverage =((assistance) / capacity) * 100 ;
            }
            pastE += createTrFp(event, total, percentageAverage);
        }
    }
    loadPast(pastE);
}

function loadPast(pastE){
    let container = document.getElementById('past');
    container.innerHTML = pastE;
}

function createTrFp(event, total, percentage) {
    return `
    <tr>
    <td>${event.category} </td>
    <td>$${total} </td>
    <td>${percentage.toFixed(2)}% </td>
    </tr>
    `
}