
function collect(){
    let fname = document.getElementById("first-name").value;
    let lname = document.getElementById("last-name").value;
    let address = document.getElementById("address").value;
    let pincode = document.getElementById("pincode").value;
    let gender = document.querySelector('input[name = "gender"]:checked');
    let state = document.getElementById("state").value;
    let country = document.getElementById("country").value;
    let food = document.querySelectorAll('input[type = "checkbox"]');
    let button = document.getElementById("submit");
    let genderf="";

    //condition for getting input data from radio button for gender;

    if(gender !== null){
        //console.log(gender.value);
        genderf = gender.value;
    } else{
        alert("Please select one item");
    }
    
    //condition for getting input data from checkbox for food; 

    let f1 = document.getElementById("f1")
    let f2 = document.getElementById("f2")
    let f3 = document.getElementById("f3")
    let f4 = document.getElementById("f4")
    let f5 = document.getElementById("f5")
    let foodarr = [];
    
    if(f1.checked){
        foodarr.push(f1.value); 
    } 
    if(f2.checked){
        foodarr.push(f2.value);
    }
    if(f3.checked){
        foodarr.push(f3.value);
    }
    if(f4.checked){
        foodarr.push(f4.value);
    }
    if(f5.checked){
        foodarr.push(f5.value);
    }
    
    //condition for selecting minimum of two food items in a checkbox;
    
    if(foodarr.length < 2){
        alert("Please select atleast two items");
        return false;
    } 
    //console.log(foodarr);

    //to add data in the table;

    var table = document.getElementById("row");
    var row = table.insertRow(0);

    var firstname = row.insertCell(0);
    var lastname = row.insertCell(1);
    var addresstab = row.insertCell(2);
    var pintab = row.insertCell(3);
    var gendertab = row.insertCell(4);
    var foodtab = row.insertCell(5);
    var statetab = row.insertCell(6);
    var countrytab = row.insertCell(7);

    firstname.innerHTML = fname;
    lastname.innerHTML = lname;
    addresstab.innerHTML = address;
    pintab.innerHTML = pincode;
    gendertab.innerHTML = genderf;
    foodtab.innerHTML = foodarr;
    statetab.innerHTML = state;
    countrytab.innerHTML = country;

    //refresh a form for next entry;

    document.getElementById("form").reset();


    
} 
