import { ESTABLISHMENT } from '../data/establishment';

export function WhatsAppButton() {
  return (
    <a
      href={ESTABLISHMENT.whatsappMessage}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full transition-all duration-300 hover:scale-110"
      style={{
        background: '#25D366',
        boxShadow: '0 4px 20px rgba(37,211,102,0.45)',
      }}
      aria-label="Chamar o Especial Lanches no WhatsApp"
    >
      {/* WhatsApp SVG icon */}
      <svg
        viewBox="0 0 32 32"
        width="28"
        height="28"
        fill="white"
        aria-hidden="true"
        role="img"
      >
        <path d="M16 2C8.28 2 2 8.28 2 16c0 2.44.65 4.72 1.78 6.7L2 30l7.52-1.97A13.93 13.93 0 0 0 16 30c7.72 0 14-6.28 14-14S23.72 2 16 2zm0 25.4a11.4 11.4 0 0 1-5.83-1.6l-.41-.25-4.46 1.17 1.19-4.34-.27-.44A11.4 11.4 0 0 1 4.6 16c0-6.28 5.12-11.4 11.4-11.4S27.4 9.72 27.4 16 22.28 27.4 16 27.4zm6.28-8.54c-.34-.17-2.03-1-2.35-1.12-.32-.11-.55-.17-.78.17-.23.34-.9 1.12-1.1 1.35-.2.23-.4.26-.74.09-.34-.17-1.43-.53-2.73-1.68-1.01-.9-1.69-2.01-1.89-2.35-.2-.34-.02-.52.15-.69.15-.15.34-.4.51-.6.17-.2.23-.34.34-.57.11-.23.06-.43-.03-.6-.09-.17-.78-1.88-1.07-2.57-.28-.68-.57-.59-.78-.6h-.66c-.23 0-.6.09-.91.43-.31.34-1.19 1.16-1.19 2.83 0 1.67 1.22 3.28 1.39 3.51.17.23 2.4 3.67 5.82 5.14.81.35 1.44.56 1.93.72.81.26 1.55.22 2.13.13.65-.1 2.03-.83 2.32-1.63.29-.8.29-1.49.2-1.63-.08-.14-.31-.23-.65-.4z"/>
      </svg>
    </a>
  );
}
