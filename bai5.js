const employees=[
    {
        id:1,
        name:'example 1',
        age:18,
        address:'District'
    },{
        id:2,
        name:'Example 2',
        age: 18,
        address:'Changiuoi'
    }
]

// function hienthi(){
//     let tablebody = document.getElementById("employeeTable")[0]
//     tablebody.innerHTML =""
//     for(let i =0; i<employees.length; i++){
//         let employee =employees[i]
//         let row = tablebody.insertRow()
//         row.insertCell(0).innerText = employee.id
//         row.insertCell(1).innerText = employee.name
//         row.insertCell(2).innerText = employee.age
//         row.insertCell(3).innerText = employee.address
//     }
// }
// hienthi()

    function hienthi() {
            let tableBody = document.getElementById("employeeTable").getElementsByTagName("tbody")[0]; 
            tableBody.innerHTML = "";

            for (let i = 0; i < employees.length; i++) {
                let employee = employees[i];
                let row = tableBody.insertRow(); 
                row.insertCell(0).innerText = employee.id; 
                row.insertCell(1).innerText = employee.name; 
                row.insertCell(2).innerText = employee.age; 
                row.insertCell(3).innerText = employee.address;
            }
        }
        hienthi();