// Get references to form elements and display containers
const form = document.getElementById("resume-form") as HTMLFormElement;
const resumeDisplayElement = document.getElementById("resume-display") as HTMLDivElement;
const shareableLinkContainer = document.getElementById("shareable-link-container") as HTMLDivElement;
const shareableLink = document.getElementById("shareable-link") as HTMLAnchorElement;
const downloadButton = document.getElementById("download-pdf") as HTMLButtonElement;

// Handle form submission
form.addEventListener("submit", (event: Event) => {
    event.preventDefault(); // Prevent page reload

    // Collect input values
    const username = (document.getElementById("username") as HTMLInputElement).value;
    const name = (document.getElementById("name") as HTMLInputElement).value;
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const phone = (document.getElementById("phone") as HTMLInputElement).value;
    const education = (document.getElementById("education") as HTMLTextAreaElement).value;
    const experience = (document.getElementById("experience") as HTMLTextAreaElement).value;
    const skills = (document.getElementById("skills") as HTMLTextAreaElement).value;

    // Generate the resume content dynamically
    const resumeHTML = `
        <h2><b>Resume</b></h2>
        <h3>Personal Information</h3>
        <p><b>User Name:</b> ${username}</p>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>
        
        <h3>Education</h3>
        <p>${education}</p>
        
        <h3>Experience</h3>
        <p>${experience}</p>
        
        <h3>Skills</h3>
        <p>${skills}</p>
    `;

    // Display the generated resume
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
        shareableLinkContainer.style.display = "block"; // Show the shareable link and download option
    } else {
        console.error("The resume display element is missing");
    }

    // Generate shareable link
    generateShareableLink();
});

// Function to generate a shareable link (simulated for now)
function generateShareableLink() {
    const currentURL = window.location.href;
    const uniqueID = Date.now(); // Simulate a unique ID (or use a real ID from the server)
    shareableLink.href = `${currentURL}?id=${uniqueID}`;
    shareableLink.textContent = `${currentURL}?id=${uniqueID}`;
}

// Handle PDF download (additional library needed for PDF conversion, e.g., jsPDF)
downloadButton.addEventListener("click", () => {
    const docContent = resumeDisplayElement.innerHTML;

    // Convert HTML content to PDF using a library like jsPDF
    // For now, this part is just a placeholder for actual PDF generation logic
    alert("PDF Download feature is a placeholder. Please integrate a library like jsPDF.");
});
