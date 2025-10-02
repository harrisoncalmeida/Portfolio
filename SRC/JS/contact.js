// contact.js
document.getElementById('contact-form').addEventListener('submit', async function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    const form = event.target;
    const data = new FormData(form);
    const action = form.action;
    
    try {
        const response = await fetch(action, {
            method: 'POST',
            body: data,
            headers: {
                'Accept': 'application/json'
            }
        });

        if (response.ok) {
            document.getElementById('form-status').innerHTML = 'Mensagem enviada com sucesso!';
            form.reset();
        } else {
            document.getElementById('form-status').innerHTML = 'Ocorreu um erro ao enviar a mensagem.';
        }
    } catch (error) {
        document.getElementById('form-status').innerHTML = 'Ocorreu um erro ao enviar a mensagem.';
    }
});