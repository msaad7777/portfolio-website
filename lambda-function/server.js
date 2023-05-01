const openai = require('openai');

// Add your OpenAI API key here
const openAiApiKey = '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';
openai.apiKey = openAiApiKey;

exports.handler = async (event) => {
  const userInput = JSON.parse(event.body).userInput;

  try {
    const prompt = `Your AI Assistant: ${userInput}`;
    const response = await openai.completion.create({
      engine: 'davinci-codex',
      prompt: prompt,
      max_tokens: 150,
      n: 1,
      stop: null,
      temperature: 0.5,
    });
    const responseText = response.choices[0].text.trim();

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({ responseText }),
    };
  } catch (error) {
    console.error('Error:', error);
    return {
      statusCode: 500,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({ error: 'An error occurred while processing the request' }),
    };
  }
};
