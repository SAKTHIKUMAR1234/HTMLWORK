let update_val=0;

var main_arr = new Array();
function add() {
    document.getElementById("cls-add").style.display = "block";
    document.getElementById("name").value="";
    document.getElementById("desg").value="";
    document.getElementById("sal").value="";
    document.getElementById("city").value="";
}

function ex() {
    document.getElementById("cls-add").style.display = "none";
}

function create() {
    let name = document.getElementById("name").value;
    let des = document.getElementById("desg").value;
    let sal = document.getElementById("sal").value;
    let city = document.getElementById("city").value;
    var arr = new Array(name, des, sal, city);
    main_arr.push(arr);
    document.getElementById("cls-add").style.display = "none";
    ref();
}


function ref() {
    let ele = document.getElementById("temp-cls");
    ele.innerHTML = "";
    ele.innerHTML = `
    <div class="display-cls" id="display-cls">
<div class="cls-clm" id="cls-main">
    <div><a>S.No</a></div>
    <div><a>Name</a></div>
    <div><a>Designation</a></div>
    <div><a>Salary</a></div>
    <div><a>City</a></div>
    <div><a>Actions</a></div>
</div>

</div>
    `;
    let i=1;
    main_arr.forEach(e => {
        ele.innerHTML+=`
        <div class="cls-clm" id="temp">
            <div><a>${i}</a></div>
            <div><a>${e[0]}</a></div>
            <div><a>${e[1]}</a></div>
            <div><a>${e[2]}</a></div>
            <div><a>${e[3]}</a></div>
            <div class="header-btn"><a id="btne${i}" onclick="edit(${i})">Edit</a><a id="btnd${i}" onclick="del(${i})">Delete</a></div>
        </div>
    `;
    i++;
    });
    //alert("All data are cleared");
}

function edit(i){
    update_val=--i;
    let ta=main_arr[i];

    document.getElementById("e-name").value=ta[0];
    document.getElementById("e-desg").value=ta[1];
    document.getElementById("e-sal").value=ta[2];
    document.getElementById("e-city").value=ta[3];
    document.getElementById("cls-edit").style.display = "block";
}

function update(){
    i=update_val;

    let name = document.getElementById("e-name").value;
    let des = document.getElementById("e-desg").value;
    let sal = document.getElementById("e-sal").value;
    let city = document.getElementById("e-city").value;
    var arr = new Array(name, des, sal, city);
    main_arr[i]=arr;
    document.getElementById("cls-edit").style.display = "none";
    ref();

}

function del(i){
    main_arr.splice(--i,1);
    ref();
}


