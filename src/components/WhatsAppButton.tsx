
import { FloatingWhatsApp } from 'react-floating-whatsapp';

interface WhatsAppButtonProps {
  phoneNumber: string;
  accountName: string;
  avatar?: string;
}

const WhatsAppButton = ({ 
  phoneNumber = "+234 000 0000", 
  accountName = "Aroni Engineering",
  avatar = ""
}: WhatsAppButtonProps) => {
  return (
    <FloatingWhatsApp 
      phoneNumber={phoneNumber}
      accountName={accountName}
      avatar={avatar || "https://placehold.co/100x100"}
      statusMessage="Typically replies within 1 hour"
      chatMessage="Hello! 👋 How can we help you with your engineering needs today?"
      placeholder="Type your message here..."
      darkMode={true}
      allowClickAway={true}
      allowEsc={true}
      notification={true}
      notificationDelay={30}
      notificationSound={true}
    />
  );
};

export default WhatsAppButton;
