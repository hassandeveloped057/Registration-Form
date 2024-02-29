
const firebaseConfig = {
    apiKey: "AIzaSyDlph_kzoZyg52dnN3SaHptTbdVL0H-UAI",
    authDomain: "assignment-20-8ee78.firebaseapp.com",
    databaseURL: "https://assignment-20-8ee78-default-rtdb.firebaseio.com",
    projectId: "assignment-20-8ee78",
    storageBucket: "assignment-20-8ee78.appspot.com",
    messagingSenderId: "248559071160",
    appId: "1:248559071160:web:dd9e5bfb10acca7812294d"
};


const frb = firebase.initializeApp(firebaseConfig);

console.log(frb);



function send() {
    var Name = document.getElementById("Name");
    var Email = document.getElementById("Email");
    var Password = document.getElementById("Password");
    var Age = document.getElementById("Age");
    var selectCourse = document.getElementById("selectCourse");
    var selectGender = document.getElementById("selectGender");
    var PhoneNumber = document.getElementById("selectGender");




    var obj = {
        Name: Name.value,
        Email: Email.value,
        Password: Password.value,
        Age: Age.value,
        selectCourse: selectCourse.value,
        selectGender: selectGender.value,
        PhoneNumber: PhoneNumber,
    }
    frb.database().ref('student').push(obj);
}
function getDataFromFirebase() {
    frb.database().ref('student').on("child_added", (data) => {

        console.log(data.val());
    })
}
getDataFromFirebase();




