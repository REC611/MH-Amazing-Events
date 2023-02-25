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
          <a href="" class="btn btn-secondary">Ver mas</a>
        </div>
      </div>
    </div>
   </div>`
}