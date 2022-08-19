function getpin() {
    const pin = generatePin();

    if ((pin + '').length == 4) {
        return pin;
    }
    else {
        return getpin();
    }
}


function generatePin() {
    const pin = Math.round(Math.random() * 10000);
    return pin;
}

document.getElementById('generate-pin').addEventListener('click', function () {
    const pin = getpin();
    document.getElementById('display-pin').value = pin;
});

document.getElementById('calculator').addEventListener('click', function (event) {
    const number = event.target.innerText;
    const displayField = document.getElementById('calculator-display');
    const preNumber = displayField.value;
    if (isNaN(number)) {
        switch (number) {
            case 'C':
                displayField.value = "";
                break;
            case '<':
                const newNumber = (preNumber + '').substring(0, preNumber.length - 1);
                displayField.value = newNumber;
                break;
        }

    } else {
        displayField.value = preNumber + number;
    }
});

function getInputFieldValueById(fieldId){
    const field = document.getElementById(fieldId);
    return field.value;
}

document.getElementById('btn-varify').addEventListener('click', function(){
    const sucessMsg = document.getElementById('success-msg');
    const failedMsg = document.getElementById('failed-msg');
    if(getInputFieldValueById('display-pin') === getInputFieldValueById('calculator-display')){
        sucessMsg.style.display = 'block';
        failedMsg.style.display = 'none';
    }
    else{
        failedMsg.style.display = 'block';
        sucessMsg.style.display = 'none';
    }
});