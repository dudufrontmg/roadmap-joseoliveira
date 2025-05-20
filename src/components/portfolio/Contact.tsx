import React from "react";
import { Linkedin, MapPin, Youtube, Github, Instagram, Mail, Contact2 } from "lucide-react";

export default function Contact({ language }) {
  const content = {
    pt: {
      title: "Contato",
      subtitle: "Vamos nos conectar!",
      description:
        "Sinta-se à vontade para entrar em contato comigo para colaborações potenciais ou discussões de projetos. Será um prazer compartilhar experiências e conhecimentos.",
      email: "Email",
      location: "Localização",
      contact: "Contato",
    },
    en: {
      title: "Contact",
      subtitle: "Let's Connect!",
      description:
        "Feel free to reach out to me for potential collaborations or project discussions. It will be a pleasure to share experiences and knowledge.",
      email: "Email",
      location: "Location",
      contact: "Contact",
    },
  };

  const text = content[language];

  const socialLinks = [
    {
      icon: Linkedin,
      url: "https://www.linkedin.com/in/jnoliveira/",
      hoverColor: "hover:text-blue-400",
    },
    {
      icon: Github,
      url: "https://github.com/dudufrontmg",
      hoverColor: "hover:text-gray-400",
    },
    {
      icon: Youtube,
      url: "https://www.youtube.com/@DuDicas",
      hoverColor: "hover:text-red-400",
    },
    {
      icon: Instagram,
      url: "https://www.instagram.com/dudufront/",
      hoverColor: "hover:text-pink-400",
    },
    {
      icon: Mail,
      url: "mailto:dudufrontmg@hotmail.com",
      hoverColor: "hover:text-yellow-400",
    },
  ];

  return (
    <article className="space-y-12">
      <header className="text-center space-y-4">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
          {text.title}
        </h2>
        <p className="text-xl text-gray-300">{text.subtitle}</p>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-emerald-400 mx-auto rounded-full"></div>
      </header>

      <section className="max-w-4xl mx-auto">
        <p className="text-gray-300 text-center text-lg mb-12 leading-relaxed">
          {text.description}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 hover:border-emerald-500/50 transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex items-center space-x-4 mb-6">
              <div className="p-3 bg-emerald-500/10 rounded-xl">
                <MapPin className="text-emerald-400 w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-emerald-400">
                {text.location}
              </h3>
            </div>
            <p className="text-gray-300">Jundiai, SP Brasil</p>
          </div>

          <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex items-center space-x-4 mb-6">
              <div className="p-3 bg-blue-500/10 rounded-xl">
                <Contact2 className="text-blue-400 w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-blue-400">
                {text.contact}
              </h3>
            </div>
            <div className="flex space-x-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-gray-300 ${social.hoverColor} transition-colors transform hover:scale-110`}
                >
                  <social.icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}