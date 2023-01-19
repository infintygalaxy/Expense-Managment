const list=[]






function addFriend() {
    const newName=prompt("enter the nanme of friend : ");
    const select=document.getElementById("friends")
    var newOption = document.createElement("option");
  newOption.value = newName;
  newOption.text = newName;
  select.add(newOption);
    console.log(newName);
}





function deleteRow(r) {
    var i = r.parentNode.parentNode.rowIndex;
    document.getElementById("table").deleteRow(i);
}
const newExpense=()=>{
 
    const expense_reason=document.getElementById("reason").value;
    const currency=document.getElementById("Currency").value;
    const pay_type=document.getElementById("type").value;
    const friend_name=document.getElementById("friends").value;
    const amount=document.getElementById("amount").value;
    const date=document.getElementById("date").value;
    
    
        list.push({
            expense_reason: expense_reason,
            currency: currency,
            pay_type:pay_type,
            friend_name:friend_name,
            amount:amount,
            date:date,
        });
    
    
        let tbody = document.querySelector('table');
    let newRow = document.createElement('tr');



    let expense_reasonData = document.createElement('td');
    let currencyData=document.createElement('td');
    let pay_typeData=document.createElement('td');
    let friend_nameData=document.createElement('td')
    let amountData=document.createElement('td');
    let dateData=document.createElement('td');
    let deleteData=document.createElement('td');
    

    expense_reasonData.innerText=expense_reason;
    currencyData.innerText=currency;
    pay_typeData.innerText=pay_type;
    friend_nameData.innerText=friend_name;
    amountData.innerText=amount;
    dateData.innerText=date;
    deleteData.insertAdjacentHTML("beforeend","<button onclick='deleteRow(this)'>Delete</button>");


    newRow.appendChild(pay_typeData);
    newRow.appendChild(expense_reasonData);
    newRow.appendChild(friend_nameData);
    newRow.appendChild(dateData);
    newRow.appendChild(amountData);
    newRow.appendChild(currencyData);
    newRow.appendChild(deleteData)
   
    tbody.appendChild(newRow);
    
    console.log(list);
}