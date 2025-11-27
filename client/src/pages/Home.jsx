import HeroSection from "../components/HeroSection"
import MaxWidthContainer from "../components/MaxWidthContainer"
import NewArrivals from "../components/NewArrivals"

const Home = () => {
  return (
    <MaxWidthContainer>
      <HeroSection />

      {/* new arivals */}
      <div>
        <h1 className="text-2xl font-semibold text-gray-800 mb-6">New Arrivals</h1>
        <NewArrivals />
      </div>
    </MaxWidthContainer>
  )
}
export default Home