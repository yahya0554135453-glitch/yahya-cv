const langBtn = document.getElementById("langBtn");

let currentLang = "en";

/* ===========================
   تغيير اللغة
=========================== */

async function setLanguage(lang) {

    currentLang = lang;

    try {

        const response = await fetch(`${lang}.json`);
        const translations = await response.json();

        /* تغيير جميع النصوص */

        document
            .querySelectorAll("[data-key]")
            .forEach(element => {

                const key = element.getAttribute("data-key");

                if (translations[key]) {
                    element.textContent = translations[key];
                }

            });

        /* اتجاه الصفحة */

        document.documentElement.dir =
            lang === "ar" ? "rtl" : "ltr";

        document.documentElement.lang = lang;

        /* زر تغيير اللغة */

        langBtn.textContent =
            lang === "ar"
            ? "English"
            : "العربية";

        /* تحديث رسالة الترحيب */

        updateWelcomePopup(lang);

    }

    catch (error) {

        console.error("Language file not found:", error);

    }

}

/* ===========================
   تغيير اللغة بالزر
=========================== */

langBtn.addEventListener("click", () => {

    setLanguage(
        currentLang === "en"
        ? "ar"
        : "en"
    );

});

/* ===========================
   تحديد لغة الزائر تلقائياً
=========================== */

const browserLang = navigator.language || navigator.userLanguage;

if (browserLang.startsWith("ar")) {

    setLanguage("ar");

} else {

    setLanguage("en");

}

/* ===========================
   Navbar عند النزول
=========================== */

window.addEventListener("scroll", () => {

    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 50) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});

/* ===========================
   رسالة الترحيب
=========================== */

const popup = document.getElementById("welcomePopup");
const checkbox = document.getElementById("agreeCheck");
const closeBtn = document.getElementById("closePopup");

checkbox.addEventListener("change", () => {

    closeBtn.disabled = !checkbox.checked;

});

closeBtn.addEventListener("click", () => {

    popup.style.display = "none";

});

/* ===========================
   تغيير نص الرسالة حسب اللغة
=========================== */

function updateWelcomePopup(lang) {

    if (lang === "ar") {

        document.querySelector(".welcome-header h2").innerHTML =
            "👋 أهلاً بك في موقعي الشخصي";

        document.querySelector(".welcome-body > p").innerHTML =
            "يسرني زيارتك لمعرض أعمالي وسيرتي الذاتية.";

        document.querySelector(".new-section p").innerHTML =
            "✨ تمت إضافة قسمين جديدين داخل الموقع:<br><br>" +
            "📂 دليل احترافي للمساعد الإداري يشرح المهام والمهارات والأنظمة المستخدمة في بيئة العمل الإدارية.<br><br>" +
            "🌱 دليل متكامل للتطوع والتطوير المهني يوضح كيفية الاستفادة من الفرص التطوعية لبناء الخبرة وتطوير المسار المهني.";

        document.querySelector(".agree").lastChild.textContent =
            " لقد قرأت الرسالة وأرغب في متابعة تصفح الموقع.";

        closeBtn.textContent = "دخول الموقع";

    }

    else {

        document.querySelector(".welcome-header h2").innerHTML =
            "👋 Welcome to My Portfolio";

        document.querySelector(".welcome-body > p").innerHTML =
            "Thank you for visiting my personal portfolio and resume.";

        document.querySelector(".new-section p").innerHTML =
            "✨ Two new professional sections have been added:<br><br>" +
            "📂 A complete Administrative Assistant Guide covering daily tasks, office systems, and essential workplace skills.<br><br>" +
            "🌱 A Professional Volunteering Guide explaining how volunteering helps build experience and develop your career.";

        document.querySelector(".agree").lastChild.textContent =
            " I have read this message and would like to continue.";

        closeBtn.textContent = "Enter Website";

    }

}
/* =========================
       1 UNIVERSITY MODAL
========================= */

const certificateBtn =
document.getElementById("certificateBtn");

const universityModal =
document.getElementById("universityModal");

const universityClose =
document.querySelector(".close-btn");

/* Open */

if(certificateBtn){

    certificateBtn.onclick = () => {

        universityModal.style.display = "flex";
    }
}

/* Close */

if(universityClose){

    universityClose.onclick = () => {

        universityModal.style.display = "none";
    }
}
/* =========================
       1 UNIVERSITY MODAL
========================= */

