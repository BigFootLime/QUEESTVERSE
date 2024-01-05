document.addEventListener('DOMContentLoaded', function () {
    const images = document.querySelectorAll('.img1, .img2, .img3, .img');

    images.forEach(img => {
        img.addEventListener('mouseover', () => document.body.classList.add('darken'));
        img.addEventListener('mouseout', () => document.body.classList.remove('darken'));
    });
});


// JavaScript:

// Function to check if element is in viewport
// JavaScript code
document.addEventListener('DOMContentLoaded', () => {
    // Select the element that you want to observe
    const headsetContainer = document.querySelector('.container-transition-headset');

    const observer = new IntersectionObserver((entries) => {
        // Loop over the entries
        entries.forEach(entry => {
            // If the element is in the viewport
            if (entry.isIntersecting) {
                // Add the zoom-in-view class to the img-headset element
                entry.target.querySelector('.img-headset').classList.add('zoom-in-view');
            } else {
                // Optional: Remove the class if you want the effect to reverse on scroll up
                entry.target.querySelector('.img-headset').classList.remove('zoom-in-view');
            }
        });
    }, {
        rootMargin: '0px',
        threshold: 0.4  // Trigger when 50% of the item is in the viewport
    });

    // Tell the observer which elements to track
    observer.observe(headsetContainer);
});

document.addEventListener('DOMContentLoaded', () => {
    // Select the element that you want to observe
    const headsetContainer = document.querySelector('.container-virtual-world-g');

    const observer = new IntersectionObserver((entries) => {
        // Loop over the entries
        entries.forEach(entry => {
            // If the element is in the viewport
            if (entry.isIntersecting) {
                // Add the zoom-in-view class to the img-headset element
                entry.target.querySelector('.virtual-world-gaming').classList.add('zoom-in-view-g');
            } else {
                // Optional: Remove the class if you want the effect to reverse on scroll up
                entry.target.querySelector('.virtual-world-gaming').classList.remove('zoom-in-view-g');
            }
        });
    }, {
        rootMargin: '0px',
        threshold: 0.4  // Trigger when 50% of the item is in the viewport
    });

    // Tell the observer which elements to track
    observer.observe(headsetContainer);
});

document.addEventListener('DOMContentLoaded', () => {
    // Select the element that you want to observe
    const headsetContainer = document.querySelector('.container-virtual-world');

    const observer = new IntersectionObserver((entries) => {
        // Loop over the entries
        entries.forEach(entry => {
            // If the element is in the viewport
            if (entry.isIntersecting) {
                // Add the zoom-in-view class to the img-headset element
                entry.target.querySelector('.virtual-world-img').classList.add('zoom-in-view-w');
            } else {
                // Optional: Remove the class if you want the effect to reverse on scroll up
                entry.target.querySelector('.virtual-world-img').classList.remove('zoom-in-view-w');
            }
        });
    }, {
        rootMargin: '0px',
        threshold: 0.4  // Trigger when 50% of the item is in the viewport
    });

    // Tell the observer which elements to track
    observer.observe(headsetContainer);
});

document.addEventListener('DOMContentLoaded', function () {
    const virtualWorldImg = document.querySelector('.virtual-world-img');

    virtualWorldImg.addEventListener('mousemove', function (e) {
        const { left, top, width, height } = e.target.getBoundingClientRect();
        const x = e.clientX - left;
        const y = e.clientY - top;

        virtualWorldImg.style.transformOrigin = `${(x / width) * 100}% ${(y / height) * 100}%`;
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const virtualWorldImg = document.querySelector('.virtual-world-gaming');

    virtualWorldImg.addEventListener('mousemove', function (e) {
        const { left, top, width, height } = e.target.getBoundingClientRect();
        const x = e.clientX - left;
        const y = e.clientY - top;

        virtualWorldImg.style.transformOrigin = `${(x / width) * 100}% ${(y / height) * 100}%`;
    });
});

document.addEventListener('DOMContentLoaded', function () {
    var showMoreButtons = document.querySelectorAll('.btn-showmore');

    showMoreButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            var modalId = this.getAttribute('data-modal');
            var modal = document.getElementById(modalId);
            modal.style.display = 'block';
            setTimeout(function () {
                modal.style.opacity = 1;
            }, 10); // Small timeout to allow CSS transition
        });
    });

    var closeButtons = document.querySelectorAll('.close-button');

    closeButtons.forEach(function (button) {
        button.onclick = function () {
            var modal = this.closest('.modal');
            modal.style.opacity = 0;
            setTimeout(function () {
                modal.style.display = 'none';
            }, 500); // Timeout should match CSS transition time
        }
    });

    window.onclick = function (event) {
        if (event.target.className === 'modal') {
            event.target.style.opacity = 0;
            setTimeout(function () {
                event.target.style.display = 'none';
            }, 500); // Timeout should match CSS transition time
        }
    }
});


document.addEventListener('DOMContentLoaded', function () {
    var showMoreButtons = document.querySelectorAll('.btn-showmore1');

    showMoreButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            var modalId = this.getAttribute('data-modal');
            var modal = document.getElementById(modalId);
            modal.style.display = 'block';
            setTimeout(function () {
                modal.style.opacity = 1;
            }, 10); // Small timeout to allow CSS transition
        });
    });

    var closeButtons = document.querySelectorAll('.close-button');

    closeButtons.forEach(function (button) {
        button.onclick = function () {
            var modal = this.closest('.modal');
            modal.style.opacity = 0;
            setTimeout(function () {
                modal.style.display = 'none';
            }, 500); // Timeout should match CSS transition time
        }
    });

    window.onclick = function (event) {
        if (event.target.className === 'modal2') {
            event.target.style.opacity = 0;
            setTimeout(function () {
                event.target.style.display = 'none';
            }, 500); // Timeout should match CSS transition time
        }
    }
});