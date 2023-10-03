const user = document.querySelector("#user");
const password = document.querySelector("#password");
const password2 = document.querySelector("#password2");
const email = document.querySelector("#email");
const clearBtn = document.querySelector(".clean");
const sendBtn = document.querySelector(".send");
const popup = document.querySelector("#popup");

const showError = (input) => {
  const parent = input.parentElement;
  input.classList.add("error");
};

const checkForm = (input) => {
  input.forEach((el) => {
    if (el.value === "") {
      showError(el);
    } else {
      console.log("filled");
    }
  });
};

clearBtn.addEventListener("click", (e) => {
  e.preventDefault();
  [user, password, password2, email].forEach((el) => el.value == "");
});

sendBtn.addEventListener("click", (e) => {
  e.preventDefault();
  checkForm([user, password, password2, email]);
});
