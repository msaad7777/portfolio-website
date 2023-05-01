const openai = require('openai');

// Export the handler function for AWS Lambda
exports.handler = async (event) => {
  const openAiApiKey = process.env.OPENAI_API_KEY;
  openai.apiKey = openAiApiKey;
  
  const userInput = JSON.parse(event.body).userInput;

  // Process the userInput and generate a response
  try {
    const prompt = `Your AI Assistant: ${userInput}`;
    const response = await openai.Completion.create({
      engine: 'text-davinci-002', // Choose the engine you'd like to use
      prompt: prompt,
      max_tokens: 150, // Adjust the response length
      n: 1,
      stop: null,
      temperature: 0,
    });
    const responseText = response.choices[0].text.trim();

    // Return the response in the required format
    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': 'https://www.msaad.co.in',
      },
      body: JSON.stringify({ responseText }),
    };
  } catch (error) {
    console.error('Error:', error);
    return {
      statusCode: 500,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': 'https://www.msaad.co.in',
      },
      body: JSON.stringify({ error: 'An error occurred while processing the request' }),
    };
  }
};
