import axios, { imageBaseUrl } from "../src/axios"
import React, { useState , useEffect} from 'react'
import "../src/style/Row.css"
function Row({ title , fetchUrl}) {
  const [movies , setmovies] = useState([])
  
        useEffect(() => {
        async function fetchData(){
        const request = await axios.get(fetchUrl)
        console.log(request)
  //set movies mai daalo req kai under data kai result ko 
  //console mai tumhai data kai under results millaingay
  //array millay ga 
        setmovies(request.data.results)
        return request
      }
      fetchData()
      },[fetchUrl])
      console.log(movies)
     
    return(
    <div className="Row">
      <h2 className="RowTitle">{title}</h2>
      <div className="RowPosters">  
        {movies.map((movie , index)=>{
          return(
      
          <div >
            <img className="RowPoster" src={`${imageBaseUrl}${movie.poster_path ? movie.backdrop_path : movie.poster_path}`} alt={movie.id}  key={movie.id}  />
          </div>
         
        )})}

      </div>
    </div>
  )
}

export default Row

//props paas karna movie ka warna you will not get pictures
//scale kartay waqt padding add karna is imp
//margon 0% sai unneceesay margins khatam hogaingay
//click on the image toh show trailer
//agar trailer url hai video play horahi hai toh empty hogay