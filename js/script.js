greetUser();

function greetUser(){
    const fullName = prompt("Please enter your full name:");

    document.getElementById("fullName").innerHTML = fullName;
    const splitHidden = document.getElementById('split');
    splitHidden.classList.remove('grid');
}

function cekForm(){
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    if(name === "" || email === "" || message === ""){
        alert("Please fill out all required fields.");
    } else {
        showModal(true, name);
        // alert("Thank you for your message, " + name + "! We will get back to you shortly.");
    }

    document.getElementById("namaForm").innerHTML = name
    document.getElementById("emailForm").innerHTML = email
    document.getElementById("ketForm").innerHTML = message
}

function showModal(show, name) {
    const modal = document.getElementById('modal');
    const modalForm = document.getElementById('modal-form');
    const splitBlock = document.getElementById('split');
    document.getElementById('nameModal').innerText = name;
    if (show) {
        modal.classList.remove('hidden');
    } else {
        modal.classList.add('hidden');
        splitBlock.classList.add('grid');
        modalForm.classList.remove('hidden');
    }
}