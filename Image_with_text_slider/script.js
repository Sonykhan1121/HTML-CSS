document.addEventListener("DOMContentLoaded", function () {
    // Select the button
    const button = document.querySelector(".button");

    // Add a click event listener
    button.addEventListener("click", function () {
        // Open the video link in a new tab
        window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ","_self");
    });
});

document.addEventListener("DOMContentLoaded", function () {
    // Select the pagination dots and containers
    const dots = document.querySelectorAll(".dot");
    const containers = document.querySelectorAll(".container");

    // Function to update the active container based on the clicked dot
    function updateSlide(index) {
        // Hide all containers
        containers.forEach(container => container.classList.remove("active"));
        
        // Show the selected container
        containers[index].classList.add("active");

        // Update active dot
        dots.forEach((dot, i) => {
            if (i === index) {
                dot.classList.add("active");
            } else {
                dot.classList.remove("active");
            }
        });
    }

    // Add click event listeners to dots
    dots.forEach((dot, index) => {
        dot.addEventListener("click", function () {
            updateSlide(index);
        });
    });

    // Initialize with the first slide active
    updateSlide(0);
});
