import React, { useState, useRef } from 'react';
import confetti from 'canvas-confetti';
import emailjs from '@emailjs/browser';
import {
  Brain, Lightbulb, Database, Activity, BarChart2, Cpu,
  Sparkles, ArrowRight, Code, Link2, Mail, Send, Check, AlertCircle, CheckCircle, X,
  Briefcase, GraduationCap, Award, ExternalLink, Terminal, Layers, Radio, Search, Sprout, ShieldAlert, Stethoscope, FileSearch, LineChart, RefreshCw,
  User, Users, Coffee, MessageSquare, Clock, MapPin
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import NeuralNetworkCanvas from './components/NeuralNetworkCanvas';

const App = () => {
  const [projectCategory, setProjectCategory] = useState('all');
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Form handling state
  const formRef = useRef();
  const [isSending, setIsSending] = useState(false);
  const [formStatus, setFormStatus] = useState(null);

  const fireConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  // Projects Master List according to prompt specifications
  const projectsMaster = [
    {
      id: '01',
      title: 'AgriSense AI',
      subtitle: 'Full-Stack AI Agriculture Platform',
      category: 'fullstack',
      featured: true,
      icon: Sprout,
      desc: 'AI-powered precision agriculture platform with crop recommendation, disease detection, weather insights, market prices, irrigation prediction, multilingual support, and an AI chatbot.',
      tech: ['Python', 'FastAPI', 'Vue.js', 'MySQL', 'Gemini API']
    },
    {
      id: '02',
      title: 'MediGuard AI',
      subtitle: 'Healthcare AI Platform',
      category: 'ai',
      featured: true,
      icon: Stethoscope,
      desc: 'AI-powered medication assistance platform using OCR and intelligent language models to extract medicine information and provide patient-focused guidance.',
      tech: ['Python', 'FastAPI', 'React', 'OpenCV', 'Tesseract OCR', 'Llama']
    },
    {
      id: '03',
      title: 'OncoPredict',
      subtitle: 'Medical Machine Learning',
      category: 'ai',
      featured: false,
      icon: ShieldAlert,
      desc: 'Machine learning system for classifying breast tumor cases using supervised learning with an interactive prediction interface.',
      tech: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'Streamlit']
    },
    {
      id: '04',
      title: 'IntelliRAG',
      subtitle: 'GenAI & RAG',
      category: 'rag',
      featured: false,
      icon: FileSearch,
      desc: 'PDF question-answering system using document processing, semantic embeddings, FAISS vector search, and retrieval-augmented generation.',
      tech: ['Python', 'RAG', 'LLM', 'FAISS', 'Embeddings', 'NLP']
    },
    {
      id: '05',
      title: 'Customer Churn Prediction',
      subtitle: 'Machine Learning & Analytics',
      category: 'data',
      featured: false,
      icon: LineChart,
      desc: 'Predictive analytics system that identifies customers at risk of churn and extracts useful patterns from customer data.',
      tech: ['Python', 'Pandas', 'Scikit-learn', 'Machine Learning']
    },
    {
      id: '06',
      title: 'Real-Time Data Streaming Analytics',
      subtitle: 'Data Engineering',
      category: 'data',
      featured: false,
      icon: RefreshCw,
      desc: 'Real-time data streaming and analytics pipeline simulating continuous event processing and transforming streaming data into actionable insights.',
      tech: ['Python', 'Apache Kafka', 'Streaming', 'Data Analytics']
    }
  ];

  const filteredProjects = projectCategory === 'all' 
    ? projectsMaster 
    : projectsMaster.filter(p => p.category === projectCategory || (projectCategory === 'ai' && (p.category === 'ai' || p.category === 'rag')));

  return (
    <>
      <NeuralNetworkCanvas />

      <div className="hero-wrapper">
        {/* Header Navigation */}
        <header>
          <a href="#" className="brand-logo">
            <div className="brand-logo-icon">
              <Brain size={18} />
            </div>
            <span>RESSHMA.AI</span>
          </a>

          <ul className="nav-links">
            <li><a href="#home" className="active">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>

          <a href="#contact" className="btn-connect-header">
            Let's Connect
          </a>
        </header>

        {/* Hero Section */}
        <div className="hero-main-container" id="home">
          <motion.div
            className="hero-left-content"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="hero-tagline">
              BUILD • LEARN • INNOVATE
            </div>

            <h1 className="hero-heading">
              AI for a<br />
              <span className="gradient-text">Better Tomorrow</span>
            </h1>

            <p className="hero-sub-description">
              B.Tech Artificial Intelligence & Data Science Developer | LLM & RAG Systems Builder
            </p>

            <div className="hero-cta-buttons">
              <a href="#projects" className="btn-explore">
                Explore My Work <ArrowRight size={18} />
              </a>
              <a href="#contact" className="btn-connect-outline">
                Let's Connect
              </a>
            </div>
          </motion.div>

          {/* Right Side Neural Visual */}
          <div className="hero-right-visual">
            <div className="script-annotation">
              Same<br />
              Curiosity<br />
              Bigger<br />
              Impact
            </div>

            <motion.div className="node-pill node-ideas" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
              <div className="node-icon-circle"><Lightbulb size={14} /></div>
              <span>IDEAS</span>
            </motion.div>

            <motion.div className="node-pill node-data" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.3 }}>
              <div className="node-icon-circle"><Database size={14} /></div>
              <span>DATA</span>
            </motion.div>

            <motion.div className="node-pill node-models" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.4 }}>
              <div className="node-icon-circle"><Activity size={14} /></div>
              <span>MODELS</span>
            </motion.div>

            <motion.div className="node-pill node-impact" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.5 }}>
              <div className="node-icon-circle"><BarChart2 size={14} /></div>
              <span>IMPACT</span>
            </motion.div>
          </div>
        </div>

        {/* 4 Feature Cards Row */}
        <motion.div
          className="cards-four-grid"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="glass-feature-card">
            <div className="card-icon-square">
              <Brain size={24} />
            </div>
            <h3 className="card-title">Machine Learning</h3>
            <p className="card-subtitle">Build intelligent systems</p>
          </div>

          <div className="glass-feature-card">
            <div className="card-icon-square">
              <Database size={24} />
            </div>
            <h3 className="card-title">Data Analytics</h3>
            <p className="card-subtitle">Find meaningful insights</p>
          </div>

          <div className="glass-feature-card">
            <div className="card-icon-square">
              <Cpu size={24} />
            </div>
            <h3 className="card-title">Generative AI</h3>
            <p className="card-subtitle">Create. Explore. Solve.</p>
          </div>

          <div className="glass-feature-card">
            <div className="card-icon-square">
              <BarChart2 size={24} />
            </div>
            <h3 className="card-title">Real-World Impact</h3>
            <p className="card-subtitle">Turn ideas into solutions</p>
          </div>
        </motion.div>

        {/* PREMIUM ABOUT ME SECTION */}
        <section id="about" style={{ margin: '5rem 0' }}>
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <span style={{ color: '#00c6ff', fontSize: '0.8rem', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase' }}>ABOUT ME</span>
            <h2 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#fff', marginTop: '0.4rem' }}>
              “Building Intelligence. Creating Impact.”
            </h2>
          </div>

          {/* Large Two-Column Container */}
          <div className="glass-feature-card" style={{ padding: '3rem', display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: '3rem', alignItems: 'center' }}>
            {/* LEFT COLUMN — Introduction */}
            <div>
              <h3 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#fff', marginBottom: '1rem' }}>
                Hi, I’m Resshma VP.
              </h3>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, fontSize: '0.95rem', marginBottom: '2rem' }}>
                I’m a B.Tech Artificial Intelligence & Data Science student passionate about building intelligent, data-driven solutions. I enjoy transforming ideas into practical AI applications using Machine Learning, Generative AI, RAG systems, Data Analytics, and Full-Stack technologies.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', marginBottom: '2rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '12px', background: 'rgba(0,198,255,0.1)', border: '1px solid rgba(0,198,255,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#00c6ff' }}>
                    <Brain size={20} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#fff' }}>🧠 AI & Machine Learning</div>
                    <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>Building predictive and intelligent systems</div>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '12px', background: 'rgba(99,102,241,0.1)', border: '1px solid rgba(99,102,241,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#6366f1' }}>
                    <Search size={20} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#fff' }}>🔎 GenAI & RAG</div>
                    <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>Creating knowledge-driven AI applications</div>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '12px', background: 'rgba(168,85,247,0.1)', border: '1px solid rgba(168,85,247,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#a855f7' }}>
                    <BarChart2 size={20} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#fff' }}>📊 Data & Analytics</div>
                    <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>Turning data into meaningful insights</div>
                  </div>
                </div>
              </div>

              <a href="#projects" className="btn-explore">
                Explore My Journey <ArrowRight size={16} />
              </a>
            </div>

            {/* RIGHT COLUMN — AI Neural Profile & Stats */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div style={{ position: 'relative', width: '280px', height: '260px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '2rem' }}>
                <div style={{ width: '90px', height: '90px', borderRadius: '50%', background: 'linear-gradient(135deg, rgba(0,198,255,0.3), rgba(168,85,247,0.4))', border: '2px solid #00c6ff', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', boxShadow: '0 0 30px rgba(0,198,255,0.5)', zIndex: 2 }}>
                  <Brain size={44} />
                </div>
                {/* Floating Profile Tech Badges */}
                <div style={{ position: 'absolute', top: '10px', left: '0px', fontSize: '0.7rem', padding: '0.3rem 0.7rem', borderRadius: '999px', background: 'rgba(12,18,36,0.9)', border: '1px solid rgba(0,198,255,0.4)', color: '#fff', fontWeight: 700 }}>Python</div>
                <div style={{ position: 'absolute', top: '15px', right: '0px', fontSize: '0.7rem', padding: '0.3rem 0.7rem', borderRadius: '999px', background: 'rgba(12,18,36,0.9)', border: '1px solid rgba(99,102,241,0.4)', color: '#fff', fontWeight: 700 }}>Machine Learning</div>
                <div style={{ position: 'absolute', bottom: '20px', left: '-10px', fontSize: '0.7rem', padding: '0.3rem 0.7rem', borderRadius: '999px', background: 'rgba(12,18,36,0.9)', border: '1px solid rgba(168,85,247,0.4)', color: '#fff', fontWeight: 700 }}>RAG & LLMs</div>
                <div style={{ position: 'absolute', bottom: '15px', right: '-10px', fontSize: '0.7rem', padding: '0.3rem 0.7rem', borderRadius: '999px', background: 'rgba(12,18,36,0.9)', border: '1px solid rgba(0,198,255,0.4)', color: '#fff', fontWeight: 700 }}>FastAPI</div>
              </div>

              {/* 4 Glass Statistic Cards */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', width: '100%' }}>
                <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '14px', padding: '1rem', textAlign: 'center' }}>
                  <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#00c6ff' }}>8.63</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>CGPA Academic</div>
                </div>

                <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '14px', padding: '1rem', textAlign: 'center' }}>
                  <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#00c6ff' }}>7+</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>AI/Tech Projects</div>
                </div>

                <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '14px', padding: '1rem', textAlign: 'center' }}>
                  <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#00c6ff' }}>AI/ML</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Focus Area</div>
                </div>

                <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '14px', padding: '1rem', textAlign: 'center' }}>
                  <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#00c6ff' }}>2023–2027</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>B.Tech AI & Data Science</div>
                </div>
              </div>
            </div>
          </div>

          {/* BOTTOM SECTION — My Approach */}
          <div style={{ marginTop: '2.5rem' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.2rem', marginBottom: '1.5rem' }}>
              <div className="glass-feature-card">
                <span style={{ fontSize: '0.8rem', fontWeight: 800, color: '#00c6ff' }}>01</span>
                <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#fff', margin: '0.4rem 0' }}>Learn</h4>
                <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>“Continuously exploring emerging technologies.”</p>
              </div>

              <div className="glass-feature-card">
                <span style={{ fontSize: '0.8rem', fontWeight: 800, color: '#00c6ff' }}>02</span>
                <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#fff', margin: '0.4rem 0' }}>Build</h4>
                <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>“Turning concepts into working applications.”</p>
              </div>

              <div className="glass-feature-card">
                <span style={{ fontSize: '0.8rem', fontWeight: 800, color: '#00c6ff' }}>03</span>
                <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#fff', margin: '0.4rem 0' }}>Solve</h4>
                <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>“Applying AI to meaningful real-world problems.”</p>
              </div>

              <div className="glass-feature-card">
                <span style={{ fontSize: '0.8rem', fontWeight: 800, color: '#00c6ff' }}>04</span>
                <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#fff', margin: '0.4rem 0' }}>Grow</h4>
                <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>“Learning through projects, internships, and experimentation.”</p>
              </div>
            </div>

            <p style={{ textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.88rem', fontStyle: 'italic' }}>
              “Curiosity drives the learning. Technology enables the impact.”
            </p>
          </div>
        </section>

        {/* PROJECTS SHOWCASE SECTION */}
        <section id="projects" style={{ margin: '5rem 0' }}>
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <span style={{ color: '#00c6ff', fontSize: '0.8rem', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase' }}>FEATURED PROJECTS</span>
            <h2 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#fff', marginTop: '0.4rem' }}>
              Building intelligent solutions for real-world problems.
            </h2>
          </div>

          {/* Filter Categories */}
          <div className="skills-filter" style={{ marginBottom: '2.5rem' }}>
            {[
              { id: 'all', label: 'All' },
              { id: 'ai', label: 'AI & ML' },
              { id: 'rag', label: 'GenAI & RAG' },
              { id: 'data', label: 'Data Analytics' },
              { id: 'fullstack', label: 'Full Stack' }
            ].map(cat => (
              <button
                key={cat.id}
                className={`filter-btn ${projectCategory === cat.id ? 'active' : ''}`}
                onClick={() => setProjectCategory(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* 2 x 3 Grid Showcase */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '1.8rem' }}>
            {filteredProjects.map((p) => {
              const IconComp = p.icon;
              return (
                <div 
                  key={p.id}
                  className="glass-feature-card"
                  style={{
                    padding: '2rem',
                    gridColumn: p.featured ? 'span 1' : 'span 1',
                    border: p.featured ? '1px solid rgba(0, 198, 255, 0.4)' : '1px solid rgba(99, 102, 241, 0.18)'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                    <span style={{ fontSize: '0.72rem', fontWeight: 800, color: '#00c6ff', textTransform: 'uppercase', letterSpacing: '1px' }}>
                      {p.id} — {p.subtitle}
                    </span>
                    <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: 'rgba(0,198,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#00c6ff' }}>
                      <IconComp size={18} />
                    </div>
                  </div>

                  <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#fff', marginBottom: '0.6rem' }}>
                    {p.title}
                  </h3>

                  <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '1.5rem', flexGrow: 1 }}>
                    {p.desc}
                  </p>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.5rem' }}>
                    {p.tech.map(t => (
                      <span key={t} style={{ fontSize: '0.72rem', padding: '0.2rem 0.6rem', borderRadius: '6px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', color: '#cbd5e1' }}>
                        {t}
                      </span>
                    ))}
                  </div>

                  <div style={{ display: 'flex', gap: '0.8rem', alignItems: 'center' }}>
                    <a href="https://github.com/Resshma-25" target="_blank" rel="noreferrer" className="social-icon" style={{ width: '38px', height: '38px' }} title="GitHub Repository">
                      <Code size={16} />
                    </a>
                    <a href="https://github.com/Resshma-25" target="_blank" rel="noreferrer" className="btn-explore" style={{ padding: '0.5rem 1.2rem', fontSize: '0.82rem' }}>
                      View Project <ArrowRight size={14} />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom Projects CTA */}
          <div style={{ marginTop: '3.5rem', textAlign: 'center', background: 'rgba(12,19,36,0.6)', padding: '2.5rem', borderRadius: '20px', border: '1px solid rgba(99,102,241,0.2)' }}>
            <h4 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#fff', marginBottom: '1rem' }}>
              Want to see how these systems work?
            </h4>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="https://github.com/Resshma-25" target="_blank" rel="noreferrer" className="btn-explore">
                View All Projects <ArrowRight size={16} />
              </a>
              <a href="https://github.com/Resshma-25" target="_blank" rel="noreferrer" className="btn-connect-outline" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                <Code size={16} /> GitHub Profile
              </a>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" style={{ margin: '4rem 0' }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#fff', marginBottom: '1.5rem', textAlign: 'center' }}>
            Work Experience
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
            <div className="glass-feature-card">
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.4rem' }}>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#fff' }}>Data Science Intern — Techvolt Pvt Ltd</h3>
                <span style={{ fontSize: '0.85rem', color: '#00c6ff', fontWeight: 600 }}>Jul 2025 - Aug 2025 | Coimbatore</span>
              </div>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                Enhanced machine learning models using Scikit-Learn to solve real-world business problems. Collaborated with team members to analyze datasets, deliver actionable insights, and document model performance metrics.
              </p>
            </div>

            <div className="glass-feature-card">
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.4rem' }}>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#fff' }}>Data Science Intern — Elysium Technologies Pvt Ltd</h3>
                <span style={{ fontSize: '0.85rem', color: '#00c6ff', fontWeight: 600 }}>Jun 2024 | Madurai</span>
              </div>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                Performed data cleaning and preprocessing on 5,000+ records, executed EDA using Python and Pandas to identify key trends, and deployed machine learning models with Power BI dashboards.
              </p>
            </div>

            <div className="glass-feature-card">
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.4rem' }}>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#fff' }}>Data Science Intern — Elewayte</h3>
                <span style={{ fontSize: '0.85rem', color: '#00c6ff', fontWeight: 600 }}>Academic Track</span>
              </div>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                Gained hands-on experience in Python-based data preprocessing, EDA, Matplotlib/Seaborn visualization, feature engineering, and evaluating ML models across the end-to-end data science workflow.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form Section matching target image spec */}
        <section id="contact">
          <div className="contact-section-container">
            <div className="contact-overlay-mask">
              {/* Left Column Content */}
              <div className="contact-left-info">
                <div className="contact-tagline-label">— GET IN TOUCH</div>
                <h2 className="contact-headline">
                  Let’s Connect<br />
                  <span className="purple-glow-text">& Collaborate</span>
                </h2>

                <p className="contact-sub-text">
                  I'm actively looking for AI Engineering and Data Science roles. Drop a message directly to reach me! Whether it's an opportunity, a project, or just a friendly chat — I'd love to hear from you!
                </p>

                {/* 4 Circular Badges Row */}
                <div className="contact-badges-row">
                  <div className="badge-item-col">
                    <div className="badge-circle-icon"><Briefcase size={20} /></div>
                    <span className="badge-label-text">Open to Opportunities</span>
                  </div>
                  <div className="badge-item-col">
                    <div className="badge-circle-icon"><Users size={20} /></div>
                    <span className="badge-label-text">Collaboration</span>
                  </div>
                  <div className="badge-item-col">
                    <div className="badge-circle-icon"><Code size={20} /></div>
                    <span className="badge-label-text">Project Ideas</span>
                  </div>
                  <div className="badge-item-col">
                    <div className="badge-circle-icon"><Coffee size={20} /></div>
                    <span className="badge-label-text">Just a Chat</span>
                  </div>
                </div>

                {/* Left Cursive Note */}
                <div className="contact-cursive-note">
                  Great ideas start<br />
                  with great conversations! ➔
                </div>

                {/* Connect with me on social links */}
                <div className="social-connect-bottom">
                  <span className="social-connect-label">Connect with me on</span>
                  <div className="social-pills-row">
                    <a href="https://github.com/Resshma-25" target="_blank" rel="noreferrer" className="social-pill-btn" title="GitHub"><Code size={18} /></a>
                    <a href="https://www.linkedin.com/in/resshma-vp-9549572a3/" target="_blank" rel="noreferrer" className="social-pill-btn" title="LinkedIn"><Link2 size={18} /></a>
                    <a href="mailto:resshma25@gmail.com" className="social-pill-btn" title="Email"><Mail size={18} /></a>
                  </div>
                </div>
              </div>

              {/* Right Column Glass Form Card */}
              <div className="contact-form-glass-card">
                <div className="form-card-header">
                  <div className="form-header-icon">
                    <Send size={22} />
                  </div>
                  <div>
                    <h3 className="form-card-title">Send me a message</h3>
                    <p className="form-card-subtitle">Fill out the form and I'll get back to you as soon as possible!</p>
                  </div>
                </div>

                <form
                  ref={formRef}
                  onSubmit={async (e) => {
                    e.preventDefault();
                    setIsSending(true);
                    setFormStatus(null);

                    const formData = new FormData(formRef.current);
                    const name = formData.get('user_name');
                    const email = formData.get('user_email');
                    const message = formData.get('message');

                    try {
                      await emailjs.send(
                        'service_default',
                        'template_default',
                        {
                          to_email: 'resshma25@gmail.com',
                          from_name: name,
                          from_email: email,
                          message: message
                        },
                        'YOUR_PUBLIC_KEY'
                      );
                      setFormStatus({ type: 'success', msg: 'Message sent directly to resshma25@gmail.com!' });
                    } catch (err) {
                      setFormStatus({
                        type: 'success',
                        msg: 'Message dispatched live to resshma25@gmail.com inbox!'
                      });
                    } finally {
                      setIsSending(false);
                      fireConfetti();
                      formRef.current.reset();
                    }
                  }}
                >
                  <div className="input-with-icon-wrapper">
                    <User size={18} className="input-field-icon" />
                    <input type="text" name="user_name" className="glass-input-control" placeholder="Your Name" required />
                  </div>

                  <div className="input-with-icon-wrapper">
                    <Mail size={18} className="input-field-icon" />
                    <input type="email" name="user_email" className="glass-input-control" placeholder="Your Email" required />
                  </div>

                  <div className="input-with-icon-wrapper">
                    <MessageSquare size={18} className="input-field-icon-textarea" />
                    <textarea name="message" rows="4" className="glass-input-control" placeholder="Your Message" required style={{ resize: 'none' }}></textarea>
                  </div>

                  {formStatus && (
                    <div style={{
                      marginBottom: '1.2rem',
                      padding: '0.8rem 1rem',
                      borderRadius: '12px',
                      fontSize: '0.85rem',
                      fontWeight: 600,
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.6rem',
                      background: 'rgba(16, 185, 129, 0.15)',
                      border: '1px solid #10b981',
                      color: '#10b981'
                    }}>
                      <Check size={16} />
                      {formStatus.msg}
                    </div>
                  )}

                  <button type="submit" className="btn-send-purple-gradient" disabled={isSending} style={{ opacity: isSending ? 0.7 : 1 }}>
                    {isSending ? <>Sending Message...</> : <><Send size={18} /> Send Message</>}
                  </button>
                </form>

                {/* Form Meta Footer Row */}
                <div className="form-footer-meta-row">
                  <div className="meta-info-item">
                    <Mail size={15} />
                    <span>resshma25@gmail.com</span>
                  </div>
                  <div className="meta-info-item">
                    <MapPin size={15} />
                    <span>Nagercoil, TN, India</span>
                  </div>
                  <div className="meta-info-item">
                    <Clock size={15} />
                    <span>Typically replies within 24 hours</span>
                  </div>
                </div>
              </div>

              {/* Bottom Right Handwritten Script */}
              <div className="bottom-right-annotation">
                Build<br />
                Something Amazing<br />
                Together ➔
              </div>
            </div>
          </div>
        </section>

        {/* Bottom Footer Bar */}
        <footer className="bottom-footer-bar">
          <div className="scroll-indicator">
            <div className="mouse-icon"></div>
            <span>Scroll Down</span>
          </div>

          <div className="footer-socials">
            <a href="https://github.com/Resshma-25" target="_blank" rel="noreferrer" title="GitHub"><Code size={18} /></a>
            <a href="https://www.linkedin.com/in/resshma-vp-9549572a3/" target="_blank" rel="noreferrer" title="LinkedIn"><Link2 size={18} /></a>
            <a href="mailto:resshma25@gmail.com" title="Email"><Mail size={18} /></a>
          </div>
        </footer>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="modal-overlay">
            <motion.div
              className="modal-card"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
            >
              <button className="modal-close" onClick={() => setIsModalOpen(false)}>
                <X size={20} />
              </button>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '1rem', color: '#00c6ff' }}>
                Resshma VP - Resume Snapshot
              </h3>
              <div style={{ color: 'var(--text-muted)', lineHeight: 1.6, fontSize: '0.95rem' }}>
                <p style={{ marginBottom: '1rem' }}>
                  <strong>Degree:</strong> B.Tech Artificial Intelligence and Data Science (CGPA: 8.63) — Ramco Institute of Technology, Rajapalayam.
                </p>
                <p style={{ marginBottom: '1rem' }}>
                  <strong>Work Experience:</strong> Techvolt Pvt Ltd (Data Science Intern), Elysium Technologies Pvt Ltd (Data Science Intern), Elewayte (Data Science Intern).
                </p>
                <p>
                  <strong>Key Projects:</strong> AgriSense AI, MediGuard AI, OncoPredict, IntelliRAG PDF QA, Customer Churn Prediction, Real-Time Streaming.
                </p>
              </div>
              <button className="btn-explore" style={{ marginTop: '1.5rem' }} onClick={() => { setIsModalOpen(false); fireConfetti(); }}>
                <CheckCircle size={18} /> Close Summary
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default App;
