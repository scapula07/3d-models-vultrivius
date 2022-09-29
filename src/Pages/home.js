import React from 'react'
import {Outlet,Link} from "react-router-dom"
export default function Home() {
  return (
    <div className='h-full w-full flex flex-col items-center bg-black'>
        <main className='flex space-x-20 pt-10 items-center'>
          <Link to="blueprint"><span className='text-slate-300 text-md hover:text-slate-600'>Building Blueprint</span></Link>  
          <Link to="skyscrapper"><span className='text-slate-300 text-md hover:text-slate-600'>Skyscrapper Resort</span></Link> 
          <Link to="chicagobuilding"><span className='text-slate-300 text-md hover:text-slate-600'>Chicago Building </span></Link>   

        </main>

        <main>
            <Outlet />
        </main>

    </div>
  )
}
