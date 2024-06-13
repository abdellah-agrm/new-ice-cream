import React, { useState } from 'react';
import axios from "axios";
import { PaperAirplaneIcon } from "@heroicons/react/24/solid";
import { toast } from 'react-hot-toast';
import { DoneToast } from '../../../Elements/AllToasts';
import "../../../Style/style.css";

export default function JoinUs() {
  const localhost = process.env.REACT_APP_LOCALHOST;
  const token = localStorage.getItem('token');
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    axios.post(`${localhost}/jointcustomers`, { email }, { headers: { 'Authorization': `Bearer ${token}` } })
      .then((res) => {
        toast(<DoneToast text="Thanks for joining! Stay tuned for sweet updates!" />,
          {
            style: { background: 'none', boxShadow: 'none' },
            duration: 2000,
            position: 'top-center',
          });
        setEmail("");
      })
      .catch((err) => console.error(err));
  };

  return (
    <section className="joinus dark:bg-gray-900 min-w-screen">
      <div className='mt-8 mb-6'>
      <div className="min-w-screen backdrop-blur-sm bg-cream-300/75">
        <div className="container mx-auto flex flex-col px-5 py-10 justify-center items-center">
          <div className="w-full md:w-2/3 flex flex-col items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-2 font-medium text-gray-900">Join Our <span className="text-cream-600">Newsletter</span></h1>
            <p className="mb-5 text-gray-900 text-base md:text-lg leading-relaxed">
              Subscribe for flavor updates, exclusive offers, and sweet surprises.
              Stay connected with the world of frozen delights at your fingertips.
            </p>
            <div className="flex w-full justify-center items-end">
              <div className="relative mr-4 lg:w-10/12 w-full md:w-full text-left">
                <form onSubmit={handleSubmit} className="relative w-full">
                  <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white border-cream-400 z-20 block w-full rounded-full pl-4 pr-10 py-2.5 placeholder:text-cream-400 text-base outline-none focus:border-cream-400 focus:ring-0"
                    placeholder="Enter your email here.." required />
                  <button type="submit" className="absolute end-0 top-0 h-full rounded-full p-2.5 text-sm font-medium">
                    <PaperAirplaneIcon className="h-6 w-auto text-cream-600" />
                  </button>
                </form>
              </div>
            </div>
            <p className="text-md mt-2 text-gray-800 mb-8 w-full">You can unsubscribe anytime with a single click.</p>
          </div>
        </div>
      </div>
      </div>
    </section>
  )
}