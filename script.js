const images = document.querySelectorAll(".images img");
const resetBtn = document.getElementById("reset");
const verifyBtn = document.getElementById("verify");

let selectedCount = 0;

// Handle image click
images.forEach((img) => {
  img.addEventListener("click", () => {
    if (!img.classList.contains("selected")) {
      img.classList.add("selected");
      selectedCount++;
    } else {
      img.classList.remove("selected");
      selectedCount--;
    }

    // Show buttons if at least one is selected
    if (selectedCount > 0) {
      resetBtn.style.display = "inline-block";
      verifyBtn.style.display = "inline-block";
    } else {
      resetBtn.style.display = "none";
      verifyBtn.style.display = "none";
    }
  });
});

// Reset button logic
resetBtn.addEventListener("click", () => {
  images.forEach((img) => img.classList.remove("selected"));
  selectedCount = 0;
  resetBtn.style.display = "none";
  verifyBtn.style.display = "none";
});

// Verify button logic
verifyBtn.addEventListener("click", () => {
  alert("Verification Successful!");
});
