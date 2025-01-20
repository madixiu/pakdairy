'use client';
import { IoMdTimer } from 'react-icons/io';
import { FiZap } from 'react-icons/fi';
import { CiDroplet } from 'react-icons/ci';
import { SiMoleculer } from 'react-icons/si';
import { TbSalt } from 'react-icons/tb';
import { HiOutlineCube } from 'react-icons/hi2';
import { GiFlour } from 'react-icons/gi';

export default function Details({expTime,energy,salt,protein,fat,sugar,powder}) {
  return (
    <div className="flex flex-row flex-1 items-center justify-center">
      <div className="flex flex-row flex-1 justify-center items-center px-10 gap-4">
        <div className="flex flex-col items-center justify-center bg-slate-100 aspect-square w-[10%]  rounded">
          <IoMdTimer className="text-slate-600 text-5xl" />
          <span className="text-gray-700 text-base mt-2">ماندگاری</span>
          <span className="text-gray-500 text-xs mt-2">۶ ماه</span>
        </div>
        <div className="flex flex-col items-center justify-center bg-slate-100 aspect-square w-[10%]  rounded">
          <FiZap className="text-slate-600 text-5xl" />
          <span className="text-gray-700 text-base mt-2">انرژی</span>
          <span className="text-gray-500 text-xs mt-2">
            90.5 کالری (در هر 100 میلی‌لیتر)
          </span>
        </div>
        <div className="flex flex-col items-center justify-center bg-slate-100 aspect-square w-[10%]  rounded">
          <CiDroplet className="text-slate-600 text-5xl" />
          <span className="text-gray-700 text-base mt-2">چربی</span>
          <span className="text-gray-500 text-xs mt-2">2.5%</span>
        </div>
        <div className="flex flex-col items-center justify-center bg-slate-100 aspect-square w-[10%]  rounded">
          <SiMoleculer className="text-slate-600 text-5xl" />
          <span className="text-gray-700 text-base mt-2">پروتئین</span>
          <span className="text-gray-500 text-xs mt-2">3%</span>
        </div>
        <div className="flex flex-col items-center justify-center bg-slate-100 aspect-square w-[10%]  rounded">
          <TbSalt className="text-slate-600 text-5xl" />
          <span className="text-gray-700 text-base mt-2">نمک</span>
          <span className="text-gray-500 text-xs mt-2">
            0.1 گرم (در هر 100 میلی‌لیتر)
          </span>
        </div>
        <div className="flex flex-col items-center justify-center bg-slate-100 aspect-square w-[10%]  rounded">
          <HiOutlineCube className="text-slate-600 text-5xl" />
          <span className="text-gray-700 text-base mt-2">قند</span>
          <span className="text-gray-500 text-xs mt-2">
            11 گرم (در هر 100 میلی‌لیتر)
          </span>
        </div>
        <div className="flex flex-col items-center justify-center bg-slate-100 aspect-square w-[10%] rounded">
          <GiFlour className="text-slate-600 text-5xl" />
          <span className="text-gray-700 text-base mt-2">ماده خشک</span>
          <span className="text-gray-500 text-xs mt-2">
            19.5 گرم (در هر 100 میلی‌لیتر)
          </span>
        </div>
      </div>
    </div>
  );
}
