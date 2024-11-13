"use strict"

const bookForm = document.getElementById("bookForm");
const tableBody = document.getElementById("tableBody");
const errorMsgDiv = document.getElementById("errorMsg");

const title = document.getElementById("title");
const author = document.getElementById("author");
const review = document.getElementById("review");
const grade = document.getElementById("grade");
const recommend = document.getElementById("recommend");

bookForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const titleVal = title.value;
    const authorVal = author.value;
    const reviewVal = review.value;
    const gradeVal = grade.value;
    let recommendVal = recommend.checked;

    if(recommendVal == true) {
        recommendVal = "Ja";
    } else {
        recommendVal = "Nej";
    }

    if(titleVal.length >= 1 && authorVal.length >= 1 && reviewVal.length >= 1) {
        const formData = {
            titleVal,
            authorVal,
            reviewVal,
            gradeVal,
            recommendVal
        }

        addToTable(formData);
    } else {
        errorMsgDiv.innerHTML = "Vänligen fyll i fälten"
    }
    
    
});

function addToTable(formData) {
    errorMsgDiv.innerHTML = "";

    const newTr = document.createElement("tr");
    newTr.innerHTML = `
        <td>${formData.titleVal}</td>
        <td>${formData.authorVal}</td>
        <td>${formData.reviewVal}</td>
        <td>${formData.recommendVal}</td>
        <td>${formData.gradeVal} stjärnor</td>`;

    tableBody.appendChild(newTr);

    clearInputs();
}

function clearInputs() {
    title.value = "";
    author.value = "";
    review.value = "";
    grade.value = 1;
    recommend.checked = false;
};

