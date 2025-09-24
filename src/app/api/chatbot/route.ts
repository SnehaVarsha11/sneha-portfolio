// src/app/api/chatbot/route.ts
import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';

// Initialize OpenAI client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Portfolio information for context
const portfolioInfo = `
Name: Sneha Varsha Nuthalapati
Role: Software Engineer (Backend)
Location: Warrensburg, Missouri

EDUCATION:
- Master of Science in Computer Science, University of Central Missouri (Aug 2024 – May 2026)
- Bachelor's of Technology in Computer Science & Engineering, Vignan’s Nirula Institute Of Technology & Science (Aug 2018 – Jul 2022)

SKILLS:
Languages: Java, Python, C++, JavaScript, SQL, C, Perl (basic)
Frameworks & Tools: Spring Boot, REST APIs, JUnit, Postman, Docker, Agile/Scrum, Git
Databases: MySQL, PostgreSQL, MongoDB
Concepts: OOPS, Data Structures, Algorithms, OS, Distributed Systems

EXPERIENCE:
- Software Engineer at Wipro (May 2022 – Sep 2024): Backend services with Java and Spring Boot; SQL optimization; automated testing (JUnit, Postman, Octane); agile delivery; improved observability.
- Software Intern at Wipro (Mar 2022 – May 2022): Built and tested Spring Boot microservices for banking; MySQL data flows; integration testing.

PROJECTS:
1. Salt Body Segmentation - Deep Learning Research: Published research on CNN-based edge detection for seismic imaging (Python, TensorFlow, OpenCV)
2. LLM Natural Language Chatbot: Advanced conversational AI using LLM technology (Python, FastAPI, OpenAI API, React, PostgreSQL)
3. CollabHub: Real-time collaboration platform (React, Node.js, MongoDB, AWS)
4. Microservices Banking System: Scalable banking application (Java, Spring Boot, MySQL, Docker, Kubernetes)
5. Data Analytics Platform: Comprehensive data processing and visualization (Python, Pandas, PostgreSQL, React, D3.js)

CONTACT:
Email: nuthalapatisnehavarsha11@gmail.com
Phone: (660) 262-2918
LinkedIn: https://www.linkedin.com
`;

// Function to generate AI response
async function generateAIResponse(userMessage: string): Promise<string> {
  try {
    // Use fallback if no API key is set
    if (!openai) {
      return fallbackResponse(userMessage);
    }

    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: `You are an AI assistant for Sneha Varsha Nuthalapati's portfolio website. 
          Your purpose is to answer questions about Sneha's skills, experience, projects, education, and contact information.
          Only answer questions related to the portfolio information provided.
          Be helpful, concise, and friendly. Keep responses under 3 sentences unless elaboration is necessary.
          Here is Sneha's portfolio information: ${portfolioInfo}`
        },
        { role: "user", content: userMessage }
      ],
      max_tokens: 300,
      temperature: 0.7,
    });

    return completion.choices[0].message.content || "I'm sorry, I couldn't generate a response.";
  } catch (error) {
    console.error('OpenAI API error:', error);
    return fallbackResponse(userMessage);
  }
}

// Fallback response function using predefined rules
function fallbackResponse(input: string): string {
  const lowercaseInput = input.toLowerCase();
  
  if (lowercaseInput.includes('skill') || lowercaseInput.includes('what can you do')) {
    return 'Sneha works primarily with Java, Spring Boot, SQL, REST APIs, and has experience with Docker, JUnit, Postman, and Git. She also uses MySQL, PostgreSQL, and MongoDB.';
  } else if (lowercaseInput.includes('project')) {
    return 'Sneha highlights CollabHub and an AI chatbot project. See the Projects page for details.';
  } else if (lowercaseInput.includes('experience') || lowercaseInput.includes('work')) {
    return 'Sneha worked at Wipro as a Software Engineer (May 2022–Sep 2024) and as a Software Intern (Mar 2022–May 2022).';
  } else if (lowercaseInput.includes('education') || lowercaseInput.includes('study')) {
    return 'Sneha is pursuing an MS in Computer Science at UCM (2024–2026) and holds a B.Tech in CSE from Vignan’s Nirula (2018–2022).';
  } else if (lowercaseInput.includes('contact') || lowercaseInput.includes('hire') || lowercaseInput.includes('email')) {
    return 'You can contact Sneha at nuthalapatisnehavarsha11@gmail.com or call (660) 262-2918. The Contact page is also available.';
  } else if (lowercaseInput.includes('buy me a coffee') || lowercaseInput.includes('donation') || lowercaseInput.includes('support')) {
    return 'This site does not include donations. If you d like to reach out, use the Contact page.';
  } else if (lowercaseInput.includes('hi') || lowercaseInput.includes('hello')) {
    return 'Hi! I can tell you about Sneha s skills, experience, projects, education, or contact info.';
  } else {
    return 'I can tell you about Sneha s skills, projects, work experience, education, or contact info. What would you like to know?';
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { message } = body;
    
    if (!message) {
      return NextResponse.json(
        { error: 'Message is required' },
        { status: 400 }
      );
    }

    // Generate AI response
    const response = await generateAIResponse(message);
    
    return NextResponse.json({ response });
  } catch (error) {
    console.error('Chatbot API error:', error);
    
    return NextResponse.json(
      { error: 'Failed to process your request', response: 'Sorry, I encountered an error. Please try again.' },
      { status: 500 }
    );
  }
}