const API_KEY = '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';

async function fetchData() {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {

        method: 'POST',
        headers: {
            Authorization: 'Bearer ${API_KEY}',
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            model: "gpt-3.5",
            messages:[
                {
                    role: "user",
                    content: "Hello, how are you today?"
                }
            ]
        })
    })
    const data = await response.json();
    console.log(data);
}

fetchData()