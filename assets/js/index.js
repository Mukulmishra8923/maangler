
AOS.init();


document.querySelector('.close-btn').addEventListener('click', function() {
    document.querySelector('.navParent').style.display = 'none';
});



window.addEventListener('scroll', function() {
    var section = document.querySelector('.content');
    var progressBar = document.querySelector('.progress-bar');
    
    var sectionTop = section.offsetTop;
    var sectionHeight = section.offsetHeight;
    var sectionBottom = sectionTop + sectionHeight ;

    var scrollTop =  document.documentElement.scrollTop;
    var windowHeight = window.innerHeight;

    // Check if the section is in view
    if (scrollTop + windowHeight > sectionTop && scrollTop < sectionBottom) {
        progressBar.style.display = 'block'; // Show the progress bar

        // Calculate the scroll percentage within the section
        var scrollPercentage = ((scrollTop + windowHeight - sectionTop) / (sectionHeight + windowHeight)) * 100;
        
        // Update the height of the progress bar based on the scroll percentage
        progressBar.style.height = scrollPercentage + '%'; // Set height instead of width
    } else {
        progressBar.style.display = 'none'; // Hide the progress bar if outside the section
    }
});





// --------------------------------------------JOURNEY -Scroll---------------------------------

window.addEventListener('scroll', function() {
    var section = document.querySelector('.content2');
    var progressBar = document.querySelector('.progressBar');
    
    var sectionTop = section.offsetTop;
    var sectionHeight = section.offsetHeight;
    var sectionBottom = sectionTop + sectionHeight ;

    var scrollTop =  document.documentElement.scrollTop;
    var windowHeight = window.innerHeight;

    // Check if the section is in view
    if (scrollTop + windowHeight > sectionTop && scrollTop < sectionBottom) {
        progressBar.style.display = 'block'; // Show the progress bar

        // Calculate the scroll percentage within the section
        var scrollPercentage = ((scrollTop + windowHeight - sectionTop) / (sectionHeight + windowHeight)) * 100;
        
        // Update the height of the progress bar based on the scroll percentage
        progressBar.style.height = scrollPercentage + '%'; // Set height instead of width
    } else {
        progressBar.style.display = 'none'; // Hide the progress bar if outside the section
    }
});


function toggleDropdown() {
    var content = document.getElementById("dropdown-content");
    if (content.style.display === "block") {
        content.style.display = "none";
    } else {
        content.style.display = "block";
    }
}
function toggleDropdown1() {
    var content = document.getElementById("dropdown-content1");
    if (content.style.display === "block") {
        content.style.display = "none";
    } else {
        content.style.display = "block";
    }
}
function toggleDropdown2() {
    var content = document.getElementById("dropdown-content2");
    if (content.style.display === "block") {
        content.style.display = "none";
    } else {
        content.style.display = "block";
    }
}



$('.toolCarousel').owlCarousel({
    loop:true,
    margin:20,
    nav:false,
    // autoplay: true,       // Enable auto-rotation
    autoplayTimeout: 3000, // Time between each auto-rotate (in milliseconds)
    autoplayHoverPause: true, // Pause on mouse hover
    dots: false,          // Hide dots (pagination indicators)
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:4
        }
    }
})


document.addEventListener("DOMContentLoaded", function () {
    const appSection = document.querySelector('.app');
    const applicationTabs = document.querySelectorAll('.applicationTab');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add the animation class when the element is in view
                appSection.classList.add('animate');
                applicationTabs.forEach((tab, index) => {
                    tab.style.animationDelay = `${0.9 + index * 0.9}s`;
                    tab.classList.add('animate');
                });
                observer.unobserve(entry.target); // Stop observing once the animation has been triggered
            }
        });
    }, { threshold: 0.2 }); // 20% of the section must be in view

    observer.observe(appSection);
});

document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.programCard');

    function checkVisibility() {
        const triggerBottom = window.innerHeight * 0.8;

        cards.forEach(card => {
            const cardTop = card.getBoundingClientRect().top;

            if (cardTop < triggerBottom) {
                card.classList.add('show');
            }
        });
    }

    window.addEventListener('scroll', checkVisibility);
    checkVisibility(); // Run on page load in case cards are already visible
});

