let showTable = document.getElementById('tableComplete');
showTable.innerHTML += drawTable();

maximumAssistance();
minimumAssistance();
capacityMayor();

/// Max Assistance
function maximumAssistance (){
    let assistanceMax = [];

    for (let assistance of data.events){
        if (assistance.assistance != undefined){
            assistanceMax.push(assistance.assistance);
        }    
    }
    return (Math.max(...assistanceMax));
}

/// Capacity Mayor
function capacityMayor(){

    let capacityMayor = [];
    
    for (let assistance of data.events){
        if (assistance.capacity != undefined){
            capacityMayor.push(assistance.capacity);
        }    
    }
    return (Math.max(...capacityMayor));
}

/// Min Assistance
function minimumAssistance(){
    let assistanceMin = [];

for (let assistance of data.events){
    if (assistance.assistance != undefined){
        assistanceMin.push(assistance.assistance);
    }    
}
return (Math.min(...assistanceMin));
}