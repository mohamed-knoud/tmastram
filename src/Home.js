import React,{useEffect,useState} from 'react'
import axios from 'axios';
import Tooltip from './Tooltip';
import './Home.css'
function Home() {
    const [actual,setActual] = useState(null)
    const [actual2,setActual2] = useState(null)

    const [actual3,setActual3] = useState(null)
    const [actual4,setActual4] = useState(null)

    let response
    let response2
    let response3
    let response4
    const handleRight1=()=>{
      if(window.innerWidth>775){
        document
          .querySelector('#scroll')
          .scrollBy({
            left: 700,
            behavior: 'smooth'  // This enables smooth scrolling
          });
        }else if(window.innerWidth>500){
          document
          .querySelector('#scroll')
          .scrollBy({
            left: 400,
            behavior: 'smooth'  // This enables smooth scrolling
          });
        }else{
          document
          .querySelector('#scroll')
          .scrollBy({
            left: 200,
            behavior: 'smooth'  // This enables smooth scrolling
          });
        }
      
    }
    const handleLeft1=()=>{
      if(window.innerWidth>775){
        document
          .querySelector('#scroll')
          .scrollBy({
            left: -700,
            behavior: 'smooth'  // This enables smooth scrolling
          });
        }else if(window.innerWidth>500){
          document
          .querySelector('#scroll')
          .scrollBy({
            left: -500,
            behavior: 'smooth'  // This enables smooth scrolling
          });
        }else{
          document
          .querySelector('#scroll')
          .scrollBy({
            left: -200,
            behavior: 'smooth'  // This enables smooth scrolling
          });
        }
      
    }
    const handleRight2=()=>{
      if(window.innerWidth>775){
        document
          .querySelector('#scroll2')
          .scrollBy({
            left: 700,
            behavior: 'smooth'  // This enables smooth scrolling
          });
        }else if(window.innerWidth>500){
          document
          .querySelector('#scroll2')
          .scrollBy({
            left: 400,
            behavior: 'smooth'  // This enables smooth scrolling
          });
        }else{
          document
          .querySelector('#scroll2')
          .scrollBy({
            left: 200,
            behavior: 'smooth'  // This enables smooth scrolling
          });
        }
      
    }
    const handleLeft2=()=>{
      if(window.innerWidth>775){
        document
          .querySelector('#scroll2')
          .scrollBy({
            left: -700,
            behavior: 'smooth'  // This enables smooth scrolling
          });
        }else if(window.innerWidth>500){
          document
          .querySelector('#scroll2')
          .scrollBy({
            left: -500,
            behavior: 'smooth'  // This enables smooth scrolling
          });
        }else{
          document
          .querySelector('#scroll2')
          .scrollBy({
            left: -200,
            behavior: 'smooth'  // This enables smooth scrolling
          });
        }
      
    }
    const handleRight3=()=>{
      if(window.innerWidth>775){
        document
          .querySelector('#scroll3')
          .scrollBy({
            left: 700,
            behavior: 'smooth'  // This enables smooth scrolling
          });
        }else if(window.innerWidth>500){
          document
          .querySelector('#scroll3')
          .scrollBy({
            left: 400,
            behavior: 'smooth'  // This enables smooth scrolling
          });
        }else{
          document
          .querySelector('#scroll3')
          .scrollBy({
            left: 200,
            behavior: 'smooth'  // This enables smooth scrolling
          });
        }
      
    }
    const handleLeft3=()=>{
      if(window.innerWidth>775){
        document
          .querySelector('#scroll3')
          .scrollBy({
            left: -700,
            behavior: 'smooth'  // This enables smooth scrolling
          });
        }else if(window.innerWidth>500){
          document
          .querySelector('#scroll3')
          .scrollBy({
            left: -500,
            behavior: 'smooth'  // This enables smooth scrolling
          });
        }else{
          document
          .querySelector('#scroll3')
          .scrollBy({
            left: -200,
            behavior: 'smooth'  // This enables smooth scrolling
          });
        }
      
    }
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNmYzOTcwNGJhOTEwMjlkM2NhZDY3MzQwY2E2ODYwMCIsInN1YiI6IjY2MzZhNzk0OTU5MGUzMDEyM2JjNDlhNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ImAuflKe7r_PCIM-jUc8wa9hCTYlwFWQqhQaIXgKVhI'
        }
      };
      const fetchData1 = async () => {
        try {
          response = await axios.get('https://api.themoviedb.org/3/movie/popular',options);
          console.log(response.data.results)
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
      const fetchData2 = async () => {
        try {
          response2 = await axios.get('https://api.themoviedb.org/3/movie/now_playing',options);
          setActual2(response2.data.results)
          console.log(actual2)
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
      const fetchData3 = async () => {
        try {
          response3 = await axios.get('https://api.themoviedb.org/3/tv/airing_today',options);
          setActual3(response3.data.results)
          console.log(actual3)
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
      const fetchData4 = async () => {
        try {
          response4 = await axios.get('https://consume-mu.vercel.app/meta/anilist/popular?perPage=20',options);
          setActual4(response4.data.results)
          console.log(response4.data.results)
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
      let i = 0
    useEffect(() => {
      fetchData1();
      fetchData2();
      fetchData3();
      fetchData4();

      const interval = setInterval(() => {
        if(i===20){
            i=0
        }
        if(response.data.results!==null){
            setActual(response.data.results[i])
            setActual2(response2.data.results)
            setActual3(response3.data.results)
            // setActual4(response4.data.results)

            i++
        }
      }, 3000); // Update count every second
  
      // Clean up the interval on component unmount
      return () => clearInterval(interval);
    }, []); 
  return (
    <div>
        <div id="wrapper">
            {actual && <img id="poster" src={`https://image.tmdb.org/t/p/original${actual.backdrop_path}`} alt=""/>}<div>
                
                <div style={{position:'relative',bottom:'50px',zIndex:'999',borderRadius:'10px',backgroundColor:'white',textAlign:'center',height:'auto',paddingBottom:'15px'}}>
                {actual && <span style={{fontSize:'2em',fontWeight:'900'}}>{actual.original_title}</span>}
                <div style={{position:'relative',marginTop:'10px'}}>
                <span style={{display:'inline-block',transform: 'rotate(-90deg)'}}>Movie</span>
                <Tooltip text="Watch Online">
                <span style={{backgroundColor:'#ffd700',color:'white',padding:'10px',marginRight:'5px',borderRadius:'5px',cursor:'pointer'}}>Watch <i style={{color:'white'}} className="fa-solid fa-play"></i></span>
                </Tooltip>
                <Tooltip text="Know more">
                <span style={{backgroundColor:'#ffd700',color:'white',padding:'10px',marginRight:'5px',borderRadius:'5px',cursor:'pointer'}}>Detail</span>
                </Tooltip>
                <Tooltip text="Add to Watchlist">
                <i style={{fontSize:'1.2em',margin:'0 10px',cursor:'pointer'}} className="fa-solid fa-plus"></i>

                </Tooltip>
                <Tooltip text="Share">
                <i style={{fontSize:'1.2em',margin:'0 10px',cursor:'pointer'}} className="fa-solid fa-share"></i>

                </Tooltip>
                
                

                </div>

                </div>
                
            <h2>Latest Movies</h2>
                
            <div style={{textAlign:'right',position:'relative',bottom:'20px',right:'50px'}}>
              <Tooltip text="Swipe Left">
            <i style={{cursor:'pointer'}} onClick={handleLeft1} class="fa-solid fa-chevron-left"></i>
                </Tooltip>
                Swipe
                <Tooltip text="Swipe Right">

            <i style={{cursor:'pointer'}} onClick={handleRight1} class="fa-solid fa-chevron-right"></i>                </Tooltip>

            </div>
            <div id="scroll" style={{webkitOverflowScrolling: 'touch',transition:'all 0.3s ease', display: 'flex',overflowX: 'hidden',whiteSpace: 'nowrap'}}>
  {actual2 !== null && actual2.map(movie => (
    <div style={{display:'flex',flexDirection:'column',marginLeft:'10px'}}  key={movie.id}> {/* Remember to add a unique key prop when iterating over lists */}
      <img className='movie' src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} alt='' />
      <span style={{marginTop:'10px',color:'#777'}}>{movie.original_title.length>14?movie.original_title.substring(0,11)+"...":movie.original_title}</span>
    </div>
  ))}
</div>
<h2 style={{marginTop:'20px',}}>Latest TV</h2>
                
            <div style={{textAlign:'right',position:'relative',bottom:'20px',right:'50px'}}>
              <Tooltip text="Swipe Left">
            <i style={{cursor:'pointer'}} onClick={handleLeft2} class="fa-solid fa-chevron-left"></i>
                </Tooltip>
                Swipe
                <Tooltip text="Swipe Right">

            <i style={{cursor:'pointer'}} onClick={handleRight2} class="fa-solid fa-chevron-right"></i>                </Tooltip>

            </div>
            <div id="scroll2" style={{transition:'all 0.3s ease', display: 'flex',overflowX: 'hidden',whiteSpace: 'nowrap'}}>
  {actual3 !== null && actual3.map(movie => (
    <div style={{display:'flex',flexDirection:'column',marginLeft:'10px'}}  key={movie.id}> {/* Remember to add a unique key prop when iterating over lists */}
      <img className='movie' src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} alt='' />
      <span style={{marginTop:'10px',color:'#777'}}>movie.original_title.length>14?movie.original_title.substring(0,11)+"...":movie.original_title}</span>
    </div>
  ))}
</div>

<h2 style={{marginTop:'20px',}}>Popular Anime</h2>
                
            <div style={{textAlign:'right',position:'relative',bottom:'20px',right:'50px'}}>
              <Tooltip text="Swipe Left">
            <i style={{cursor:'pointer'}} onClick={handleLeft3} class="fa-solid fa-chevron-left"></i>
                </Tooltip>
                Swipe
                <Tooltip text="Swipe Right">

            <i style={{cursor:'pointer'}} onClick={handleRight3} class="fa-solid fa-chevron-right"></i>                </Tooltip>

            </div>
            <div id="scroll3" style={{transition:'all 0.3s ease', display: 'flex',overflowX: 'hidden',whiteSpace: 'nowrap'}}>
  {actual4 !== null && actual4.map(movie => (
    <div style={{display:'flex',flexDirection:'column',marginLeft:'10px'}}  key={movie.id}> {/* Remember to add a unique key prop when iterating over lists */}
      <img className='movie' src={movie.image} alt='' />
      <span style={{marginTop:'10px',color:'#777'}}>{movie.title.english.length>14?movie.title.english.substring(0,14):movie.title.english}</span>
    </div>
  ))}
</div>

            
            </div>
        </div>
    </div>
  )
}

export default Home
