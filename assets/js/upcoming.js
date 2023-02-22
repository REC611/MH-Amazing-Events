let htmlEvents = "";
for(let event of data.events )
{
    let currentDate = new Date(data.currentDate);
    let eventDate = new Date(event.date);
    if (eventDate < currentDate) {
    } else {
        console.log("evento futuro")
    }
}