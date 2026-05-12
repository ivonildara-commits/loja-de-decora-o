import { Instagram, Facebook, Twitter, Pin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
          <div className="col-span-1 md:col-span-1">
            <div className="text-3xl font-serif font-bold mb-6">Casa & Cor</div>
            <p className="text-brand-ink/50 text-sm leading-relaxed mb-8">
              Transformando espaços em refúgios de bem-estar com curadoria de design artesanal e consciente.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-brand-ink/10 flex items-center justify-center text-brand-ink/60 hover:bg-brand-ink hover:text-white transition-all">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-brand-ink/10 flex items-center justify-center text-brand-ink/60 hover:bg-brand-ink hover:text-white transition-all">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-brand-ink/10 flex items-center justify-center text-brand-ink/60 hover:bg-brand-ink hover:text-white transition-all">
                <Pin size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold uppercase tracking-widest text-xs mb-8">Coleções</h4>
            <ul className="flex flex-col gap-4 text-brand-ink/60 text-sm">
              <li><a href="#" className="hover:text-brand-olive transition-colors">Novos Lançamentos</a></li>
              <li><a href="#" className="hover:text-brand-olive transition-colors">Mais Vendidos</a></li>
              <li><a href="#" className="hover:text-brand-olive transition-colors">Peças Sustentáveis</a></li>
              <li><a href="#" className="hover:text-brand-olive transition-colors">Presentes Especiais</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold uppercase tracking-widest text-xs mb-8">Informações</h4>
            <ul className="flex flex-col gap-4 text-brand-ink/60 text-sm">
              <li><a href="#" className="hover:text-brand-olive transition-colors">Nossa História</a></li>
              <li><a href="#" className="hover:text-brand-olive transition-colors">Envios e Entregas</a></li>
              <li><a href="#" className="hover:text-brand-olive transition-colors">Trocas e Devoluções</a></li>
              <li><a href="#" className="hover:text-brand-olive transition-colors">Termos de Uso</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold uppercase tracking-widest text-xs mb-8">Contato</h4>
            <ul className="flex flex-col gap-4 text-brand-ink/60 text-sm">
              <li>ola@casaecor.com.br</li>
              <li>+55 (11) 99999-9999</li>
              <li>Rua das Cerejeiras, 123</li>
              <li>São Paulo - SP</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-brand-ink/5 pt-12 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] uppercase tracking-[0.2em] font-bold text-brand-ink/30">
          <p>© 2024 Casa & Cor Decorações. Todos os direitos reservados.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-brand-ink transition-colors">Privacidade</a>
            <a href="#" className="hover:text-brand-ink transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
