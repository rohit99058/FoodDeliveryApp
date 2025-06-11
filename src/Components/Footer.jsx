import React from 'react'
import { Link } from 'react-router-dom'
import facebook from '../assets/facebook.jpg'
// import in from '../assets/in.jpg'
import insta  from '../assets/insta.jpg'
import pin from '../assets/pin.jpg'
import x from '../assets/x.jpg'
import logo from '../assets/logo.png'
import AppStore from '../assets/AppStore.avif'
import GooglePlay from '../assets/GooglePlay.avif'



const Footer = () => {
    return (
        <div>

        < div className = 'flex justify-between bg-gray-300 p-3' >
        {/* footer starts here */ }
        <Link to={"/"}>
            {/* <img src={logo} alt="" className='h-[60px]' /> */}
        </Link>
   
                {/* First component of footer */ }
                <div className=' mx-4 mt-4'>
                    <p className='font-bold  text-2xl'>Company </p>
            
                    <div className='flex flex-col mt-1'>
            
                        <span className='text-gray-600'>About Us</span>
                        <span className='text-gray-600'>BiteRush Corprate</span>
                        <span className='text-gray-600'>Careers</span>
                        <span className='text-gray-600'>Team</span>
                    </div>
                </div>
                   {/* Second component of footer */ }
              
                  <div className=' mx-4 mt-4'>
                      <p className='font-bold  text-2xl'>Contact Us</p>
          
                        <div className='flex flex-col mt-1'>
                          <span className='text-gray-600'>Help & Support</span>
                          <span className='text-gray-600'>Partner With Us</span>
                          <span className='text-gray-600'>Ride With Us</span>
                          <p className='font-bold  text-2xl'>Legal</p>
                          <span className='text-gray-600'>Term & Conditions</span>
                          <span className='text-gray-600'>Cookie Policy</span>
                          <span className='text-gray-600'>Privacy Policy</span>
                        </div>
                  </div>
                   {/* third component of footer */}
                   <div className=' mx-4 mt-4'>
                   <p className='font-bold  text-2xl'>Life At BiteRush </p>
       
                       <div className='flex flex-col mt-1'>
           
                           <span className='text-gray-600'>Explore With BiteRush</span>
                           <span className='text-gray-600'>BiteRush News</span>
                           <span className='text-gray-600'>Snackables</span>
                       </div>
                   </div>   
                 {/* Fourth component of footer */}
                 <div className=' mx-4 mt-4'>
                 <p className='font-bold  text-2xl'>Available In:</p>

                      <div className='flex flex-col mt-1'>
      
                      <span className='text-gray-600'>Banglore</span>
                      <span className='text-gray-600'>Gurgaon</span>
                      <span className='text-gray-600'>Hyderabad</span>
                      <span className='text-gray-600'>Delhi</span>
                      <span className='text-gray-600'>Pune</span>
                      <span className='text-gray-600'>Mumbai</span>
                      <p className='font-bold  text-2xl'>Social Links:</p>
                                   <div className='flex flex-row bg-gray-300 mt-2'>
                                       <Link to={"https://www.instagram.com/kaushalkrsna/"}>
                                           <img className='h-[20px] w-[20px] mx-2' src={insta} alt="" />
                                       </Link>
                                       {/* <Link to={"https://in.pinterest.com/swiggyindia/"}>
                                           <img className='h-[20px] w-[20px] mx-2' src={pin} alt="" />
                                       </Link> */}
                                       <Link tp={"https://x.com/Kaushalkrsna"}>
                                           <img className='h-[20px] w-[20px] mx-2' src={x} alt="" />
                                       </Link>
                                       <Link to={"https://www.facebook.com/KaushalKrsna"}>
                                           <img className='h-[20px] w-[20px] mx-2' src={facebook} alt="" />
                                       </Link>
                                    </div>
      
                      </div>
                    </div>

            
      
      </div> 
      {/* <div className='bg-gray-300 flex  justify-center items-center h-[100px]'>
           <div className='text-[28px] font-bold p-2 mx-1'>For better experience, download the Swiggy app now</div> 
         <Link to={"https://apps.apple.com/in/app/swiggy-food-instamart-dineout/id989540920?referrer=utm_source%3Dswiggy%26utm_medium%3Dhomepage"}>
           <img className='p-2 mx-2' src={GooglePlay} alt="" /> 
         </Link>
         
         <Link to={"https://play.google.com/store/apps/details?id=in.swiggy.android&referrer=utm_source%3Dswiggy%26utm_medium%3Dheader"}>
         <img className='p-2 mx-2' src={AppStore} alt="" /> 
         </Link> 
            
     </div>   */}
     </div>
  )
}

export default Footer