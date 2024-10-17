const canvas = document.getElementById('colorCanvas');
const ctx = canvas.getContext('2d');

const root = document.getElementById('root');
const colorInput = document.getElementById('colorInput');
const colorPicker = document.getElementById('colorPicker');

const widthInput = document.getElementById('widthInput');
const heightInput = document.getElementById('heightInput');

// Event listeners
colorInput.addEventListener('keyup', () => {
    if(/^#[0-9A-F]{6}$/i.test(colorInput.value)) {
        generateColor(colorInput.value);
    }
});

colorPicker.addEventListener('input', () => {
    colorInput.value = colorPicker.value;
    generateColor(colorPicker.value);
});

widthInput.addEventListener('keyup', generateColor);
heightInput.addEventListener('keyup', generateColor);

// Function to generate color on canvas
function generateColor(color) {
    color = colorPicker.value = colorInput.value;

    // Get width and height from inputs
    let width = parseInt(widthInput.value) || 500;
    let height = parseInt(heightInput.value) || 500;

    // Set canvas dimensions
    canvas.width = width;
    canvas.height = height;

    ctx.fillStyle = color;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    root.style.backgroundColor = color; // Changing color of the root
}

// Function to download the image
function downloadImage() {
    const image = canvas.toDataURL('image/png', 1.0).replace('image/png', 'image/octet-stream');
    const link = document.createElement('a');
    link.donwload = 'solid_color_image.png';
    link.href = image;
    link.click();
}

