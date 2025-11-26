import banner from "@/assets/banner.png";

const Hero = () => {
  return (
    <section className="w-full">
      <img
        src={banner}
        alt="Banner Principal"
        className="w-full h-[60vh] object-cover"
      />
    </section>
  );
};

export default Hero;
