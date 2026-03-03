import { Phone } from "lucide-react";

const MobileCallBar = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-primary text-primary-foreground">
      <a
        href="tel:09941950925"
        className="flex items-center justify-center gap-2 py-3.5 font-bold text-base"
      >
        <Phone className="w-5 h-5" />
        Call Now – 099419 50925
      </a>
    </div>
  );
};

export default MobileCallBar;
