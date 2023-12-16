document.getElementById("btnEnviar").addEventListener("click", ()=>{
    const prompt = document.getElementById("prompt").value;
    const respuesta = document.getElementById("respuesta");

    fetch("/chat", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({prompt: prompt})
    })
    .then(response => response.json())
    .then(data =>{
        respuesta.innerHTML = data.message;
    })
    .catch((error) => {
        console.error("Error: ", error);
    })
});