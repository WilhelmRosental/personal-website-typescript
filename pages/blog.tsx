import type { NextPage } from 'next'

//components
import ArticleCard from '../components/Blog/ArticleCard'

const Blog: NextPage<{ locale: string }> = (props) => {
  return (
    <>
      <ArticleCard variant="outlined"/>
    </>
  )
}

export default Blog