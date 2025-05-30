
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Copy } from 'lucide-react';
import { useState } from 'react';

interface DonationModalProps {
  children: React.ReactNode;
}

const DonationModal = ({ children }: DonationModalProps) => {
  const [copiedPaybill, setCopiedPaybill] = useState(false);
  const [copiedTill, setCopiedTill] = useState(false);

  const paybillNumber = "247247";
  const tillNumber = "5678901";

  const copyToClipboard = (text: string, type: 'paybill' | 'till') => {
    navigator.clipboard.writeText(text);
    if (type === 'paybill') {
      setCopiedPaybill(true);
      setTimeout(() => setCopiedPaybill(false), 2000);
    } else {
      setCopiedTill(true);
      setTimeout(() => setCopiedTill(false), 2000);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-hatua-green text-center">
            Support Our Mission
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6 py-4">
          <div className="text-center">
            <p className="text-gray-600 mb-4">
              Your donation helps us empower communities, protect the environment, and strengthen governance across Kenya.
            </p>
          </div>

          <div className="space-y-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold text-hatua-green mb-2">M-Pesa Paybill</h3>
              <div className="flex items-center justify-between">
                <span className="text-lg font-mono">{paybillNumber}</span>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => copyToClipboard(paybillNumber, 'paybill')}
                  className="ml-2"
                >
                  <Copy className="h-4 w-4" />
                  {copiedPaybill ? 'Copied!' : 'Copy'}
                </Button>
              </div>
              <p className="text-sm text-gray-500 mt-1">Account: HatuaSasa Network</p>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold text-hatua-green mb-2">M-Pesa Till Number</h3>
              <div className="flex items-center justify-between">
                <span className="text-lg font-mono">{tillNumber}</span>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => copyToClipboard(tillNumber, 'till')}
                  className="ml-2"
                >
                  <Copy className="h-4 w-4" />
                  {copiedTill ? 'Copied!' : 'Copy'}
                </Button>
              </div>
            </div>
          </div>

          <div className="text-center text-sm text-gray-500">
            <p>Thank you for supporting positive change in Kenya! 🇰🇪</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DonationModal;
