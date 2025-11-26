document.addEventListener("DOMContentLoaded", function() {
    function animateProgressBars() {
        document.querySelectorAll('.progress-bar-bg').forEach(function(bg) {
            if (
                bg.getBoundingClientRect().top < window.innerHeight &&
                bg.getBoundingClientRect().bottom > 0 &&
                !bg.classList.contains('animated')
            ) {
                bg.classList.add('animated');
                let bar = bg.querySelector('.progress-bar');
                let skillPercent = bar.getAttribute('data-skill');
                bar.style.width = skillPercent + '%';
            }
        });
    }
    window.addEventListener('scroll', animateProgressBars);
    window.addEventListener('resize', animateProgressBars);
    animateProgressBars();

    var contactForm = document.getElementById("contactForm");
    if (contactForm) {
        contactForm.addEventListener("submit", function(e) {
            e.preventDefault();
            let name = document.getElementById("name").value.trim();
            let email = document.getElementById("email").value.trim();
            let message = document.getElementById("message").value.trim();
            let msgBox = document.getElementById("form-message");
            let errors = [];
            if (name.length < 3) errors.push("Name must be at least 3 characters.");
            if (!/^[\w-.]+@[\w-]+\.[a-zA-Z]{2,}$/.test(email)) errors.push("Please enter a valid email address.");
            if (message.length < 10) errors.push("Message must be at least 10 characters.");
            if (errors.length > 0) {
                msgBox.style.color = "red";
                msgBox.textContent = errors.join(" ");
                return;
            }
            msgBox.style.color = "green";
            msgBox.textContent = "Form submitted successfully! Redirecting...";
            localStorage.setItem("contactFormData", JSON.stringify({ name, email, message }));
            setTimeout(() => window.location.href = "form-details.html", 1200);
        });
    }
    document.querySelectorAll(".project-card").forEach(function(card) {
        card.addEventListener("click", function() {
            let url = card.getAttribute("data-url");
            if(url) window.location.href = url;
        });
    });
    var canvas = document.getElementById("portfolio-canvas");
    if (canvas) {
        var ctx = canvas.getContext("2d");
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "#217DBB";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.font = "bold 21px Inter, Arial";
        ctx.fillStyle = "white";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText("Welcome to my Portfolio!", canvas.width/2, canvas.height/2);
    }
    const sliderImages = [
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?fit=crop&w=600&q=80"
    ];
    let sliderIndex = 0;
    const sliderImg = document.getElementById("slider-img");
    document.getElementById("prev-slide").onclick = function() {
        sliderIndex = (sliderIndex === 0) ? sliderImages.length - 1 : sliderIndex - 1;
        sliderImg.src = sliderImages[sliderIndex];
    };
    document.getElementById("next-slide").onclick = function() {
        sliderIndex = (sliderIndex === sliderImages.length - 1) ? 0 : sliderIndex + 1;
        sliderImg.src = sliderImages[sliderIndex];
    };
    document.getElementById("theme-toggle").onclick = function() {
        document.body.classList.toggle("dark-mode");
    };
    const backTopBtn = document.getElementById("back-to-top");
    window.addEventListener("scroll", function() {
        backTopBtn.style.display = (window.scrollY > 220) ? "block" : "none";
    });
    backTopBtn.onclick = function() {
        window.scrollTo({top: 0, behavior: "smooth"});
    };
});
