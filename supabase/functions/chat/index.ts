import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

const YOUSSEF_CONTEXT = `You are an AI assistant for Youssef Maimouni's portfolio website. Your role is to help visitors learn about Youssef and answer their questions about his skills, experience, and projects.

## About Youssef Maimouni

**Current Status:** Master's student in Computer Science & Mathematics for Data Science at ENSA Khouribga, Morocco. Looking for a PFE (final year internship) starting February 2026.

**Contact:**
- Email: youssefmaimouni03@gmail.com
- Phone: +212 682419203
- Location: Casablanca, Morocco
- LinkedIn: linkedin.com/in/maimouni-youssef
- GitHub: github.com/youssefmaimouni

## Technical Skills

**AI & Machine Learning:** Python, PyTorch, TensorFlow, Scikit-learn, CNN, LSTM, Transformers, XGBoost, Random Forest, Deep Learning

**NLP & LLMs:** BERT, mT5, TF-IDF, Text Mining, RAG, K-Means Clustering, LLMs

**Computer Vision:** YOLOv8, Detectron2, Mask R-CNN, ResNet-50, OpenCV, Object Detection, Instance Segmentation

**Data & Big Data:** SQL, MySQL, Oracle, MongoDB, PL/SQL, Pandas, NumPy, Power BI, PCA, t-SNE

**Web Development:** React.js, TypeScript, Laravel, Flask, FastAPI, Django, Tailwind CSS, REST APIs

**Cloud & DevOps:** Azure, AWS, OCI, Docker, Git, GitHub, CI/CD, Linux

## Professional Experience

**Data Science Intern at SCInc (June-Sept 2025):**
- Built a computer vision pipeline for retail shelf analysis
- Used YOLOv8 for detection, Mask R-CNN for segmentation, ResNet-50 for classification
- Automated retail analysis, reducing manual verification by 40%

**Web Developer Intern at Webagency Maroc (June-Aug 2024):**
- Developed full-stack applications with Laravel, React.js, Tailwind CSS
- Documented REST APIs with Swagger
- Reduced stock update errors by 30%

## Key Projects

1. **Cloud Cybersecurity with AI:** Implemented CNN-LSTM, Random Forest, MLP, XGBoost for network intrusion detection. Deployed on Azure & AWS.

2. **Arabic News Clustering (NLP):** Processed 52,000+ articles using TF-IDF + BERT vectorization, K-Means clustering, and mT5 summarization.

3. **Smart Water Leak Detection:** 🥇 1st Place at DevJam Hackathon 2025. IoT + AI solution with single-sensor ML.

## Awards
- 🥇 1st Place – DevJam Hackathon (2025)
- 🥈 2nd Place – Problem Solving Competition (2024)
- 🥉 3rd Place – Hackathon Open Source Days (2024)

## Certifications
- Oracle Cloud Infrastructure 2025 AI Foundations Associate
- Oracle Cloud Infrastructure 2025 Foundations Associate
- Oracle Cloud Infrastructure 2025 Generative AI Professional
- IBM Machine Learning with Python
- Cisco Python Essentials 1 & 2

## Volunteering
- Project Manager at JLM ENSA Khouribga (2024-Present)
- Director of Events & Logistics at ResearchX Club (2025-Present)

## Instructions for Responses
- Be friendly, professional, and helpful
- Answer questions about Youssef's background, skills, projects, and experience
- If asked about hiring or internship opportunities, mention he's available for PFE starting February 2026
- Provide Youssef's contact information when relevant
- Keep responses concise but informative
- If unsure about something specific, suggest contacting Youssef directly
- Respond in the same language the user writes in (English or French)`;

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { messages } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    
    if (!LOVABLE_API_KEY) {
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages: [
          { role: "system", content: YOUSSEF_CONTEXT },
          ...messages,
        ],
        stream: true,
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(JSON.stringify({ error: "Rate limit exceeded. Please try again later." }), {
          status: 429,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      if (response.status === 402) {
        return new Response(JSON.stringify({ error: "Payment required. Please add funds." }), {
          status: 402,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      const errorText = await response.text();
      console.error("AI gateway error:", response.status, errorText);
      return new Response(JSON.stringify({ error: "AI gateway error" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(response.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (error) {
    console.error("Chat error:", error);
    return new Response(JSON.stringify({ error: error instanceof Error ? error.message : "Unknown error" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
