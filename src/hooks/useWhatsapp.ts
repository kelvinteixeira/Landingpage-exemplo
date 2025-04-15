// useWhatsApp.ts
import { useCallback } from "react";

export const useWhatsApp = () => {
  const phoneNumber = "5583996373738";
  const defaultMessage =
    "Olá, estou em busca de apoio para proteger alguém que amo e que precisa de cuidados especiais. Quero garantir, com segurança e responsabilidade, que seus direitos sejam preservados e sua dignidade respeitada.";

  const handleWhatsAppClick = useCallback((customMessage?: string) => {
    const cleanedPhone = phoneNumber.replace(/\D/g, "");
    const finalMessage = customMessage?.trim() || defaultMessage;
    const whatsappUrl = `https://wa.me/${cleanedPhone}?text=${encodeURIComponent(
      finalMessage
    )}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  }, []);

  return {
    onClick: handleWhatsAppClick,
    whatsappUrl: `https://wa.me/${phoneNumber.replace(
      /\D/g,
      ""
    )}?text=${encodeURIComponent(defaultMessage)}`,
  };
};
