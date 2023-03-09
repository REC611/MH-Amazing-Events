// FUTURE EVENTS
function buildHTMLUpcomingEventsCardList(eventsData) {
    let htmlEventsList = "";
    let currentDate = new Date(eventsData.currentDate);
    for (let event of eventsData.events) {
        let eventDate = new Date(event.date);
        if (eventDate > currentDate) {
            htmlEventsList += buildHTMLEventCard(event);
        }
    }
    return htmlEventsList;
}
let contenedorCard = document.getElementById("card-id");
contenedorCard.innerHTML = buildHTMLUpcomingEventsCardList(data);

// SEARCH FUTURE
let search = document.querySelector('form');
search.addEventListener('submit', e => {
    e.preventDefault();
    let text = document.querySelector('.form-control').value.trim().toLowerCase();

    let filters = data.events.filter(e => {
        return e.name.toLowerCase().includes(text) || e.description.toLowerCase().includes(text);
    }
    );

    let currentDate = new Date(data.currentDate);
    let futureFilters = "";
    let futureArray = [];

    for (let event of filters) {
        let eventDate = new Date(event.Date);
        if (eventDate > currentDate) {
            futureFilters += buildHTMLEventCard(event);
            futureArray.push(futureFilters);
        }
    }
    if (futureArray.length < 0) {
        document.getElementById('card-id').innerHTML = futureFilters
    }
    else
        alert('Ups sorry, try again.');
}
);