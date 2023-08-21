import React from 'react'
import Link from 'next/link'



const Header = () => {
  return (
    <>
        <div className=' text-2xl h-16 px-8 bg-slate-800 flex items-center justify-between text-slate-400'>
         {/* <h2></h2> */}
         <div>
         <img src="public\Screenshot 2023-08-21 122631.png"valt="logo"/>

         </div>
         {/* <img src="E:\react\Components\Screenshot 2023-08-21 122631.png"/> */}
             <div className='flex gap-10'>       
             <Link href='/About'>About</Link>
        <Link href='/Career'>Career</Link>
        <Link href='/Contact'>Contact</Link>
        <Link href='/Help'>Help</Link>
        

        
        </div>
        </div>
    </>

  )
}

export default Header