
// Demo app.js - controls sample posts and admin demo actions.
// Replace the Firebase placeholders with your project config to enable live posting.
// Placeholder WhatsApp number (replace before deploying)
const WHATSAPP_NUMBER = "+918697000590"; // REPLACE with actual number, e.g. "+919876543210"

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('year')?.textContent = new Date().getFullYear();
  document.getElementById('whatsapp-link')?.setAttribute('href',
    `https://wa.me/${WHATSAPP_NUMBER.replace(/\D/g,'')}?text=${encodeURIComponent("Hello, I'm interested in the job posted at NUR ENTERPRISE.")}`
  );
  loadSamplePosts();
});

function loadSamplePosts(){
  const sample = [
    {title:"Electrician - Urgent", location:"Dhaka, Mirpur", desc:"Skilled electrician needed for residential wiring, 5+ years experience.", contact:"+91 9876543210"},
    {title:"Duct Technician", location:"Chittagong, Port Area", desc:"Tin duct fabrication and installation. Tools required.", contact:"+91 9123456780"},
    {title:"Helper - Site", location:"Gazipur", desc:"General site helper for duct installation.", contact:"+91 9988776655"}
  ];
  renderPosts(sample);
}

function renderPosts(posts){
  const container = document.querySelectorAll('#posts');
  container.forEach(c => {
    c.innerHTML = '';
    posts.forEach(p => {
      const div = document.createElement('div');
      div.className = 'post';
      div.innerHTML = `<h4>${p.title}</h4>
        <div class="meta"><strong>Location:</strong> ${p.location}</div>
        <p>${p.desc}</p>
        <div><strong>Contact:</strong> ${p.contact}</div>
        <a class="apply" href="https://wa.me/${p.contact.replace(/\D/g,'')}" target="_blank">Apply via WhatsApp</a>`;
      c.appendChild(div);
    });
  });
}

// --- Admin demo functions (non-persistent in this demo) ---
function signIn(){
  alert('Demo sign-in: implement Firebase Auth and call firebase.auth().signInWithEmailAndPassword(email, password)');
}
function signOut(){
  alert('Demo sign-out');
}
function postJob(){
  const title = document.getElementById('jobTitle').value;
  const loc = document.getElementById('jobLocation').value;
  const desc = document.getElementById('jobDesc').value;
  const contact = document.getElementById('jobContact').value;
  if(!title || !loc || !desc){ alert('Please fill title, location and description'); return; }
  // In a real app: push to Firestore and storage then re-render
  alert('Demo post created locally. To save posts, connect Firebase and update postJob() to write to Firestore.');
}
function submitForm(e){
  e.preventDefault();
  alert('Demo contact form: implement form submission to email or backend (or Firebase).');
  return false;
}
