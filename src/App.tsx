import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion';
import { Award, Briefcase, Code, Github, GraduationCap, Mail, Moon, Sun, TwitterIcon, User } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import './App.css';
import { Avatar, AvatarFallback, AvatarImage } from './components/ui/avatar';
import { Button } from './components/ui/button';
import { Card, CardContent } from './components/ui/card';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [darkMode, setDarkMode] = useState(true);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const scrollPosition = window.scrollY;

      sections.forEach((section) => {
        if (section.offsetTop <= scrollPosition + 150) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const sections = [
    { id: 'about', icon: User, title: 'Sobre mí' },
    { id: 'experience', icon: Briefcase, title: 'Experiencia' },
    { id: 'skills', icon: Code, title: 'Habilidades' },
    { id: 'education', icon: GraduationCap, title: 'Educación' },
    { id: 'projects', icon: Award, title: 'Proyectos' },
  ];

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-100 text-gray-900'} transition-colors duration-300`} ref={containerRef}>
      <nav className={`w-25 ${darkMode ? 'bg-gray-800' : 'bg-white'} fixed h-full overflow-auto z-10 transition-colors duration-300 flex flex-col items-center py-8`}>
  <Avatar className={`w-24 h-24 mb-8 rounded-full overflow-hidden border-2 ${darkMode ? 'border-gray-700' : 'border-gray-300'}`}>
    <AvatarImage src="/sho1.png" alt="Profile picture" className="w-full h-full object-cover" />
    <AvatarFallback className={`flex items-center justify-center ${darkMode ? 'bg-gray-700 text-gray-400' : 'bg-gray-200 text-gray-500'} rounded-full w-full h-full`}>
      TN
    </AvatarFallback>
  </Avatar>
  {sections.map((section) => (
    <Button
      key={section.id}
      onClick={() => scrollToSection(section.id)}
      variant={activeSection === section.id ? 'default' : 'ghost'}
      size="icon"
      className={`mb-4 ${darkMode ? 'text-gray-400' : 'text-blue-500'}`}
    >
      <section.icon className={`h-6 w-6`} />
    </Button>
  ))}
</nav>

      <main className="ml-20 p-8">
  <motion.div
  className="fixed inset-0 pointer-events-none z-0"
  style={{
    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='${
      darkMode ? '%239C92AC' : '%23000000'
    }' fill-opacity='0.08'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
    backgroundPosition: '0px 0px',
    backgroundSize: '60px 60px',
    y: backgroundY
  }}
/>
  <AnimatePresence>
    <motion.section
      key="hero"
      id="hero"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen flex items-center justify-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <motion.h1
          className={`text-6xl font-bold mb-4 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 100 }}
        >
          DavC
        </motion.h1>
        <motion.p
          className={`text-xl mb-8 ${darkMode ? 'text-gray-300' : 'text-gray-900'}`}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Desarrollador Web | Diseñador UX | FullStack Web
        </motion.p>
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.6, type: 'spring', stiffness: 120 }}
        >
<Button
  onClick={() => scrollToSection('about')}
  className={`transition-colors duration-300 ${darkMode ? 'bg-blue-600 text-white hover:bg-blue-500' : 'bg-blue-950 text-white hover:bg-blue-900'}`}
>
  Conóceme
</Button>
        </motion.div>
      </motion.div>
    </motion.section>
    {sections.map((section) => (
      <motion.section
        key={section.id}
        id={section.id}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen py-16 flex items-center"
      >
        <Card className={`w-full ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
          <CardContent className="p-6">
            <motion.h2
              className={`text-4xl font-bold mb-8 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2, type: 'spring', stiffness: 100 }}
            >
              {section.title}
            </motion.h2>
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              {/* Contenido específico de cada sección */}
              {section.id === 'about' && (
                <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} leading-relaxed`}>
  Soy estudiante de Ingeniería en Computación, apasionado por la tecnología y la programación. Disfruto trabajar en equipo y resolver problemas que afectan a la sociedad mediante el desarrollo de software que facilite la vida de los usuarios. <br />
  Vivo en Oaxaca de Juárez, tengo 18 años y me gusta practicar deportes, dibujar y diseñar.
</p>
              )}
              {section.id === 'experience' && (
                <ul className="space-y-4">
                  <li>
                    <h3 className={`text-xl font-semibold ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>Desarrollador</h3>
                    <p className={`${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Desarrollador Freelancer</p>
                    <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} mt-2`}>Desarrollo de aplicaciones web utilizando React, Node.js y SQL.</p>
                    <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} mt-2`}>Desarrollo de Proyectos Personales para Auto Aprendizaje.</p>
                  </li>
                  <li>
                    <h3 className={`text-xl font-semibold ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>Desarrollador Front-end</h3>
                    <p className={`${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Desinger</p>
                    <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} mt-2`}>Trabajos de Front-End en diseño de paginas web con tecnologias como Boostrap, Tailwind CSS y Vite</p>
                  </li>


                </ul>

              )}
              {section.id === 'skills' && (
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {['React', 'Python', 'C & C#', 'SQL', 'CSS', 'Tailwind & boostrap', 'JS', 'Python', 'Kotlin','PHP','PostgreSQL' ].map((skill, index) => (
                    <motion.div
                      key={skill}
                      className={`${darkMode ? 'bg-gray-700 text-gray-100' : 'bg-gray-200 text-gray-900'} p-3 rounded-md text-center`}
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      {skill}
                    </motion.div>
                  ))}
                </div>
              )}
              {section.id === 'education' && (
                <div>
                  <h3 className={`text-xl font-semibold ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>Tecnico en  programacion</h3>
                  <p  className={`${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Colegio de Estudios Científicos y Tecnológicos del Estado de Oaxaca </p>
                  <a href="https://www.cecyteo.edu.mx/Nova/Portal/Index" className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
    https://www.cecyteo.edu.mx/Nova/Portal/Index
  </a>
                  <br />
                  <hr className={`${darkMode ? 'border-gray-700' : 'border-gray-300'}`} />
                  <h3 className={`text-xl font-semibold ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>Ingeniería en  Computacion</h3>
                  <p  className={`${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Universidad Tecnológica de la Mixteca </p>
                  <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} mt-2`}>
  <a href="https://www.utm.mx/" className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
    https://www.utm.mx/
  </a>
</p>
                </div>
              )}
              {section.id === 'projects' && (
                <div className="space-y-6">
  {/* Proyecto 1 */}
  <div className={` ${darkMode ? 'bg-gray-800 text-gray-200 border-gray-700' : 'border-gray-200'} border rounded-lg shadow-lg overflow-hidden`}>
    <div className="p-4">
      <h3 className={`text-2xl font-semibold ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>FondoDv</h3>
      <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} mt-2`}>
        Programa para Windows realizado con C# y Windows Form + .NET, que permite al usuario cambiar el fondo de su pantalla de una manera más dinámica.
      </p>
      <a href="https://github.com/Davidcrz14/FondoDv" className={`mt-4 block ${darkMode ? 'text-blue-400' : 'text-blue-600'} hover:underline`} target="_blank" rel="noopener noreferrer">
        Ver en GitHub
      </a>
    </div>
  </div>

  {/* Proyecto 2 */}
  <div className={` ${darkMode ? 'bg-gray-800 text-gray-200 border-gray-700' : 'border-gray-200'} border rounded-lg shadow-lg overflow-hidden`}>
    <div className="p-4">
      <h3 className={`text-2xl font-semibold ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>Red Social</h3>
      <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} mt-2`}>
        Una red social de estilo foro que permite a los usuarios interactuar y compartir contenido. Diseñada para ofrecer una experiencia de usuario intuitiva y personalizada.
      </p>
      <a href="https://github.com/Davidcrz14/Red-Social" className={`mt-4 block ${darkMode ? 'text-blue-400' : 'text-blue-600'} hover:underline`} target="_blank" rel="noopener noreferrer">
        Ver en GitHub
      </a>
    </div>
  </div>

  {/* Proyecto 3 */}
  <div className={` ${darkMode ? 'bg-gray-800 text-gray-200 border-gray-700' : 'border-gray-200'} border rounded-lg shadow-lg overflow-hidden`}>
    <div className="p-4">
      <h3 className={`text-2xl font-semibold ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>BotD</h3>
      <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} mt-2`}>
        Bot de Discord diseñado para mejorar la experiencia del usuario en servidores mediante funcionalidades útiles y divertidas. Construido con discord.js.
      </p>
      <a href="https://github.com/Davidcrz14/botdiscord" className={`mt-4 block ${darkMode ? 'text-blue-400' : 'text-blue-600'} hover:underline`} target="_blank" rel="noopener noreferrer">
        Ver en GitHub
      </a>
    </div>
  </div>

  {/* Proyecto 4 */}
  <div className={` ${darkMode ? 'bg-gray-800 text-gray-200 border-gray-700' : 'border-gray-200'} border rounded-lg shadow-lg overflow-hidden`}>
    <div className="p-4">
      <h3 className={`text-2xl font-semibold ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>DavLoad</h3>
      <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} mt-2`}>
        Proyecto en Python para descargar videos de YouTube como audio o video, con una interfaz intuitiva para el usuario.
      </p>
      <a href="https://github.com/Davidcrz14/DavLoad" className={`mt-4 block ${darkMode ? 'text-blue-400' : 'text-blue-600'} hover:underline`} target="_blank" rel="noopener noreferrer">
        Ver en GitHub
      </a>
    </div>
  </div>

  {/* Proyecto 5 */}
  <div className={` ${darkMode ? 'bg-gray-800 text-gray-200 border-gray-700' : 'border-gray-200'} border rounded-lg shadow-lg overflow-hidden`}>
    <div className="p-4">
      <h3 className={`text-2xl font-semibold ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>Analizador de Pseudocódigo</h3>
      <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} mt-2`}>
        Analizador de pseudocódigo con IA utilizando el modelo de Gemini de Google.
      </p>
      <a href="https://github.com/Davidcrz14/code" className={`mt-4 block ${darkMode ? 'text-blue-400' : 'text-blue-600'} hover:underline`} target="_blank" rel="noopener noreferrer">
        Ver en GitHub
      </a>
    </div>
  </div>
</div>

              )}
            </motion.div>
          </CardContent>
        </Card>
      </motion.section>
    ))}
  </AnimatePresence>
