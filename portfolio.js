// Navigation functionality
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section');

navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    
    // Remove active class from all links
    navLinks.forEach(link => link.classList.remove('active'));
    
    // Add active class to clicked link
    link.classList.add('active');
    
    const targetSection = link.getAttribute('data-section');
    
    // Hide all sections
    sections.forEach(section => {
      section.classList.remove('active');
    });
    
    // Show target section
    document.getElementById(targetSection).classList.add('active');
  });
});

// Preloader
window.addEventListener('load', () => {
  setTimeout(() => {
    const preloader = document.getElementById('preloader');
    preloader.style.opacity = '0';
    setTimeout(() => {
      preloader.style.display = 'none';
    }, 500);
  }, 1500);
});

// Animate skill bars when about section is visible
function animateSkills() {
  const skillBars = document.querySelectorAll('.skill-progress');
  skillBars.forEach(bar => {
    const width = bar.getAttribute('data-width');
    bar.style.width = width + '%';
  });
}

// Add event listener to the About nav link
document.querySelector('[data-section="about"]').addEventListener('click', () => {
  setTimeout(animateSkills, 300);
});

// Chatbot functionality
document.addEventListener('DOMContentLoaded', function() {
  const toggleChat = document.getElementById('toggleChat');
  const chatWindow = document.getElementById('chatWindow');
  const messagesArea = document.getElementById('messagesArea');
  const messageInput = document.getElementById('messageInput');
  const sendButton = document.getElementById('sendButton');
  const buttonText = document.getElementById('buttonText');
  let isOpen = false;

  // Toggle chat window
  toggleChat.addEventListener('click', function() {
    isOpen = !isOpen;
    chatWindow.style.display = isOpen ? 'flex' : 'none';
    
    if (isOpen) {
      buttonText.textContent = 'Close';
      toggleChat.innerHTML = '<span class="chat-icon">×</span><span id="buttonText">Close</span>';
    } else {
      buttonText.textContent = 'Chat with SapiensAI';
      toggleChat.innerHTML = '<span class="chat-icon">💬</span><span id="buttonText">Chat with SapiensAI</span>';
    }
  });

  // Send message function
  function sendMessage() {
    const message = messageInput.value.trim();
    if (message === '') return;

    // Add user message
    addMessage(message, 'user');
    messageInput.value = '';

    // Simulate bot response
    setTimeout(function() {
      const responses = [
        "I'm an Ai Chatbot model of SapiensAi, I'm here to assist you with Tushar Upadhyay's Portfolio. His skills, Experience and Overall Personality.",
        "I'm currently in under my devlopment stage, So I can't generate responses accurately.",
        "'Tushar Upadhyay' is a B. Tech (Data Science) Student at 'SDITS Khandwa (MP)'",
        "That's fascinating. Let me think about that for a moment."
      ];
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      addMessage(randomResponse, 'bot');
    }, 1000);
  }

  // Add message to chat
  function addMessage(text, sender) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message');
    messageElement.classList.add(sender === 'user' ? 'user-message' : 'bot-message');
    messageElement.textContent = text;
    messagesArea.appendChild(messageElement);
    
    // Scroll to bottom
    messagesArea.scrollTop = messagesArea.scrollHeight;
  }

  // Send message on button click
  sendButton.addEventListener('click', sendMessage);

  // Send message on Enter key
  messageInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
      sendMessage();
    }
  });
});