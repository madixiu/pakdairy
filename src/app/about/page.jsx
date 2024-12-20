import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

function About() {
  const HeadQuarterList = [
    {
      name: 'مهرداد وطنی',
      nationalCode: '1270566520',
      represent: 'شرکت مادرتخصصی مالی و سرمایه گذاری سینا',
      position: 'رئیس هیات مدیره(غیر موظف)',
      education: 'دکتری',
      backgroundExperience: 'عضو موظف هیات مدیره شرکت فولاد متیل',
    },
    {
      name: 'عبدالله قدوسی',
      nationalCode: '6249313125',
      represent: 'شرکت مادرتخصصی گسترش صنایع غذایی سینا',
      position: 'مدیرعامل و نایب رئیس هیات مدیره(موظف)',
      education: 'کارشناسی ارشد	',
      backgroundExperience: 'مدیر عامل سابق صنایع شیر ایران',
    },
    {
      name: 'محمد عاصم نخجوانی',
      nationalCode: '0041160851',
      represent: 'شرکت سرمایه‌گذاری ملی ایران',
      position: 'عضو هیات مدیره(غیر موظف)',
      education: 'کارشناسی /اقتصاد بازرگانی',
      backgroundExperience:
        'مدیریت عاملی ایران خودرو دیزل، گروه بهمن سرمایه گذاری بانک پارسیان، سرمایه گذاری فرهنگیان',
    },
    {
      name: 'فرزاد ترابی',
      nationalCode: '0058259457',
      represent: 'شرکت پیوند تجارت آتیه ایرانیان',
      position: 'عضو هیات مدیره(غیر موظف)',
      education: 'کارشناسی ارشد	',
      backgroundExperience: 'معاون مالي اقتصادي شرکت شيرپاستوريزه پگاه اصفهان',
    },
    {
      name: 'علی اکبر منتظری',
      nationalCode: '2219345874',
      represent: 'بنیاد مستضعفان انقلاب اسلامی',
      position: 'عضو هیات مدیره(غیر موظف)',
      education: 'کارشناسی/ حسابداری',
      backgroundExperience: 'معاونت مالی شرکت زمزم ایران',
    },
  ];
  const AppointmentsCommitteeList = [
    {
      name:  'مهرداد وطنی	',
      position: 'رئیس',
      education: 'دکتری',
      backgroundExperience: 'عضو موظف هیات مدیره شرکت فولاد متیل',
    },
    {
      name:  'فرزاد ترابی',
      position: 'عضو',
      education: 'کارشناسی ارشد	',
      backgroundExperience: 'معاون مالي اقتصادي شرکت شيرپاستوريزه پگاه اصفهان',
    },
    {
      name:  'امید هاشمی',
      position: 'عضو و دبیر	',
      education: 'کارشناسی ارشد	',
      backgroundExperience: 'دبیر هیات مدیره و مدیر امور مدیران شرکت لبنیات پاستوریزه پاک',
    },
    {
      name:  'داود افروز',
      position: 'عضو',
      education: 'کارشناسی ارشد	',
      backgroundExperience: 'مدیر آموزش و توسعه انسانی شرکت رایتل',
    },
    {
      name:  'علی اسدی افشار',
      position: 'عضو',
      education: 'کارشناسی ارشد	',
      backgroundExperience: 'مدیر حراست شرکت لبنیات پاستوریزه پاک',
    },

  ];
  const aboutUStext =
    'گروه لبنیات پاک با بیش از ۶۰ سال سابقه تولید فرآورده های لبنی، جزو اولین و پرسابقه ترین شرکت‌های فعال در تولید محصولات لبنی در کشور می‌باشد. این شرکت با تولید انواع شیر، پنیر، ماست، کره، خامه، بستنی و ... بخشی از نیاز روزانه‌ی کشور را تولید و تامین می‌نماید. شرکت لبنیات پاک در سخت‌ترین شرایط هشت سال دفاع مقدس و همچنین در کنار تحریم‌های اقتصادی دشمن با تلاشی خستگی‌ناپذیر در کنار مردم و برای مردم فعالیت نموده و در حال حاضر نیز با گسترش و ایجاد تنوع تولیدات خود، هم چون گذشته تامین کننده‌ی بخش مهمی از نیاز مردم کشور عزیزمان می‌باشد. با نام‌گذاری سال ۱۳۹۹ به نام "جهش تولید" از سوی مقام معظم رهبری و به دنبال آن نام گذاری سال ۱۴۰۰ به نام سال "تولید، پشتیبانی‌ها و مانع‌زدایی‌ها" توسط معظم له، نیاز به بستر سازی‌ها و تغییرات اساسی در این مجموعه بیش از پیش احساس می‌شد، لذا شرکت لبنیات پاک با بهرمندی از تجارب سازنده‌ی مدیران و متخصصین دلسوز خود در ادوار گذشته، از دی‌ماه ۱۳۹۹ قدم در مسیری تازه نهاد. این شرکت با بهرهمندی از قابلیت‌های موجود در مجموعه خود و همچنین با جذب متخصصین جوان، دلسوز و پرتلاش، نوسازی، افزایش ظرفیت و تنوع بخشی تولید، کاهش هزینه‌های سربار و ارتقاء کیفیت محصولات خود را آغاز نمود و با گذشت حدود شش ماه از آغاز بکار تیم مدیریتی جوان، این مجموعه موفق به انجام بیش از ۱۲۰ پروژه و برنامه سازنده در راستای بهبود شرایط تولید، ارتقاء کیفیت و رضایتمندی مصرف‌کننده و همچنین تامین امکانات رفاهی نیروهای خود شد.';
  return (
    <div className="min-h-full">
      <section
        className="relative h-[540px] bg-fixed bg-cover bg-center rounded-sm"
        style={{
          height: '56.67vh',
          width: '100%',
          backgroundImage:
            "url('https://d2wdttfod93r0n.cloudfront.net/HomePageContent/Cooking_Cream_Consumer_Home_hero_Banner_Desktop98202261439AM.webp')",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col justify-center items-start h-full text-white text-center p-4">
          <h2 className="text-2xl font-bold text-right ms-10 text-white">
            درباره شرکت
          </h2>
          <div className="m-5 p-5 rounded-lg">
            <span className="text-justify leading-8 text-white">
              {aboutUStext}
            </span>
          </div>
        </div>
      </section>
      <div className="mt-20 pb-10">
        <h2 className="text-2xl font-bold text-right ms-10 mb-4">
          اعضای هیات مدیره شرکت لبنیات پاک
        </h2>
        <div className="m-5 p-5 bg-white rounded-lg">
          <Table>
            {/* <TableCaption>A list of your recent HeadQuarterList.</TableCaption> */}
            <TableHeader>
              <TableRow>
                <TableHead className="text-right">نام و نام خانوادگی</TableHead>
                <TableHead className="text-right">کدملی</TableHead>
                <TableHead className="text-right">نماینده</TableHead>
                <TableHead className="text-right">سمت</TableHead>
                <TableHead className="text-right">تحصیلات</TableHead>
                <TableHead className="text-right">زمینه سوابق کاری</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {HeadQuarterList.map((person) => (
                <TableRow key={person.nationalCode}>
                  <TableCell className="font-medium">{person.name}</TableCell>
                  <TableCell>{person.nationalCode}</TableCell>
                  <TableCell>{person.represent}</TableCell>
                  <TableCell className="text-right">
                    {person.position}
                  </TableCell>
                  <TableCell className="text-right">
                    {person.education}
                  </TableCell>
                  <TableCell className="text-right">
                    {person.backgroundExperience}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
      <div className="mt-20 pb-20">
        <h2 className="text-2xl font-bold text-right ms-10 mb-4">
          کمیته انتصابات پاک
        </h2>
        <div className="m-5 p-5 bg-white rounded-lg">
          <Table>
            {/* <TableCaption>A list of your recent HeadQuarterList.</TableCaption> */}
            <TableHeader>
              <TableRow>
                <TableHead className="text-right">نام و نام خانوادگی</TableHead>
                <TableHead className="text-right">سمت</TableHead>
                <TableHead className="text-right">تحصیلات</TableHead>
                <TableHead className="text-right">زمینه سوابق کاری</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {AppointmentsCommitteeList.map((person) => (
                <TableRow key={person.nationalCode}>
                  <TableCell className="font-medium">{person.name}</TableCell>

                  <TableCell className="text-right">
                    {person.position}
                  </TableCell>
                  <TableCell className="text-right">
                    {person.education}
                  </TableCell>
                  <TableCell className="text-right">
                    {person.backgroundExperience}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}
export default About;