</main>
      <footer className={`fixed bottom-0 left-0 right-0 p-4 ${darkMode ? 'bg-gray-800 bg-opacity-90' : 'bg-white bg-opacity-90'} backdrop-blur-sm flex justify-center items-center space-x-4 z-20 transition-colors duration-300`}>
  <Button variant="ghost" size="icon" asChild>
    <a href="https://github.com/Davidcrz14" aria-label="GitHub">
      <Github className={`h-5 w-5 ${darkMode ? 'text-gray-400' : 'text-blue-400'}`} />
    </a>
  </Button>
  <Button variant="ghost" size="icon" asChild>
    <a href="https://x.com/programacionori" aria-label="Twitter">
      <TwitterIcon className={`h-5 w-5 ${darkMode ? 'text-gray-400' : 'text-blue-400'}`} />
    </a>
  </Button>
  <Button variant="ghost" size="icon" asChild>
    <a href="mailto:cucd060823@gs.utm.mx" aria-label="Email">
      <Mail className={`h-5 w-5 ${darkMode ? 'text-gray-400' : 'text-blue-400'}`} />
    </a>
  </Button>
  <Button
    onClick={toggleDarkMode}
    variant="ghost"
    size="icon"
    aria-label="Toggle Dark Mode"
    className="ml-4"
  >
    {darkMode ? <Sun className="h-6 w-6 text-gray-400" /> : <Moon className="h-6 w-6 text-blue-400" />}
  </Button>
</footer>

    </div>
  );
}
