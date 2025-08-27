document.addEventListener('DOMContentLoaded', () => {
    const chatWindow = document.getElementById('chat-window');
    const chatInput = document.getElementById('chat-input');
    const sendBtn = document.getElementById('send-btn');

    sendBtn.addEventListener('click', () => {
        const userMessage = chatInput.value.trim();
        if (userMessage) {
            appendMessage('user', userMessage);
            chatInput.value = '';
            simulateAIResponse(userMessage);
        }
    });

    chatInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            sendBtn.click();
        }
    });

    function appendMessage(sender, message) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message', `${sender}-message`);
        messageElement.textContent = message;
        chatWindow.appendChild(messageElement);
        chatWindow.scrollTop = chatWindow.scrollHeight;
    }

    function simulateAIResponse(userMessage) {
        setTimeout(() => {
            const aiResponse = getAIResponse(userMessage);
            appendMessage('ai', aiResponse);
        }, 500);
    }

    function getAIResponse(userMessage) {
        const lowerCaseUserMessage = userMessage.toLowerCase();
        // Simple predefined responses
        const responses = {
            'hello': 'Hi there! How can I help you today?',
            'how are you?': 'I am just a bot, but I am doing great!',
            'what is your name?': 'I am a simple AI assistant.',
            'default': 'Sorry, I did not understand that. Can you please rephrase?'
        };

        if (lowerCaseUserMessage.includes('gta 5') || lowerCaseUserMessage.includes('gta v')) {
            return "I can't provide real phone numbers, but here are some in-game cheat codes for GTA V on Xbox One that feel like phone numbers: Invincibility: Right, A, Right, Left, Right, RB, Right, Left, A, Y. Max Health & Armor: B, LB, Y, RT, A, X, B, Right, X, LB, LB, LB.";
        }

        return responses[lowerCaseUserMessage] || responses['default'];
    }
});
