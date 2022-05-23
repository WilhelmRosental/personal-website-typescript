import type { NextPage } from 'next'

//components
import Hero from "../components/Sections/Hero/Hero";

const Home: NextPage<{ locale: string }> = (props) => {
  return (
    <>
      <Hero />
    </>
  )
}

export default Home;