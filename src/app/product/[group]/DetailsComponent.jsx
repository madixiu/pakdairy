'use client';
import Image from 'next/image';
// import Icon from './svg/categories/butter.svg';
// import { ReactComponent } from  './svg/categories/butter.svg';
// import Icon from '../../../svg/categories/butter.svg';
import ButterIcon from './svg/file.svg?svg';
// import { ReactComponent } from './svg/file.svg?svg';
import url, { ReactComponent as Icon } from './categories/milk.svg';
// import { ReactComponent as MyDamnSvg } from './svg/file.svg?react';
// import MyDamnSvg from './svg/file.svg';
// import { ReactComponent as MyDamnSvg } from './svg/file.svg?svg';
// import SvgIcon from './svg/file.svg'

import starUrl from './svg/file.svg?url';

export default function Details() {
  console.log(ButterIcon);

  return (
    <div className="flex flex-row flex-1 items-center justify-center">
      <div className="bg-pink-400 p-14">
        <Image
          src="/svg/categories/butter.svg"
          alt="Butter Icon"
          width={100}
          height={100}
        />
      </div>
      <div className=" p-14" style={{ color: 'red' }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          width={100}
          height={100}
        >
          <circle cx="12" cy="12" r="10" />
        </svg>
      </div>
      <div className="p-14 text-red-600 hover:text-black" >
        {/* <Image src={ReactComponent} alt="Butter Icon" width={100} height={100} /> */}
        {/* <ButterIcon width={100} height={100} /> */}
        <svg
          preserveAspectRatio="xMidYMid meet"
          version="1.0"
          viewBox="0 0 600.000000 600.000000"
          xmlns="http://www.w3.org/2000/svg"
        >
          
          <g
            fill="currentColor"
            className='text-blue-400 hover:text-red-400'
            stroke="currentColor"
            transform="translate(0.000000,600.000000) scale(0.100000,-0.100000)"
          >
            
            <path d="M2087 5906 c-84 -31 -157 -107 -184 -193 -29 -95 4 -220 79 -289 35 -34 107 -74 132 -74 28 0 66 -142 66 -249 0 -78 -24 -183 -58 -255 -16 -34 -65 -108 -109 -167 -43 -58 -96 -134 -116 -170 -80 -144 -138 -326 -157 -494 -6 -57 -10 -687 -10 -1720 1 -1377 3 -1641 15 -1698 48 -230 236 -413 462 -452 118 -20 1429 -20 1542 -1 231 40 419 222 466 451 12 59 14 317 14 1700 0 1000 -4 1665 -10 1720 -26 245 -125 482 -280 676 -116 145 -166 288 -156 449 7 96 41 210 63 210 31 0 113 51 151 94 123 140 79 358 -91 449 l-41 22 -870 2 c-713 2 -877 0 -908 -11z m1726 -198 c33 -17 46 -39 47 -77 0 -22 -8 -43 -22 -58 l-21 -23 -838 0 -838 0 -20 26 c-36 45 -25 104 24 132 29 16 1637 17 1668 0z m-212 -383 c1 -3 -5 -43 -11 -89 -15 -99 -8 -256 14 -341 25 -92 98 -233 167 -318 115 -145 194 -310 230 -482 18 -86 19 -164 19 -1772 0 -1401 -2 -1688 -13 -1721 -33 -96 -103 -179 -186 -222 -92 -46 -121 -48 -877 -45 l-711 3 -65 30 c-77 35 -139 88 -175 150 -57 97 -54 -14 -54 1791 0 1213 3 1687 12 1741 24 156 93 323 188 455 130 182 166 242 200 340 30 88 35 115 38 225 3 86 0 146 -10 192 -8 37 -13 69 -12 70 6 5 1245 -2 1246 -7z"></path>
            <path d="M2380 3489 c-36 -5 -117 -21 -180 -37 l-115 -28 -3 -1321 c-2 -1316 -2 -1322 19 -1377 29 -78 104 -157 187 -198 l67 -33 625 0 625 0 66 31 c86 41 142 92 176 162 l28 57 3 1357 c2 1302 2 1357 -16 1362 -10 3 -53 -3 -96 -14 -122 -32 -261 -50 -393 -50 -146 0 -240 12 -393 50 -63 16 -150 33 -193 39 -91 13 -312 12 -407 0z"></path>
          </g>
        </svg>

        <Image
          src={starUrl}
          alt="Butter Icon"
          width={100}
          height={100}
          color={'#fff'}
          priority
        />
        <Image
          src={url}
          color="#fff"
          alt="my awesome image"
          style={{ color: '#fff', backgroundColor: '#fff', fill: '#fff' }}
          width={100}
          height={100}
        />
        {/* <MyDamnSvg width={100} height={100} /> */}

        {/* <SvgIcon className="fill-current text-purple-600 hover:text-purple-800" width={100} height={100} /> */}
      </div>
    </div>
  );
}
