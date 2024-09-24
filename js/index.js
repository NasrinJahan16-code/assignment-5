
document.getElementById('btn-home').addEventListener('click', function(){
    window.location.href = './index.html';
})


function getButtonInfo(id) {
    const btn1 = document.getElementById(id);
    return btn1;
}

function getInputValue(id) {
    const inputValue = document.getElementById(id).value;
    const inputNumber = parseFloat(inputValue);
    return inputNumber;
}

function getTextValue(id) {
    const textValue = document.getElementById(id).innerText;
    const textValueNumber = parseFloat(textValue);
    return textValueNumber;
}

function showSectionById(id) {
    document.getElementById('donation-section').classList.add('hidden');
    document.getElementById('history-section').classList.add('hidden');

    // show the ID 
    document.getElementById(id).classList.remove('hidden');
}

// date time 
function showDateTime() {
    const date = new Date();
    const newDateTime = "Date : " + date.toString();
    const getDateTime = document.querySelectorAll('.dateTimeDisplay');
    const lastElement = getDateTime[getDateTime.length - 1];
    lastElement.innerText = newDateTime;
}
