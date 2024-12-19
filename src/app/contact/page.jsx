// components/Contact.js

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import ContactForm from '../Components/contact/ContactForm';
import SocialMediaIcons from '../Components/contact/SocialMediaIcons';
import CompaniesList from '../Components/contact/CompaniesList';
import SalesList from '../Components/contact/SalesList';
const Contact = () => {
  return (
    <div className="h-full mt-20 justify-center">
      <div>
        <h2 className="text-2xl font-bold text-right ms-10 mb-4">تماس با ما</h2>
      </div>
      <div className="flex flex-row">
        <div className="flex flex-row w-[40%] bg-slate-50  mx-10 rounded-xl shadow-xl justify-between">
          <div className="flex flex-col  px-4 py-7  me-10  items-start justify-between">
            <div className="flex items-center">
              <FaMapMarkerAlt className="h-4 w-4 text-black me-2" />
              <span className="text-gray-700 font-bold">آدرس:</span>
              <span className="text-gray-700 ms-2">
                تهران، کیلومتر ۳ بزرگراه فتح
              </span>
            </div>
            <div className="flex items-center">
              <FaPhoneAlt className="h-4 w-4 text-black me-2" />
              <span className="text-gray-700 font-bold">تلفن گویا:</span>
              <span className="text-gray-700 ms-2">۰۲۱-۶۰۹۴۰۰۰۰</span>
            </div>
            <div className="flex items-center">
              <FaPhoneAlt className="h-4 w-4 text-black me-2" />
              <span className="text-gray-700 font-bold">صدای مشتری:</span>
              <span className="text-gray-700 ms-2">021-60946094</span>
            </div>
            <div className="flex items-center">
              <FaPhoneAlt className="h-4 w-4 text-black me-2" />
              <span className="text-gray-700  font-bold">کارخانه لبنی:</span>
              <span className="text-gray-700 ms-2">021-60943448</span>
            </div>
            <div className="flex items-center">
              <FaPhoneAlt className="h-4 w-4 text-black me-2" />
              <span className="text-gray-700 font-bold">پخش سراسری:</span>
              <span className="text-gray-700 ms-2">021-60943440</span>
            </div>
            <div className="flex items-center">
              <FaEnvelope className="h-4 w-4 text-black me-2" />
              <span className="text-gray-700 font-bold">صندوق پستی:</span>
              <span className="text-gray-700 ms-2">۱۳۸۶۵۳۶۴</span>
            </div>
            <div className="w-full">
              <SocialMediaIcons />
            </div>
          </div>
          <div className="bg-slate-50 rounded-lg shadow-lg p-1">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d25928.07407464602!2d51.308093!3d35.67677400000001!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8dfe5e6f4e17fb%3A0x702668486e2f8b3c!2sPak%20Dairy%20Co.!5e0!3m2!1sen!2sus!4v1734157115739!5m2!1sen!2sus"
              width={'100%'}
              height={'100%'}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        <div className="flex w-1/2">
          <ContactForm />
        </div>
      </div>
      <div className="flex flex-row py-10 mt-14">
        <div>
          <h2 className="text-2xl font-bold text-right ms-10 mb-4">
            کارخانه ها
          </h2>
          <CompaniesList />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-right ms-10 mb-4">
            مراکز فروش
          </h2>
          <SalesList />
        </div>
      </div>
    </div>
  );
};

export default Contact;
