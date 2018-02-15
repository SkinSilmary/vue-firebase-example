import { initializeApp } from 'firebase'

// Initialize Firebase
var app  = initializeApp({
    apiKey: "empty",
    authDomain: "empty",
    databaseURL: "empty",
    projectId: "empty",
    storageBucket: "empty",
    messagingSenderId: "empty"
})

export const db = app.database();
export const namesRef = db.ref('names');