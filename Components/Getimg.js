
import axios from 'axios'
import React, { useState } from 'react'


const Getimg = () => {
  const [Images, setImages] = useState([])
  const getImages=async ()=>{
try {
  const response= await axios.get("https://picsum.photos/v2/list")
console.log(response);
const data =response.data
console.log(data);
setImages(data)
console.log(Images);
} catch (error) {
  console.error("error fetching images");
}
 }
  return (
    <div>
      <button onClick={getImages} className='px-5 py-3 bg-pink-700 text-white'>Get Images</button>
      <div className='p-10'>
        {Images.map((elem,i)=>{
               return 
                <img key={i} src={elem.download_url}/>
        })}
      </div>
    </div>
  )
}

export default Getimg