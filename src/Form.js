import React, { useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';
import {db} from "./firebase_setup";
import { collection, getDocs, query, updateDoc, where } from "firebase/firestore";
import { doc, addDoc } from "firebase/firestore";

// // Firebase configuration
// const firebaseConfig = {
//   apiKey: "YOUR_API_KEY",
//   authDomain: "YOUR_AUTH_DOMAIN",
//   projectId: "YOUR_PROJECT_ID",
//   storageBucket: "YOUR_STORAGE_BUCKET",
//   messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
//   appId: "YOUR_APP_ID"
// };

// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);
// const db = firebase.firestore();

const Form = () => {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [answers, setAnswers] = useState('');
  const [cv, setCv] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // try {
    //   if (!email || !phone || !name || !surname || !answers || !cv) {
    //     throw new Error('Please fill in all fields and upload your CV.');
    //   }

    //   // Upload CV to Firebase Storage
    //   const storageRef = firebase.storage().ref();
    //   const cvRef = storageRef.child(cv.name);
    //   await cvRef.put(cv);

    //   // Get URL of uploaded CV
    //   const cvUrl = await cvRef.getDownloadURL();

    //   // Save form data to Firestore
    //   await db.collection('applicants').add({
    //     email,
    //     phone,
    //     name,
    //     surname,
    //     answers,
    //     cvUrl,
    //     timestamp: firebase.firestore.FieldValue.serverTimestamp()
    //   });

    //   // Reset form fields
    //   setEmail('');
    //   setPhone('');
    //   setName('');
    //   setSurname('');
    //   setAnswers('');
    //   setCv(null);
    //   setSuccessMessage('Form submitted successfully!');
    //   setErrorMessage('');
    // } catch (error) {
    //   setErrorMessage(error.message);
    //   setSuccessMessage('');
    // }
  };

  return (
    <div style={{display: "flex", justifyContent: "center", alignContent: "center", flexDirection: "column"}}>
      <h2>Application Form</h2>
      <form onSubmit={handleSubmit} style={{display: "flex", justifyContent: "center", alignContent: "center", flexDirection: "column"}}>
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

        <label>Phone Number:</label>
        <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} required />

        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />

        <label>Surname:</label>
        <input type="text" value={surname} onChange={(e) => setSurname(e.target.value)} required />

        <label>Answers to Questions:</label>
        <textarea value={answers} onChange={(e) => setAnswers(e.target.value)} required />

        <label>Upload CV:</label>
        <input type="file" onChange={(e) => setCv(e.target.files[0])} accept=".pdf,.doc,.docx" required />

        <button type="submit">Submit</button>
      </form>

      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
    </div>
  );
};

export default Form;
