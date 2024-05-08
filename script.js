const btn = document.getElementById("btn");
const iName = document.getElementById("iName");
const iEmail = document.getElementById("iEmail");
const form = document.getElementById("form"); 


form.addEventListener('submit', (event) => {
    event.preventDefault();
    alert(iName.value + " has sido registrado con éxito!")
    // console.table({name: iName.value, email: iEmail.value})
    iName.value = "";
    iEmail.value = "";
})
