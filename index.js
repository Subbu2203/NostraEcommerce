
document.querySelectorAll(".add-btn").forEach(button => {
  button.addEventListener("click", () => {
    const product = {
      name: button.dataset.name,
      price: button.dataset.price,
      image: button.dataset.image
    };
    localStorage.setItem("nostraProduct", JSON.stringify(product));
    window.location.href ="payment.html";
  });
});

document.querySelectorAll(".arrival-card").forEach(card => {
  const name = card.querySelector("h3").innerText;
  const priceText = card.querySelector(".price").innerText;
  const price = priceText.replace("₹", "").replace(",", "");
  const image = card.querySelector("img").src;

  const btn = card.querySelector(".add-btn");
  btn.dataset.name = name;
  btn.dataset.price = price;
  btn.dataset.image = image;
});


  document.querySelectorAll('.arrival-card').forEach(card => {
    const rating = parseInt(card.getAttribute('data-rating'));
    const ratingContainer = card.querySelector('.arrival-rating');
    for (let i = 1; i <= 5; i++) {
      const star = document.createElement('span');
      star.classList.add('star');
      if (i > rating) star.classList.add('empty');
      star.innerHTML = i <= rating ? '&#9733;' : '&#9734;';
      ratingContainer.appendChild(star);
    }
  });
