function sendSubmitForm(formData, url) {
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  })
    .then((response) => {
      if (response.ok) {
        console.log("Данные успешно отправлены");
      } else {
        console.error("Ошибка при отправке данных");
      }
    })
    .catch((error) => {
      console.error("Ошибка при отправке данных:", error);
    });
}
