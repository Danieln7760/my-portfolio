import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Github, Linkedin } from "lucide-react"

export default function PortfolioHome() {
  return (
    <main className="p-6 max-w-5xl mx-auto">
      <section className="text-center mb-10">
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        <h1 className="text-4xl font-bold mb-2">Hi, I'm Daniel nkemdirim</h1>
        <p className="text-lg text-muted-foreground">
          Network Engineer | Cybersecurity | Embedded Systems
        </p>
        <div className="flex justify-center gap-4 mt-4">
          <a href="mailto:you@example.com"><Mail /></a>
          <a href="https://github.com/Danieln7760" target="_blank"><Github /></a>
          <a href="https://linkedin.com/in/daniel-nkemdirim-180846170" target="_blank"><Linkedin /></a>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">About Me</h2>
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        <p>
          I'm a Network Technology student at Carleton University with hands-on experience in Proxmox, Zabbix, and 5G security architecture. I’m passionate about solving real-world tech problems with practical solutions in cybersecurity and embedded development.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Certifications</h2>
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
        <h2 className="text-2xl font-semibold mb-4">Projects</h2>
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
