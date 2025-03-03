// Toggle menu open/close
function toggleMenu(element) {
    const content = element.nextElementSibling;
    const arrow = element.querySelector('.arrow');

    // Close all other menus
    const allContents = document.querySelectorAll('.menu-content');
    const allArrows = document.querySelectorAll('.arrow');

    allContents.forEach(item => {
        if (item !== content) {
            item.style.maxHeight = null;
        }
    });

    allArrows.forEach(item => {
        if (item !== arrow) {
            item.classList.remove('open');
        }
    });

    // Toggle current menu
    if (content.style.maxHeight) {
        content.style.maxHeight = null;
        arrow.classList.remove('open');
    } else {
        content.style.maxHeight = content.scrollHeight + "px";
        arrow.classList.add('open');
    }
}

// Open video modal
function openVideo(videoId) {
    // Define the online video URLs
    const videoPaths = {
        printer1: 'printer1.mp4', // Replace with actual URL
        printer2: 'https://youtu.be/KSVxC2MbLXc?si=JoIEr_Ct7acgj0TU',
        printer3: 'https://example.com/videos/printer3.mp4',
        windows1: 'https://example.com/videos/windows1.mp4',
        windows2: 'https://example.com/videos/windows2.mp4',
        windows3: 'https://example.com/videos/windows3.mp4',
        // Add more video URLs as necessary
    };

    // Get the video modal and video element
    const modal = document.getElementById("videoModal");
    const videoElement = modal.querySelector("video");

    // Set the video source to the online URL
    videoElement.src = videoPaths[videoId];

    // Show the modal
    modal.style.display = "block";
}


// Close video modal
function closeVideo() {
    const modal = document.getElementById('videoModal');
    modal.style.display = 'none';

    // Re-enable scrolling
    document.body.style.overflow = 'auto';
}

// Close modal when clicking outside content
window.onclick = function(event) {
    const modal = document.getElementById('videoModal');
    if (event.target == modal) {
        closeVideo();
    }
}
