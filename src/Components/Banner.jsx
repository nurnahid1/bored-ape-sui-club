import React from 'react';
import banner from '../images/banner.png'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const Banner = () => {
    return (
      <div id='home' className="hero md:pt-12">
        <div className="hero-content flex-col md:items-center lg:flex-row-reverse">
          <div data-aos="fade-up" data-aos-duration="2000" className='flex items-start'>
            <img src={banner} className="max-w-xs md:max-w-lg " />
          </div>

          <div data-aos="fade-right" data-aos-duration="2000" className='md:w-1/2 md:pt-5'>
            <h1 className="md:text-5xl text-4xl  font-bold text-white font-Poppins">Bored Ape Sui Club</h1>
            <p className="py-6 text-white font-Roboto">
            It began with hope and belief in a second chance. A collection, derived not just from any project, one of the greatest, the OG BAYC. There are no duplicates an expansion of 5,000 Bored Apes from the original BAYC collection, each deconstructed, reconstructed offering a new Bored Ape a home in the Sui Blockchain.</p>
            
            <a href='https://tocen.co/marketplace/ino/boredapesuiclub' target='blank' className="btn btn-primary text-white font-Roboto ">Mint</a>
         
          </div>
        </div>
      </div>
    );
};

export default Banner;