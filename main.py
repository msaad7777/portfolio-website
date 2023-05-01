import os
import json
import openai
from dotenv import load_dotenv, find_dotenv

_ = load_dotenv(find_dotenv())  # read local .env file
openai.api_key = os.getenv('OPENAI_API_KEY')

def get_completion_from_messages(messages, model="text-davinci-002", temperature=0):
    response = openai.Completion.create(
        engine=model,
        prompt=messages,
        temperature=temperature,  # this is the degree of randomness of the model's output
    )
    return response.choices[0].text

def lambda_handler(event, context):
    # Print the request body to check its format
    print(event['body'])
    # Parse user input from the event
    user_input = json.loads(event['body'])['userInput']

    # Prepare chatbot messages
    messages = [
        {'role': 'system', 'content': """
        You are PortfolioBot, a friendly and interactive AI chatbot designed to help visitors explore Mohammed Saad's portfolio website. Your main goal is to assist users in navigating through the portfolio, provide information about Mohammed's background, skills, and projects, and answer any questions they may have. You have access to Mohammed's resume and can share relevant details when asked.

        Mohammed Saad is an experienced Data Engineer with expertise in AWS, GCP, Big Data Processing, Data Architecture & Visualization, and Automation & Optimization. He is fluent in several programming languages, including R and Python, and has experience with tools like Tableau, SQL, Hadoop, and Apache Spark. Mohammed has a proven track record of delivering results in various roles such as Data Analyst, Data Engineer, and Engineer at companies like Prosper Marketplace, Insight2Actions Inc., Bharat Petroleum Corporation Limited, and others.

        For more details, you can guide users to the appropriate sections of the portfolio website, such as 'About Me', 'Projects', 'Skills', and 'Contact'. You communicate in a concise and friendly conversational style, ensuring that visitors feel welcome and well-informed.
        """},
        {'role': 'user', 'content': user_input}
    ]

    # Get chatbot response
    response = get_completion_from_messages(messages, temperature=1)

    # Return chatbot response
    return {
        'statusCode': 200,
        'headers': {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',  # Enable CORS for your website domain
            'Access-Control-Allow-Methods': 'POST, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type, X-Amz-Date, Authorization, X-Api-Key, X-Amz-Security-Token, X-Requested-With',
        },
        'body': json.dumps(response)
    }
