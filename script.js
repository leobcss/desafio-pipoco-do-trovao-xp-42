Toastify({
  text: "Logado com sucesso",
  duration: 2500,
  // destination: "https://github.com/apvarun/toastify-js",
  newWindow: true,
  // close: true,
  gravity: "top", // `top` or `bottom`
  position: "right", // `left`, `center` or `right`
  stopOnFocus: true, // Prevents dismissing of toast on hover
  style: {
    background: "linear-gradient(to right, #202020, #606060)",
  },
  onClick: function () {}, // Callback after click
}).showToast();
