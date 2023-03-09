let queryString = location.search;
let params = new URLSearchParams(queryString);

let _id = params.get('id');
console.log(_id);

let event = data.events.find(event => event._id == _id);
console.log(event);

document.getElementById('detailevent').innerHTML = 
`<div class="row row-cols-2 m-5 p-5 border border-secondary " style="max-width: fit-content;">
<img src="${event.image}" alt="evento" class="img-thumbnail border-secondary">
<div class="row text-center ms-2 border border-secondary">
    <div class="my-5 p-5">
        <h1>${event.name}</h1>
        <p>${event.description}</p>
        <p>${event.date}</p>
        <p>Place: ${event.place}</p>
        <p>Capacity: ${event.capacity}</p>
        <p>Assistance: ${event.assistance}</p>
    </div>
 </div>
</div>`