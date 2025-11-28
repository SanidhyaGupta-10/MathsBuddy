export function useChat() {
  const [messages, setMessages] = useState([]);
  const [isStreaming, setIsStreaming] = useState(false);

  // Premium check
  const isPremium =
    typeof window !== "undefined" &&
    localStorage.getItem("premium") === "true";

  // Free users daily limit
  const FREE_LIMIT = 20;

  const getCount = () => {
    if (typeof window === "undefined") return 0;

    const stored = localStorage.getItem("dailyCount");
    const date = localStorage.getItem("dailyDate");
    const today = new Date().toDateString();

    // new day → reset
    if (date !== today) {
      localStorage.setItem("dailyCount", "0");
      localStorage.setItem("dailyDate", today);
      return 0;
    }
    return stored ? parseInt(stored) : 0;
  };

  const incrementCount = () => {
    const today = new Date().toDateString();
    const count = getCount() + 1;
    localStorage.setItem("dailyCount", count.toString());
    localStorage.setItem("dailyDate", today);
  };

  // ---------------------------------------------------------
  // SEND MESSAGE FUNCTION (your screenshot)
  // ---------------------------------------------------------
  const sendMessage = async (text) => {

    // ⭐ FREE USER LIMIT CHECK ⭐
    if (!isPremium) {
      const count = getCount();
      if (count >= FREE_LIMIT) {
        alert("Free limit reached! Upgrade to continue.");
        return;
      }
      incrementCount();
    }

    // ADD USER MESSAGE
    const newMsg = { role: "user", content: text };
    setMessages((prev) => [...prev, newMsg]);

    setIsStreaming(true);

    // HIT STREAMING API
    const res = await fetch("/api/chat", {
      method: "POST",
      body: JSON.stringify({ messages: [...messages, newMsg] })
    });

    const reader = res.body.getReader();
    const decoder = new TextDecoder();

    // ADD STREAMING TEXT
    let assistantMsg = { role: "assistant", content: "" };
    setMessages((prev) => [...prev, assistantMsg]);

    while (true) {
      const { value, done } = await reader.read();
      if (done) break;

      assistantMsg.content += decoder.decode(value);

      setMessages((prev) => {
        const updated = [...prev];
        updated[updated.length - 1] = { ...assistantMsg };
        return updated;
      });
    }

    setIsStreaming(false);
  };

  return { messages, sendMessage, isStreaming, isPremium, getCount };
}
