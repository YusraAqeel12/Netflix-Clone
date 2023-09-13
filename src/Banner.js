import React, { useState , useEffect } from 'react'
import "../src/style/Banner.css"
import axios from '../src/axios'
import { imageBaseUrl } from '../src/axios'
import requests from './request'
const Banner = () => {
  const [movies , setmovies]=useState([])
  useEffect(() => {
    async function fetchdata(){
      const request = await axios.get(requests.fetchPopular)
      console.log(request)
      setmovies(request.data.results[Math.floor(Math.random()*request.data.results.length)])
      return request

    }
    fetchdata()
  }, [])
  console.log(movies)
  
  return (
    <div className='Banner' key={movies.id} style={{
      backgroundImage:`url(${imageBaseUrl}${movies.poster_path ? movies.backdrop_path : movies.poster_path})` , 
      backgroundPosition:"center center",
      backgroundSize:"cover"
      
    }}>

      <div className='BannerContents'>
        <h1 className='title'>{movies.original_title}</h1>
        
        <div >
          <button className='Button'>Play</button>
          <button className='Button'>My List</button>

        </div>
        
        <h1 className='overview'>{movies.overview}</h1>
      </div>      
    
    </div>
  )
}

export default Banner

//Everytime you refresh it give random movie
//use effect run once when banner loads
//randomly movie generate karnay kai liyae maths ka option lagaingay
//request.data.results[Math.floor(Math.random()*request.data.results.)]
//background image mai you have to give url 