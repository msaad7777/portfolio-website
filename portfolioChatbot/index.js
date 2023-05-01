
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

 // Send user input to the backend service and get the response
  const response = await sendMessageToCodeBot(userInput);

  // Extract the response text from the JSON response
  const responseJson = await response.json();
  const botMessage = responseJson.responseText;
  chatbotMessages.innerHTML += `<div class="chatbot-message chatbot-message-bot">${botMessage}</div>`;
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

  const responseData = await response.json();
  return responseData;
}