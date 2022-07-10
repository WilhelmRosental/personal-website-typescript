import type { NextPage } from 'next'

//components
import Hero from '../components/Landing/Hero/Hero'

const Contact: NextPage<{ locale: string }> = (props) => {
  return (
    <>
      <Hero />
    </>
  )
}

export default Contact