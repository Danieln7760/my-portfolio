import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Github, Linkedin, Code2, Router, ShieldCheck } from "lucide-react"

export default function PortfolioHome() {
  return (
    <main className="p-6 max-w-5xl mx-auto animate-fade-in">
      <section className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-2 text-primary">Hi, I&#39;m Daniel nkemdirim</h1>
        <p className="text-lg text-muted-foreground">
          Network Engineer | Cybersecurity | Web developer
        </p>
        <div className="flex justify-center gap-4 mt-4">
          <a href="mailto:nkemchisom727@gmail.com"><Mail className="hover:text-primary transition" /></a>
          <a href="https://github.com/danieln7760" target="_blank"><Github className="hover:text-primary transition" /></a>
          <a href="https://linkedin.com/in/danielnkemdirim/" target="_blank"><Linkedin className="hover:text-primary transition" /></a>
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
          <Card>
            <CardContent className="p-4">
              <h3 className="font-bold">Cisco CCNA</h3>
              <p>Issued by Cisco - April 2024</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <h3 className="font-bold">CompTIA Security+</h3>
              <p>Issued by CompTIA - Dec 2023</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2"><Router /> Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card>
            <CardContent className="p-4">
              <h3 className="font-bold">Proxmox Advanced Homelab</h3>
              <p>Built and monitored a secure Proxmox homelab cluster using Zabbix, VPN, and remote access.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <h3 className="font-bold">5G Security Architecture</h3>
              <p>Designed a zero-trust network slicing architecture to enhance 5G infrastructure resilience.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Resume</h2>
        <Button asChild>
          <a href="/resume.pdf" target="_blank">Download Resume</a>
        </Button>
      </section>
    </main>
  )
}
