function sendOrder() {
fetch('https://hotel-website-2vsk.onrender.com/order', {
method: 'POST',
headers: { 'Content-Type': 'application/json' },
body: JSON.stringify({
name: document.getElementById('name').value,
phone: document.getElementById('phone').value,
order: document.getElementById('order').value
})
}).then(res => res.json()).then(data => alert(data.message));
}


function sendMessage() {
fetch('https://hotel-website-2vsk.onrender.com/contact', {
method: 'POST',
headers: { 'Content-Type': 'application/json' },
body: JSON.stringify({
name: document.getElementById('cname').value,
email: document.getElementById('email').value,
message: document.getElementById('msg').value
})
}).then(res => res.json()).then(data => alert(data.message));
}