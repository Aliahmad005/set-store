"use client"

import React, { useEffect, useState } from 'react'
import submitData from '@/app/api/data';
import { storage } from './firebase';





const UploadProduct = () => {

  const [status , setStatus] = useState();
  const [image , setImage] = useState('');
  const [imageT , setImageT] = useState('');
  const [imageTh , setImageTh] = useState('');
  const [Url , setUrl] = useState('');
  const [UrlT , setUrlT] = useState('');
  const [UrlTh , setUrlTh] = useState('');
  const [suc , setSuc] = useState('');
  const [sucT , setSucT] = useState('');
  const [sucTh , setSucTh] = useState('');

  console.log("Url" , Url)
  console.log("UrlT" , UrlT)
  console.log("UrlTh" , UrlTh)
  console.log("image" , image )
  console.log("imageT" , imageT )
  console.log("imageTh" , imageTh )

  const upload = (e) =>{
    setImage(e.target.files[0]);

  }

  const uploadT = (event) =>{
  
    setImageT(event.target.files[0]);
   

  }

  const uploadTh = (event) =>{
    
    setImageTh(event.target.files[0]);
   

  }

  useEffect(()=>{
    if(image == null)
    return;
    
if(image != ''){
     storage.ref('/image/'+image.name).put(image)
    .on("state_changed" , setSuc("success"), alert , () => {
      storage.ref('image').child(image.name).getDownloadURL()
      .then((url) =>{
        setUrl(url);
      });
    });
  }
  },[image])

  useEffect(()=>{
    if(imageT == null)
    return;
    
if(imageT != ''){
     storage.ref('/imageT/'+imageT.name).put(imageT)
    .on("state_changed" , setSucT("success"), alert , () => {
      storage.ref('imageT').child(imageT.name).getDownloadURL()
      .then((url) =>{
        setUrlT(url);
      });
    });
  }
  },[imageT])

  useEffect(()=>{
    if(imageT == null)
    return;
    
if(imageTh != ''){
     storage.ref('/imageTh/'+imageTh.name).put(imageTh)
    .on("state_changed" , setSucTh("success"), alert , () => {
      storage.ref('imageTh').child(imageTh.name).getDownloadURL()
      .then((url) =>{
        setUrlTh(url);
      });
    });
  }
  },[imageTh])
  
const handleSubmit = async (FormData) =>{
try {
  
const res = submitData({
  productname : FormData.get("product-name"),
  mindetail : FormData.get("min-detail"),
  fulldetail : FormData.get("full-detail"),
  catagory : FormData.get("catagory"),
  price : FormData.get("price"),
  qunty : FormData.get("qunty"),
  img : FormData.get("img"),
  imgT : FormData.get("imgT"),
  imgTh : FormData.get("imgTh"),
  pay : FormData.get("pay")
  
});

if (res.status == 200){
  setStatus("sucsess")
} else {
  setStatus('erroer')
}

} catch (error) {
  console.log(error);
}
}


  return (
    <div>
        <div className='py-3 px-10  border-b-2 border-gray-300 mb-10'>
            <p className='font-semibold text-slate-300'>Upload section / New Product</p>
            <div className='flex justify-between align-middle'>
                <p className='text-2xl font-semibold mb-0'>Add Product</p>
                <p className='p-2 font-semibold mb-0 text-center text-white bg-blue-700 rounded-full w-36'>Dashbord</p>
            </div>
        </div>

{/* form */}

        <div className='px-10'>
              <div>
              <form action={handleSubmit}>
        <div className="space-y-12">
          
          <div className="border-b border-gray-900/10 pb-12">
          
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
             
           
             
              <div className="col-span-full">
                <label htmlFor="cover-photo" className="block text-sm font-medium leading-6 text-gray-900">Product photo</label>
                <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                  <div className="text-center">
                    <svg className="mx-auto h-12 w-12 text-gray-300" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z" clipRule="evenodd" />
                    </svg>
                    <div className="mt-4 flex text-sm leading-6 text-gray-600">
                      <label htmlFor="file-upload" className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500">
                        <span>Upload a file</span>
                        <input onChange={upload} id="file-upload" name="file-upload" type="file" className="sr-only" />
                      </label>
                      <p className="pl-1">{image.name}</p>
                    </div>
                    <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                    <p className="text-xs leading-5 text-green-600">{suc}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className='flex mt-3'>
                
                <div className="w-[200px]">
      
                <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                  <div className="text-center">
                    <svg className="mx-auto h-12 w-12 text-gray-300" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z" clipRule="evenodd" />
                    </svg>
                    <div className="mt-4 flex text-sm leading-6 text-gray-600">
                      <label htmlFor="file-uploadT" className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500">
                        <span>Upload a fil</span>
                        <input onChange={uploadT} id="file-uploadT" name="file-uploadT" type="file" className="sr-only" />
                      </label>
                    
                    </div>
                    <p className="text-xs leading-5 text-green-600">{sucT}</p>
                  </div>
                </div>
              </div>

              {/* 2nd */}

              <div className="w-[200px] ml-2">
              
                <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                  <div className="text-center">
                    <svg className="mx-auto h-12 w-12 text-gray-300" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z" clipRule="evenodd" />
                    </svg>
                    <div className="mt-4 flex text-sm leading-6 text-gray-600">
                      <label htmlFor="file-uploadTh" className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500">
                        <span>Upload a file</span>
                        <input onChange={uploadTh} id="file-uploadTh" name="file-uploadTh" type="file" className="sr-only" />
                      </label>
                    
                    </div>
                    <p className="text-xs leading-5 text-green-600">{sucTh}</p>
                  
                  </div>
                </div>
              </div>

            </div>
          </div>
          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-base font-semibold leading-7 text-gray-900">Product Information</h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">Add Complete product detail</p>
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">Product name</label>
                <div className="mt-2">
                  <input type="text" name="product-name" id="first-name" autoComplete="given-name" className="block w-full rounded-md border-1 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
              </div>
              <div className="sm:col-span-3">
                <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">Min detail</label>
                <div className="mt-2">
                  <input type="text" name="min-detail" id="last-name" autoComplete="family-name" className="block w-full rounded-md border-1 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
              </div>
              <div className="sm:col-span-4">
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Full Detail</label>
                <div className="mt-2">
                  <input  name="full-detail" type="text" autoComplete="family-name" className="block w-full rounded-md border-1 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
              </div>
              <div className="sm:col-span-3">
                <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">Select Catagori</label>
                <div className="mt-2">
                  <select id="country" name="catagory" autoComplete="country-name" className="block w-full rounded-md border-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
                    <option>Addidas</option>
                    <option>Service</option>
                    <option>Nike</option>
                  </select>
                </div>
              </div>
              <div className="col-span-full">
                <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-900">Price</label>
                <div className="mt-2">
                  <input type="number" name="price" id="street-address" autoComplete="street-address" className="block w-full rounded-md border-1 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
              </div>

              <div className="sm:col-span-2 sm:col-start-1">
                <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">Quantity</label>
                <div className="mt-2">
                  <input type="number" name="qunty" id="city" autoComplete="address-level2" className="block w-full rounded-md border-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
              </div>
              <div className="sm:col-span-2 sm:col-start-1">
                <label htmlFor="pay" className="block text-sm font-medium leading-6 text-gray-900">Payment</label>
                <div className="mt-2">
                  <input type="text" name="pay" id="pay" autoComplete="address-level2" className="block w-full rounded-md border-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
              </div>



              <div className="sm:col-span-2 hidden  sm:col-start-1">
                <label htmlFor="img" className="block text-sm font-medium leading-6 text-gray-900">Quantity</label>
                <div className="mt-2">
                  <input type="text" value={Url} name="img" id="img" autoComplete="address-level2" className="block w-full rounded-md border-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
              </div>


              <div className="sm:col-span-2 hidden  sm:col-start-1">
                <label htmlFor="imgT" className="block text-sm font-medium leading-6 text-gray-900">Quantity</label>
                <div className="mt-2">
                  <input type="text" value={UrlT} name="imgT" id="imgT" autoComplete="address-level2" className="block w-full rounded-md border-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
              </div>


              <div className="sm:col-span-2 hidden  sm:col-start-1">
                <label htmlFor="imgTh" className="block text-sm font-medium leading-6 text-gray-900">Quantity</label>
                <div className="mt-2">
                  <input type="text" value={UrlTh} name="imgTh" id="imgTh" autoComplete="address-level2" className="block w-full rounded-md border-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
              </div>

             
            </div>
          </div>
          <div className=" pb-12">
            <h2 className="text-base font-semibold leading-7 text-gray-900">Notifications</h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">Please Enter the correct product information </p>
          <p className='text-light text-center p-2 bg-secondary'>{status}</p>
          </div>
        </div>
        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button type="button" className="text-sm font-semibold leading-6 text-gray-900">Cancel</button>
          <button type="submit" className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Save</button>
        </div>
      </form>
              </div>
        </div>
    </div>
  )
}

export default UploadProduct