export const sendMessageToGemini = async (
  history: { role: string; parts: { text: string }[] }[],
  newMessage: string
): Promise<string> => {
  try {
    const res = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ history, newMessage }),
    });

    if (!res.ok) {
      const data = await res.json().catch(() => ({}));
      const msg = data?.error || `Server error (${res.status})`;
      return `Sorry, the assistant is unavailable: ${msg}.`;
    }

    const data = await res.json();
    return data?.text || "I couldn't generate a response. Please try again.";
  } catch (error) {
    console.error('Chat API error:', error);
    return "I'm having trouble connecting right now. Please try again later.";
  }
};