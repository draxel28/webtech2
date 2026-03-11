async function sendMessage() {
  const input = document.getElementById("message");
  const chat = document.getElementById("chat");

  const message = input.value.trim();
  if (!message) return;

  chat.innerHTML += `<div class="text-right"><span class="bg-blue-500 text-white px-3 py-2 rounded-lg">${message}</span></div>`;

  input.value = "";

  const response = await fetch("/chat", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      message: message,
    }),
  });

  const data = await response.json();

  let reply = data[0]?.generated_text || "No response";

  chat.innerHTML += `<div class="text-left"><span class="bg-gray-200 px-3 py-2 rounded-lg">${reply}</span></div>`;

  chat.scrollTop = chat.scrollHeight;
}
