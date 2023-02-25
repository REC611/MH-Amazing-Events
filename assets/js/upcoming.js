// FUTURE EVENTS
function buildHTMLUpcomingEventsCardList(eventsData){
    let htmlEventsList = "";
    let currentDate = new Date(eventsData.currentDate);
    for (let event of eventsData.events) {
        let eventDate = new Date(event.date);
        if (eventDate > currentDate){
            htmlEventsList += buildHTMLEventCard(event);
        }
    }
    return htmlEventsList;
}
let contenedorCard = document.getElementById("card-id");
contenedorCard.innerHTML = buildHTMLUpcomingEventsCardList(data);