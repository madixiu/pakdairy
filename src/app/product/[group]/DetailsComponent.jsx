import Image from 'next/image';
// import Icon from './svg/categories/butter.svg';
import { ReactComponent } from  './svg/categories/butter.svg';
import Icon from '../../../svg/categories/butter.svg';


function Details() {
  return (
    <div className="flex flex-row flex-1 items-center justify-center">
      <div className="bg-pink-400 p-14">
        <Image
          src="/svg/categories/butter.svg"
          alt="Butter Icon"
          width={100}
          height={100}
          color={'#fff'}
          style={{color: 'red'}}
        />
      </div>
      <div className=' p-14' style={{ color: 'red' }}>
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
      <div className=' p-14' style={{ color: 'red' }}>
          {/* <Image src={ReactComponent} alt="Butter Icon" width={100} height={100} /> */}

        <Icon width={100} height={100}/>
      </div>
    </div>
  );
}

export default Details;
