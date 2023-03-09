// ALL CARDS
function buildHTMLEventsCardList(eventsData) {
    let htmlEventsList = "";
    for (let eventsData of data.events) {
        htmlEventsList += buildHTMLEventCard(eventsData);
    }
    return htmlEventsList;
}
let contenedorCard = document.getElementById("card-id");
contenedorCard.innerHTML = buildHTMLEventsCardList(data);

// SEARCH ALL
let search = document.querySelector('form');
search.addEventListener('submit', e => {
    e.preventDefault();
    let text = document.querySelector('.form-control').value.trim().toLowerCase();

    let filters = data.events.filter(e => {
        return e.name.toLowerCase().includes(text) || e.description.toLowerCase().includes(text);
    }
    );

    let showFilters = '';

    if (filters.length > 0) {
        for (let filter of filters) {
            showFilters += buildHTMLEventCard(filter);
        }
        document.getElementById('card-id').innerHTML = showFilters;
    } else {
        alert('Ups sorry, try again.');
    }
});

// CHECKBOX
