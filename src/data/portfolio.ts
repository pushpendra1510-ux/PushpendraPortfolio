import { PersonalInfo, Skill, Project } from '../types';

export const personalInfo: PersonalInfo = {
  name: "Pushpendra Regar",
  title: "Creative Full Stack Developer",
  email: "pushpendraregar151@gmail.com",
  phone: "+91 6378309715",
  location: "Jaipur",
  bio: "Hi, I'm Pushpendra Regar. I'm a Full Stack Developer specializing in Python, HTML, and Java, with a passion for cloud services. My journey began with a fascination for technology, and it has evolved into a career where I enjoy solving complex problems and creating user-friendly interfaces. When I'm not coding, you can find me exploring the latest tech trends, contributing to open-source projects, or enjoying a good book.",
  linkedinUrl: "https://www.linkedin.com/in/pushpendra-regar-296194360?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  githubUrl: "https://github.com/pushpendra1510-ux"
};

export const skills: Skill[] = [
  { name: "JavaScript", proficiency: 90, icon: "⚡" },
  { name: "Python", proficiency: 85, icon: "🐍" },
  { name: "React", proficiency: 85, icon: "⚛️" },
  { name: "HTML", proficiency: 85, icon: "🌐" },
  { name: "CSS", proficiency: 70, icon: "🎨" },
  { name: "Node.js", proficiency: 50, icon: "🚀" }
];

export const projects: Project[] = [
  {
    name: "E-commerce Website",
    description: "A fully functional e-commerce platform featuring product listings, a shopping cart, and secure payment processing.",
    technologies: ["React", "Node.js", "MongoDB"],
    image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    name: "Task Management App",
    description: "An intuitive task management application that allows users to create, update, and track their tasks efficiently.",
    technologies: ["Vue.js", "Firebase"],
    image: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=800"
  }
];