import Bestseller from '../components/BestSeller/Bestseller'
import BlogSection from '../components/BlogSection/BlogSection'
import CategoryShowcase from '../components/CategoryShowcase/CategoryShowcase'
import ExclusiveCollection from '../components/ExclusiveCollection/ExclusiveCollection'
import HeroSlider from '../components/HeroSlider/HeroSlider'
import LatestArrival from '../components/LatestArrival/LatestArrival'
import Newsletter from '../components/Newsletter/Newsletter'

function Home() {
  return (
    <>
      <HeroSlider/>
      <CategoryShowcase/>
      <LatestArrival/>
      <ExclusiveCollection/>
      <Bestseller/>
      <BlogSection/>
      <Newsletter/>
    </>
  )
}

export default Home
