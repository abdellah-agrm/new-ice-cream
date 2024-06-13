import ModeSwitcher from "../Elements/ModeSwitcher";

export default function Navbar({sign}){
  return (
    <header className="bg-transparent text-gray-900 dark:text-white">
      <div className="container px-3 md:px-0 mx-auto">
        <div className="relative flex items-center justify-between py-3">
          <div className="">
            <h1 className="text-4xl font-black font-dmserif">IceCream</h1>
          </div>
          <div className="">
            <div className="inline-flex">
              <a href="/signin" className={`font-medium text-sm sm:text-base py-1 px-3 rounded-full ${sign==="in"?"text-cream-600":"bg-cream-600 text-cream-100"}`}>Sign In</a>
              <a href="/signup" className={`font-medium text-sm sm:text-base py-1 px-3 rounded-full ${sign==="up"?"text-cream-600":"bg-cream-600 text-cream-100"}`}>Sign Up</a>
              <ModeSwitcher/>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};