const languageSelect = document.getElementById("language");

// Elements to translate
const title = document.getElementById("title");
const nameLabel = document.getElementById("nameLabel");
const emailLabel = document.getElementById("emailLabel");
const phoneLabel = document.getElementById("phoneLabel");
const genderLabel = document.getElementById("genderLabel");
const addressLabel = document.getElementById("addressLabel");
const positionLabel = document.getElementById("positionLabel");
const hireLabel = document.getElementById("hireLabel");
const cvLabel = document.getElementById("cvLabel");
const applyBtn = document.getElementById("applyBtn");

// Input Fields for Placeholders
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const addressInput = document.getElementById("address");
const messageInput = document.getElementById("message");

// Select Dropdowns
const genderSelect = document.getElementById("gender");
const positionSelect = document.getElementById("position");

// Language Change Event
languageSelect.addEventListener("change", function(){
    if(languageSelect.value === "english"){
        // Labels
        title.innerText = "Job Recruitment Form";
        nameLabel.innerText = "Full Name";
        emailLabel.innerText = "Email Address";
        phoneLabel.innerText = "Phone Number";
        genderLabel.innerText = "Gender";
        addressLabel.innerText = "Address";
        positionLabel.innerText = "Select Position";
        hireLabel.innerText = "Why should we hire you?";
        cvLabel.innerText = "Upload CV";
        applyBtn.innerText = "Apply Now";

        // Placeholders
        nameInput.placeholder = "Enter your full name";
        emailInput.placeholder = "Enter your email";
        phoneInput.placeholder = "Enter phone number";
        addressInput.placeholder = "Enter your address";
        messageInput.placeholder = "Write something about yourself";

        // Dropdown Options (Gender)
        genderSelect.options[0].text = "Select Gender";
        genderSelect.options[1].text = "Male";
        genderSelect.options[2].text = "Female";

        // Dropdown Options (Position)
        positionSelect.options[0].text = "Choose Position";
        positionSelect.options[1].text = "Web Developer";
        positionSelect.options[2].text = "UI Designer";
        positionSelect.options[3].text = "Software Engineer";
    }
    else if(languageSelect.value === "bangla"){
        // Labels
        title.innerText = "চাকরির আবেদন ফর্ম";
        nameLabel.innerText = "পূর্ণ নাম";
        emailLabel.innerText = "ইমেইল ঠিকানা";
        phoneLabel.innerText = "ফোন নাম্বার";
        genderLabel.innerText = "লিঙ্গ";
        addressLabel.innerText = "ঠিকানা";
        positionLabel.innerText = "পদ নির্বাচন করুন";
        hireLabel.innerText = "কেন আমরা আপনাকে চাকরি দিব?";
        cvLabel.innerText = "সিভি আপলোড করুন";
        applyBtn.innerText = "আবেদন করুন";

        // Placeholders
        nameInput.placeholder = "আপনার পূর্ণ নাম লিখুন";
        emailInput.placeholder = "আপনার ইমেইল লিখুন";
        phoneInput.placeholder = "ফোন নাম্বার লিখুন";
        addressInput.placeholder = "আপনার ঠিকানা লিখুন";
        messageInput.placeholder = "আপনার সম্পর্কে কিছু লিখুন";

        // Dropdown Options (Gender)
        genderSelect.options[0].text = "লিঙ্গ নির্বাচন করুন";
        genderSelect.options[1].text = "পুরুষ";
        genderSelect.options[2].text = "মহিলা";

        // Dropdown Options (Position)
        positionSelect.options[0].text = "পদ বেছে নিন";
        positionSelect.options[1].text = "ওয়েব ডেভেলপার";
        positionSelect.options[2].text = "ইউআই ডিজাইনার";
        positionSelect.options[3].text = "সফটওয়্যার ইঞ্জিনিয়ার";
    }
});

// Form Validation (Same as your code)
const form = document.getElementById("jobForm");
const successMessage = document.getElementById("successMessage");

form.addEventListener("submit", function(e){
    e.preventDefault();
    let name = nameInput.value;
    let email = emailInput.value;
    let phone = phoneInput.value;
    let gender = genderSelect.value;
    let address = addressInput.value;
    let position = positionSelect.value;
    let message = messageInput.value;

    if(name === "" || email === "" || phone === "" || gender === "Select Gender" || gender === "লিঙ্গ নির্বাচন করুন" || address === "" || position === "Choose Position" || position === "পদ বেছে নিন" || message === ""){
        successMessage.style.color = "red";
        successMessage.innerText = languageSelect.value === "english" ? "Please fill all required fields!" : "সবগুলো ঘর পূরণ করুন!";
    }
    else{
        successMessage.style.color = "green";
        successMessage.innerText = languageSelect.value === "english" ? "Application Submitted Successfully!" : "আবেদন সফলভাবে জমা হয়েছে!";
        form.reset();
    }
});