/* =========================
        2 TRAINING MODAL
========================= */

const trainingBtn =
document.getElementById("trainingBtn");

const trainingModal =
document.getElementById("trainingModal");

const trainingClose =
document.querySelector(".training-close");

/* Open */

if(trainingBtn){

    trainingBtn.onclick = () => {

        trainingModal.style.display = "flex";
    }
}

/* Close */

if(trainingClose){

    trainingClose.onclick = () => {

        trainingModal.style.display = "none";
    }
}
/* =========================
        2 TRAINING MODAL
========================= */

/* =========================
        3 CERTIFICATE MODAL
========================= */
document.addEventListener("DOMContentLoaded", () => {

    const fileBoxes = document.querySelectorAll(".openCertificate");
    const certificateModal = document.getElementById("certificateModal");
    const certificateImage = document.getElementById("certificateImage");
    const certificateClose = document.querySelector(".certificate-close");

    /* =========================
            OPEN CERTIFICATE
    ========================= */

    fileBoxes.forEach(box => {

        box.addEventListener("click", () => {

            const imgSrc = box.getAttribute("data-img");

            certificateImage.src = imgSrc;

            certificateModal.style.display = "flex";

        });

    });

    /* =========================
            CLOSE CERTIFICATE
    ========================= */

    certificateClose.addEventListener("click", () => {
        certificateModal.style.display = "none";
    });

    /* =========================
            OUTSIDE CLICK
    ========================= */

    window.addEventListener("click", (e) => {

        if (e.target === certificateModal) {
            certificateModal.style.display = "none";
        }

    });

});
/* =========================
        3 CERTIFICATE MODAL
========================= */


/* =========================
        4 REVIEW SYSTEM
========================= */

const reviewPopup = document.getElementById("reviewPopup");
const reviewText = document.getElementById("reviewText");
const reviewName = document.getElementById("reviewName");
const charCounter = document.getElementById("charCounter");
const stars = document.querySelectorAll(".star-rating span");

let selectedRating = 0;

/* OPEN */
function openReview(){
    reviewPopup.style.display = "flex";
}

/* CLOSE */
function closeReview(){
    reviewPopup.style.display = "none";
}

/* STAR CLICK */
stars.forEach(star => {

    star.addEventListener("click", () => {

        selectedRating = Number(star.dataset.rate);

        stars.forEach(s => s.style.color = "#475569");

        for(let i = 0; i < selectedRating; i++){
            stars[i].style.color = "#fbbf24";
        }

    });

});

/* TEXT COUNTER */
reviewText.addEventListener("input", () => {
    charCounter.textContent = `${reviewText.value.length} / 200`;
});

/* =========================
        SUBMIT REVIEW
========================= */

function submitReview(){

    const name = reviewName.value.trim();
    const review = reviewText.value.trim();

    if(name === ""){
        alert("Please enter your name");
        return;
    }

    if(selectedRating === 0){
        alert("Please select a rating");
        return;
    }

    const reviews =
        JSON.parse(localStorage.getItem("reviews")) || [];

    reviews.push({
        name,
        rating: selectedRating,
        comment: review
    });

    while(reviews.length > 3){
        reviews.shift();
    }

    localStorage.setItem("reviews", JSON.stringify(reviews));

    loadReviews();

    alert("Thank you for your review!");

    reviewName.value = "";
    reviewText.value = "";
    charCounter.textContent = "0 / 200";

    selectedRating = 0;

    stars.forEach(star => {
        star.style.color = "#475569";
    });

    closeReview();
}

/* =========================
        LOAD REVIEWS
========================= */

function loadReviews(){

    const container = document.getElementById("reviewsContainer");

    const reviews =
        JSON.parse(localStorage.getItem("reviews")) || [];

    container.innerHTML = "";

    if(reviews.length === 0){
        container.innerHTML = `<p class="no-review">No reviews yet</p>`;
        return;
    }

    reviews.forEach(r => {

        container.innerHTML += `
            <div class="review-item">

                <div class="name">${r.name}</div>

                <div class="stars">
                    ${"★".repeat(r.rating)}
                </div>

                <div class="comment">${r.comment}</div>

            </div>
        `;
    });
}

/* INIT */
loadReviews();


/* =========================
        4 REVIEW SYSTEM
========================= */
