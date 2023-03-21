let urlApi = "https://mindhub-xj03.onrender.com/api/amazing";
async function getEventsData(urlApi) {
    try {
        const response = await fetch(urlApi);
        const data = await response.json();
        console.log(data);

        buildHTMLEventsCardList(data);
        getCategories(data);


        let input = document.getElementById('form1');
        let checkboxes = document.querySelectorAll('input[type=checkbox]');
        let valuesChecked = [];
        let inputData = "";

        input.addEventListener("input", (event) => {
            inputData = event.target.value.trim().toLowerCase();

            filtersApply(data, inputData, valuesChecked);
        });

        checkboxes.forEach(checkbox => {
            checkbox.addEventListener('change', (event) => {
                if (event.target.checked) {
                    valuesChecked.push(event.target.value);
                    console.log(valuesChecked);
                } else {
                    let indexH = valuesChecked.indexOf(event.target.value);
                    if (indexH !== -1) {
                        valuesChecked.splice(indexH, 1);
                    }
                }

                filtersApply(data, inputData, valuesChecked);
            });
        });


    } catch (error) {
        console.log(error)
    }
}
getEventsData(urlApi);
// ALL CARDS
function buildHTMLEventsCardList(data) {
    let htmlEventsList = "";
    for (let event of data.events) {
        htmlEventsList += buildHTMLEventCard(event);
    }
    let contenedorCard = document.getElementById("card-id");
    contenedorCard.innerHTML = htmlEventsList;
}

// CHECKBOX and SEARCH

function getCategories(data) {
    let categories = [];
    data.events.forEach(event => {
        if (!categories.includes(event.category)) {
            categories.push(event.category);
        }
    });
    
    contenedorCheckbox = "";
    categories.forEach(category => {
        contenedorCheckbox += `<div class="form-check form-check-inline">
        <input class="form-check-input" type="checkbox" value="${category}">
        <label class="form-check-label">${category}</label>
      </div>
        `
    })
    return document.getElementById('containerChecks').innerHTML = contenedorCheckbox;


}

function filtersApply(data, inputData, valuesChecked) {
    let filtedEvent = data.events.filter(event => {
        let nameMatch = event.name.toLowerCase().includes(inputData);
        let descriptionMatch = event.description.toLowerCase().includes(inputData);

        let categoryMatch = valuesChecked.includes(event.category);

        return (nameMatch || descriptionMatch) && (categoryMatch || valuesChecked.length === 0);
    });
    let cardcheckbox = "";
    if (filtedEvent.length > 0) {
        for (let event of filtedEvent) {
            cardcheckbox += buildHTMLEventCard(event);
        }
    } else {
        cardcheckbox = "Your search returned no results";
    }
    return document.getElementById('card-id').innerHTML = cardcheckbox;
}