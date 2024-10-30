import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

const ChatInterface = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    {
      type: "bot",
      text: ["Xin chào", "Tôi có thể tư vấn gì về điện thoại cho bạn?"]
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleClose = () => {
    const chatInterface = document.getElementById('chat-interface');
    if (chatInterface) {
      chatInterface.style.display = 'none';
    }
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result.split(',')[1];
        setSelectedImage(base64String);
      };
      reader.readAsDataURL(file);
    }
  };

  const sendMessage = async () => {
    if (!message.trim() && !selectedImage) return;

    const currentMessage = message;
    setMessage("");

    setMessages(prev => [...prev, {
      type: "user",
      text: [currentMessage],
      image: selectedImage ? `data:image/jpeg;base64,${selectedImage}` : null
    }]);

    setIsTyping(true);

    try {
      const requestBody = {
        contents: [
          {
            role: "user",
            parts: []
          }
        ]
      };

      // Add context about phones
      requestBody.contents.unshift({
        role: "user",
        parts: [{
          text: "Bạn là một chuyên gia tư vấn điện thoại. Hãy trả lời các câu hỏi về điện thoại một cách chuyên nghiệp và chi tiết. Trả lời bằng tiếng Việt."
        }]
      });

      if (currentMessage) {
        requestBody.contents[1].parts.push({ text: currentMessage });
      }

      if (selectedImage) {
        requestBody.contents[1].parts.push({
          inline_data: {
            mime_type: "image/jpeg",
            data: selectedImage
          }
        });
      }

      const response = await axios.post(
        "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent",
        requestBody,
        {
          params: {
            key: "AIzaSyDgYE9iRYQc2FdULh-x8UtkwYK4sYSosBw"
          },
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );

      setIsTyping(false);
      setMessages(prev => [...prev, {
        type: "bot",
        text: [response.data.candidates[0].content.parts[0].text]
      }]);
      setSelectedImage(null);
    } catch (error) {
      console.error("Error sending message:", error);
      setIsTyping(false);
      setMessages(prev => [...prev, {
        type: "bot",
        text: ["Xin lỗi, đã xảy ra lỗi. Vui lòng thử lại."]
      }]);
    }
  };

  const handleKeyPress = async (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      await sendMessage();
    }
  };

  return (
    <div className="w-[300px] sm:w-[400px] bg-white rounded-lg shadow-lg overflow-hidden flex flex-col" style={{ height: '500px', position: 'fixed', bottom: '100px', right: '100px', fontFamily: 'Times New Roman' }}>
      {/* Header */}
      <div className="bg-blue-500 text-white p-3 flex items-center justify-between">
        <span className="font-bold" style={{ fontSize: '1.1rem' }}>Trợ lí ảo</span>
        <button className="text-white hover:text-gray-200" onClick={handleClose}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* Chat Window */}
      <div className="p-4 space-y-4 flex-grow overflow-y-auto">
        {messages.map((msg, idx) => (
          msg.type === "bot" ? (
            <div key={idx} className="flex items-start space-x-2">
              <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 1024 1024">
                  <path d="M738.3 287.6H285.7c-59 0-106.8 47.8-106.8 106.8v303.1c0 59 47.8 106.8 106.8 106.8h81.5v111.1c0 .7.8 1.1 1.4.7l166.9-110.6 41.8-.8h117.4l43.6-.4c59 0 106.8-47.8 106.8-106.8V394.5c0-59-47.8-106.9-106.8-106.9zM351.7 448.2c0-29.5 23.9-53.5 53.5-53.5s53.5 23.9 53.5 53.5-23.9 53.5-53.5 53.5-53.5-23.9-53.5-53.5zm157.9 267.1c-67.8 0-123.8-47.5-132.3-109h264.6c-8.6 61.5-64.5 109-132.3 109zm110-213.7c-29.5 0-53.5-23.9-53.5-53.5s23.9-53.5 53.5-53.5 53.5 23.9 53.5 53.5-23.9 53.5-53.5 53.5zM867.2 644.5V453.1h26.5c19.4 0 35.1 15.7 35.1 35.1v121.1c0 19.4-15.7 35.1-35.1 35.1h-26.5zM95.2 609.4V488.2c0-19.4 15.7-35.1 35.1-35.1h26.5v191.3h-26.5c-19.4 0-35.1-15.7-35.1-35.1zM561.5 149.6c0 23.4-15.6 43.3-36.9 49.7v44.9h-30v-44.9c-21.4-6.5-36.9-26.3-36.9-49.7 0-28.6 23.3-51.9 51.9-51.9s51.9 23.3 51.9 51.9z"></path>
                </svg>
              </div>
              <div className="bg-gray-200 p-3 rounded-lg" style={{ fontSize: '1rem', lineHeight: '1.5' }}>
                {msg.text.map((txt, i) => (
                  <p key={i}>{txt}</p>
                ))}
              </div>
            </div>
          ) : (
            <div key={idx} className="flex items-end justify-end space-x-2">
              <div className="bg-blue-100 p-3 rounded-lg" style={{ fontSize: '1rem', lineHeight: '1.5' }}>
                {msg.text.map((txt, i) => (
                  <p key={i}>{txt}</p>
                ))}
                {msg.image && (
                  <img src={msg.image} alt="Uploaded" className="mt-2 max-w-[200px] rounded" />
                )}
              </div>
              <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
            </div>
          )
        ))}
        {isTyping && (
          <div className="flex items-start space-x-2">
            <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">
              <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 1024 1024">
                <path d="M738.3 287.6H285.7c-59 0-106.8 47.8-106.8 106.8v303.1c0 59 47.8 106.8 106.8 106.8h81.5v111.1c0 .7.8 1.1 1.4.7l166.9-110.6 41.8-.8h117.4l43.6-.4c59 0 106.8-47.8 106.8-106.8V394.5c0-59-47.8-106.9-106.8-106.9zM351.7 448.2c0-29.5 23.9-53.5 53.5-53.5s53.5 23.9 53.5 53.5-23.9 53.5-53.5 53.5-53.5-23.9-53.5-53.5zm157.9 267.1c-67.8 0-123.8-47.5-132.3-109h264.6c-8.6 61.5-64.5 109-132.3 109zm110-213.7c-29.5 0-53.5-23.9-53.5-53.5s23.9-53.5 53.5-53.5 53.5 23.9 53.5 53.5-23.9 53.5-53.5 53.5zM867.2 644.5V453.1h26.5c19.4 0 35.1 15.7 35.1 35.1v121.1c0 19.4-15.7 35.1-35.1 35.1h-26.5zM95.2 609.4V488.2c0-19.4 15.7-35.1 35.1-35.1h26.5v191.3h-26.5c-19.4 0-35.1-15.7-35.1-35.1zM561.5 149.6c0 23.4-15.6 43.3-36.9 49.7v44.9h-30v-44.9c-21.4-6.5-36.9-26.3-36.9-49.7 0-28.6 23.3-51.9 51.9-51.9s51.9 23.3 51.9 51.9z"></path>
              </svg>
            </div>
            <div className="bg-gray-200 p-3 rounded-lg">
              <div className="flex space-x-2">
                <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '200ms' }}></div>
                <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '400ms' }}></div>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Message Input */}
      <div className="flex items-center border-t p-3 space-x-2">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Nhập câu hỏi của bạn..."
          className="flex-1 border rounded-lg p-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          style={{ fontSize: '1rem', fontFamily: 'Times New Roman' }}
        />
        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          className="hidden"
          id="image-upload"
        />
        <label htmlFor="image-upload" className="cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </label>
        <button
          onClick={sendMessage}
          className="bg-blue-500 text-white p-2 rounded-lg"
          style={{ fontSize: '1rem', fontFamily: 'Times New Roman' }}
        >
          Gửi
        </button>
      </div>
    </div>
  );
};

export default ChatInterface;
