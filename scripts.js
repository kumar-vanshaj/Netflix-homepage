// scripts.js

// Example data for content
const contentData = [
  { title: "Breaking Bad", type: "TV Show" },
  { title: "The Godfather", type: "Movie" },
  // Add more content here...
];

// Function to display content
function displayContent() {
  const contentSection = document.querySelector(".content");
  contentData.forEach(item => {
    const contentItem = document.createElement("div");
    contentItem.classList.add("content-item");
    contentItem.innerHTML = `
      <h2>${item.title}</h2>
      <p>${item.type}</p>
    `;
    contentSection.appendChild(contentItem);
  });
}

// Call the function to display content when the page loads
window.onload = displayContent;
