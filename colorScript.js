document.addEventListener('DOMContentLoaded', function () {
    const colorPicker = document.getElementById('colorPicker');
    const colorDisplay = document.getElementById('colorDisplay');
    const opacitySlider = document.getElementById('opacitySlider');
    const resetButton = document.getElementById('resetButton');
    const randomColorButton = document.getElementById('randomColorButton');
    const colorInput = document.getElementById('color-code-input');
    const copyBtn = document.getElementById('copy-btn');

    // Function to update color display and input box
    function updateColorDisplay(color) {
        colorDisplay.style.backgroundColor = color;
        colorInput.value = color; // Update the color code input
    }

    // Change background color based on color input
    colorPicker.addEventListener('input', function () {
        updateColorDisplay(colorPicker.value);
    });

    // Change opacity based on the slider
    opacitySlider.addEventListener('input', function () {
        colorDisplay.style.opacity = opacitySlider.value / 100;
    });

    // Reset color and opacity
    resetButton.addEventListener('click', function () {
        colorPicker.value = '#ffffff';
        updateColorDisplay('#ffffff');
        opacitySlider.value = 100;
        colorDisplay.style.opacity = 1;
    });

    // Generate random color
    randomColorButton.addEventListener('click', function () {
        const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
        colorPicker.value = randomColor;
        updateColorDisplay(randomColor);
    });

    // Copy color code to clipboard
    copyBtn.addEventListener('click', async () => {
        const colorCode = colorInput.value;
        try {
            await navigator.clipboard.writeText(colorCode);
            alert('Color code copied to clipboard!');
        } catch (error) {
            console.error('Error copying to clipboard:', error);
        }
    });
});
