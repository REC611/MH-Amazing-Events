// ALL CARDS
function buildHTMLEventsCardList(eventsData){
    let htmlEventsList = "";
    for (let event of eventsData.events) {
         htmlEventsList += buildHTMLEventCard(event);      
    }
    return htmlEventsList;
}
let contenedorCard = document.getElementById("card-id");
contenedorCard.innerHTML = buildHTMLEventsCardList(data);
