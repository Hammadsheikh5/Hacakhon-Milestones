"use strict";
const form = document.getElementById('resume-form');
const resumeDisplayElement = document.getElementById('resume-display');
const downloadPdfButton = document.getElementById('download-btn');
const urlButton = document.getElementById('url-btn');
const getUrlLink = document.getElementById('get-url-link');
const copyLinkButton = document.getElementById('copy-link-button');
// Disable buttons initially
urlButton.disabled = true;
copyLinkButton.disabled = true;
// Initialize a variable to store the dynamically generated unique URL for sharing the resume
let uniqueUrl = "";
// Handle form submission
form.addEventListener('submit', (event) => {
    event.preventDefault();
    // Collect input values
    const name = document.getElementById('name').value;
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const education = document.getElementById('education').value;
    const experience = document.getElementById('experience').value;
    const skills = document.getElementById('skills').value;
    // Save form data in localStorage
    const resumeData = { name, email, phone, education, experience, skills, uniqueUrl };
    localStorage.setItem(username, JSON.stringify(resumeData));
    // Generate the resume content dynamically
    const resumeHTML = `
        <h2 contenteditable="true"><b>${name}'s Resume</b></h2>
        <h3>Personal Information</h3>
        <p><b>Name:</b> <span contenteditable="true">${name}</span></p>
        <p><b>Email:</b> <span contenteditable="true">${email}</span></p>
        <p><b>Phone:</b> <span contenteditable="true">${phone}</span></p>
        <h3>Education</h3>
        <p contenteditable="true"><b>${education}</b></p>
        <h3>Experience</h3>
        <p contenteditable="true"><b>${experience}</b></p>
        <h3>Skills</h3>
        <p contenteditable="true"><b>${skills}</b></p>
    `;
    resumeDisplayElement.innerHTML = resumeHTML;
    // Enable buttons
    urlButton.disabled = false;
    copyLinkButton.disabled = false;
    // Handle download as PDF
    downloadPdfButton.addEventListener('click', () => {
        const printWindow = window.open('', '', 'width=800,height=600');
        printWindow === null || printWindow === void 0 ? void 0 : printWindow.document.write(`<html><head><title>${name}'s Resume</title></head><body>${resumeHTML}</body></html>`);
        printWindow === null || printWindow === void 0 ? void 0 : printWindow.document.close();
        printWindow === null || printWindow === void 0 ? void 0 : printWindow.focus();
        printWindow === null || printWindow === void 0 ? void 0 : printWindow.print();
        printWindow === null || printWindow === void 0 ? void 0 : printWindow.close();
    });
    // Generate a unique URL
    const myName = username.toLowerCase().replace(/\s+/g, "-");
    const baseUrl = window.location.origin + window.location.pathname;
    uniqueUrl = `${baseUrl}?user=${myName}`;
    // Set the unique URL for sharing
    urlButton.addEventListener('click', () => {
        getUrlLink.setAttribute("href", uniqueUrl);
    });
    // Add event listener for the "Copy Address" button
    copyLinkButton.addEventListener('click', () => {
        navigator.clipboard.writeText(uniqueUrl).then(() => {
            alert("Copy Successfully");
        });
    });
});
// Auto-populate resume from URL
window.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const user = urlParams.get('user');
    if (user) {
        const resumeData = localStorage.getItem(user);
        if (resumeData) {
            const { name, email, phone, education, experience, skills } = JSON.parse(resumeData);
            const resumeHTML = `
                <h2 contenteditable="true"><b>${name}'s Resume</b></h2>
                <h3>Personal Information</h3>
                <p><b>Name:</b> <span contenteditable="true">${name}</span></p>
                <p><b>Email:</b> <span contenteditable="true">${email}</span></p>
                <p><b>Phone:</b> <span contenteditable="true">${phone}</span></p>
                <h3>Education</h3>
                <p contenteditable="true"><b>${education}</b></p>
                <h3>Experience</h3>
                <p contenteditable="true"><b>${experience}</b></p>
                <h3>Skills</h3>
                <p contenteditable="true"><b>${skills}</b></p>
            `;
            resumeDisplayElement.innerHTML = resumeHTML;
            // Enable buttons as a new tab
            urlButton.disabled = false;
            copyLinkButton.disabled = false;
            // Add event listener for the "Copy Address" button as a new tab
            copyLinkButton.addEventListener('click', () => {
                navigator.clipboard.writeText(uniqueUrl).then(() => {
                    alert("Copy Successfully");
                });
            });
            // Handle download as PDF as a new tab
            downloadPdfButton.addEventListener('click', () => {
                const printWindow = window.open('', '', 'width=800,height=600');
                printWindow === null || printWindow === void 0 ? void 0 : printWindow.document.write(`<html><head><title>${name}'s Resume</title></head><body>${resumeHTML}</body></html>`);
                printWindow === null || printWindow === void 0 ? void 0 : printWindow.document.close();
                printWindow === null || printWindow === void 0 ? void 0 : printWindow.focus();
                printWindow === null || printWindow === void 0 ? void 0 : printWindow.print();
                printWindow === null || printWindow === void 0 ? void 0 : printWindow.close();
            });
        }
    }
});
