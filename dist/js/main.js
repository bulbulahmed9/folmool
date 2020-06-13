$(document).ready(function () {


    // list view 
    $(".list").click(function () {
        $(".grid").removeClass("grid-list-active")
        $(".products").hide()
        $(this).addClass("grid-list-active")
        $(".hide").show()
    })


    // grid view
    $(".grid").click(function () {
        $(".list").removeClass("grid-list-active")
        $(".product-listview").hide()
        $(".products").show()
        $(this).addClass("grid-list-active")
    })

});

// modal 

let modal = document.getElementById("myModal");

let btn = document.getElementById("myBtn");



let editBtn = document.querySelectorAll(".edit");
for (let i = 0; i < editBtn.length; i++) {
    editBtn[i].onclick = function () {
        modal.style.display = "block";
    };
}

let editBtn2 = document.querySelectorAll(".editBtn");
for (let i = 0; i < editBtn2.length; i++) {
    editBtn2[i].onclick = function () {
        modal.style.display = "block";
    };
}

btn.onclick = function () {
    modal.style.display = "block";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}