// PRINCIPAL FUNCTION
function buildHTMLEventCard(eventData) {
  return `<div class="card m-5" style="width: 20rem;">
     <img src="${eventData.image}" class="card-img-top img-fluid" alt="Food_Fair">
     <div class="card-body d-flex flex-column">
      <h5 class="card-title text-center">${eventData.name}</h5>
      <p class="card-text text-center">${eventData.description}</p>
      <div class="mt-auto">
        <div class="d-flex justify-content-between">
          <p class="card-text">Price $${eventData.price}</p>
          <a href="./details.html?id=${eventData._id}" class="btn btn-secondary">Ver mas</a>
        </div>
      </div>
    </div>
   </div>`
}

function assistanceMax(event){
  return `<td><p>${event}</p></td>`
}
function assistanceMin(event){
  return `<td><p>${event}</p></td>`
}
function capacityMax(event){
  return `<td><p>${event}</p></td>`
}
 
function drawTable(){
  return `<table class="table table-bordered border-3 m-0">
  <thead>
    <tr class="bg-secondary">
      <th colspan="3">Events statistics</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="w-25">Events with highest percentage of attendance</td>
      <td class="w-25">Events with lowest percentage of attendance</td>
      <td class="w-25">Event with larger capacity</td>
    </tr>
    <tr>
      <td>${maximumAssistance()}</td>
      <td>${minimumAssistance()}</td>
      <td>${capacityMayor()}</td>
    </tr>
  </tbody>
</table>
<table class="table table-bordered border-3 m-0">
  <thead>
    <tr class="bg-secondary">
      <th colspan="3">Upcoming events statistics by category</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="w-25">Categories</td>
      <td class="w-25">Revenues</td>
      <td class="w-25">Percentage of attendance</td>
    </tr>
    <tr>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td></td>
      <td></td>
      <td></td>
    </tr>
  </tbody>
</table>
<table class="table table-bordered border-3">
  <thead>
    <tr class="bg-secondary">
      <th colspan="3">Past Events statistic by category</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="w-25">Categories</td>
      <td class="w-25">Revenues</td>
      <td class="w-25">Percentage of attendance</td>
    </tr>
    <tr>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td></td>
      <td></td>
      <td></td>
    </tr>
  </tbody>
</table>`
}