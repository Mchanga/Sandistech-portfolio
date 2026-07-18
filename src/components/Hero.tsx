import profileImage from "../assets/profileImage.jpg";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <section id="Hero" className="min-h-screen bg-[#0b0f19] text-white flex flex-col-reverse md:flex-row items-center justify-between px-6 md:pl-24 md:pr-16 lg:pr-24 pt-24 pb-12 gap-12 overflow-hidden relative">
      <div className="w-full md:w-1/2 flex flex-col justify-center">
        <p className="text-base md:text-lg text-blue-400 font-medium tracking-wide uppercase">
          Hello, I'm
        </p>

        <h1 className="text-4xl md:text-6xl font-extrabold mt-2 tracking-tight bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
          Paschal Masanja
        </h1>

        <div className="text-xl md:text-3xl text-blue-500 mt-4 font-bold tracking-wide min-h-[40px]">
          <TypeAnimation
            sequence={[
              "Full Stack Developer",
              2000,
              "Frontend Developer",
              2000,
              "Backend Developer",
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="text-xl md:text-3xl text-blue-500 font-semibold"
          />
        </div>

        <p className="mt-6 text-gray-400 max-w-xl text-sm md:text-base leading-relaxed tracking-wide font-normal">
          I help businesses and individuals turn their ideas into powerful digital solutions by designing and developing fast, responsive, and scalable web applications and mobile applications.
        </p>
      </div>

      <div className="w-full md:w-1/2 flex justify-center items-center">
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl blur-xl opacity-30 group-hover:opacity-50 transition duration-1000"></div>
          
          <div className="relative w-64 h-72 sm:w-72 sm:h-80 rounded-xl overflow-hidden bg-gray-900 flex items-center justify-center p-[3px] shadow-2xl transition-transform duration-500 hover:scale-[1.02]">
            <div className="absolute w-[200%] h-[200%] animate-border-spin bg-[conic-gradient(from_0deg,#2563EB_30%,transparent_40%,#2563EB_70%,transparent_80%)] z-0"></div>
            <div className="absolute inset-[3px] bg-[#0b0f19] rounded-[9px] z-10"></div>
            <img 
              src={profileImage} 
              alt="Sandistech" 
              className="w-full h-full object-cover rounded-[8px] relative z-20" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;