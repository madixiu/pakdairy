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
        'https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d1154.3056445350471!2d57.079969858154925!3d30.216602963144858!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1734760125124!5m2!1sen!2sus',
    },
    {
      name: 'شعبه فروش شیراز',
      address: 'فارس، جاده مرودشت به سمت شیراز، بعد از ورودی اکبرآباد، جنب شرکت سایپا',
      phoneNumber: '02160943441 / 02160943450',
      postalCode: '-',
      mapLink:
        'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d866.6091338633704!2d52.557989!3d29.678120999999997!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3fb20fd47096bd17%3A0xfadced0f6b77e764!2z2LTYudio2Ycg2YTYqNmG24zYp9iqINm-2KfaqSDYtNuM2LHYp9iy!5e0!3m2!1sen!2sus!4v1734759729507!5m2!1sen!2sus',
    },
    {
      name: 'شعبه فروش اهواز',
      address: 'شهرک صنعتی شماره 1، روبروی زیتون کارمندی',
      phoneNumber: '02160943489 / 02160943493',
      postalCode: '6163914716',
      mapLink:
        'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d851.8649648538279!2d48.722453!3d31.346287000000004!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3fc161001bdada67%3A0xe6fb392e68936ade!2z2LTYsdqp2Kog2YXYrdiz2YY!5e0!3m2!1sfa!2sus!4v1734759776041!5m2!1sfa!2sus',
    },
    {
      name: 'شعبه فروش اصفهان',
      address: 'اتوبان فرودگاه، ۲۰۰متر بعد از پمپ بنزین حصه، شرکت لبنیات پاک',
      phoneNumber: '02160943530',
      postalCode: '-',
      mapLink:
        'https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d485.6442588664945!2d51.74974186076175!3d32.70598212958024!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1734759975125!5m2!1sen!2sus',
    },
    {
      name: 'شعبه فروش شهرکرد',
      address: 'شهرک صنعتی شهرکرد، میدان صنعت، بلوار کارآفرینان، گلستان ۳، شرکت پاک پی، شرکت پخش سراسری پاک',
      phoneNumber: '03833336100',
      postalCode: '-',
      mapLink:
        'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1686.0374019463402!2d50.9255!3d32.309844!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3fbef1e7fc42e83d%3A0xa7205c403d9ddd29!2z2LTYsdqp2Kog2b7Yp9qpINm-24w!5e0!3m2!1sen!2sus!4v1734758071664!5m2!1sen!2sus',
    },
    {
      name: 'شعبه فروش ساری',
      address: 'مازندران، ساری، بعد از پل تجن، بلوار امام رضا، جنب هلال احمر',
      phoneNumber: '02160943451 / 02160943466',
      postalCode: '4818958916',
      mapLink:
        'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12818.283769557924!2d53.087583!3d36.564457!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f853f8fb11fad15%3A0x78a8b33016f70732!2sDairy%20export%20unit%20of%20Pak%20dairy.%20co!5e0!3m2!1sen!2sus!4v1734758977362!5m2!1sen!2sus',
    },
    {
      name: 'شعبه فروش سنندج',
      address: 'سنندج ، شهرک صنعتی شماره 1، بالاتر از سیلو',
      phoneNumber: '08733383226 / 09370230373',
      postalCode: '6616873651',
      mapLink:
        'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13024.040644431077!2d47.046689!3d35.305729!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ff997b8ccbc54bd%3A0xcc63cd1a9ffec89a!2z2LTZh9ix2qkg2LXZhti52KrbjCDYtNmF2KfYsdmHINuzINiz2YbZhtiv2Kw!5e0!3m2!1sen!2sus!4v1734759072316!5m2!1sen!2sus',
    },
    {
      name: 'شعبه فروش مشهد',
      address: 'بزرگراه شهید چراغچی، حد فاصل چراغچی 27 و 29، شرکت لبنیات پاک',
      phoneNumber: '05131330000',
      postalCode: '9199680009',
      mapLink:
        'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1606.9235781116583!2d59.598915000000005!3d36.340254!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f6c91a0ed4fca91%3A0x55256cc8730ca169!2z2LTYsdqp2Kog2b7Yrti0INmE2KjZhtuM2KfYqiDZvtin2LPYqtmI2LHbjNiy2Ycg2b7Yp9qp!5e0!3m2!1sen!2sus!4v1734759191821!5m2!1sen!2sus',
    },
    {
      name: 'شعبه فروش رشت',
      address: 'بلوار امام رضا، خیابان لاهیجان دارسازی، بعد از جایگاه CNG، شرکت لبنیات پاک',
      phoneNumber: '02160943436 / 01333875381',
      postalCode: '4173135534',
      mapLink:
        'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1587.3669862074833!2d49.669956!3d37.27773500000001!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ff56134c65fa4a7%3A0x134a1748ffb5bda!2z2LTYsdqp2Kog2YTYqNmG24zYp9iqINmIINio2LPYqtmG24wg2b7Yp9qpKNi02LnYqNmHINix2LTYqik!5e0!3m2!1sen!2sus!4v1734759250230!5m2!1sen!2sus',
    },
    
  ];
  return ( 
    <div className=" ms-10 inline-block">
    {Sales.map((Sale, index) => (
      <div
        key={index}
        className="flex flex-row items-center justify-between h-full mb-2 bg-white p-1 rounded-3xl shadow-sm w-full hover:shadow-md"
      >
        <div className="flex flex-col items-start justify-evenly h-64 py-4 ms-2 mb-2">
        <div className="flex flex-row items-center">
            <span className="me-2 font-bold">{Sale.name}</span>
          </div>
          <div className="flex flex-row items-center">
            <FaMapMarkerAlt />
            <span className="font-bold ms-2 me-2">آدرس:</span>
            <span className="me-2 text-sm">{Sale.address}</span>
          </div>
          <div className="flex flex-row items-center">
            <FaPhoneAlt />
            <span className="font-bold ms-2 me-2">تلفن:</span>
            <span className="me-2 text-sm">{Sale.phoneNumber}</span>
          </div>
          {/* <div className="flex flex-row items-center">
            <FaPhoneAlt />
            <span className="font-bold ms-2 me-2">سایت فروش:</span>
            <span className="me-2">{Sale.saleNumber}</span>
          </div> */}
          <div className="flex flex-row items-center">
            <FaEnvelope />
            <span className="font-bold ms-2 me-2">کدپستی:</span>
            <span className="me-2 text-sm">{Sale.postalCode}</span>
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