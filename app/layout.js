import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import React from "react"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Hacker's Terminal - SigmaTyper",
  description: "A simulated hacker terminal experience with dynamic code typing effect. This app mimics a hacker's interface for entertainment purposes.",
  keywords: [
    "Hacker Terminal",
    "SigmaTyper",
    "Code Typing Effect",
    "Simulated Hacker Interface",
    "Entertainment App",
    "Dynamic Code Display",
    "Hacking Simulation",
    "Tech Entertainment",
    "Programming Fun",
    "Interactive Terminal",
    "Coding Animation",
    "Hacker Experience",
    "Tech Simulation",
    "Developer Fun",
    "Coding Entertainment",
    "JSX",
    "Next.js",
    "React",
    "Web Development",
    "HTML5",
    "CSS3",
    "JavaScript",
    "Frontend Development",
    "User Interface",
    "UX Design",
    "Open Source",
    "Tech Community",
    "Software Development",
    "Coding Projects",
    "Web Apps",
    "Digital Experience",
    "Tech Innovation",
    "Programming Simulation",
    "Hacker Culture",
    "Tech Enthusiasts",
    "Coding Challenges",
    "Developer Tools",
    "Web Design",
    "App Development",
    "Tech Trends",
    "Software Engineering",
    "Interactive Web Apps",
    "Coding Skills",
    "Tech Fun",
    "Hacker Aesthetics",
    "Digital Entertainment",
    "Programming Humor",
    "Tech Lifestyle",
    "Coding Tutorials",
    "Web Technologies",
    "Next.js Apps",
    "React Components",
    "Frontend Fun",
    "Web Development Tools",
    "Tech Education",
    "Programming Communities",
    "Open Source Projects",
    "Web Development Trends",
    "Tech Creativity",
    "Coding Experiments",
    "Developer Experiences",
    "Web Innovation",
    "Tech Exploration",
    "Programming Adventures",
    "Hacker Simulations",
    "Digital Creativity",
    "Tech Projects",
    "Coding Fun Apps",
    "Web Development Fun",
    "Tech Enthusiast Apps",
    "Programming Entertainment",
    "Hacker Style Apps",
    "Digital Tech Fun",
    "Coding and Hacking",
    "Tech and Coding",
    "Web Dev Fun",
    "Programming and Fun",
    "Hacker Themed Apps",
    "Tech and Entertainment"
  ]
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
