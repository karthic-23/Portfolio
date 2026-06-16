/**
 * projects.js — Single source of truth for all project data.
 * To add/edit a project, update this array only. The renderer reads from here.
 *
 * category: 'xr' | 'software' | 'both'
 * featured: true renders the card full-width
 */
const PROJECTS = [
  {
    id: 'ar-stress-monitor',
    num: 'PROJECT_01',
    name: 'AR Real-Time Stress Monitor',
    desc: 'End-to-end biometric pipeline — ECG sensor → HRV feature extraction → Random Forest classifier → Flask API → Unity AR overlay. Adaptive gameplay mechanics respond live to the player\'s measured stress state.',
    tags: ['Python', 'Flask', 'Scikit-learn', 'Unity', 'AR Foundation', 'Arduino'],
    thumb: 'linear-gradient(135deg, rgba(0,212,255,0.25), rgba(0,255,157,0.12))',
    repo: 'https://github.com/karthic-23/AR-Stress-Detection',
    category: 'xr',
    featured: true,
  },
  {
    id: 'code-arena',
    num: 'PROJECT_02',
    name: 'CodeArena',
    desc: 'Full-stack competitive coding platform — user auth, challenges, submissions, leaderboards, and profile management. JWT-secured REST API with Spring Boot + JPA/Hibernate; containerised with Docker Compose for reproducible deploys.',
    tags: ['React', 'Spring Boot', 'MySQL', 'Docker', 'JWT', 'Java'],
    thumb: 'linear-gradient(135deg, rgba(0,255,157,0.2), rgba(0,212,255,0.1))',
    repo: 'https://github.com/karthic-23/CodeArena',
    category: 'software',
    featured: true,
  },
  {
    id: 'cognitive-load-xr',
    num: 'PROJECT_03',
    name: 'Cognitive Load XR Suite',
    desc: 'VR experimental framework for EEG-based cognitive load measurement. Implements the Oddball paradigm (P300 ERP elicitation) and spatial navigation tasks; supports cross-platform XR devices via OpenXR.',
    tags: ['Unity', 'C#', 'OpenXR', 'EEG Integration'],
    thumb: 'linear-gradient(135deg, rgba(123,47,255,0.3), rgba(0,212,255,0.15))',
    repo: 'https://github.com/karthic-23/OddballTask',
    category: 'xr',
    featured: false,
  },
  {
    id: 'project-dependency-exporter',
    num: 'PROJECT_04',
    name: 'Project Dependency Exporter',
    desc: 'Open-source Godot 4 editor plugin that exports scenes with all dependent assets, scripts, autoloads, and config files. Implements recursive dependency analysis, UID resolution, and modular export orchestration.',
    tags: ['Godot 4', 'GDScript', 'Open Source', 'Dev Tools'],
    thumb: 'linear-gradient(135deg, rgba(123,47,255,0.15), rgba(0,255,157,0.1))',
    repo: 'https://github.com/karthic-23',
    category: 'software',
    featured: false,
  },
  {
    id: 'surviving-dots',
    num: 'PROJECT_05',
    name: 'SurvivingDots',
    desc: 'Reaction-time behavioural assessment tool built in Unity. Captures click locations, task completion data, and timing metrics; exports automated CSV reports for performance analysis studies.',
    tags: ['Unity', 'C#', 'Behavioural Research', 'CSV Reporting'],
    thumb: 'linear-gradient(135deg, rgba(0,255,157,0.1), rgba(0,212,255,0.1))',
    repo: 'https://github.com/karthic-23/SurvivingDots',
    category: 'xr',
    featured: false,
  },
  {
    id: 'face-mask-detection',
    num: 'PROJECT_06',
    name: 'Face Mask Detection',
    desc: 'CNN classifier using transfer learning for real-time mask compliance detection on live webcam input, built with TensorFlow and OpenCV. Includes data augmentation, training pipeline, and accuracy/loss visualisation.',
    tags: ['Python', 'TensorFlow', 'OpenCV', 'Transfer Learning'],
    thumb: 'linear-gradient(135deg, rgba(0,212,255,0.12), rgba(30,47,61,0.5))',
    repo: 'https://github.com/karthic-23/Face-Mask-Detection',
    category: 'software',
    featured: false,
  },
];
