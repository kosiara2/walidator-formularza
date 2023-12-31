const user = document.querySelector("#user");
const password = document.querySelector("#password");
const password2 = document.querySelector("#password2");
const email = document.querySelector("#email");
const clearBtn = document.querySelector(".clean");
const sendBtn = document.querySelector(".send");
const popup = document.querySelector("#popup");

const showError = (input, msg) => {
  const parent = input.parentElement;
  parent.classList.add("error");
  const errorMsg = parent.querySelector(".error-text");
  errorMsg.textContent = msg;
};

const cleanError = (input) => {
  const parent = input.parentElement;
  parent.classList.remove("error");
};

const checkForm = (input) => {
  input.forEach((el) => {
    if (el.value == "") {
      showError(el, el.placeholder);
    } else {
      cleanError(el);
    }
  });
};

const checkLength = (input, min) => {
  if (input.value.length < min) {
    showError(
      input,
      `${input.previousElementSibling.innerText.replace(
        ":",
        ""
      )} sklada sie z min. ${min} znakow`
    );
  }
};

const checkPassword = (pass1, pass2) => {
  if (pass1.value !== pass2.value) {
    showError(pass2, "hasła nie pasują do siebie");
  }
};

const checkEmail = (email) => {
  const reg = /^[A-Z0-9]+@[A-Z0-9]+.[A-Z]{2,3}$/i;
  if (reg.test(email.value)) {
    cleanError(email);
  } else {
    showError(email, "wrong email");
  }
};

const checkErrors = () => {
  let errorCount = 0;
  const allInputs = document.querySelectorAll(".form-box");
  allInputs.forEach((input) => {
    if (input.classList.contains("error")) {
      errorCount++;
    }
  });
};

sendBtn.addEventListener("click", (e) => {
  e.preventDefault();
  checkForm([user, password, password2, email]);
  checkLength(user, 4);
  checkLength(password, 8);
  checkPassword(password, password2);
  checkEmail(email);
});

clearBtn.addEventListener("click", (e) => {
  e.preventDefault();
  [user, password, password2, email].forEach((el) => (el.value = ""));
  cleanError(el);
});
