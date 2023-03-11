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

// CHECKBOX and SEARCH
function getCategories(events) {
    let categories = [];
    events.forEach(event => {
        if (!categories.includes(event.category)) {
            categories.push(event.category);
        }
    });
    return categories;
}
let categories = getCategories(data.events);

function showCategories(categories) {
    contenedorCheckbox = "";
    categories.forEach(category => {
        contenedorCheckbox += `<div class="form-check form-check-inline">
        <input class="form-check-input" type="checkbox" value="${category}">
        <label class="form-check-label">${category}</label>
      </div>
        `
    })
    return contenedorCheckbox;
}
document.getElementById('containerChecks').innerHTML = showCategories(categories);

let input = document.getElementById('form1');
let checkboxes = document.querySelectorAll('input[type=checkbox]');
let valuesChecked = [];
let inputData = "";

input.addEventListener("input", (event) => {
    inputData = event.target.value.trim().toLowerCase();
    filtersApply();
});

checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', (event) => {
        if (event.target.checked) {
            valuesChecked.push(event.target.value);
        } else {
            let indexH = valuesChecked.indexOf(event.target.value);
            if (indexH !== -1) {
                valuesChecked.splice(indexH, 1);
            }
        }
        filtersApply();
    });
});

function filtersApply() {
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
    document.getElementById('card-id').innerHTML = cardcheckbox;
}

