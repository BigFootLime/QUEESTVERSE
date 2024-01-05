document.addEventListener('DOMContentLoaded', function () {
    const headsetPrice = 279.99; // Base price of one headset
    let quantity = 1;
    let totalCost = 0;

    // Function to update total cost
    function updateTotalCost() {
        totalCost = quantity * headsetPrice;
        document.getElementById('totalCost').innerText = `$${totalCost.toFixed(2)}`;
    }

    // Add quantity control (minus, quantity display, plus)
    const itemDiv = document.querySelector('.text-white.flex.items-center.justify-between');

    const minusButton = document.createElement('button');
    minusButton.innerText = '-';
    minusButton.style.borderRadius = '26px';
    minusButton.style.marginRight = '10px';
    // ... Add other styles similar to .proceedToPayment

    const quantityDisplay = document.createElement('span');
    quantityDisplay.innerText = quantity;
    quantityDisplay.style.marginRight = '10px';
    // ... Add styling for the display

    const plusButton = document.createElement('button');
    plusButton.innerText = '+';
    plusButton.style.borderRadius = '26px';
    // ... Add other styles similar to .proceedToPayment

    // Event listeners for plus and minus buttons
    minusButton.addEventListener('click', function () {
        if (quantity > 1) {
            quantity--;
            quantityDisplay.innerText = quantity;
            updateTotalCost();
        }
    });

    plusButton.addEventListener('click', function () {
        quantity++;
        quantityDisplay.innerText = quantity;
        updateTotalCost();
    });

    itemDiv.insertBefore(plusButton, itemDiv.firstChild);
    itemDiv.insertBefore(quantityDisplay, itemDiv.firstChild);
    itemDiv.insertBefore(minusButton, itemDiv.firstChild);

    // Initialize total cost
    updateTotalCost();

    // Clear basket functionality
    document.getElementById('clearBasket').addEventListener('click', function () {
        quantity = 1;
        quantityDisplay.innerText = quantity;
        updateTotalCost();
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const images = document.querySelectorAll('.carousel-image');
    let currentIndex = 0;

    function showImage(index) {
        images.forEach(image => image.classList.remove('block'));
        images.forEach(image => image.classList.add('hidden'));
        images[index].classList.add('block');
        images[index].classList.remove('hidden');
    }

    document.getElementById('carouselPrev').addEventListener('click', function () {
        currentIndex = currentIndex > 0 ? currentIndex - 1 : images.length - 1;
        showImage(currentIndex);
    });

    document.getElementById('carouselNext').addEventListener('click', function () {
        currentIndex = currentIndex < images.length - 1 ? currentIndex + 1 : 0;
        showImage(currentIndex);
    });

    showImage(currentIndex); // Initialize the carousel with the first image
});


$(document).ready(function () {
    //For Card Number formatted input
    var cardNum = document.getElementById('cr_no');
    cardNum.onkeyup = function (e) {
        if (this.value == this.lastValue) return;
        var caretPosition = this.selectionStart;
        var sanitizedValue = this.value.replace(/[^0-9]/gi, '');
        var parts = [];
        for (var i = 0, len = sanitizedValue.length; i < len; i += 4) { parts.push(sanitizedValue.substring(i, i + 4)); } for (var i = caretPosition - 1; i >= 0; i--) {
            var c = this.value[i];
            if (c < '0' || c > '9') {
                caretPosition--;
            }
        }
        caretPosition += Math.floor(caretPosition / 4);
        this.value = this.lastValue = parts.join(' ');
        this.selectionStart = this.selectionEnd = caretPosition;
    }
    //For Date formatted input
    var expDate = document.getElementById('exp');
    expDate.onkeyup = function (e) {
        if (this.value == this.lastValue) return;
        var caretPosition = this.selectionStart;
        var sanitizedValue = this.value.replace(/[^0-9]/gi, '');
        var parts = [];
        for (var i = 0, len = sanitizedValue.length; i < len; i += 2) { parts.push(sanitizedValue.substring(i, i + 2)); } for (var i = caretPosition - 1; i >= 0; i--) {
            var c = this.value[i];
            if (c < '0' || c > '9') {
                caretPosition--;
            }
        }
        caretPosition += Math.floor(caretPosition / 2);
        this.value = this.lastValue = parts.join('/');
        this.selectionStart = this.selectionEnd = caretPosition;
    }
});