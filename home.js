function openNav() {
    document.getElementById("homeSideNav").style.width = "250px";
}

function closeNav() {
    document.getElementById("homeSideNav").style.width = "0px";
}

window.onload = function(){
    document.getElementById("customerName").innerHTML = "Welcome Jenny";
};

function fetchFile(){
        fetch('https://jsonplaceholder.typicode.com/todos/')
        .then(response => response.json())
        .then(data => console.log(data));
}