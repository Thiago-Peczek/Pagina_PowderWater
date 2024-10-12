document
.getElementById("contactForm")
.addEventListener("submit", function(event) {
    event.preventDefault();
    const formData = {
        nome: document.getElementById("name").value,
        email: document.getElementById("email").value,
    };
    console.log("Dados: ", formData);
    fetch("https://localhost:3333/cadastro", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
    })
    .then((response) => response.json())
    .then((data)=> {
        console.log("success: ", data);
        alert("Cadastro realizado com sucesso");
    })
    .catch((error)=> {
        console.error("Error: ", error);
        alert("Ocorreu um erro ao realizar o cadastro");
    });
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
});

