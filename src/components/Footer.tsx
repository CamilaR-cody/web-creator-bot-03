import mastercard from "@/assets/mastercard.png";
import visa from "@/assets/visa.png";
import pix from "@/assets/pix.png";
import boleto from "@/assets/boleto.png";
import instagram from "@/assets/instagram.png";
import facebook from "@/assets/facebook.png";
import youtube from "@/assets/youtube.png";
import twitter from "@/assets/twitter.png";

const Footer = () => {
  return (
    <footer className="bg-muted py-12 px-4">
      <div className="container mx-auto">
        {/* Desktop Layout */}
        <div className="hidden md:grid md:grid-cols-3 gap-8">
          {/* Atendimento */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-foreground">Atendimentos</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="hover:text-foreground cursor-pointer transition-colors">Fale Conosco</li>
              <li className="hover:text-foreground cursor-pointer transition-colors">Perguntas Frequentes</li>
              <li className="hover:text-foreground cursor-pointer transition-colors">Meus Pedidos</li>
              <li className="hover:text-foreground cursor-pointer transition-colors">Nossas Lojas</li>
            </ul>
          </div>

          {/* Formas de Pagamento */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-foreground">Forma de Pagamento</h3>
            <div className="flex gap-3 flex-wrap">
              <img src={mastercard} alt="Mastercard" className="h-8 w-auto" />
              <img src={visa} alt="Visa" className="h-8 w-auto" />
              <img src={pix} alt="Pix" className="h-8 w-auto" />
              <img src={boleto} alt="Boleto" className="h-8 w-auto" />
            </div>
          </div>

          {/* Redes Sociais */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-foreground">Siga-nos nas redes sociais</h3>
            <div className="flex gap-3">
              <a href="#" className="hover:opacity-80 transition-opacity">
                <img src={instagram} alt="Instagram" className="h-8 w-8" />
              </a>
              <a href="#" className="hover:opacity-80 transition-opacity">
                <img src={facebook} alt="Facebook" className="h-8 w-8" />
              </a>
              <a href="#" className="hover:opacity-80 transition-opacity">
                <img src={youtube} alt="YouTube" className="h-8 w-8" />
              </a>
              <a href="#" className="hover:opacity-80 transition-opacity">
                <img src={twitter} alt="Twitter" className="h-8 w-8" />
              </a>
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden space-y-8">
          {/* Parte Superior - Atendimento e Pagamento */}
          <div className="grid grid-cols-2 gap-6">
            {/* Atendimento */}
            <div>
              <h3 className="text-lg font-bold mb-4 text-foreground">Atendimentos</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Fale Conosco</li>
                <li>Perguntas Frequentes</li>
                <li>Meus Pedidos</li>
                <li>Nossas Lojas</li>
              </ul>
            </div>

            {/* Formas de Pagamento */}
            <div>
              <h3 className="text-lg font-bold mb-4 text-foreground">Forma de Pagamento</h3>
              <div className="grid grid-cols-2 gap-2">
                <img src={mastercard} alt="Mastercard" className="h-6 w-auto" />
                <img src={visa} alt="Visa" className="h-6 w-auto" />
                <img src={pix} alt="Pix" className="h-6 w-auto" />
                <img src={boleto} alt="Boleto" className="h-6 w-auto" />
              </div>
            </div>
          </div>

          {/* Parte Inferior - Redes Sociais */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-center text-foreground">
              Siga-nos nas redes sociais
            </h3>
            <div className="flex gap-4 justify-center">
              <a href="#" className="hover:opacity-80 transition-opacity">
                <img src={instagram} alt="Instagram" className="h-8 w-8" />
              </a>
              <a href="#" className="hover:opacity-80 transition-opacity">
                <img src={facebook} alt="Facebook" className="h-8 w-8" />
              </a>
              <a href="#" className="hover:opacity-80 transition-opacity">
                <img src={youtube} alt="YouTube" className="h-8 w-8" />
              </a>
              <a href="#" className="hover:opacity-80 transition-opacity">
                <img src={twitter} alt="Twitter" className="h-8 w-8" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
