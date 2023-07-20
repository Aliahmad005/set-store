import React from 'react';
import Image from 'next/image';

const TopBody = () => {
  return (
    // <div className='bg-[url(https://cdn.shopify.com/s/files/1/0143/1552/0054/files/Banner_6.jpg?v=1686198000)] bg-no-repeat   h-screen'></div>
 
 <div>
 <Image
  className='m-auto'
  src="/Banner.webp"
  alt="Picture of the author"
  layout="responsive" 
  width={1920} // Replace with the actual width of the image in pixels.
  height={785}
/>
 </div>
 
    )
}

export default TopBody