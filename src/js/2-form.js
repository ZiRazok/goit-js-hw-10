const form = document.querySelector(".feedback-form");
const localStorageKey = "feedback-form-state";
const formData = JSON.parse(localStorage.getItem(localStorageKey)) ?? { email: "", message: "" };

form.elements.email.value = formData.email;
form.elements.message.value = formData.message;


form.addEventListener("input", (event) => {
    if (event.target === form.elements.email) formData.email = event.target.value;
    if (event.target === form.elements.message) formData.message = event.target.value;
    localStorage.setItem(localStorageKey, JSON.stringify(formData));
});

form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (form.elements.email.value == "" || form.elements.message.value == "") { alert("Fill please all fields"); return; }
    console.log(formData);
    localStorage.removeItem(localStorageKey);
    form.reset();
});