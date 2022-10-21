import React from 'react'
import { Link } from "react-router-dom";

// images
import logo from "../../assests/logo.png"

export default function Footer() {

  const footerLinks = [
    {
      name: 'Company',
      link: '/',
    },
    {
      name: 'Product',
      link: '/',
    },
    {
      name: 'Legal',
      link: '/',
    },
    {
      name: 'Docs',
      link: '/',
    },
  ]
  const year = new Date().getFullYear();
  return (
    <footer className='bg-black  pb-8  text-white'>
      <div className="w-4/5 mx-auto md:flex md:justify-between items-center">
        <div className='text-center md:text-left'>
          {/* <div className="font-medium text-xl leading-6 uppercase mb-2">Vitruvius</div> */}
          <img src={logo} alt="" />
          <p className="mt-6 text-sm leading-6">Copyright © {year} Scapula Labs, Inc. <br /> All rights reserved.</p>
        </div>
        {/* footer links */}
        <div className='space-x-4 mt-2 text-center'>
          {footerLinks.map((url, index) => (
            <Link
              key={index}
              to={url.link}
              className="font-medium text-base leading-[30px]"
            >
              {url.name}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  )
}
