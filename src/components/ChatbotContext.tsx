'use client';

import { createContext, useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';

interface Message {
  text: string;
  isUser: boolean;
}

interface ChatbotContextType {
  messages: Message[];
  sendMessage: (text: string) => Promise<void>;
  isLoading: boolean;
  navigateTo: (path: string) => void;
}

const ChatbotContext = createContext<ChatbotContextType | undefined>(undefined);

export function ChatbotProvider({ children }: { children: React.ReactNode }) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  // Send message to chatbot and get response
  const sendMessage = async (text: string) => {
    // Add user message to list
    setMessages((prev) => [...prev, { text, isUser: true }]);
    
    setIsLoading(true);
    try {
      // Send to API
      const { data } = await axios.post('/api/chatbot', { message: text });
      
      // Add bot response
      setMessages((prev) => [...prev, { text: data.response, isUser: false }]);
    } catch (error) {
      console.error('Error sending message:', error);
      
      // Fallback response
      const fallbackResponse = getFallbackResponse(text);
      setMessages((prev) => [...prev, { text: fallbackResponse, isUser: false }]);
    } finally {
      setIsLoading(false);
    }
  };

  // Navigate to a path
  const navigateTo = (path: string) => {
    router.push(path);
  };

  // Simple fallback in case the API fails
  const getFallbackResponse = (input: string): string => {
    const lowercaseInput = input.toLowerCase();
    
    if (lowercaseInput.includes('skill')) {
      return 'Sneha is proficient in Java, Spring Boot, SQL, REST APIs, and has experience with Docker, JUnit, and Postman.';
    } else if (lowercaseInput.includes('project')) {
      return 'Sneha has published research on Salt Body Segmentation using deep learning, built an LLM Natural Language Chatbot, CollabHub collaboration platform, Microservices Banking System, and Data Analytics Platform. See the Projects page for details.';
    } else if (lowercaseInput.includes('contact') || lowercaseInput.includes('hire')) {
      return 'You can contact Sneha at nuthalapatisnehavarsha11@gmail.com or visit the Contact page.';
    } else {
      return 'I can tell you about Sneha\'s skills, projects, work experience, education, or how to contact her. What would you like to know?';
    }
  };

  return (
    <ChatbotContext.Provider value={{ messages, sendMessage, isLoading, navigateTo }}>
      {children}
    </ChatbotContext.Provider>
  );
}

export function useChatbot() {
  const context = useContext(ChatbotContext);
  if (!context) {
    throw new Error('useChatbot must be used within a ChatbotProvider');
  }
  return context;
}