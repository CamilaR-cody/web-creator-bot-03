import banner1 from "@/assets/banner1.png";

const NovidadesSection = () => {
  return (
    <section id="novidades" className="py-16 px-4 bg-background">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
          NOVIDADE PARA VOCÊ
        </h2>
        
        <div className="mx-4 md:mx-8">
          <img
            src={banner1}
            alt="Novidade"
            className="w-full h-[30vh] object-cover rounded-lg shadow-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default NovidadesSection;
