"use strict"

const form = document.getElementById("form");
const tableBody = document.getElementById("tableBody");
const errorMsgDiv = document.getElementById("errorMsg");

const nameIn = document.getElementById("name");
const workIn = document.getElementById("work");
const ageIn = document.getElementById("age");
const petIn = document.getElementById("pet");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const nameVal = nameIn.value;
    const workVal = workIn.value;
    let ageVal = ageIn.value;
    let petVal = petIn.checked;

    if(nameVal.length >= 1 && workVal.length >= 1) {

        if(petVal == true) {
            petVal = "Ja";
        } else {
            petVal = "Nej";
        }

        if(ageVal == 1) {
            ageVal = "< 20";
        } else if (ageVal == 2) {
            ageVal = "20-29";
        } else if (ageVal == 3) {
            ageVal = "30-39";
        } else if (ageVal == 4) {
            ageVal ="40-49";
        } else if (ageVal == 5) {
            ageVal = "50-59";
        } else if (ageVal == 6) {
            ageVal = "> 60 "
        }

        const formData = {
            nameVal,
            workVal,
            ageVal,
            petVal
        }

        addToTable(formData);
    } else {
        errorMsgDiv.innerHTML = "Vänligen fyll i fälten"
    }
});

function addToTable(formData) {
    errorMsgDiv.innerHTML = "";

    const newTr = document.createElement("tr");
    newTr.setAttribute("class", "[&>*]:px-2")
    newTr.innerHTML = `
        <td>${formData.nameVal}</td>
        <td>${formData.workVal}</td>
        <td class="text-center">${formData.ageVal}</td>
        <td class="text-center">${formData.petVal}</td>`;

    tableBody.appendChild(newTr);

    clearInputs(); 
}

function clearInputs() {
    nameIn.value = "";
    workIn.value = "";
    ageIn.value = "";
    petIn.value = 1;
};