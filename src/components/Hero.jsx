import { underConstruction } from "../assets"

const Hero = () => {
  return (
    <>
      <div className="flex justify-center">
        <img src={underConstruction} alt="" />
      </div>
      <div className="text-center font-bold text-6xl ">
        Under Construction...
      </div>
    </>
  )
}

export default Hero