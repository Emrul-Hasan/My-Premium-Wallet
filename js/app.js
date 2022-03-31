console.log("Js added");
function getIncomeValue(common) {

    const inputIncomeField = document.getElementById(common + '-input');
    const inputIncomeText = inputIncomeField.value;
    const incomeValue = parseFloat(inputIncomeText);

    return incomeValue;

}
// Every component input value
function getTotalValue() {
    const incomeTotal = getIncomeValue('income');
    const foodTotal = getIncomeValue('food');
    const crentTotal = getIncomeValue('rent');
    const clothsTotal = getIncomeValue('cloths');
    const total = foodTotal + crentTotal + clothsTotal;
    const balance = incomeTotal - total;

    // Validation

    if (isNaN(incomeTotal) || isNaN(crentTotal) || isNaN(clothsTotal) || isNaN(foodTotal)) {

        console.log("Error found");
        var error = document.getElementsByClassName("required");

        for (let i = 0; i < error.length; i++) {
            if (isNaN(incomeTotal)) {
                error[0].style.display = 'inline';
            }
            if (isNaN(foodTotal)) {
                error[1].style.display = 'inline';
            }
            if (isNaN(crentTotal)) {
                error[2].style.display = 'inline';
            }
            if (isNaN(clothsTotal)) {
                error[3].style.display = 'inline';
            }
        }
        const fail = document.getElementById('notify-string');
        fail.style.display = 'block';

    }


    else if (incomeTotal < 0 || foodTotal < 0 || crentTotal < 0 || clothsTotal < 0) {
        const fail = document.getElementById('notify-invalid');
        fail.style.display = 'block';

    }

    else if (total > incomeTotal) {
        const fail = document.getElementById('notify-fail');
        fail.style.display = 'block';
    }

    else {

        document.getElementById('total-exprss').innerText = total;
        document.getElementById('total-balance').innerText = balance;
    }
    return balance;
}
// Saving section
function savings() {
    const incomeTotal = getIncomeValue('income');
    const save = getIncomeValue('save');
    const balanceTotal = getTotalValue();
    const totalSave = (incomeTotal / 100) * save;
    const remaingBalance = balanceTotal - totalSave;
    if (isNaN(save) || isNaN(remaingBalance)) {
        const fail = document.getElementById('notify-invalidSave');
        fail.style.display = 'block';
    }
    else if (remaingBalance < 0) {
        const fail = document.getElementById('notify-invalidBalance');
        fail.style.display = 'block';
    }
    else {
        document.getElementById('saving-amount').innerText = totalSave;
        document.getElementById('remaing-balance').innerText = remaingBalance;
    }

}
// Calculate-button
document.getElementById('calculate-btn').addEventListener('click', function () {

    getTotalValue();
})
// Save button
document.getElementById('save-btn').addEventListener('click', function () {
    savings();
})