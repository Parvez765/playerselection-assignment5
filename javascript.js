function playerSelect(elementId) {
    const playerName = document.getElementById(elementId).innerText;
    return playerName;
}

// Player-1
let count = 0
document.getElementById("sargio-select").addEventListener("click", function () {


    if (count > 4) {
        alert("You Can't Add More Than Five Player");
        return;
    }

    count++



    const player = playerSelect("sargio-detail");

    // SelectPlayer Number CountDown
    document.getElementById("select-player").innerText = count

    const tablebody = document.getElementById("table-container");
    const tableRow = document.createElement("tr");
    tableRow.innerHTML = `
        <th scope="row">${count}</th>
        <td>${player}</td>
    `
    
    tablebody.appendChild(tableRow);
    
    
})

// Player-2
document.getElementById("messi-select").addEventListener("click", function () {
    
    if (count > 4) {
        alert("You Can't Add More Than Five Player");
        return;
    }

    count++

    const player = playerSelect("messi-detail");

     // SelectPlayer Number CountDown
    document.getElementById("select-player").innerText = count

    const tablebody = document.getElementById("table-container");
    const tableRow = document.createElement("tr");
    tableRow.innerHTML = `
        <th scope="row">${count}</th>
        <td>${player}</td>
    `
    tablebody.appendChild(tableRow);
})

// Player-3
document.getElementById("naymer-select").addEventListener("click", function () {
    
    if (count > 4) {
        alert("You Can't Add More Than Five Player");
        return;
    }
    count++
    
    const player = playerSelect("naymer-detail");

     // SelectPlayer Number CountDown
    document.getElementById("select-player").innerText = count

    const tablebody = document.getElementById("table-container");
    const tableRow = document.createElement("tr");
    tableRow.innerHTML = `
        <th scope="row">${count}</th>
        <td>${player}</td>
    `
    tablebody.appendChild(tableRow);
})

// Player-4
document.getElementById("ronaldo-select").addEventListener("click", function () {
    
    if (count > 4) {
        alert("You Can't Add More Than Five Player");
        return;
    }

    count++
    const player = playerSelect("ronaldo-detail");

     // SelectPlayer Number CountDown
    document.getElementById("select-player").innerText = count

    const tablebody = document.getElementById("table-container");
    const tableRow = document.createElement("tr");
    tableRow.innerHTML = `
        <th scope="row">${count}</th>
        <td>${player}</td>
    `
    tablebody.appendChild(tableRow);
})

// Player-5
document.getElementById("sargioRamous-select").addEventListener("click", function () {
    
    if (count > 4) {
        alert("You Can't Add More Than Five Player");
        return;
    }
    count++

    const player = playerSelect("sargioRamous-detail");

     // SelectPlayer Number CountDown
    document.getElementById("select-player").innerText = count

    const tablebody = document.getElementById("table-container");
    const tableRow = document.createElement("tr");
    tableRow.innerHTML = `
        <th scope="row">${count}</th>
        <td>${player}</td>
    `
    tablebody.appendChild(tableRow);
})

// Player-6
document.getElementById("mbappe-select").addEventListener("click", function () {
    
    if (count > 4) {
        alert("You Can't Add More Than Five Player");
        return;
    }
    
    count++
    const player = playerSelect("mbappe-detail");
    
     // SelectPlayer Number CountDown
    document.getElementById("select-player").innerText = count

    const tablebody = document.getElementById("table-container");
    const tableRow = document.createElement("tr");
    tableRow.innerHTML = `
        <th scope="row">${count}</th>
        <td>${player}</td>
    `
    

    tablebody.appendChild(tableRow);
})





// Expences Calculate

document.getElementById("calculator-btn").addEventListener("click", function () {
    const playerCalculation = document.getElementById("player-calculation");
    const playerCalculationValueString = playerCalculation.value;
    const playerCalculationValue = parseInt(playerCalculationValueString);


    const expense = document.getElementById("expense");
    
    const expenseTotal = playerCalculationValue * count;
    
    expense.innerText = expenseTotal;
    
})

// Total Expenses Caluculation
document.getElementById("total-calculator-btn").addEventListener('click', function () {
    const managerExpenses = document.getElementById("manager-calculation");
    const managerExpensesString = managerExpenses.value;
    const managerExpensesValue = parseInt(managerExpensesString);

    const coachExpenses = document.getElementById("coach-calculation");
    const coachExpensesString = coachExpenses.value;
    const coachExpensesValue = parseInt(coachExpensesString);

    const expense = document.getElementById("expense");
    const expenseString = expense.innerText;
    const expenseValue = parseInt(expenseString);

    const total = managerExpensesValue + coachExpensesValue + expenseValue;
    


    const totalExpenses = document.getElementById("total-expense")
    totalExpenses.innerText = total;
})