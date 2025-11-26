import { useState } from "react";
import batom1 from "@/assets/batom1.png";
import batomliquido2 from "@/assets/batomliquido2.png";
import batombala3 from "@/assets/batombala3.png";
import fotomulher from "@/assets/fotomulher.png";
import estrelas from "@/assets/estrelas.png";
import cinza from "@/assets/cinza.png";
import vermelho from "@/assets/vermelho.png";
import vinho from "@/assets/vinho.png";
import rosa from "@/assets/rosa.png";
import bocaVermelho from "@/assets/boca-vermelho.png";
import bocaBege from "@/assets/boca-bege.png";
import bocaVinho from "@/assets/boca-vinho.png";
import bocaCinza from "@/assets/boca-cinza.png";

const colorMap: { [key: string]: string } = {
  vinho: bocaVinho,
  rosa: bocaBege,
  cinza: bocaCinza,
  vermelho: bocaVermelho,
};

const LancamentosSection = () => {
  const [selectedImage, setSelectedImage] = useState(fotomulher);

  const handleColorClick = (colorKey: string) => {
    setSelectedImage(colorMap[colorKey]);
  };

  return (
    <section id="lancamentos" className="py-16 px-4 bg-muted/30">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
          APROVEITE OS LANÇAMENTOS
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Coluna 1 - Produtos (hidden em mobile) */}
          <div className="hidden md:flex flex-col gap-4">
            <img src={batom1} alt="Batom 1" className="w-full h-auto rounded-lg shadow-lg" />
            <img src={batomliquido2} alt="Batom Líquido 2" className="w-full h-auto rounded-lg shadow-lg" />
            <img src={batombala3} alt="Batom Bala 3" className="w-full h-auto rounded-lg shadow-lg" />
          </div>

          {/* Coluna 2 - Imagem Principal */}
          <div className="flex items-center justify-center">
            <img
              src={selectedImage}
              alt="Modelo"
              className="w-full h-auto rounded-lg shadow-2xl transition-all duration-300"
            />
          </div>

          {/* Coluna 3 - Informações */}
          <div className="space-y-6">
            <img src={estrelas} alt="Avaliação" className="h-6 w-auto" />
            
            <h3 className="text-2xl font-bold text-foreground">Matte Premium</h3>
            
            <div>
              <p className="text-lg font-semibold mb-3 text-foreground">Cores disponíveis</p>
              <div className="flex gap-3">
                <button
                  onClick={() => handleColorClick("cinza")}
                  className="transition-transform hover:scale-110"
                >
                  <img src={cinza} alt="Cinza" className="w-12 h-12 rounded-full shadow-md" />
                </button>
                <button
                  onClick={() => handleColorClick("vermelho")}
                  className="transition-transform hover:scale-110"
                >
                  <img src={vermelho} alt="Vermelho" className="w-12 h-12 rounded-full shadow-md" />
                </button>
                <button
                  onClick={() => handleColorClick("vinho")}
                  className="transition-transform hover:scale-110"
                >
                  <img src={vinho} alt="Vinho" className="w-12 h-12 rounded-full shadow-md" />
                </button>
                <button
                  onClick={() => handleColorClick("rosa")}
                  className="transition-transform hover:scale-110"
                >
                  <img src={rosa} alt="Rosa" className="w-12 h-12 rounded-full shadow-md" />
                </button>
              </div>
            </div>

            <div className="text-muted-foreground leading-relaxed">
              <p>
                O Batom Matte possui uma fórmula inovadora desenvolvida para entregar o máximo de cor 
                na primeira aplicação com um deslize suave e macio. Tem acabamento matte aveludado e 
                manteiga de manga que ajuda a hidratar e a proteger os lábios contra ressecamento. 
                Ajuda na hidratação dos lábios, textura fina e macia que não pesa nos lábios.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LancamentosSection;
