function generateImage() {
    let category = document.getElementById("category").value;
    let image = document.getElementById("imageUpload").files[0];

    if (!image) {
        alert("Please upload an image.");
        return;
    }

    let outputImage = document.getElementById("generatedImage");
    outputImage.src = URL.createObjectURL(image);
    outputImage.style.display = "block";
}