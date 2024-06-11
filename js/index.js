const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link');

navToggle.addEventListener('click', () => {
  document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    document.body.classList.remove('nav-open');
  })
});

// get video element
var video = document.querySelector('video');

// listen for scroll events
window.addEventListener('scroll', function() {
    // get position of video element relative to viewport
    var rect = video.getBoundingClientRect();

    // check if video is in view
    if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
        // video is in view, play it
        video.play();
    } else {
        // video is out of view, pause it
        video.pause();
    }
});

// CHATBOT

// Get DOM elements
const chatbotContainer = document.getElementById('chatbot-container');
const chatbotMessages = document.getElementById('chatbot-messages');
const chatbotForm = document.getElementById('chatbot-form');
const chatbotInput = document.getElementById('chatbot-input');
const chatbotSubmit = document.getElementById('chatbot-submit');

async function submitMessage(event) {
  event.preventDefault(); // Prevent the form from submitting and refreshing the page

  // Get user input
  const userInput = chatbotInput.value;

  // Add user input to chatbot messages
  chatbotMessages.innerHTML += `<div class="chatbot-message chatbot-message-user">${userInput}</div>`;

  // Clear user input
  chatbotInput.value = '';

  // Get response from backend service
  const responseText = await sendMessageToCodeBot(userInput);

  // Handle the response from the backend service
  // and display the chatbot's response to the user
  chatbotMessages.innerHTML += `<div class="chatbot-message chatbot-message-bot">${responseText}</div>`;
  chatbotContainer.scrollTop = chatbotContainer.scrollHeight;
}

// Add event listener to button
chatbotSubmit.addEventListener('click', submitMessage);

// Add event listener to handle 'Enter' key press in the input field
chatbotInput.addEventListener('keypress', e => {
  if (e.key === 'Enter') {
    e.preventDefault(); // Prevent form submission
    chatbotSubmit.click(); // Trigger the click event on the 'Send' button
  }
});

async function sendMessageToCodeBot(userInput) {
  const response = await fetch('https://djjjwa2ev2.execute-api.us-east-1.amazonaws.com/Prod', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      userInput: userInput
    }),
  });

  const responseData = await response.text();
  return responseData;
}
