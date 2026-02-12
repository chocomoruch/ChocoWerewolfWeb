<!-- firebase.js -->
<script type="module">
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
  import { getDatabase } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-database.js";
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyAgEYd21IOxMXnKZO9g-yLOj9-rmzxJs_0",
    authDomain: "chocowerewolfweb.firebaseapp.com",
    projectId: "chocowerewolfweb",
    storageBucket: "chocowerewolfweb.firebasestorage.app",
    messagingSenderId: "1079778595213",
    appId: "1:1079778595213:web:f13c5f3487ec2e19a36dc4",
    measurementId: "G-ZXKD0T7766"
  };

  const app = initializeApp(firebaseConfig);
  const db = getDatabase(app);

  window.db = db;
</script>
