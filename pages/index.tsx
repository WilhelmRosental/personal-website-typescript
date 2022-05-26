import type { NextPage } from 'next'

//components
import Hero from "../components/Sections/Hero/Hero";
import Skills from "../components/Sections/Skills/Skills";
import Projects from "../components/Sections/Projects/Projects";
import Contact from "../components/Sections/Contact/Contact";

const Home: NextPage<{ locale: string }> = (props) => {
  return (
    <>
      <Hero />
      <Skills />
      <Projects />
      <Contact />
    </>
  )
}

export default Home;