const API_KEY = "sk-fde53af35abd42268a21b4b941c5ed13";  // এখানে নতুন key বসাবে

async function sendMessage() {
    let input = document.getElementById("userInput");
    let userText = input.value.trim();
    if (!userText) return;

    addChat("You: " + userText);
    input.value = "";

    let res = await fetch("https://api.deepseek.com/v1/chat/completions", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + API_KEY
        },
        body: JSON.stringify({
            model: "deepseek-chat",
            messages: [{ role: "user", content: userText }]
        })
    });

    let data = await res.json();
    addChat("AI: " + data.choices[0].message.content);
}

function addChat(text) {
    let chat = document.getElementById("chat");
    chat.innerHTML += `<div>${text}</div>`;
    chat.scrollTop = chat.scrollHeight;
}
 
