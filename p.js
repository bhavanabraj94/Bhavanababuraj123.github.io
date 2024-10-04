var links = document.getElementsByClassName("tab-link");
var contents = document.getElementsByClassName("tab-contents");

function openTab(event, name) {
    // Remove active class from all links
    for (let link of links) {
        link.classList.remove("active-link");
    }

    // Remove active class from all contents
    for (let content of contents) {
        content.classList.remove("active-tab");
    }

    // Add active class to the clicked link
    event.currentTarget.classList.add("active-link");

    // Add active class to the corresponding content
    document.getElementById(name).classList.add("active-tab");
}

var sidemenu=document.getElementById("sidemenu");

function openmenu(){
    sidemenu.style.right="0";
}

function closemenu(){
    sidemenu.style.right="-200px";
}

