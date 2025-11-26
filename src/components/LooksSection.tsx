import { useState } from "react";
import labios from "@/assets/labios.png";
import olhos from "@/assets/olhos.png";
import rosto from "@/assets/rosto.png";
import tendencia from "@/assets/tendencia.png";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

interface Look {
  image: string;
  title: string;
  description: string;
  price: string;
}

const looks: Look[] = [
  {
    image: labios,
    title: "Lábios",
    description: "Descubra as melhores técnicas e produtos para lábios perfeitos. Batons, glosses e tratamentos especiais.",
    price: "R$ 49,90"
  },
  {
    image: olhos,
    title: "Olhos",
    description: "Técnicas de maquiagem para olhos marcantes. Sombras, delineadores e máscaras para um olhar impactante.",
    price: "R$ 59,90"
  },
  {
    image: rosto,
    title: "Rosto",
    description: "Base, corretivo, blush e iluminador. Tudo para uma pele impecável e radiante.",
    price: "R$ 69,90"
  },
  {
    image: tendencia,
    title: "Tendência",
    description: "As últimas tendências em maquiagem. Produtos e looks que estão em alta no momento.",
    price: "R$ 54,90"
  }
];

const LooksSection = () => {
  const [selectedLook, setSelectedLook] = useState<Look | null>(null);

  return (
    <section id="look" className="py-16 px-4 bg-background">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
          LOOKS E DICAS DE MAQUIAGEM
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {looks.map((look, index) => (
            <div
              key={index}
              onClick={() => setSelectedLook(look)}
              className="cursor-pointer transition-transform hover:scale-105"
            >
              <img
                src={look.image}
                alt={look.title}
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          ))}
        </div>

        <Dialog open={!!selectedLook} onOpenChange={() => setSelectedLook(null)}>
          <DialogContent className="max-w-md">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold">
                {selectedLook?.title}
              </DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <img
                src={selectedLook?.image}
                alt={selectedLook?.title}
                className="w-full h-auto rounded-lg"
              />
              <p className="text-muted-foreground">
                {selectedLook?.description}
              </p>
              <p className="text-2xl font-bold text-primary">
                {selectedLook?.price}
              </p>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default LooksSection;
