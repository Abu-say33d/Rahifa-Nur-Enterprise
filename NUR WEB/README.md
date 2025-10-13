
NUR ENTERPRISE - Demo Website
=============================

This is a ready-to-deploy demo website for *NUR ENTERPRISE* (Owner: REZWAN MOLLA).
It includes sample pages and a simple admin demo. Replace placeholders before going live.

Files:
- index.html, about.html, requirements.html, contact.html, admin.html
- assets/css/style.css
- assets/js/app.js (contains demo posts and admin stubs)
- firebase-init.js (placeholder with instructions)

Placeholders you must replace:
- WhatsApp number in assets/js/app.js (WHATSAPP_NUMBER constant)
- Firebase config in firebase-init.js if you want live database/auth
- Any sample contacts or text to real values

How to deploy (Netlify - quick):
1. Download and unzip this package.
2. (Optional) Edit files to update contact number and firebase config.
3. Go to https://www.netlify.com and sign in.
4. Click "Add new site" → "Deploy manually" → drag & drop the folder contents (or zip).
5. Netlify will publish a site URL like https://something.netlify.app

How to enable live posting (Firebase):
1. Create Firebase project and enable Authentication (Email/Password) and Firestore.
2. Add firebase SDK scripts to every HTML file (or include via a module/bundler).
3. Initialize firebase with your config (see firebase-init.js).
4. Modify assets/js/app.js: replace demo arrays with Firestore reads/writes and use firebase.auth().

Contact / Support:
- Owner: REZWAN MOLLA
- Demo WhatsApp (placeholder): +91 0000000000
- Replace with your real contact before sharing publicly.

Enjoy — you can show this to clients immediately as a working demo. For help connecting Firebase or customizing UI, tell me what to change.
