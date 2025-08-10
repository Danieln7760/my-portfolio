"use client"

import { useTheme } from "next-themes"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Github, Linkedin, Code2, Router, ShieldCheck, Moon, Sun } from "lucide-react"

function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="ml-4 p-2 rounded-full border border-muted-foreground hover:bg-muted transition"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
    </button>
  )
}

export default function PortfolioHome() {
  return (
    <main className="p-6 max-w-5xl mx-auto animate-fade-in bg-gradient-to-b from-white via-slate-100 to-slate-200 dark:from-[#0c0c0c] dark:via-[#111827] dark:to-[#1f2937]">
      <section className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-2 text-primary">Hi, I&#39;m Daniel Nkemdirim</h1>
        <p className="text-lg text-muted-foreground">
          Network Engineer | Cybersecurity | Web Developer
        </p>
        <div className="flex justify-center gap-4 mt-4">
          <a href="mailto:nkemchisom727@gmail.com"><Mail className="hover:text-primary transition" /></a>
          <a href="https://github.com/danieln7760" target="_blank"><Github className="hover:text-primary transition" /></a>
          <a href="https://linkedin.com/in/danielnkemdirim/" target="_blank"><Linkedin className="hover:text-primary transition" /></a>
          <ThemeToggle />
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2"><Code2 /> About Me</h2>
        <p>
          I&#39;m a Network Technology student at Carleton University with hands-on experience in several programming languages including Python, JavaScript, and C, as well as practical expertise configuring Cisco switches and routers. I have strong proficiency in routing and switching protocols and a solid foundation in cybersecurity principles. My strengths include critical thinking, problem-solving, and a passion for building scalable, secure network infrastructures and embedded systems.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2"><ShieldCheck /> Certifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
          <Card>
            <CardContent className="p-4">
              <h3 className="font-bold">Cisco CCNA</h3>
              <p>Issued by Cisco - April 2024</p>
            </CardContent>
          </Card>
          </a>
          <a href="/NRS I32795.pdf" target="_blank" rel="noopener noreferrer">
          <Card>
            <CardContent className="p-4">
              <h3 className="font-bold">Nokia NSR I</h3>
              <p>Issued by Nokia - August 2025</p>
            </CardContent>
          </Card>
          </a>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2"><Router /> Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card>
            <CardContent className="p-4">
              <h3 className="font-bold">Proxmox Advanced Homelab</h3>
              <p>Built and managed a secure three-node Proxmox cluster hosting services like WireGuard VPN, AdGuard, Zabbix monitoring, Plex, Nginx, WordPress, and Seafile. Implemented automatic backups, dynamic DNS, and VM live migration for high availability and resilience in a home lab environment.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <h3 className="font-bold">Machine Learning Intrusion Detection</h3>
              <p>Developed an IDS using a machine learning model with adversarial robustness tools to detect and defend against evolving cyber threats.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <h3 className="font-bold">GoodStreams Web App</h3>
              <p>Built a JavaScript and PHP-based site enabling users to curate and manage personalized lists of movies and shows.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <h3 className="font-bold">Pac-Man Reinvented Game</h3>
              <p>Designed a Python game that reimagines Pac-Man using Pygame, enhancing gameplay with custom rules and levels.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Resume</h2>
        <a href="/danielnkemdirim_resume.pdf" target="_blank">
        <Button asChild>
          <p>Download Resume</p>
        </Button>
        </a>
      </section>
    </main>
  )
}
