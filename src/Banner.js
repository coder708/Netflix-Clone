import React,{useState, useEffect} from 'react'
import axios from './axios';
import requests from './requests';
import './banner.css'

function Banner() {

    const [movie, setMovie]=useState([]);
    useEffect(()=>{
        async function fetchData(){
        const request=await axios.get(requests.fetchNetflixOriginals);
        setMovie(
            request.data.results[
                Math.random() * request.data.results.length
            ]
        )
        return request;
        }
        fetchData();
    },[])


    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    }

    return (
       //https://image.tmdb.org/t/p/original/${movie?.backdrop_path}
            <header style={{
                backgroundSize: "cover",
                backgroundImage: `url(
                    "https://th.bing.com/th/id/R.5047fc4a28c7afbbfdfbf82a27857825?rik=x7N%2bYrgneykzMQ&pid=ImgRaw"
                )`,
                backgroundPosition: "center center",
            }} 
            
            className="banner">

                <div className="banner__contents">
                    <h1 className="banner__title">
                        {/* {movie?.title || movie?.name || movie?.original_name}     */}
                        The Protector
                    </h1>
                     <div className="banner__buttons">
                            <button className="banner__button">Play</button>    
                            <button className="banner__button">My List</button>    
                     </div>

                <h1 className="banner__description">
                    {/* {movie?.overview, 150} */}
                    hte fkkdjf kjdfljdf dkfjkdf dpofie ejfdm fkv noo npadf
                    dfjdp  djfpdjf djf dfjdpfjajofwj ewf0fw u9wiewq oiwiu const dispatch = useDispatch(s
                    joisdj sjd skjds sdjqwjpowdn dsdnwop qwoj as; sdojs Ojsd Posa\
                    )
                </h1>
            </div>
            <div className="banner--fadeBottom"></div>
            </header>
      
    )
}

export default Banner
