document.addEventListener("DOMContentLoaded", () => {

    // Function to show center message
    function showMessage(message) {
        let modal = document.createElement("div");
        modal.classList.add("custom-modal");
        modal.innerHTML = `
            <div class="custom-modal-content">
                <p>${message}</p>
                <button id="closeModal">OK</button>
            </div>
        `;
        document.body.appendChild(modal);

        document.getElementById("closeModal").addEventListener("click", () => {
            modal.remove();
        });
    }

    // Function to validate phone
    function isValidPhone(phone) {
        return /^\d{10}$/.test(phone);
    }

    /* =============================
       ORDER PAGE
    ============================== */
    const orderForm = document.querySelector(".order-form");
    if (orderForm) {
        orderForm.addEventListener("submit", function (e) {
            e.preventDefault();

            const phone = document.getElementById("phone").value.trim();

            if (!isValidPhone(phone)) {
                showMessage("Please enter a valid 10-digit phone number.");
                return;
            }

            showMessage("Order placed successfully! Thank you for choosing FoodieHub.");
            orderForm.reset();
        });
    }

    /* =============================
       PAYMENT PAGE
    ============================== */
    const paymentBtn = document.getElementById("paymentBtn");
    if (paymentBtn) {
        paymentBtn.addEventListener("click", () => {
            showMessage("Payment successful! Your order has been confirmed.");
        });
    }    /* =============================
       RESERVATION PAGE
    ============================== */
    const reservationForm = document.querySelector(".reservation-form");
    if (reservationForm) {
        reservationForm.addEventListener("submit", function (e) {
            e.preventDefault();

            const phone = document.getElementById("phone").value.trim();

            if (!isValidPhone(phone)) {
                showMessage("Please enter a valid 10-digit phone number.");
                return;
            }

            showMessage("Table reserved successfully! We look forward to serving you.");
            reservationForm.reset();
        });
    }

    /* =============================
       CONTACT PAGE
    ============================== */
    const contactForm = document.querySelector(".contact-form");
    if (contactForm) {
        contactForm.addEventListener("submit", function (e) {
            e.preventDefault();

            const phone = document.getElementById("phone").value.trim();

            if (!isValidPhone(phone)) {
                showMessage("Please enter a valid 10-digit phone number.");
                return;
            }

            showMessage("Feedback sent successfully! We appreciate your time.");
            contactForm.reset();
        });
    }

});
