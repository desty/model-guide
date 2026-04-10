// ===== Model (LLM) Guide - Specific Scripts =====
// Base functionality provided by common/base.js

// ===== Mermaid Init =====
mermaid.initialize({
  startOnLoad: true,
  theme: 'dark',
  themeVariables: {
    primaryColor: '#1e2945',
    primaryTextColor: '#e2e8f0',
    primaryBorderColor: '#4a5568',
    lineColor: '#a78bfa',
    secondaryColor: '#1a2332',
    tertiaryColor: '#0f172a',
    fontSize: '14px'
  },
  flowchart: { htmlLabels: true, curve: 'basis' }
});

// ===== Scroll Fade-in =====
const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

document.querySelectorAll('.fade-in').forEach(el => fadeObserver.observe(el));
