import React, { useEffect, useState } from 'react'
// import Counter from "./features/counter"
 import {uploadBytes,listAll,ref, getDownloadURL} from "firebase/storage"
 import { storage } from './firebase/firebase'
 import "./App.css"
export default function App() {
  const [imgUrl,setImg]=useState(null)
  const [imgs,setimgs] = useState([])
  const [videos,setvideos] = useState([])

  
  const reef = ref(storage,"image/")
  const reefv = ref(storage,"videos/")
  const Upload=()=>{
    const refr=ref(storage,`image/${imgUrl.name}`)
    const refv=ref(storage,`videos/${imgUrl.name}`)
    if(imgUrl.type=="image/jpeg"){
    uploadBytes(refr,imgUrl).then((snapShot)=>{
      getDownloadURL(snapShot.ref).then((url)=>{
        setimgs(imgUrl=>[...imgUrl,url])
      })
    })
  }
  else{
    uploadBytes(refv,imgUrl).then((snapShot)=>{
      getDownloadURL(snapShot.ref).then((url)=>{
        setvideos(videos=>[...videos,url])
      })
    })
  }
    
  }
  useEffect(
   ()=>{
    listAll(reef).then((res)=>{
      res.items.forEach((item)=>{
      getDownloadURL(item).then((url)=>{
        setimgs(imgs=>[...imgs,url])
      })
      
      })
    })
   }
  ,[]) 
  useEffect(
   ()=>{
    listAll(reefv).then((res)=>{
      res.items.forEach((item)=>{
      getDownloadURL(item).then((url)=>{
        setvideos(videos=>[...videos,url])
      })
      
      })
    })
   }
  ,[]) 

  

  return (
    <div>
      {/* <Counter/> */}


      <input type="file" onChange={(e)=> setImg(e.target.files[0])}/>
      <br>
      </br>
      <button onClick={Upload}>Upload</button>
      {imgs.map((img)=><img key={img} controls src={img} />)}
      {videos.map((video)=><video key={video} controls src={video} />)}
    </div>

  )
}
