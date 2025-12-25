"use client";

import { useState, useEffect } from "react";

export default function ChatBox() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [isSending, setIsSending] = useState(false);
  const [error, setError] = useState("");

  // ⭐ Chat History
  const [chats, setChats] = useState([]);
  const [activeChatId, setActiveChatId] = useState(null);

  // ⭐ Premium
  const [chatCount, setChatCount] = useState(0);
  const [showPremiumPopup, setShowPremiumPopup] = useState(false);

  // Load saved chats on mount
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("mathsBuddyChats")) || [];
    setChats(saved);

    // Auto-load first chat OR create new
    if (saved.length > 0) {
      setActiveChatId(saved[0].id);
      setMessages(saved[0].messages);
    } else {
      startNewChat();
    }
  }, []);

  // Save chats whenever messages change
  useEffect(() => {
    if (!activeChatId) return;

    const updated = chats.map((ch) =>
      ch.id === activeChatId ? { ...ch, messages } : ch
    );

    setChats(updated);
    localStorage.setItem("mathsBuddyChats", JSON.stringify(updated));
  }, [messages]);

  // Create new chat
  const startNewChat = () => {
    const newChat = {
      id: Date.now(),
      name: "New Chat",
      messages: [
        {
          role: "assistant",
          content: "Hi! I'm MathsBuddy. Ask me any math question.",
        },
      ],
    };

    const updatedChats = [newChat, ...chats];
    setChats(updatedChats);
    setActiveChatId(newChat.id);
    setMessages(newChat.messages);
    localStorage.setItem("mathsBuddyChats", JSON.stringify(updatedChats));
  };

  // Switch chat
  const loadChat = (chatId) => {
    const found = chats.find((c) => c.id === chatId);
    if (found) {
      setActiveChatId(chatId);
      setMessages(found.messages);
    }
  };

  // Send message
  const sendMessage = async () => {
    if (!input.trim()) return;
    if (isSending) return;

    const userMsg = { role: "user", content: input.trim() };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setError("");

    // Premium logic
    setChatCount((c) => {
      const next = c + 1;
      if (next === 10 || next % 10 === 0) {
        setShowPremiumPopup(true);
      }
      return next;
    });

    setIsSending(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMsg.content }),
      });

      const data = await res.json();

      const botMsg = {
        role: "assistant",
        content: data.reply || "I'm not sure, try again.",
      };

      setMessages((prev) => [...prev, botMsg]);
    } catch (err) {
      setError("Failed to connect. Try again.");
    } finally {
      setIsSending(false);
    }
  };

  // Premium Popup
  const PremiumPopup = () => (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="bg-white w-80 rounded-2xl shadow-xl p-6 font-bold space-y-4">
        <h2 className="text-xl font-bold text-gray-900">Premium Required</h2>
        <p className="text-gray-700 text-sm">
          You've reached <b>{chatCount}</b> questions.
          Unlock unlimited chat with MathsBuddy Premium.
        </p>
        <button
          onClick={() => (window.location.href = "/premium")}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-xl"
        >
          Upgrade Now
        </button>
        <button
          onClick={() => setShowPremiumPopup(false)}
          className="text-sm text-gray-500 underline"
        >
          Continue Free (limited)
        </button>
      </div>
    </div>
  );

  return (
    <div className="flex flex-col lg:flex-row w-[80vw] h-full mt-4">

      {/* SIDEBAR: CHAT HISTORY */}
      <div className="w-full lg:w-64 ml-10 bg-white/70 rounded-2xl shadow-xl p-4 space-y-3 h-[300px] lg:h-[400px] overflow-y-auto">
        <button
          onClick={startNewChat}
          className="w-full bg-blue-600 text-white py-2 rounded-xl"
        >
          + New Chat
        </button>

        {chats.map((chat) => (
          <div
            key={chat.id}
            className={`flex justify-between items-center p-3 rounded-xl cursor-pointer text-sm ${chat.id === activeChatId
                ? "bg-blue-100 text-blue-700"
                : "bg-gray-100 text-gray-700"
              }`}
          >
            <div
              onClick={() => loadChat(chat.id)}
              className="flex-1"
            >
              {chat.name}
            </div>

            {/* DELETE BUTTON */}
            <button
              onClick={(e) => {
                e.stopPropagation(); // Prevent loading chat
                const filtered = chats.filter((c) => c.id !== chat.id);
                setChats(filtered);
                localStorage.setItem("mathsBuddyChats", JSON.stringify(filtered));

                // Handle active chat deletion
                if (chat.id === activeChatId) {
                  if (filtered.length > 0) {
                    setActiveChatId(filtered[0].id);
                    setMessages(filtered[0].messages);
                  } else {
                    startNewChat();
                  }
                }
              }}
              className="text-red-500 hover:text-red-700 ml-2"
              title="Delete Chat"
            >
              ✕
            </button>
          </div>
        ))}
      </div>

      {/* MAIN CHAT */}
      <div className="flex-1 w-full max-w-3xl mx-auto ml-10 rounded-3xl bg-white/70 backdrop-blur-xl shadow-2xl p-4 md:p-6">

        {showPremiumPopup && <PremiumPopup />}

        {/* MESSAGES */}
        <div className="h-64 md:h-80 overflow-y-auto bg-white rounded-2xl shadow-inner p-4 space-y-3">
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"
                }`}
            >
              <div
                className={`px-4 py-2 rounded-2xl max-w-[80%] text-sm ${msg.role === "user"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-800"
                  }`}
              >
                {msg.content}
              </div>
            </div>
          ))}
        </div>

        {/* ERROR */}
        {error && (
          <p className="mt-3 bg-red-50 text-red-600 px-3 py-2 rounded-xl text-sm">
            {error}
          </p>
        )}

        {/* INPUT */}
        <div className="mt-4 flex gap-3 items-center">
          <input
            className="flex-1 border px-4 py-3 rounded-2xl focus:ring-2 focus:ring-blue-500"
            placeholder="Ask a math question..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          />
          <button
            onClick={sendMessage}
            disabled={isSending}
            className="bg-blue-600 text-white px-6 py-3 rounded-2xl"
          >
            {isSending ? "Thinking..." : "Send"}
          </button>
        </div>
      </div>
      <div className="ml-5 hidden xl:flex flex-1 rounded-xl bg-white/70 backdrop-blur-xl shadow-2xl p-8 flex-col gap-1.5">
        <h1 className="text-xl fond-bold mb-4">Tip: Want better answers? Ask like this →</h1>
        <p className="font-bold">1. Start with an H2-style</p>
        <p className="font-bold">2. Add small bullet points only when explaining details.</p>
        <p className="font-bold">3. Keep tone friendly, simple, and clean.</p>
        <p className="font-bold">4. No big paragraphs, no unnecessary words.</p>
      </div>
    </div>
  );
}
