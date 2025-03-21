
import { FloatingWhatsApp } from 'react-floating-whatsapp';

interface WhatsAppButtonProps {
  phoneNumber: string;
  accountName: string;
}

const WhatsAppButton = ({ phoneNumber, accountName }: WhatsAppButtonProps) => {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <FloatingWhatsApp 
        phoneNumber={phoneNumber}
        accountName={accountName}
        avatar="/logo.png"
        statusMessage="Typically replies within 1 hour"
        chatMessage="Hello! How can we help you today?"
        allowClickAway={true}
        style={{
          width: '60px',
          height: '60px',
        }}
      />
    </div>
  );
};

export default WhatsAppButton;
