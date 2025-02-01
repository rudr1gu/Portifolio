import Home from './components/home/Home';
import About from './components/about/About';
import Skill from './components/skill/Skill';
import Project from './components/project/Project';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

const App = () => {
  return (
    <>
      <main className="min-h-screen bg-slate-50">
        <Home />
        <About />
        <Skill />
        <Project />
        <Contact />
      </main>
      <Footer />
    </>

  );
}

export default App;