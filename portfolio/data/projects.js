/**
 * projects.js — Single source of truth for all project data.
 * To add a project: push a new object into the PROJECTS array.
 * To add media later: set thumb to an image path string instead of the gradient string.
 */

const PROJECTS = [
  {
    id: "01",
    name: "AR Real-Time Stress Monitor",
    desc: "End-to-end biometric pipeline — ECG sensor → HRV feature extraction → Random Forest classifier → Flask API → Unity AR overlay. Visualizes the player's live stress state on top of the AR scene for monitoring and analysis.",
    tags: ["Python", "Flask", "Scikit-learn", "Unity", "AR Foundation", "Arduino"],
    href: "https://github.com/karthic-23/AR-Stress-Detection",
    featured: true,
    thumb: "linear-gradient(135deg, rgba(0,212,255,0.25), rgba(0,255,157,0.12))",
    // media: null  — set to image/video path when ready
  },
  {
    id: "02",
    name: "Cognitive Load XR Suite",
    desc: "VR experimental framework for EEG-based cognitive load measurement. Implements the Oddball paradigm and spatial navigation tasks; findings contributed to published research methodology.",
    tags: ["Unity", "C#", "OpenXR", "EEG Integration"],
    href: "https://github.com/karthic-23/OddballTask",
    featured: true,
    thumb: "linear-gradient(135deg, rgba(123,47,255,0.3), rgba(0,212,255,0.15))",
  },
  {
    id: "03",
    name: "CodeArena",
    desc: "Full-stack competitive coding platform with user authentication, coding challenges, submissions, leaderboards, and profile management. RESTful Spring Boot backend with JWT auth, containerized via Docker Compose.",
    tags: ["React", "Spring Boot", "MySQL", "Docker", "JWT", "Java"],
    href: "https://github.com/karthic-23",
    featured: false,
    thumb: "linear-gradient(135deg, rgba(0,255,157,0.18), rgba(0,212,255,0.1))",
  },
  {
    id: "04",
    name: "Face Mask Detection",
    desc: "CNN classifier using transfer learning for real-time mask compliance detection on live webcam input, built with TensorFlow and OpenCV. High accuracy on live video feeds.",
    tags: ["Python", "TensorFlow", "OpenCV", "Transfer Learning"],
    href: "https://github.com/karthic-23/Face-Mask-Detection",
    featured: false,
    thumb: "linear-gradient(135deg, rgba(0,212,255,0.12), rgba(30,47,61,0.5))",
  },
  {
    id: "05",
    name: "E-Commerce Analytics",
    desc: "Data analytics project exploring e-commerce trends, customer behaviour patterns, and business insights using modern data tools and visualisation pipelines.",
    tags: ["Python", "Power BI", "Data Analysis"],
    href: "https://github.com/karthic-23/E-Commerce-Analytics",
    featured: false,
    thumb: "linear-gradient(135deg, rgba(123,47,255,0.15), rgba(30,47,61,0.5))",
  },
  {
    id: "06",
    name: "SurvivingDots",
    desc: "A Unity-based reaction-time assessment application for capturing behavioural performance metrics. Automated CSV reporting and configurable task parameters for research use.",
    tags: ["Unity", "C#", "ShaderLab", "HLSL"],
    href: "https://github.com/karthic-23/SurvivingDots",
    featured: false,
    thumb: "linear-gradient(135deg, rgba(0,255,157,0.1), rgba(0,212,255,0.1))",
  },
];
