document.addEventListener('DOMContentLoaded', function() {
    // Get all section headers
    const sectionHeaders = document.querySelectorAll('.section-header');
    const videoItems = document.querySelectorAll('.video-item');
    const modal = document.getElementById('video-modal');
    const videoFrame = document.getElementById('video-frame');
    const closeButton = document.querySelector('.close-button');

    // Toggle section content when header is clicked
    sectionHeaders.forEach(header => {
        header.addEventListener('click', function() {
            // Toggle active class on the header
            this.classList.toggle('active');

            // Close all other sections
            sectionHeaders.forEach(otherHeader => {
                if (otherHeader !== this && otherHeader.classList.contains('active')) {
                    otherHeader.classList.remove('active');
                }
            });
        });
    });

    // Play video when a video item is clicked
    videoItems.forEach(item => {
        item.addEventListener('click', function() {
            const videoUrl = this.getAttribute('data-video');
            if (videoUrl) {
                // Set the iframe source to the video URL
                videoFrame.setAttribute('src', `${videoUrl}?autoplay=1`);

                // Show the modal
                modal.classList.add('show');

                // Prevent scrolling on the body
                document.body.style.overflow = 'hidden';
            }
        });
    });

    // Close the modal when the close button is clicked
    closeButton.addEventListener('click', closeModal);

    // Close the modal when clicking outside the content
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });

    // Close the modal when ESC key is pressed
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('show')) {
            closeModal();
        }
    });

    // Function to close the modal
    function closeModal() {
        modal.classList.remove('show');

        // Stop the video by removing the src
        setTimeout(() => {
            videoFrame.setAttribute('src', '');
        }, 300);

        // Re-enable scrolling on the body
        document.body.style.overflow = 'auto';
    }

    // Open the first section by default
    if (sectionHeaders.length > 0) {
        sectionHeaders[0].classList.add('active');
    }
});