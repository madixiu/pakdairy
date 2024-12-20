import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
const Contact = () => {
  return (
    <Card className="bg-gray-100 mx-10 p-8 rounded-lg shadow-md">
      <h2 className="text-2xl text-center mb-6">با ما در تماس باشید</h2>
      <div className="flex flex-col space-y-4">
        <div className="flex items-center">
          <FaPhone className="text-indigo-600 mr-2" />
          <p className="text-base">تلفن گویا: 02160940000</p>
        </div>
        <div className="flex items-center">
          <FaPhone className="text-indigo-600 mr-2" />
          <p className="text-base">صدای مشتری: 02160946094</p>
        </div>
        <div className="flex items-center">
          <FaMapMarkerAlt className="text-indigo-600 mr-2" />
          <p className="text-base">کارخانه: تهران، کیلومتر 3 بزرگراه فتح</p>
        </div>
        <div className="flex items-center">
          <FaEnvelope className="text-indigo-600 mr-2" />
          <p className="text-base">صندوق پستی: 13865364</p>
        </div>
      </div>
      <Button className="mt-6" variant="primary">ارسال پیام</Button>
    </Card>
  );
};

export default Contact;