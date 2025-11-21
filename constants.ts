import { SkillCategory, Project, Certificate } from './types';

export const PERSONAL_INFO = {
  name: "Priyanshu Kumar",
  role: "Electrical Engineering Student",
  education: "Diploma in Electrical Engineering (3rd Semester)",
  college: "Government Polytechnic Manikpur, Uttar Pradesh, India",
  email: "erpriyanshu7@gmail.com",
  footerText: "You are viewing the portfolio of Priyanshu Kumar, an Electrical Engineering student learning power, automation & embedded technologies."
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Electrical Core",
    skills: [
      { name: "Circuits & Wiring", level: 90 },
      { name: "Electrical Machines", level: 85 },
      { name: "Power Systems", level: 80 },
      { name: "Protection Basics", level: 75 }
    ]
  },
  {
    title: "Advanced Tech",
    skills: [
      { name: "PLC & SCADA", level: 85 },
      { name: "Embedded C", level: 80 },
      { name: "EV & BMS", level: 70 },
      { name: "Power Electronics", level: 75 },
      { name: "IoT Systems", level: 85 },
      { name: "ETAP", level: 65 }
    ]
  },
  {
    title: "Tools & Software",
    skills: [
      { name: "MATLAB / Simulink", level: 70 },
      { name: "LTspice / Multisim", level: 85 },
      { name: "AutoCAD Electrical", level: 80 },
      { name: "Arduino IDE", level: 95 }
    ]
  },
  {
    title: "Programming",
    skills: [
      { name: "C Basics", level: 80 },
      { name: "Python", level: 75 },
      { name: "C++ (Arduino)", level: 90 }
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    title: "IoT Sensor Dashboard",
    description: "Real-time environmental monitoring system utilizing ESP8266 and cloud logging.",
    tags: ["IoT", "Arduino", "Web"],
    specs: ["ESP8266 NodeMCU", "DHT11 Sensor", "MQTT Protocol"]
  },
  {
    title: "Mini Inverter (12V DC -> 230V AC)",
    description: "Designed a high-frequency switching inverter circuit for emergency power backup.",
    tags: ["Power Electronics", "Hardware"],
    specs: ["MOSFET Switching", "Ferrite Core Transformer", "50Hz Oscillator"]
  },
  {
    title: "PLC Based Motor Control",
    description: "Automated start-stop logic for induction motors using ladder logic programming.",
    tags: ["Automation", "PLC", "SCADA"],
    specs: ["Ladder Logic", "Delta PLC", "Relay Logic"]
  },
  {
    title: "Arduino LED Controller",
    description: "PWM based brightness control and pattern generation for LED strips.",
    tags: ["Embedded", "C++"],
    specs: ["PWM Modulation", "Arduino Uno", "Transistor Driver"]
  },
  {
    title: "EV Battery Management (Prototype)",
    description: "Simulation of cell balancing and overcharge protection for Li-ion packs.",
    tags: ["EV", "BMS"],
    specs: ["Voltage Sensing", "Active Balancing Logic", "MATLAB Sim"]
  },
  {
    title: "Smart Home Switch",
    description: "Voice controlled relay module integrated with Google Assistant.",
    tags: ["IoT", "Automation"],
    specs: ["Relay Module", "WiFi", "Voice API"]
  }
];

export const CERTIFICATES: Certificate[] = [
  {
    name: "Industrial Automation (PLC/SCADA)",
    issuer: "TechSkill India",
    date: "2023",
    type: "Technical"
  },
  {
    name: "Introduction to IoT",
    issuer: "Cisco Networking Academy",
    date: "2023",
    type: "Course"
  },
  {
    name: "Python for Everybody",
    issuer: "University of Michigan (Coursera)",
    date: "2023",
    type: "Programming"
  }
];
