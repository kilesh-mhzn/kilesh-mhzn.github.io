import { avatar } from "../assets";
import TypingEffect from "../utils/TypingEffect.jsx";
const texts = [
  "Software Engineer.",
  "Web Developer.",
  "Frontend Developer.",
  "UI/UX Designer.",
];
const Hero = () => {
  return (
    <section
      style={{ height: "calc(100vh - 111px)" }}
      className="h-screen flex items-center "
    >
      <div className="w-full flex flex-col md:flex-row items-center gap-10 md:gap-20 justify-center">
        <div>
          <img src={avatar} alt="Some random avatar" />
        </div>
        <div className="font-bold text-3xl md:text-6xl text-center md:text-left">
          <h3>
            Hey! I am <span className="text-yellow-600"> Kilesh</span>
          </h3>
          <div className="text-lg md:text-3xl font-medium mt-4 md:mt-8">
            I am <TypingEffect texts={texts}></TypingEffect>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
