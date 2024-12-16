function About() {
  const aboutUStext = "گروه لبنیات پاک با بیش از 60 سال سابقه تولید فرآورده های لبنی، جزو اولین و پرسابقه ترین شرکت‌های فعال در تولید محصولات لبنی در کشور می‌باشد. این شرکت با تولید انواع شیر، پنیر، ماست، کره، خامه، بستنی و ... بخشی از نیاز روزانه‌ی کشور را تولید و تامین می‌نماید. شرکت لبنیات پاک در سخت‌ترین شرایط هشت سال دفاع مقدس و همچنین در کنار تحریم‌های اقتصادی دشمن با تلاشی خستگی‌ناپذیر در کنار مردم و برای مردم فعالیت نموده و در حال حاضر نیز با گسترش و ایجاد تنوع تولیدات خود، هم چون گذشته تامین کننده‌ی بخش مهمی از نیاز مردم کشور عزیزمان می‌باشد. با نام‌گذاری سال 1399 به نام \"جهش تولید\" از سوی مقام معظم رهبری و به دنبال آن نام گذاری سال 1400 به نام سال \"تولید، پشتیبانی‌ها و مانع‌زدایی‌ها\" توسط معظم له، نیاز به بستر سازی‌ها و تغییرات اساسی در این مجموعه بیش از پیش احساس می‌شد، لذا شرکت لبنیات پاک با بهرمندی از تجارب سازنده‌ی مدیران و متخصصین دلسوز خود در ادوار گذشته، از دی‌ماه 1399 قدم در مسیری تازه نهاد. این شرکت با بهرهمندی از قابلیت‌های موجود در مجموعه خود و همچنین با جذب متخصصین جوان، دلسوز و پرتلاش، نوسازی، افزایش ظرفیت و تنوع بخشی تولید، کاهش هزینه‌های سربار و ارتقاء کیفیت محصولات خود را آغاز نمود و با گذشت حدود شش ماه از آغاز بکار تیم مدیریتی جوان، این مجموعه موفق به انجام بیش از 120 پروژه و برنامه سازنده در راستای بهبود شرایط تولید، ارتقاء کیفیت و رضایتمندی مصرف‌کننده و همچنین تامین امکانات رفاهی نیروهای خود شد.";
  return ( 
    <div className="min-h-full">
    <section
      className="relative h-[540px] bg-fixed bg-cover bg-center rounded-sm"
      style={{height: '66.67vh',width:'100%' , backgroundImage: "url('https://d2wdttfod93r0n.cloudfront.net/HomePageContent/Cooking_Cream_Consumer_Home_hero_Banner_Desktop98202261439AM.webp')" }}
      >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-white text-center p-4">
      <h2 className="text-2xl font-bold text-right ms-10 mb-4">درباره شرکت</h2>
        <div className="m-5 p-5 rounded-lg">
          {/* <span className="text-justify">{aboutUStext}</span> */}
          <span className="text-justify leading-8">{aboutUStext}</span>
        </div>
      </div>
    </section>
      {/* <div className="mt-20">
        <h2 className="text-2xl font-bold text-right ms-10 mb-4">درباره شرکت</h2>
        <div className="m-5 p-5 bg-white rounded-lg">
          <span className="text-justify">{aboutUStext}</span>

        </div>
      </div> */}
      
    </div>
   );
}
export default About;