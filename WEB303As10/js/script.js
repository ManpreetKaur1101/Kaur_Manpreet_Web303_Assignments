// Function to populate the country dropdown dynamically
function populateCountries() {
    const countryDropdown = document.getElementById('country');
    countries.forEach(country => {
        const option = document.createElement('option');
        option.value = country.code;
        option.textContent = country.name;
        countryDropdown.appendChild(option);
    });
}

// Function to validate form and enable/disable submit button
function validateForm() {
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const termsCheckbox = document.getElementById('termsCheckbox');
    const countryDropdown = document.getElementById('country');
    const submitBtn = document.getElementById('submitBtn');

    const isUsernameValid = username !== '';
    const isPasswordValid = password.length >= 12;
    const isConfirmPasswordValid = confirmPassword === password;
    const isTermsAccepted = termsCheckbox.checked;
    const isCountrySelected = countryDropdown.value !== '';

    submitBtn.disabled = !(isUsernameValid && isPasswordValid && isConfirmPasswordValid && isTermsAccepted && isCountrySelected);
}

// Function to handle form submission
function submitForm() {
    const username = document.getElementById('username').value.trim();
    const country = document.getElementById('country').value;

    const welcomeMessage = document.getElementById('welcomeMessage');
    welcomeMessage.textContent = `Welcome ${username}! The country code you selected is ${country}.`;

    document.getElementById('registrationForm').classList.add('hidden');
    welcomeMessage.classList.remove('hidden');
}

// Initialize the form and country dropdown
populateCountries();