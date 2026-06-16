const rounds = [
    { title: "Pyramid Principle", text: "4月盘点关键词资产... (填入你的内容)" },
    { title: "MECE Principle", text: "Meta 认证完成... (填入你的内容)" }
];
let currentRound = 0;

function saveKey() {
    sessionStorage.setItem('apiKey', document.getElementById('api-key').value);
    document.getElementById('auth-screen').style.display = 'none';
    document.getElementById('main-content').style.display = 'block';
    renderRound();
}

async function runAI() {
    const key = sessionStorage.getItem('apiKey');
    const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ messages: [{role: 'user', content: "帮我改写这段话..."}], apiKey: key })
    });
    // 这里处理流式输出...
}
