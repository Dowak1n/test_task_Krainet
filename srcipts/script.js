document.addEventListener("DOMContentLoaded", function () {
  const hamburgerOpenButton = document.getElementById("hamburgerOpen");
  const hamburgerCloseButton = document.getElementById("hamburgerClose");
  const hamburgerWindow = document.getElementById("hamburgerWindow");
  const promoBlock = document.getElementById("promoBlock");
  const submitForm = document.getElementById("form");
  const errorName = document.getElementById("errorName");
  const errorEmail = document.getElementById("errorEmail");
  const promiTitleBlock = document.getElementById("promiTitleBlock");
  let screenWidth = window.innerWidth;
  let isOpen = false;

  hamburgerOpenButton.addEventListener("click", function () {
    console.log("открыть");
    if (isOpen) {
      hamburgerWindow.style.left = "-345px";
    } else {
      promoBlock.classList.add("promo-block--blurring");
      promiTitleBlock.style.border = "0px #000000 solid";
      hamburgerOpenButton.setAttribute("disabled", "");
      hamburgerWindow.style.left = "0";
    }

    isOpen = !isOpen;
  });

  hamburgerCloseButton.addEventListener("click", function () {
    console.log("закрыть");
    if (!isOpen) {
      hamburgerWindow.style.left = "0";
    } else {
      if (screenWidth > 479) {
        promiTitleBlock.style.border = "1px #000000 solid";
      }
      promiTitleBlock.style.borderBottom = "none";
      promoBlock.classList.remove("promo-block--blurring");
      hamburgerOpenButton.removeAttribute("disabled");
      hamburgerWindow.style.left = "-345px";
    }

    isOpen = !isOpen;
  });

  submitForm.addEventListener("submit", function (event) {
    event.preventDefault();
    var nameValue = document.getElementById("name").value;
    var emailValue = document.getElementById("email").value;
    var messageValue = document.getElementById("message").value;
    var isValid = true;

    if (nameValue.length < 2) {
      console.log("Name error");
      errorName.style.display = "block";
      isValid = false;
    } else {
      errorName.style.display = "none";
    }

    if (!validateEmail(emailValue)) {
      console.log("Email error");
      errorEmail.style.display = "block";
      isValid = false;
    } else {
      errorEmail.style.display = "none";
    }

    if (isValid) {
      var formData = {
        name: nameValue,
        email: emailValue,
        message: messageValue,
      };

      sendSubmitForm(formData, "https://example.com");
    }
  });
});

function validateEmail(email) {
  var emailPattern = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/;
  return emailPattern.test(email);
}
