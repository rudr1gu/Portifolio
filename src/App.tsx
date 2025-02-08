import Home from './components/home/Home';
import About from './components/about/About';
import Skill from './components/skill/Skill';
import Project from './components/project/Project';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';

const App = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="min-h-screen bg-slate-50">
        <section id="home"><Home /></section>
        <section id="about"><About /></section>
        <section id="skill"><Skill /></section>
        <section id="project"><Project /></section>
        <section id="contact"><Contact /></section>
      </main>
      <Footer />
    </>
  );
}

export default App;
