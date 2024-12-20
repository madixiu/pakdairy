import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaMarkdown,
} from 'react-icons/fa';

function CompaniesList() {
  const companies = [
    {
      name: 'کارخانه پاک ساری',
      address: 'مازندران، ساری، بعد از پل تجن، بلوار امام رضا، جنب هلال احمر',
      phoneNumber: '۰۲۱-۶۰۹۴۰۰۰۰',
      saleNumber: '33288996-009811',
      postalCode: '4818958916',
      mapLink:
        'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6409.141884778962!2d53.087583!3d36.564457!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f853e34a1f8c7c3%3A0xf3b9efe89e331c59!2sPak%20Dairy%20Co%2C%20Sari%2C%20Mazandaran%20Province%2C%20Iran!5e0!3m2!1sen!2sus!4v1734513539317!5m2!1sen!2sus',
    },
    {
      name: 'شرکت پاک‌ شهرکرد',
      address:
        'شهرکرد، شهرک صنعتی، میدان صنعت، بلوار کارآفرینان، گلستان 3، شرکت پاک‌پی',
      phoneNumber: '33332003-009838',
      saleNumber: '33336100-009838',
      postalCode: '8813653745',
      mapLink:
        'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1686.0431338000114!2d50.924509!3d32.309536!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3fbef1e7fc42e83d%3A0xa7205c403d9ddd29!2z2LTYsdqp2Kog2b7Yp9qpINm-24w!5e0!3m2!1sen!2sus!4v1734526893107!5m2!1sen!2sus',
    },
    {
      name: 'شرکت پاک‌ سنندج',
      address: 'سنندج ، شهرک صنعتی شماره 1، بالاتر از سیلو',
      phoneNumber: '5-33383393-009887',
      saleNumber: '33383226-009887',
      postalCode: '6616873651',
      mapLink:
        'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d407.0009733308823!2d47.048646000000005!3d35.305788!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ff997b136e551c3%3A0x491c30e2128ddc1a!2sDairy%20export%20unit%20(Pak%20dairy)!5e0!3m2!1sen!2sus!4v1734527181932!5m2!1sen!2sus',
    },
  ];
  return (
    <div className=" ms-10 inline-block">
      {companies.map((company, index) => (
        <div
          key={index}
          className="flex flex-row items-center justify-between h-full mb-2 bg-white p-1 rounded-3xl shadow-md w-full"
        >
          <div className="flex flex-col items-start justify-evenly h-64 py-4 ms-2 mb-2">
            <div className="flex flex-row items-center">
              <FaMapMarkerAlt />
              <span className="font-bold ms-2 me-2">آدرس:</span>
              <span className="me-2 text-sm">{company.address}</span>
            </div>
            <div className="flex flex-row items-center">
              <FaPhoneAlt />
              <span className="font-bold ms-2 me-2">تلفن:</span>
              <span className="me-2">{company.phoneNumber}</span>
            </div>
            <div className="flex flex-row items-center">
              <FaPhoneAlt />
              <span className="font-bold ms-2 me-2">سایت فروش:</span>
              <span className="me-2">{company.saleNumber}</span>
            </div>
            <div className="flex flex-row items-center">
              <FaEnvelope />
              <span className="font-bold ms-2 me-2">کدپستی:</span>
              <span className="me-2">{company.postalCode}</span>
            </div>
          </div>
          <div className="aspect-square h-64 rounded-3xl overflow-hidden relative shadow-md border-2 border-gray-300">
            <iframe
              src={company.mapLink}
              className="absolute inset-0 w-full h-full"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      ))}
    </div>
  );
}
export default CompaniesList;
