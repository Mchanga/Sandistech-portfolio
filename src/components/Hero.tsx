import profileImage from "../assets/profileImage.jpg"
import { TypeAnimation } from "react-type-animation";
const Hero = () => {
  return (
   <section className="min-h-screen flex items-center px-10 pt-24">
    <div className="w-1/2">
     <p className="text-lg text-gray-500">
          Hello, I'm
        </p>

        <h1 className="text-5xl font-bold mt-2">
          Paschal Masanja
        </h1>

        <h2 className="text-2xl text-blue-600 mt-4">
          <TypeAnimation
  sequence={[
    "Full Stack Developer",
    2000,
    "Frontend Developer",
    2000,
    "Backend Developer",
    2000,
  ]}
  wrapper="h2"
  speed={50}
  repeat={Infinity}
  className="text-2xl text-blue-600 mt-4 font-semibold"
/>
        </h2>

        <p className="mt-5 text-gray-600 max-w-lg">
         I help businesses and individuals turn their ideas into powerful digital solutions by designing and developing fast, responsive, and scalable web applications and mobile applications.
        </p>
    </div>
<div className="w-1/2 flex justify-center" >
    <img src={profileImage} alt="Sandistech"   className="w-72 h-80 rounded-full object-cover shadow-lg" />
</div>

   </section>
  )
}

export default Hero