import React, { useState, useEffect, useRef } from 'react';
import './index.css';

// Main App component
function App() {
  const [typedText, setTypedText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const fullText = " Hi, I'm Abdelkader — Cybersecurity Analyst, Network Defender, and SIEM Enthusiast.";
  const typingSpeed = 70; // milliseconds per character
  const cursorBlinkSpeed = 500; // milliseconds

  // Typing effect for the landing page
  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < fullText.length) {
        setTypedText(prev => prev + fullText.charAt(i));
        i++;
      } else {
        clearInterval(typingInterval);
        setShowCursor(false); // Hide cursor after typing is complete
      }
    }, typingSpeed);

    // Cursor blinking effect
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, cursorBlinkSpeed);

    return () => {
      clearInterval(typingInterval);
      clearInterval(cursorInterval);
    };
  }, []);

  // Simple visitor counter animation
  const [visitorCount, setVisitorCount] = useState(0);
  const targetCount = 1337; // Example target count, can be dynamic
  const countRef = useRef(0);

  useEffect(() => {
    const animationDuration = 2000; // milliseconds
    const frameRate = 60; // frames per second
    const totalFrames = animationDuration / (1000 / frameRate);
    const incrementPerFrame = targetCount / totalFrames;

    const animateCount = () => {
      countRef.current += incrementPerFrame;
      if (countRef.current < targetCount) {
        setVisitorCount(Math.ceil(countRef.current));
        requestAnimationFrame(animateCount);
      } else {
        setVisitorCount(targetCount);
      }
    };

    requestAnimationFrame(animateCount);
  }, []);

  // Function to trigger a log event (will connect to backend later)
  const triggerLog = async () => {
    try {
      // Replace with your actual backend endpoint
      const response = await fetch('/api/trigger-log', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ event: 'dummy_log_event', timestamp: new Date().toISOString() }),
      });
      if (response.ok) {
        alert('Log event triggered successfully!'); // Use a custom modal in production
      } else {
        alert('Failed to trigger log event.'); // Use a custom modal in production
      }
    } catch (error) {
      console.error('Error triggering log:', error);
      alert('Error triggering log event.'); // Use a custom modal in production
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 font-inter antialiased">
      {/* Navigation (optional, can be added later) */}
      <nav className="fixed w-full z-10 bg-gray-900 bg-opacity-90 shadow-lg py-4 px-8 flex justify-center">
        <div className="container mx-auto flex justify-between items-center">
          <a href="#home" className="text-2xl font-bold text-teal-400 hover:text-teal-300 transition-colors duration-300">Abdelkader</a>
          <div className="space-x-8">
            <a href="#home" className="text-gray-300 hover:text-teal-400 transition-colors duration-300">Home</a>
            <a href="#behind-the-scenes" className="text-gray-300 hover:text-teal-400 transition-colors duration-300">Lab</a>
            <a href="#projects" className="text-gray-300 hover:text-teal-400 transition-colors duration-300">Projects</a>
            <a href="#contact" className="text-gray-300 hover:text-teal-400 transition-colors duration-300">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section - Landing Page */}
      <section id="home" className="relative flex items-center justify-center min-h-screen bg-cover bg-center" style={{
        backgroundImage: "url('./bg.jpg')",
        backgroundSize: 'fit',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
        <div className="absolute inset-0 bg-gray-900 opacity-80"></div>
        <div className="relative z-10 text-center p-8 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6 text-teal-400 drop-shadow-lg">
            <span className="font-mono">{typedText}</span>
            {showCursor && <span className="animate-blink inline-block w-2 bg-teal-400 h-10 ml-1"></span>}
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Dedicated to securing digital landscapes and building robust defense strategies.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a href="#projects" className="bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300">
              View Projects
            </a>
            <a href="#contact" className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300">
              Get In Touch
            </a>
          </div>
        </div>
      </section>

      {/* Behind the Scenes Section - Home Lab Diagram */}
      <section id="behind-the-scenes" className="py-20 px-8 bg-gray-800">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-teal-400 mb-12">Behind the Scenes: My Home Lab</h2>
          <p className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto">
            Explore the architecture of my personal cybersecurity lab, where I simulate real-world scenarios, test defenses, and deepen my understanding of network security.
          </p>
          <div className="bg-gray-900 rounded-lg shadow-xl p-8 md:p-12 border border-gray-700">
            <h3 className="text-3xl font-semibold text-teal-300 mb-8">Lab Architecture Overview</h3>
            <div className="relative w-full aspect-video max-w-4xl mx-auto flex items-center justify-center">



              <svg viewBox="0 0 1200 800" xmlns="http://www.w3.org/2000/svg">

                <rect width="1200" height="800" fill="#111827" />


                <rect x="50" y="50" width="1100" height="700" fill="none" stroke="#fbbf24" stroke-width="3" stroke-dasharray="10,5" rx="15" />
                <text x="70" y="35" font-family="Arial, sans-serif" font-size="18" font-weight="bold" fill="#fbbf24">AWS Cloud</text>


                <rect x="100" y="100" width="300" height="400" fill="#1f2937" stroke="#60a5fa" stroke-width="2" rx="10" />
                <text x="120" y="125" font-family="Arial, sans-serif" font-size="16" font-weight="bold" fill="#60a5fa">AWS Lightsail Instance</text>


                <rect x="120" y="150" width="260" height="80" fill="#10b981" stroke="#059669" stroke-width="2" rx="5" />
                <text x="140" y="170" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="#111827">ReactJs Portfolio App</text>
                <text x="140" y="190" font-family="Arial, sans-serif" font-size="12" fill="#111827">• ReactJs</text>
                <text x="140" y="205" font-family="Arial, sans-serif" font-size="12" fill="#111827">• Logs</text>
                <text x="140" y="220" font-family="Arial, sans-serif" font-size="12" fill="#111827">• Database</text>


                <rect x="120" y="250" width="120" height="60" fill="#f59e0b" stroke="#d97706" stroke-width="2" rx="5" />
                <text x="130" y="270" font-family="Arial, sans-serif" font-size="12" font-weight="bold" fill="#111827">Web Server</text>
                <text x="130" y="285" font-family="Arial, sans-serif" font-size="11" fill="#111827">Nginx/Apache</text>
                <text x="130" y="300" font-family="Arial, sans-serif" font-size="11" fill="#111827">Port 80/443</text>


                <rect x="260" y="250" width="120" height="60" fill="#8b5cf6" stroke="#7c3aed" stroke-width="2" rx="5" />
                <text x="270" y="270" font-family="Arial, sans-serif" font-size="12" font-weight="bold" fill="white">System Logs</text>
                <text x="270" y="285" font-family="Arial, sans-serif" font-size="11" fill="white">/var/log/</text>
                <text x="270" y="300" font-family="Arial, sans-serif" font-size="11" fill="white">auth, syslog</text>

                <rect x="120" y="330" width="260" height="80" fill="#6366f1" stroke="#4f46e5" stroke-width="2" rx="5" />
                <text x="140" y="350" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="white">Wazuh Agent</text>
                <text x="140" y="370" font-family="Arial, sans-serif" font-size="12" fill="white">• Log Collection</text>
                <text x="140" y="385" font-family="Arial, sans-serif" font-size="12" fill="white">• File Integrity Monitoring</text>
                <text x="140" y="400" font-family="Arial, sans-serif" font-size="12" fill="white">• Rootkit Detection</text>


                <rect x="500" y="100" width="300" height="400" fill="#374151" stroke="#f59e0b" stroke-width="2" rx="10" />
                <text x="520" y="125" font-family="Arial, sans-serif" font-size="16" font-weight="bold" fill="#f59e0b">Wazuh Manager Instance</text>


                <rect x="520" y="150" width="260" height="80" fill="#dc2626" stroke="#b91c1c" stroke-width="2" rx="5" />
                <text x="540" y="170" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="white">Wazuh Manager</text>
                <text x="540" y="190" font-family="Arial, sans-serif" font-size="12" fill="white">• Event Analysis</text>
                <text x="540" y="205" font-family="Arial, sans-serif" font-size="12" fill="white">• Rule Processing</text>
                <text x="540" y="220" font-family="Arial, sans-serif" font-size="12" fill="white">• Alert Generation</text>


                <rect x="520" y="250" width="120" height="60" fill="#0891b2" stroke="#0e7490" stroke-width="2" rx="5" />
                <text x="530" y="270" font-family="Arial, sans-serif" font-size="12" font-weight="bold" fill="white">Elasticsearch</text>
                <text x="530" y="285" font-family="Arial, sans-serif" font-size="11" fill="white">Log Storage</text>
                <text x="530" y="300" font-family="Arial, sans-serif" font-size="11" fill="white">& Indexing</text>


                <rect x="660" y="250" width="120" height="60" fill="#06b6d4" stroke="#0891b2" stroke-width="2" rx="5" />
                <text x="670" y="270" font-family="Arial, sans-serif" font-size="12" font-weight="bold" fill="white">Filebeat</text>
                <text x="670" y="285" font-family="Arial, sans-serif" font-size="11" fill="white">Log Shipping</text>
                <text x="670" y="300" font-family="Arial, sans-serif" font-size="11" fill="white">& Parsing</text>


                <rect x="520" y="330" width="260" height="80" fill="#ec4899" stroke="#db2777" stroke-width="2" rx="5" />
                <text x="540" y="350" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="white">Kibana Dashboard</text>
                <text x="540" y="370" font-family="Arial, sans-serif" font-size="12" fill="white">• Real-time Monitoring</text>
                <text x="540" y="385" font-family="Arial, sans-serif" font-size="12" fill="white">• Security Analytics</text>
                <text x="540" y="400" font-family="Arial, sans-serif" font-size="12" fill="white">• Custom Dashboards</text>


                <rect x="850" y="200" width="250" height="300" fill="#4b5563" stroke="#9333ea" stroke-width="2" rx="10" />
                <text x="870" y="225" font-family="Arial, sans-serif" font-size="16" font-weight="bold" fill="#d8b4fe">External Monitoring</text>


                <rect x="870" y="250" width="100" height="50" fill="#10b981" stroke="#059669" stroke-width="2" rx="5" />
                <text x="880" y="270" font-family="Arial, sans-serif" font-size="12" font-weight="bold" fill="white">Email</text>
                <text x="880" y="285" font-family="Arial, sans-serif" font-size="12" fill="white">Alerts</text>


                <rect x="980" y="250" width="100" height="50" fill="#6366f1" stroke="#4f46e5" stroke-width="2" rx="5" />
                <text x="990" y="270" font-family="Arial, sans-serif" font-size="12" font-weight="bold" fill="white">Slack</text>
                <text x="990" y="285" font-family="Arial, sans-serif" font-size="12" fill="white">Integration</text>


                <rect x="870" y="320" width="100" height="50" fill="#f59e0b" stroke="#d97706" stroke-width="2" rx="5" />
                <text x="880" y="340" font-family="Arial, sans-serif" font-size="12" font-weight="bold" fill="#111827">Mobile</text>
                <text x="880" y="355" font-family="Arial, sans-serif" font-size="12" fill="#111827">Alerts</text>


                <rect x="980" y="320" width="100" height="50" fill="#64748b" stroke="#475569" stroke-width="2" rx="5" />
                <text x="990" y="340" font-family="Arial, sans-serif" font-size="12" font-weight="bold" fill="white">API</text>
                <text x="990" y="355" font-family="Arial, sans-serif" font-size="12" fill="white">Monitoring</text>


                <rect x="870" y="390" width="210" height="50" fill="#78716c" stroke="#57534e" stroke-width="2" rx="5" />
                <text x="880" y="410" font-family="Arial, sans-serif" font-size="12" font-weight="bold" fill="white">SIEM Integration</text>
                <text x="880" y="425" font-family="Arial, sans-serif" font-size="12" fill="white">(Splunk, IBM QRadar, etc.)</text>


                <ellipse cx="250" cy="600" rx="80" ry="40" fill="#fbbf24" stroke="#f59e0b" stroke-width="2" />
                <text x="210" y="605" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="#111827">Internet</text>
                <text x="220" y="620" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="#111827">Users</text>


                <ellipse cx="650" cy="600" rx="80" ry="40" fill="#6366f1" stroke="#4f46e5" stroke-width="2" />
                <text x="610" y="605" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="white">Admin/</text>
                <text x="610" y="620" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="white">DevOps</text>


                <path d="M 380 370 L 480 370" stroke="#d1d5db" stroke-width="3" fill="none" marker-end="url(#arrowhead)" />
                <text x="420" y="365" font-family="Arial, sans-serif" font-size="12" fill="#d1d5db">Encrypted</text>
                <text x="420" y="378" font-family="Arial, sans-serif" font-size="12" fill="#d1d5db">Data Stream</text>

             
                <path d="M 780 280 L 850 280" stroke="#d1d5db" stroke-width="2" fill="none" marker-end="url(#arrowhead)" />
                <path d="M 780 370 L 850 370" stroke="#d1d5db" stroke-width="2" fill="none" marker-end="url(#arrowhead)" />


                <path d="M 250 560 L 250 500" stroke="#d1d5db" stroke-width="2" fill="none" marker-end="url(#arrowhead)" />
                <text x="260" y="530" font-family="Arial, sans-serif" font-size="12" fill="#d1d5db">HTTP/HTTPS</text>


                <path d="M 650 560 L 650 500" stroke="#d1d5db" stroke-width="2" fill="none" marker-end="url(#arrowhead)" />
                <text x="660" y="530" font-family="Arial, sans-serif" font-size="12" fill="#d1d5db">Dashboard</text>
                <text x="660" y="543" font-family="Arial, sans-serif" font-size="12" fill="#d1d5db">Access</text>


                <path d="M 250 230 L 250 250" stroke="#9ca3af" stroke-width="2" fill="none" marker-end="url(#arrowhead2)" />
                <path d="M 320 230 L 320 250" stroke="#9ca3af" stroke-width="2" fill="none" marker-end="url(#arrowhead2)" />
                <path d="M 250 310 L 250 330" stroke="#9ca3af" stroke-width="2" fill="none" marker-end="url(#arrowhead2)" />
                <path d="M 320 310 L 320 330" stroke="#9ca3af" stroke-width="2" fill="none" marker-end="url(#arrowhead2)" />


                <path d="M 650 230 L 650 250" stroke="#9ca3af" stroke-width="2" fill="none" marker-end="url(#arrowhead2)" />
                <path d="M 580 230 L 580 250" stroke="#9ca3af" stroke-width="2" fill="none" marker-end="url(#arrowhead2)" />
                <path d="M 650 310 L 650 330" stroke="#9ca3af" stroke-width="2" fill="none" marker-end="url(#arrowhead2)" />
                <path d="M 580 310 L 580 330" stroke="#9ca3af" stroke-width="2" fill="none" marker-end="url(#arrowhead2)" />


                <defs>
                  <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto">
                    <polygon points="0 0, 10 3.5, 0 7" fill="#d1d5db" />
                  </marker>
                  <marker id="arrowhead2" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto">
                    <polygon points="0 0, 10 3.5, 0 7" fill="#9ca3af" />
                  </marker>
                </defs>


                <rect x="50" y="680" width="500" height="60" fill="#374151" stroke="#6b7280" stroke-width="1" rx="5" />
                <text x="60" y="700" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="#f9fafb">Key Monitoring Points:</text>
                <text x="60" y="715" font-family="Arial, sans-serif" font-size="12" fill="#d1d5db">• Application logs (Django errors, access logs)</text>
                <text x="60" y="730" font-family="Arial, sans-serif" font-size="12" fill="#d1d5db">• System security events (login attempts, file changes, network connections)</text>


                <text x="600" y="30" font-family="Arial, sans-serif" font-size="20" font-weight="bold" text-anchor="middle" fill="#f9fafb">Portfolio App Security Monitoring with Wazuh</text>
              </svg>
            </div>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Real-time Logs Section */}
            <div className="bg-gray-900 rounded-lg shadow-xl p-8 border border-gray-700">
              <h3 className="text-3xl font-semibold text-teal-300 mb-6">Real-time Logs (Wazuh/Kibana)</h3>
              <p className="text-gray-300 mb-6">
                View live security events and alerts from my Wazuh SIEM, visualized in Kibana.
              </p>
              <a
                href="YOUR_KIBANA_DASHBOARD_URL_HERE" // IMPORTANT: Replace with your actual Kibana URL
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-external-link mr-2"><path d="M15 3h6v6" /><path d="M10 14 21 3" /><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /></svg>
                Open Kibana Dashboard
              </a>
              <p className="text-sm text-gray-500 mt-4">
                (Note: Ensure your Kibana dashboard is securely accessible and configured to allow external access.)
              </p>
            </div>

            {/* Trigger Log Section */}
            <div className="bg-gray-900 rounded-lg shadow-xl p-8 border border-gray-700">
              <h3 className="text-3xl font-semibold text-teal-300 mb-6">Trigger a Dummy Log Event</h3>
              <p className="text-gray-300 mb-6">
                Click the button below to simulate a log event, demonstrating the log ingestion pipeline (Filebeat → Logstash → Elasticsearch). You should see this reflected in your Kibana dashboard shortly after.
              </p>
              <button
                onClick={triggerLog}
                className="inline-flex items-center bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-zap mr-2"><path d="M4 14a1 1 0 0 1-.78-1.63L16.17 2l.14-.14a1 1 0 0 1 1.41 0L20 4.41a1 1 0 0 1 0 1.41L7.63 19.78A1 1 0 0 1 6 20a1 1 0 0 1-.78-.37ZM10.5 5.5 14 9" /></svg>
                Trigger Log Event
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Project Showcase Section */}
      <section id="projects" className="py-20 px-8 bg-gray-900">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-teal-400 mb-12">My Cybersecurity Projects</h2>
          <p className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto">
            A selection of projects and experiments from my cybersecurity lab, demonstrating practical skills in defense, analysis, and incident response.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Project Card 1: Cybersecurity Lab Setup */}
            <div className="bg-gray-800 rounded-lg shadow-xl overflow-hidden transform hover:scale-105 transition-transform duration-300 border border-gray-700">
              <img src="https://placehold.co/600x400/2d3748/a0aec0?text=Lab+Setup" alt="Cybersecurity Lab Setup" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-teal-300 mb-3">Home Cybersecurity Lab</h3>
                <p className="text-gray-400 mb-4">
                  Detailed setup and configuration of my virtualized home lab environment, including Proxmox, various VMs, and network segmentation.
                </p>
                <a href="https://documentation.wazuh.com/current/proof-of-concept-guide/index.html" className="text-teal-400 hover:text-teal-300 font-medium inline-flex items-center">
                  Learn More
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right ml-2"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                </a>
              </div>
            </div>

            {/* Project Card 2: DVWA Attacks & Exploitation */}
            <div className="bg-gray-800 rounded-lg shadow-xl overflow-hidden transform hover:scale-105 transition-transform duration-300 border border-gray-700">
              <img src="https://placehold.co/600x400/2d3748/a0aec0?text=DVWA+Attacks" alt="DVWA Attacks & Exploitation" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-teal-300 mb-3">DVWA: Web Vulnerability Exploitation</h3>
                <p className="text-gray-400 mb-4">
                  Demonstrations of common web vulnerabilities (SQLi, XSS, CSRF) using DVWA and techniques for exploitation and mitigation.
                </p>
                <a href="#" className="text-teal-400 hover:text-teal-300 font-medium inline-flex items-center">
                  Learn More
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right ml-2"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                </a>
              </div>
            </div>

            {/* Project Card 3: IDS Alerts & Wazuh Detection */}
            <div className="bg-gray-800 rounded-lg shadow-xl overflow-hidden transform hover:scale-105 transition-transform duration-300 border border-gray-700">
              <img src="https://placehold.co/600x400/2d3748/a0aec0?text=IDS+Alerts" alt="IDS Alerts & Wazuh Detection" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-teal-300 mb-3">IDS Alerts & SIEM Detection</h3>
                <p className="text-gray-400 mb-4">
                  Analyzing Suricata IDS alerts, integrating them into Wazuh, and developing custom detection rules for threat hunting.
                </p>
                <a href="#" className="text-teal-400 hover:text-teal-300 font-medium inline-flex items-center">
                  Learn More
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right ml-2"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visitor Counter Section */}
      <section className="py-16 px-8 bg-gray-800 text-center">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-teal-400 mb-8">Visitors to My Portfolio</h2>
          <div className="bg-gray-900 rounded-lg shadow-xl p-8 inline-flex items-center justify-center border border-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-users-round text-teal-400 mr-4"><path d="M18 21a8 8 0 0 0-16 0" /><circle cx="10" cy="8" r="5" /><path d="M22 21a8 8 0 0 0-16 0" /><circle cx="14" cy="8" r="5" /></svg>
            <span className="text-6xl font-extrabold text-white animate-pulse">{visitorCount}</span>
          </div>
          <p className="text-gray-400 mt-4">Reflecting interest and engagement with my work.</p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-8 bg-gray-900">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-teal-400 mb-12">Get In Touch</h2>
          <p className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto">
            I'm always open to discussing new opportunities, collaborations, or just connecting with fellow cybersecurity enthusiasts. Feel free to reach out!
          </p>

          <div className="flex flex-wrap justify-center gap-8 mb-12">
            {/* GitHub */}
            <a
              href="https://github.com/your-github" // Replace with your GitHub URL
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-6 bg-gray-800 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 border border-gray-700 w-40"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github text-white mb-3"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.44-.78-3.46 0 0-1 0-2 1.5-1-1-2-1.5-3-1.5s-2 .5-3 1.5c-1.25-1.5-2-1.5-3-1.5A4.8 4.8 0 0 0 2 18v4" /><path d="M2 11.5V10a6 6 0 0 1 6-6h8a6 6 0 0 1 6 6v1.5" /></svg>
              <span className="text-lg font-semibold text-gray-200">GitHub</span>
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com/in/your-linkedin" // Replace with your LinkedIn URL
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-6 bg-gray-800 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 border border-gray-700 w-40"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin text-white mb-3"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
              <span className="text-lg font-semibold text-gray-200">LinkedIn</span>
            </a>

            {/* Email */}
            <a
              href="mailto:your-email@example.com" // Replace with your Email
              className="flex flex-col items-center p-6 bg-gray-800 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 border border-gray-700 w-40"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail text-white mb-3"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
              <span className="text-lg font-semibold text-gray-200">Email</span>
            </a>

            {/* Resume */}
            <a
              href="/your-resume.pdf" // IMPORTANT: Place your resume PDF in the public folder or adjust path
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-6 bg-gray-800 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 border border-gray-700 w-40"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-file-text text-white mb-3"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" /><path d="M14 2v4a2 2 0 0 0 2 2h4" /><path d="M10 9H8" /><path d="M16 13H8" /><path d="M16 17H8" /></svg>
              <span className="text-lg font-semibold text-gray-200">Resume</span>
            </a>
          </div>

          {/* Simple Contact Form (Placeholder - requires backend validation) */}
          <div className="max-w-xl mx-auto bg-gray-800 rounded-lg shadow-xl p-8 border border-gray-700">
            <h3 className="text-2xl font-semibold text-teal-300 mb-6">Send a Message</h3>
            <form onSubmit={(e) => { e.preventDefault(); alert('Form submission is a placeholder. Implement backend logic and validation!'); }}>
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-3 rounded-md bg-gray-700 text-gray-100 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-500"
                  required
                />
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-3 rounded-md bg-gray-700 text-gray-100 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-500"
                  required
                />
              </div>
              <div className="mb-6">
                <textarea
                  placeholder="Your Message"
                  rows="5"
                  className="w-full p-3 rounded-md bg-gray-700 text-gray-100 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-500"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8 text-center border-t border-gray-700">
        <p>&copy; {new Date().getFullYear()} Abdelkader. All rights reserved.</p>
        <p className="mt-2">Built with React & TailwindCSS</p>
      </footer>

      {/* Tailwind CSS Custom Styles & Keyframes */}
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&family=JetBrains+Mono:wght@400;700&display=swap');

        .font-inter {
          font-family: 'Inter', sans-serif;
        }
        .font-mono {
          font-family: 'JetBrains Mono', monospace;
        }

        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }

        .animate-blink {
          animation: blink 1s step-end infinite;
        }

        /* Custom scroll behavior for smooth scrolling to sections */
        html {
          scroll-behavior: smooth;
        }

        /* Basic styling for the custom alert (replace JS alert with this) */
        .custom-alert {
          position: fixed;
          top: 20px;
          right: 20px;
          background-color: #10B981; /* Green for success */
          color: white;
          padding: 15px 25px;
          border-radius: 8px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
          z-index: 1000;
          opacity: 0;
          transform: translateY(-20px);
          transition: opacity 0.3s ease-out, transform 0.3s ease-out;
        }

        .custom-alert.show {
          opacity: 1;
          transform: translateY(0);
        }

        .custom-alert.error {
          background-color: #EF4444; /* Red for error */
        }
      `}</style>
    </div>
  );
}

export default App;
