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
    // Define the YouTube video URLs
    const videoPaths = {
        printer1: 'https://www.youtube.com/embed/NYzXnKsG1KU?autoplay=1' // Example YouTube video URL
        printer2: 'https://www.youtube.com/embed/YOUR_VIDEO_ID',
        printer3: 'https://www.youtube.com/embed/YOUR_VIDEO_ID',
        windows1: 'https://www.youtube.com/embed/YOUR_VIDEO_ID',
        windows2: 'https://www.youtube.com/embed/YOUR_VIDEO_ID',
        windows3: 'https://www.youtube.com/embed/YOUR_VIDEO_ID',
        // Add more video URLs as necessary
    };

    // Get the iframe element
    const iframe = document.getElementById("youtubeIframe");

    // Update the iframe src based on the videoId
    iframe.src = videoPaths[videoId];

    // Get the modal and show it
    const modal = document.getElementById("CVM-videoModal");
    modal.style.display = "block";
}

// Close video modal
function closeVideo() {
    const modal = document.getElementById('CVM-videoModal');
    modal.style.display = 'none';

    // Re-enable scrolling (if you disabled it)
    document.body.style.overflow = 'auto';

    // Reset the iframe source to stop the video from playing
    const iframe = document.getElementById("youtubeIframe");
    iframe.src = '';
}

window.onclick = function(event) {
    const modal = document.getElementById('CVM-videoModal');
    const modalContent = document.querySelector('.CVM-modal-content'); // Select the modal content
    if (event.target == modal && !modalContent.contains(event.target)) {
        closeVideo();
    }
}
