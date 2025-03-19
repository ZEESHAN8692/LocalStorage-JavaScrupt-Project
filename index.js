function addProduct() {
  let form = document.querySelector("form");
  let Products = JSON.parse(localStorage.getItem("PRODUCTS")) || [];

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    let productTitle = document.getElementById("productTitle").value;
    let productDes = document.getElementById("productDes").value;
    let productImage = document.getElementById("productImage").value;
    if (productTitle === "") {
      alert("Pleate Enter Product Title");
    } else if (productDes === "") {
      alert("Pleate Enter Product Description");
    } else if (productImage === "") {
      alert("Pleate Enter Product Image Url");
    } else {
      let FormData = {
        image: productImage,
        title: productTitle,
        description: productDes,
      };
      Products.push(FormData);
      localStorage.setItem("PRODUCTS", JSON.stringify(Products));
      alert("Product Save Successfull");
    }
    form.reset();
  });
}
addProduct();
