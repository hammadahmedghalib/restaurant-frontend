function sendOrder() {
  const name = document.getElementById('name').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const order = document.getElementById('order').value.trim();

  if (!name || !phone || !order) {
    alert("Please fill all fields");
    return;
  }

  fetch('https://restaurant-website-1p5e.onrender.com/order', {  // <-- UPDATED
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, phone, order })
  })
  .then(res => res.json())
  .then(data => alert(data.message))
  .catch(err => alert("Error sending order: " + err));
}

function sendMessage() {
  const name = document.getElementById('cname').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('msg').value.trim();

  if (!name || !email || !message) {
    alert("Please fill all fields");
    return;
  }

  fetch('https://restaurant-website-1p5e.onrender.com/contact', {  // <-- UPDATED
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, email, message })
  })
  .then(res => res.json())
  .then(data => alert(data.message))
  .catch(err => alert("Error sending message: " + err));
}
