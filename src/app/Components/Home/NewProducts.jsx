import Image from 'next/image';
function NewProducts() {
  return (
    <div className="flex flex-col">
      <h2 className="text-2xl font-bold text-right mb-10">محصولات جدید</h2>
      <div className="flex justify-center items-center h-full rounded-lg">
        <div className="flex flex-[2] mx-2 h-72 relative bg-white rounded-xl">
          <Image
            src={'/images/NewProducts/Products.jpg'}
            alt={'New products'}
            layout="fill" // Use layout fill to make the image cover the div
            objectFit="contain" // Ensure the image covers the div
            className="rounded-xl" // Optional: add rounded corners
          />
        </div>
        <div className="flex flex-1 mx-2">
          <span className="leading-loose">
            ماست یونانی یکی از محبوب ترین و معروف ترین غذاهای مورد علاقه در
            سراسر جهان است.این ماست به دلیل دارا بودن خواص بسیاری برای سلامتی
            بدن ، به عنوان یکی از غذاهای بسیار مفید شناخته شده است.
          </span>
        </div>
      </div>
    </div>
  );
}

export default NewProducts;
