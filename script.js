const imageContainer = document.getElementById("image-container");
const resetBtn = document.getElementById("reset");
const verifyBtn = document.getElementById("verify");
const message = document.getElementById("para");
const prompt = document.getElementById("h");

let images = [
  "https://picsum.photos/id/237/200/300",
  "https://picsum.photos/seed/picsum/200/300",
  "https://picsum.photos/200/300?grayscale",
  "https://picsum.photos/200/300/",
  "https://picsum.photos/200/300.jpg"
];

let selectedImages = [];

function shuffleAndDisplayImages() {
  const duplicateIndex = Math.floor(Math.random() * images.length);
  const duplicatedImage = images[duplicateIndex];
  const imagePool = [...images, duplicatedImage];

  for (let i = imagePool.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [imagePool[i], imagePool[j]] = [imagePool[j], imagePool[i]];
  }

  imageContainer.innerHTML = "";
  imagePool.forEach((imgSrc) => {
    const img = document.createElement("img");
    img.src = imgSrc;
    img.dataset.src = imgSrc;
    img.addEventListener("click", () => handleImageClick(img));
    imageContainer.appendChild(img);
  });

  resetState();
}

function handleImageClick(img) {
  if (selectedImages.includes(img)) return;
  if (selectedImages.length === 2) return;

  img.classList.add("selected");
  selectedImages.push(img);

  if (selectedImages.length > 0) {
    resetBtn.style.display = "inline-block";
  }

  if (selectedImages.length === 2) {
    verifyBtn.style.display = "inline-block";
  }
}

resetBtn.addEventListener("click", resetState);

verifyBtn.addEventListener("click", () => {
  verifyBtn.style.display = "none";
  const [img1, img2] = selectedImages;
  const src1 = img1.dataset.src;
  const src2 = img2.dataset.src;

  if (src1 === src2) {
    message.textContent = "You are a human. Congratulations!";
  } else {
    message.textContent = "We can't verify you as a human. You selected the non-identical tiles.";
  }
});

function resetState() {
  selectedImages.forEach(img => img.classList.remove("selected"));
  selectedImages = [];
  resetBtn.style.display = "none";
  verifyBtn.style.display = "none";
  message.textContent = "";
  prompt.textContent = "Please click on the identical tiles to verify that you are not a robot.";
}

shuffleAndDisplayImages();