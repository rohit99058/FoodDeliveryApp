import React from 'react'
import logo from "../assets/BiteRush.svg"
import leftImage from "../assets/Veggies_new.avif"
import rightImage from "../assets/Sushi_replace.avif"
import oneI from "../assets/one.avif"
import twoI from "../assets/two.avif"
import threeI from "../assets/three.avif"
import fourI from "../assets/four.avif"
import { Link } from 'react-router-dom'
import Footer from './Footer'
import banner from "../assets/Appbanner.avif"

const Landing = () => {
  return (
    <div className='bg-[#ff5200] h-[920px]'>
        <div className='flex justify-between py-12 px-20'>
            <img src={logo} alt="" className='h-[150px] w-[250px]' />

            <div className='flex text-white items-center gap-6'>
                <p>BiteRush Corporate</p>
                <p>Partner with us</p>
                <button className='border px-2 py-4 rounded-lg'>Get the App <i className="fa-solid fa-arrow-up fa-rotate-by"></i></button>
                <button className='bg-black rounded-lg px-8 py-4'>Sign In</button>
            </div>
        </div>

        <div className='flex relative'>
            <img className='absolute left-0 h-[450px] w-[250px]' src={leftImage} alt="" />
            <div className='h-[100% w-[70%] mx-auto items-center gap-10 flex flex-col'>
                <h1 className='text-[48px] text-white text-center'>Order food & groceries.<br/> Discover best restaurants.</h1>
                <div className='w-[50%] relative' >
                    <input className='w-[100%] h-[56px] rounded-lg p-4' type="text"  placeholder='Search for restaurant, item or more'/>
                    <i className="fa-solid fa-magnifying-glass text-black absolute top-5 right-5" ></i>
                </div>

                <div className='flex'>
                <Link to={"/restraunts"}><img className='h-[296px] w-[350px]' src={oneI} alt="" /></Link>
                <img className='h-[296px] w-[350px]' src={twoI} alt="" />
                <img className='h-[296px] w-[350px]' src={threeI} alt="" />
                <img className='h-[296px] w-[350px]' src={fourI} alt="" />
            </div>
            </div>
            
            <img className='absolute right-0 h-[450px] w-[250px]' src={rightImage} alt="" />
        </div>
        <div>
            {/* <img src={banner} alt="" /> */}
        </div>
    <Footer/>
    </div>
  )
}

export default Landing