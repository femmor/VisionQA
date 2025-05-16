# 🧠 VisionQA – AI-Powered UI Accessibility Auditor

> Built with 💡 Vision Transformers + LLMs | React + FastAPI | Open Source Dev Tool for the Future

VisionQA is an autonomous AI agent that audits UI designs and frontend screenshots for accessibility issues using state-of-the-art AI models like Vision Transformers (ViT) and GPT-4. It helps developers and designers find WCAG violations and generates actionable suggestions, visually marked on your screenshots.

---

## 🚀 Features

- 🔎 Upload UI screenshots and detect accessibility violations
- 🧠 Vision Transformer + LLM powered issue identification
- 📖 WCAG-based suggestions via RAG (Retrieval-Augmented Generation)
- 🎯 Visual annotations of UI problems (contrast, alt-text, focus order, etc.)
- 📄 One-click PDF report generation
- 🌐 Modern UI built with React, ShadCn + TailwindCSS

---

## 🛠️ Tech Stack

| Layer         | Tech                                        |
| ------------- | ------------------------------------------- |
| Frontend      | React, TypeScript, ShadCn, TailwindCSS      |
| Backend       | FastAPI (Python)                            |
| AI Models     | HuggingFace ViT, OpenAI GPT-4, LangChain    |
| Data Handling | Python PIL, base64, PDFKit                  |
| Deployment    | Vercel (Frontend), Railway/Render (Backend) |

---

## 🧪 Getting Started

### Prerequisites

- Node.js 18+
- Python 3.9+
- OpenAI API Key
- Hugging Face token (optional)
- Pinecone/Weaviate key (if using RAG)

### Frontend Setup

```bash
cd frontend
npm install
npm run dev

```

### 📣 Contributing

We welcome PRs, ideas, and issues!

Fork the repo

Create a new branch (git checkout -b feature/my-feature)

Commit changes (git commit -am 'Add something')

Push (git push origin feature/my-feature)

Create a Pull Request
