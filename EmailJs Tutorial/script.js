function sendMail() {
    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    }


    const serviceID = "service_dzwke36";
    const templateID = "template_qne5kbc";

    emailjs.send(serviceID, templateID, params)
        .then(
            res => {
                document.getElementById("name").value = "";
                document.getElementById("email").value = "";
                document.getElementById("message").value = "";
                console.log(res);
                alert("Mensagem enviada com sucesso!");
            })
        .catch((err) => console.log(err));
}

