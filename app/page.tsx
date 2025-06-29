"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Moon,
  Sun,
  Menu,
  X,
  Github,
  Linkedin,
  Instagram,
  Facebook,
  Phone,
  Mail,
  ExternalLink,
  Code,
  Palette,
  Smartphone,
  Globe,
  Download,
  Database,
  GitBranch,
  Brain,
  Server,
  Cpu,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [darkMode])

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setMobileMenuOpen(false)
  }

  const fadeInUp = {
    initial: { opacity: 0, y: 60, transition: { duration: 0.6 } },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const skills = [
    // Langages de programmation
    { name: "JavaScript", level: 90, icon: <Code className="w-5 h-5" /> },
    { name: "Python", level: 85, icon: <Code className="w-5 h-5" /> },
    { name: "Java", level: 80, icon: <Code className="w-5 h-5" /> },
    { name: "C++", level: 75, icon: <Code className="w-5 h-5" /> },
    { name: "C#", level: 70, icon: <Code className="w-5 h-5" /> },
    { name: "PHP", level: 85, icon: <Code className="w-5 h-5" /> },

    // Frameworks & Technologies Web
    { name: "React", level: 90, icon: <Globe className="w-5 h-5" /> },
    { name: "Next.js", level: 85, icon: <Globe className="w-5 h-5" /> },
    { name: "Node.js", level: 80, icon: <Server className="w-5 h-5" /> },
    { name: "Express.js", level: 85, icon: <Server className="w-5 h-5" /> },
    { name: ".NET Framework", level: 75, icon: <Cpu className="w-5 h-5" /> },

    // Bases de données
    { name: "MongoDB", level: 80, icon: <Database className="w-5 h-5" /> },
    { name: "MySQL", level: 85, icon: <Database className="w-5 h-5" /> },
    { name: "PostgreSQL", level: 75, icon: <Database className="w-5 h-5" /> },

    // Styling & Design
    { name: "HTML/CSS", level: 95, icon: <Palette className="w-5 h-5" /> },
    { name: "Tailwind CSS", level: 90, icon: <Palette className="w-5 h-5" /> },
    // { name: "Bootstrap", level: 85, icon: <Palette className="w-5 h-5" /> },

    // Intelligence Artificielle & Autres
    { name: "Intelligence Artificielle", level: 70, icon: <Brain className="w-5 h-5" /> },
    { name: "Machine Learning", level: 65, icon: <Brain className="w-5 h-5" /> },
    { name: "UI/UX Design", level: 75, icon: <Smartphone className="w-5 h-5" /> },
  ]

  const projects = [
    {
      title: "Application de Gestion de Laboratoire IRESCOMATH",
      description:
        "Conception et développement d'une application web complète pour la gestion du laboratoire de recherche HATEM BETTAHAR IRESCOMATH. Système complet de gestion des chercheurs, projets, équipements et publications scientifiques.",
      image: "/placeholder.svg?height=200&width=300",
      technologies: ["MongoDB", "Express.js", "React", "Node.js", "JWT", "Material-UI"],
      github: "https://github.com/Mahamat-Brahim-Abderassoul/Projet_Fin_Etude_PFE",
      demo: "#",
      type: "PFE",
      year: "2024",
    },
    {
      title: "Plateforme de Gestion Scolaire EDU-TUNSI",
      description:
        "Développement d'une plateforme web complète pour la gestion scolaire incluant la gestion des étudiants, professeurs, cours, notes et emplois du temps. Interface intuitive et responsive.",
      image: "/placeholder.svg?height=200&width=300",
      technologies: ["HTML5", "CSS3", "PHP", "MySQL", "JavaScript"],
      github: "#",
      demo: "#",
      type: "Projet Académique",
      year: "2023",
    },
    {
      title: "Système de Gestion RH",
      description:
        "Application web pour la gestion des ressources humaines d'une entreprise. Fonctionnalités de gestion des employés, congés, paies, évaluations et recrutement avec tableau de bord analytique.",
      image: "/placeholder.svg?height=200&width=300",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Next.js", "JWT"],
      github: "https://github.com/Mahamat-Brahim-Abderassoul/gestion-rh",
      demo: "#",
      type: "Projet Personnel",
      year: "2023",
    },
    {
      title: "E-commerce Platform",
      description: "Une plateforme e-commerce complète avec panier, paiement et gestion des commandes.",
      image: "/placeholder.svg?height=200&width=300",
      technologies: ["React", "Next.js", "Stripe", "MongoDB"],
      github: "#",
      demo: "#",
    },
    // {
    //   title: "Dashboard Analytics",
    //   description: "Dashboard interactif pour visualiser des données avec graphiques et métriques en temps réel.",
    //   image: "/placeholder.svg?height=200&width=300",
    //   technologies: ["React", "D3.js", "Node.js", "PostgreSQL"],
    //   github: "#",
    //   demo: "#",
    // },
    // {
    //   title: "App Mobile React Native",
    //   description: "Application mobile cross-platform pour la gestion de tâches avec synchronisation cloud.",
    //   image: "/placeholder.svg?height=200&width=300",
    //   technologies: ["React Native", "Firebase", "Redux", "TypeScript"],
    //   github: "#",
    //   demo: "#",
    // },
  ]

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? "dark" : ""}`}>
      <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
        {/* Navigation */}
        <nav className="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md z-50 border-b border-gray-200 dark:border-gray-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
              >
                Mahamat
              </motion.div>

              {/* Desktop Navigation */}
              <div className="hidden md:flex space-x-8">
                {["accueil", "apropos", "competences", "projets", "contact"].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors capitalize"
                  >
                    {item === "apropos" ? "À propos" : item === "competences" ? "Compétences" : item}
                  </button>
                ))}
              </div>

              <div className="flex items-center space-x-4">
                <Button variant="ghost" size="icon" onClick={toggleDarkMode} className="rounded-full">
                  {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                </Button>

                {/* Mobile menu button */}
                <Button
                  variant="ghost"
                  size="icon"
                  className="md:hidden"
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                  {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </Button>
              </div>
            </div>
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700"
              >
                <div className="px-4 py-2 space-y-2">
                  {["accueil", "apropos", "competences", "projets", "contact"].map((item) => (
                    <button
                      key={item}
                      onClick={() => scrollToSection(item)}
                      className="block w-full text-left py-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors capitalize"
                    >
                      {item === "apropos" ? "À propos" : item === "competences" ? "Compétences" : item}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>

        {/* Hero Section */}
        <section id="accueil" className="pt-20 min-h-screen flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                  Salut, je suis{" "}
                  <br />
                    <span className="text-blue-600 dark:text-blue-400">
                           Mahamat Brahim Abderassoul
                    </span>
                  <br />
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Développeur Web Full-Stack
                  </span>
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                  Passionné par la création d'expériences web modernes et intuitives. Spécialisé en React, Next.js et
                  développement full-stack.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    onClick={() => scrollToSection("projets")}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                  >
                    Voir mes projets
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => scrollToSection("contact")}
                    className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white dark:border-blue-400 dark:text-blue-400"
                  >
                    Me contacter
                  </Button>
                  <Button
                    variant="outline"
                    asChild
                    className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white dark:border-green-400 dark:text-green-400"
                  >
                    <a href="/CVPro.pdf" download="CV-Mahamat-Brahim-Abderassoul.pdf">
                      <Download className="w-4 h-4 mr-2" />
                      Télécharger CV
                    </a>
                  </Button>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <div className="w-80 h-80 mx-auto rounded-full overflow-hidden border-4 border-blue-600 shadow-2xl">
                  <img src="/ImagePRO.jpeg" alt="Mahamat Brahim Abderassoul - Développeur" className="w-full h-full object-cover" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="apropos" className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">À propos de moi</h2>
              <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Développeur passionné avec plus de 3 ans d'expérience dans la création d'applications web modernes.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                {/* <div className="w-full h-96 rounded-lg overflow-hidden shadow-xl">
                  <img src="/profile.jpg" alt="À propos de moi" className="w-full h-full object-cover" />
                </div> */}
                {/* <div className="w-full h-96 rounded-lg overflow-hidden shadow-xl bg-white flex items-center justify-center">
                  <img src="/Moi2.jpg" alt="À propos de moi" className="max-h-full max-w-full object-contain" />
                </div> */}
                {/* <div className="rounded-lg overflow-hidden shadow-xl inline-block">
                  <img src="/Moi2.jpg" alt="À propos de moi" className="block max-w-full h-auto" />
                </div> */}
                <div className="rounded-lg overflow-hidden shadow-xl" style={{ width: '400px', height: '600px' }}>
                  <img src="/Moi2.jpg" alt="À propos de moi" className="w-full h-full object-contain" />
                </div>

              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <p className="text-gray-600 dark:text-gray-300">
                  Je suis un développeur full-stack passionné par les technologies modernes. J'aime créer des interfaces
                  utilisateur intuitives et des expériences web exceptionnelles.
                </p>
              
                <p className="text-gray-600 dark:text-gray-300">
                  Mon expertise couvre des technologies telles que React, Next.js, TypeScript, Node.js, et bien d'autres outils du développement web moderne. Je suis toujours à la recherche de nouveaux défis techniques et d'opportunités pour élargir mes compétences.
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  Actuellement, je poursuis un Master professionnel en Sécurité des Systèmes et des Réseaux Informatiques, ce qui me permet d’allier mes compétences en développement à une solide compréhension des enjeux de cybersécurité et d’infrastructure réseau.

                </p>
                <div className="flex flex-wrap gap-2">
                  {["Curieux","Créatif", "Rigoureux", "Collaboratif", "Innovant", "Engagé"].map((trait) => (
                    <Badge
                      key={trait}
                      variant="secondary"
                      className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                    >
                      {trait}
                    </Badge>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="competences" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Mes Compétences</h2>
              <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Technologies et outils que je maîtrise pour créer des solutions innovantes.
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  variants={fadeInUp}
                  className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700"
                >
                  <div className="flex items-center mb-4">
                    <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg mr-3">{skill.icon}</div>
                    <h3 className="text-lg font-semibold">{skill.name}</h3>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full"
                    />
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">{skill.level}%</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projets" className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Mes Projets</h2>
              <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Découvrez quelques-uns de mes projets récents qui démontrent mes compétences techniques.
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {projects.map((project, index) => (
                <motion.div key={project.title} variants={fadeInUp}>
                  <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300 border-gray-200 dark:border-gray-700">
                    <div className="relative overflow-hidden">
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                        <div className="opacity-0 hover:opacity-100 transition-opacity duration-300 flex space-x-4">
                          <Button size="sm" variant="secondary" asChild>
                            <a href={project.github} target="_blank" rel="noopener noreferrer">
                              <Github className="w-4 h-4 mr-2" />
                              Code
                            </a>
                          </Button>
                          <Button size="sm" asChild>
                            <a href={project.demo} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="w-4 h-4 mr-2" />
                              Demo
                            </a>
                          </Button>
                        </div>
                      </div>
                    </div>
                    <CardHeader>
                      <CardTitle>{project.title}</CardTitle>
                      <CardDescription>{project.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <Badge key={tech} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Contactez-moi</h2>
              <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Intéressé par une collaboration ? N'hésitez pas à me contacter !
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="max-w-2xl mx-auto"
            >
              <Card className="border-gray-200 dark:border-gray-700">
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-3 gap-8 text-center">
                    {/* <a href="mailto:brahimy.mahamat@gmail.com" className="space-y-4 hover:scale-105 transition-transform">
                      <div className="p-4 bg-blue-100 dark:bg-blue-900 rounded-full w-16 h-16 mx-auto flex items-center justify-center">
                        <Mail className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">Email</h3>
                        <p className="text-gray-600 dark:text-gray-300">brahimy.mahamat@gmail.com</p>
                      </div>
                    </a> */}
                    {/* <a
                      href="https://mail.google.com/mail/?view=cm&fs=1&to=brahimy.mahamat@gmail.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="space-y-4 hover:scale-105 transition-transform"
                    >
                      <div className="p-4 bg-blue-100 dark:bg-blue-900 rounded-full w-16 h-16 mx-auto flex items-center justify-center">
                      <Mail className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div>
                         <h3 className="font-semibold mb-2">Email</h3>
                         <p className="text-gray-600 dark:text-gray-300">brahimy.mahamat@gmail.com</p>
                      </div>
                    </a>


                    <a
                      href="https://github.com/Mahamat-Brahim-Abderassoul"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="space-y-4 hover:scale-105 transition-transform"
                    >
                      <div className="p-4 bg-blue-100 dark:bg-blue-900 rounded-full w-16 h-16 mx-auto flex items-center justify-center">
                        <Github className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">GitHub</h3>
                        <p className="text-gray-600 dark:text-gray-300">Mahamat-Brahim-Abderassoul</p>
                      </div>
                    </a>

                    <a
                      href="https://linkedin.com/in/mahamat-brahim-abderassoul"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="space-y-4 hover:scale-105 transition-transform"
                    >
                      <div className="p-4 bg-blue-100 dark:bg-blue-900 rounded-full w-16 h-16 mx-auto flex items-center justify-center">
                        <Linkedin className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">LinkedIn</h3>
                        <p className="text-gray-600 dark:text-gray-300">Mahamat Brahim Abderassoul</p>
                      </div>
                    </a> */}
                    {/* Email */}
                    <a
                      href="https://mail.google.com/mail/?view=cm&fs=1&to=brahimy.mahamat@gmail.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="space-y-4 hover:scale-105 transition-transform"
                    >
                      <div className="p-4 bg-yellow-100 dark:bg-yellow-900 rounded-full w-16 h-16 mx-auto flex items-center justify-center">
                        <Mail className="w-8 h-8 text-yellow-600 dark:text-yellow-400" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">Email</h3>
                      </div>
                    </a>

                    {/* LinkedIn */}
                    <a
                      href="https://linkedin.com/in/mahamat-brahim-abderassoul"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="space-y-4 hover:scale-105 transition-transform"
                    >
                      <div className="p-4 bg-cyan-100 dark:bg-cyan-900 rounded-full w-16 h-16 mx-auto flex items-center justify-center">
                        <Linkedin className="w-8 h-8 text-cyan-600 dark:text-cyan-400" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">LinkedIn</h3>
                      </div>
                    </a>

                    {/* GitHub */}
                    <a
                      href="https://github.com/Mahamat-Brahim-Abderassoul"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="space-y-4 hover:scale-105 transition-transform"
                    >
                      <div className="p-4 bg-gray-100 dark:bg-gray-900 rounded-full w-16 h-16 mx-auto flex items-center justify-center">
                        <Github className="w-8 h-8 text-gray-800 dark:text-gray-300" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">GitHub</h3>
                      </div>
                    </a>
                                        {/* Facebook */}
                    <a
                      href="https://www.facebook.com/mahamatbrahim.abdelrassoul"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="space-y-4 hover:scale-105 transition-transform"
                    >
                      <div className="p-4 bg-blue-100 dark:bg-blue-900 rounded-full w-16 h-16 mx-auto flex items-center justify-center">
                        <Facebook className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">Facebook</h3>
                        <p className="text-gray-600 dark:text-gray-300"></p>
                      </div>
                    </a>

                    {/* Numéro de téléphone */}
                    <a
                      href="tel:+1234567890"
                      className="space-y-4 hover:scale-105 transition-transform"
                    >
                      <div className="p-4 bg-green-100 dark:bg-green-900 rounded-full w-16 h-16 mx-auto flex items-center justify-center">
                        <Phone className="w-8 h-8 text-green-600 dark:text-green-400" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">Téléphone</h3>
                        <p className="text-gray-600 dark:text-gray-300">+216 831 978</p>
                      </div>
                    </a>

                    {/* Instagram */}
                    <a
                      href="https://www.instagram.com/brahimy_abderassoul/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="space-y-4 hover:scale-105 transition-transform"
                    >
                      <div className="p-4 bg-pink-100 dark:bg-pink-900 rounded-full w-16 h-16 mx-auto flex items-center justify-center">
                        <Instagram className="w-8 h-8 text-pink-600 dark:text-pink-400" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">Instagram</h3>
                        {/* <p className="text-gray-600 dark:text-gray-300">@ton-profil</p> */}
                      </div>
                    </a>
                  </div>

                  <div className="mt-8 text-center">
                    <Button
                      className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                      asChild
                    >
                      <a href="https://mail.google.com/mail/?view=cm&fs=1&to=brahimy.mahamat@gmail.com"
                        target="_blank"
                      >
                        <Mail className="w-4 h-4 mr-2" />
                        Envoyer un email
                      </a>
       
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p>&copy; 2025 Portfolio. Tous droits réservés.</p>
          </div>
        </footer>
      </div>
      {/* Bouton CV flottant */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2, duration: 0.5 }}
        className="fixed bottom-6 right-6 z-40"
      >
        <Button
          asChild
          className="bg-green-600 hover:bg-green-700 text-white rounded-full w-14 h-14 shadow-lg hover:shadow-xl transition-all duration-300"
          title="Télécharger mon CV"
        >
          <a href="/CVPro.pdf" download="CV-Mahamat-Brahim-Abderassoul.pdf">
            <Download className="w-6 h-6" />
          </a>
        </Button>
      </motion.div>
    </div>
  )
}
