// Base prices in Spain
const basePrices = {
    "0.5l": 5,
    "1.5l": 13,
    "8l": 32
};

// Function to update price based on selected country
function updatePrice(selectElement, productSize) {
    const country = selectElement.value;
    const priceElement = selectElement.parentElement.querySelector('.price');

    // Use base price for Spain
    let price = basePrices[productSize];

    // Increase price by 20% in other countries
    if (country !== 'esp') {
        price *= 1.20; // 20% increase
    }

    // Display updated price with two decimals
    priceElement.textContent = `Price: ${price.toFixed(2)}€`;
}

// Event listener to update price when a country is selected
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.country-select').forEach(select => {
        const productSize = select.dataset.size; // Bottle size (0.5l, 1.5l, 8l)
        updatePrice(select, productSize); // Display initial price based on default country

        select.addEventListener('change', function() {
            updatePrice(this, productSize);
        });
    });
});
