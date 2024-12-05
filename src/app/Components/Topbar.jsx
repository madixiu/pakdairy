

import Link from "next/link";
function Topbar() {
  return ( 
    <div className="bg-gray-700 px-4 py-4">
      <Link href="/">
        <button className="bg-slate-50 me-2 p-2">Home</button>
      </Link>
      <Link href="/about">
        <button className="bg-slate-50 p-2">About</button>
      </Link>
    </div>
   );
}

export default Topbar;