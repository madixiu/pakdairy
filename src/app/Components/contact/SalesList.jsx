import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaMarkdown,
} from 'react-icons/fa';

function SalesList() {
  const Sales = [
    {
      name: 'شعبه فروش یزد',
      address: 'خیابان دهنو، 200 متر بعد از میدان امیرکبیر',
      phoneNumber: '03560943476',
      postalCode: '4818958916',
      mapLink:
        'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6409.141884778962!2d53.087583!3d36.564457!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f853e34a1f8c7c3%3A0xf3b9efe89e331c59!2sPak%20Dairy%20Co%2C%20Sari%2C%20Mazandaran%20Province%2C%20Iran!5e0!3m2!1sen!2sus!4v1734513539317!5m2!1sen!2sus',
    },
    {
      name: 'شعبه فروش تبریز',
      address: 'باسمنج، میدان ولایت، اول جاده هروی، سردخانه بزرگ مهران سرد، ساختمان اداری سردخانه طبقه اول',
      phoneNumber: '02160943462',
      postalCode: '-',
      mapLink:
        'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1686.0431338000114!2d50.924509!3d32.309536!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3fbef1e7fc42e83d%3A0xa7205c403d9ddd29!2z2LTYsdqp2Kog2b7Yp9qpINm-24w!5e0!3m2!1sen!2sus!4v1734526893107!5m2!1sen!2sus',
    },
    {
      name: 'شعبه فروش کرمان',
      address: ' کرمان، شهرک صنعتی شماره یک، خیابان سوسن، لبینات پاک کرمان',
      phoneNumber: '02160943455',
      postalCode: '-',
      mapLink:
        '',
    },
    {
      name: 'شعبه فروش شیراز',
      address: 'فارس، جاده مرودشت به سمت شیراز، بعد از ورودی اکبرآباد، جنب شرکت سایپا',
      phoneNumber: '02160943441 / 02160943450',
      postalCode: '-',
      mapLink:
        '-',
    },
    {
      name: 'شعبه فروش اهواز',
      address: 'شهرک صنعتی شماره 1، روبروی زیتون کارمندی',
      phoneNumber: '02160943489 / 02160943493',
      postalCode: '6163914716',
      mapLink:
        '',
    },
    {
      name: 'شعبه فروش اصفهان',
      address: 'اتوبان فرودگاه، ۲۰۰متر بعد از پمپ بنزین حصه، شرکت لبنیات پاک',
      phoneNumber: '02160943530',
      postalCode: '-',
      mapLink:
        '',
    },
    {
      name: '',
      address: '',
      phoneNumber: '',
      postalCode: '',
      mapLink:
        '',
    },
    {
      name: '',
      address: '',
      phoneNumber: '',
      postalCode: '',
      mapLink:
        '',
    },
    {
      name: '',
      address: '',
      phoneNumber: '',
      postalCode: '',
      mapLink:
        '',
    },
    {
      name: '',
      address: '',
      phoneNumber: '',
      postalCode: '',
      mapLink:
        '',
    },
    {
      name: '',
      address: '',
      phoneNumber: '',
      postalCode: '',
      mapLink:
        '',
    },
    {
      name: '',
      address: '',
      phoneNumber: '',
      postalCode: '',
      mapLink:
        '',
    },
  ];
  return ( 
    <div className=" ms-10 inline-block">
    {Sales.map((Sale, index) => (
      <div
        key={index}
        className="flex flex-row items-center justify-between h-full mb-2 bg-white p-1 rounded-3xl shadow-md w-full"
      >
        <div className="flex flex-col items-start justify-evenly h-64 py-4 ms-2 mb-2">
          <div className="flex flex-row items-center">
            <FaMapMarkerAlt />
            <span className="font-bold ms-2 me-2">آدرس:</span>
            <span className="me-2 text-sm">{Sale.address}</span>
          </div>
          <div className="flex flex-row items-center">
            <FaPhoneAlt />
            <span className="font-bold ms-2 me-2">تلفن:</span>
            <span className="me-2">{Sale.phoneNumber}</span>
          </div>
          {/* <div className="flex flex-row items-center">
            <FaPhoneAlt />
            <span className="font-bold ms-2 me-2">سایت فروش:</span>
            <span className="me-2">{Sale.saleNumber}</span>
          </div> */}
          <div className="flex flex-row items-center">
            <FaEnvelope />
            <span className="font-bold ms-2 me-2">کدپستی:</span>
            <span className="me-2">{Sale.postalCode}</span>
          </div>
        </div>
        <div className="aspect-square h-64 rounded-3xl overflow-hidden relative shadow-md border-2 border-gray-300">
          <iframe
            src={Sale.mapLink}
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

export default SalesList;