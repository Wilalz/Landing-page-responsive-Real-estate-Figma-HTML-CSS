const btn = document.getElementById("btn");
const inpName = document.getElementById("inpName");
const inpEmail = document.getElementById("inpEmail");


btn.addEventListener("submit", (e) => {
    e.preventDefault();
    alert(`${inpName.value} ahora estás registrado!`)

    // const name = inpName.value;
    // const email = inpEmail.vaue;
    // if (!name) return
    
})