let htmlEvents = "";
for(let event of data.events )
{
   htmlEvents += `<div class="card">
    <img src="${event.image}" alt="">
    <h5>${event.name}</h5>
    <p>${event.description}</p>
    <p>$${event.price}</p>`;
}
//  console.log(htmlEvents);
