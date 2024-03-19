//declaration
var input = document.querySelector("input")
var search = document.querySelector("label");
var search_bar = document.querySelector("#search");
var data = [
    { name: "Sagar Satyrthi Mishra", src: "Sagar_.jpg"},
    { name: "Sagar Satyrthi Mishra", src: "Sagar.jpg"},
    { name: "Ritvij Verma", src: "Ritvij.jpg"},
    { name: "Lavkush Kumar", src: "lavkush.jpg"},
    { name: "Vishal Tiwari", src: "vishal.jpg"},
    { name: "Shashank Shukla", src: "Shashank.jpg"},
    { name: "Ayush Tiwari", src: "Ayush.jpg"},
    { name: "Sanjay Kumar Chauhan", src: "Sanjay.jpg"}
]
//search
search.addEventListener("click", function () {
    search_bar.style.display = "block"
})


//main work
input.addEventListener("input", function () {
    var matching=data.filter(function(val){
        return val.name.startsWith(input.value)
    })
    var newusers="";
    matching.forEach(function (elem) {
        newusers += `<div class="person">
        <div class="img"><img src="${elem.src}" alt="error"></div>
        <h4>${elem.name}</h4>
    </div>`
    })
    document.querySelector(".persons").innerHTML = newusers;
})