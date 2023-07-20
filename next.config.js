/** @type {import('next').NextConfig} */
const nextConfig = {
   experimental : {
      appDir : true,
      serverComponentsExternalPackages : ['mongoose'],
      serverActions : true
  },
  images: {
   domains: ['firebasestorage.googleapis.com' , 'images.unsplash.com' , "cdn.shopify.com"],
 },

}


module.exports = nextConfig 
 

