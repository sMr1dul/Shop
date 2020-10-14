const deleteProduct = btn => {
  const productId = btn.parentElement.querySelector("[name=productId]").value;
  const csrf = btn.parentElement.querySelector("[name=_csrf]").value;

  const productElement = btn.closest("article");

  fetch(`/admin/products/${productId}`, {
    method: "DELETE",
    headers: {
      "csrf-token": csrf
    }
  })
    .then(result => {
      console.log(result);
      return result.json();
    })
    .then(message => {
      console.log(message);
      if (message.message === "Success") {
        productElement.parentElement.removeChild(productElement);
      } else {
        throw new Error("Deletion Failed");
      }
    })
    .catch(err => {
      console.log(err);
    });
};
