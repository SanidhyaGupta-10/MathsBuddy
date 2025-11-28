"use client";
import { useState } from "react";

export default function VoiceButton({ onTranscript }) {
  const [recording, setRecording] = useState(false);
  let mediaRecorder;
  let audioChunks = [];

  const startRecording = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    mediaRecorder = new MediaRecorder(stream);

    audioChunks = [];

    mediaRecorder.ondataavailable = (e) => audioChunks.push(e.data);
    mediaRecorder.onstop = async () => {
      const audioBlob = new Blob(audioChunks, { type: "audio/webm" });

      // send to backend for whisper transcription
      const formData = new FormData();
      formData.append("audio", audioBlob);

      const res = await fetch("/api/transcribe", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      if (data.text) onTranscript(data.text);
    };

    mediaRecorder.start();
    setRecording(true);

    // keep reference globally
    window._rec = mediaRecorder;
  };

  const stopRecording = () => {
    setRecording(false);
    window._rec.stop();
  };

  return (
    <button
      className={`p-3 rounded-full ${
        recording ? "bg-red-500" : "bg-blue-500"
      } text-white`}
      onMouseDown={startRecording}
      onMouseUp={stopRecording}
      onTouchStart={startRecording}
      onTouchEnd={stopRecording}
    >
      🎤
    </button>
  );
}
