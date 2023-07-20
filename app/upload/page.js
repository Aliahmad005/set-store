
import React from 'react';
import UploadProduct from '@/components/UploadProduct';



// const getTopics = async () => {
//   try {
//     const res = await fetch("http://localhost:3000/api/get", {
//       cache: "no-store",
//     });

//     if (!res.ok) {
//       throw new Error("Failed to fetch topics");
//     }

//     return res.json();
//   } catch (error) {
//     console.log("Error loading topics: ", error);
//   }
// };



const  upload = async () => {
 
    // const { topics } = await getTopics();

  



  return (
    <div>

       <UploadProduct/>
    </div>
  )
}

export default upload