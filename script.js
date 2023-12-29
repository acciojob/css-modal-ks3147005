document.getElementById("openModal").addEventListener("click", function() {
    document.getElementById("myModal").style.display = "flex";
});

document.querySelector(".modal").addEventListener("click", function(event) {
    if (event.target === document.querySelector(".modal")) {
        document.getElementById("myModal").style.display = "none";
    }
});

document.querySelector(".close-modal").addEventListener("click", function() {
    document.getElementById("myModal").style.display = "none";
});
