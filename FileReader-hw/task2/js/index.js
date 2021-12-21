let rIndex,
table = document.getElementById("table");

function checkEmptyInput(){
    let isEmpty = false,
    fname = document.getElementById("fname").value,
    lname = document.getElementById("lname").value,
    salary = document.getElementById("salary").value;
    file = document.getElementById("file").value;

if(fname === ""){
    alert("First Name Connot Be Empty");
    isEmpty = true;
}
else if(lname === ""){
    alert("Last Name Connot Be Empty");
    isEmpty = true;
}
else if(salary === ""){
    alert("Salary Connot Be Empty");
    isEmpty = true;
}
else if(file == ""){
    alert("File Cannot Be Empty")
    isEmpty = true;
}
return isEmpty;
}

function addHtmlTableRow(){
    if(!checkEmptyInput()){
        let newRow = table.insertRow(table.length),
        cell1 = newRow.insertCell(0),
        cell2 = newRow.insertCell(1),
        cell3 = newRow.insertCell(2),
        cell4 = newRow.insertCell(3),
        fname = document.getElementById("fname").value,
        lname = document.getElementById("lname").value,
        salary = document.getElementById("salary").value;
        file = document.getElementById("file").value;

        cell1.innerHTML = fname;
        cell2.innerHTML = lname;
        cell3.innerHTML = salary;
        cell4.innerHTML = file;
        selectedRowToInput();
    }
}

function selectedRowToInput(){
    for(let i = 1; i < table.rows.length; i++)
    {
        table.rows[i].onclick = function()
        {
          rIndex = this.rowIndex;
          document.getElementById("fname").value = this.cells[0].innerHTML;
          document.getElementById("lname").value = this.cells[1].innerHTML;
          document.getElementById("salary").value = this.cells[2].innerHTML;
        };
    }
}
selectedRowToInput();

function editHtmlTbleSelectedRow(){
    let fname = document.getElementById("fname").value,
    lname = document.getElementById("lname").value,
    salary = document.getElementById("salary").value;
    file = document.getElementById("file").value;
    if(!checkEmptyInput()){
    table.rows[rIndex].cells[0].innerHTML = fname;
    table.rows[rIndex].cells[1].innerHTML = lname;
    table.rows[rIndex].cells[2].innerHTML = salary;
    table.rows[rIndex].cells[3].innerHTML = file;
    }
}

let uploadFile = document.querySelector("form i");

uploadFile.addEventListener("click", function() {
    console.log(this.nextElementSibling);
    this.nextElementSibling.click();
})
uploadFile.nextElementSibling.addEventListener("change", function(e){
    const{files} = e.target;

    for (let file of files) {
        const fileReader = new FileReader();
        fileReader.onloadend = function(e){
            const { result } = e.target;

            const img = document.createElement("img")
            img.setAttribute("src", result);
            
            document.querySelector(".image-wrapper").appendChild(img);
        }
        fileReader.readAsDataURL(file);
    }
})


let popup = document.querySelector(".popup");
let closeIcon = document.querySelector(".close-icon");

uploadFile.forEach((image) => {
    image.addEventListener("click", function(e){
        e.preventDefault();
        openFunction();
    })
});
function openFunction(){
    popup.style.display = "revert";
}
function closeFunction(){
    popup.style.display = "none";
}
closeIcon.addEventListener("click", function () {
    closeFunction();
});
document.addEventListener("keydown", (e) => {
    if (e.code === "Escape" && popup.style.display === "flex") {
      console.log("work");
      closeFunction();
    }
});
popup.addEventListener("click", (e) => {
    if (e.target.classList.contains("popup")) {
      closeFunction();
    }
});  