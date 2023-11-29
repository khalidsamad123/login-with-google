
 
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
  import { getAuth, GoogleAuthProvider,signInWithPopup } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js";
 

  
  const firebaseConfig = {
    apiKey: "AIzaSyD4jKAJ__em4TCzAHJa7G6ic0s8BEV9fjM",
    authDomain: "login-4902c.firebaseapp.com",
    projectId: "login-4902c",
    storageBucket: "login-4902c.appspot.com",
    messagingSenderId: "291704279759",
    appId: "1:291704279759:web:e036ae6f633ae098e85dba",
    measurementId: "G-NXW7NWHTWE"
  };


  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  const provider = new GoogleAuthProvider();


  document.querySelector("#google").addEventListener("click",()=>{
    signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    console.log(user)
    // IdP data available using getAdditionalUserInfo(result)
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage)
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });

    console.log("okay")
  })
