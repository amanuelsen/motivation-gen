import { useState, useEffect } from "react";
import "./App.css";
import logo from "./tech.png"


    

function App() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 450px)'); 
    setIsMobile(mediaQuery.matches);

    const handleResize = () => {
      setIsMobile(mediaQuery.matches);
    };

    mediaQuery.addEventListener('change', handleResize);

    return () => {
      mediaQuery.removeEventListener('change', handleResize);
    };
  }, []);

  const [advices, setAdvices] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch("https://api.adviceslip.com/advice");
      const data = await response.json();
      setAdvices([data.slip]);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleNewQuoteClick = () => {
    fetchData();
  };

  return (
    <> 
    <div className="mobil-logo">
    {isMobile && <img  src={logo} alt="mobile" />}

    </div>

      <div className="main">
        <div className="quote">
          {advices.map((advice) => (
            <div className="content"> 
              <p className="texten"> ADVICE #{advice.id}</p>
              <h3 className="quote" key={advice.id}>
              "{advice.advice}"</h3>
              <div className="divider">
              {isMobile ? (
       <svg width="295" height="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path fill="#4F5D74" d="M0 8h122v1H0zM173 8h122v1H173z"/><g transform="translate(138)" fill="#CEE3E9"><rect width="6" height="16" rx="3"/><rect x="14" width="6" height="16" rx="3"/></g></g></svg>
      ) : (
<svg width="444" height="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path fill="#4F5D74" d="M0 8h196v1H0zM248 8h196v1H248z"/><g transform="translate(212)" fill="#CEE3E9"><rect width="6" height="16" rx="3"/><rect x="14" width="6" height="16" rx="3"/></g></g></svg>      )}
                </div>
              </div>
              
          ))}
          <div className="fin">
          <button className="btn" onClick={handleNewQuoteClick}><div>
          <svg id="Group_1061" data-name="Group 1061" xmlns="http://www.w3.org/2000/svg" width="29.903" height="21.178" viewBox="0 0 29.903 21.178">
  <path id="Path_275" data-name="Path 275" d="M6.915,0a6.761,6.761,0,0,1,7.029,6.612,22.753,22.753,0,0,1-.7,5.474,10.373,10.373,0,0,1-3.435,5.059c-2.476,2.3-7.756,4.033-7.756,4.033s5.635-7.407,4.382-7.407C2.617,13.771,0,10.735,0,6.915A6.915,6.915,0,0,1,6.915,0Z" fill="#16111a"/>
  <path id="Path_276" data-name="Path 276" d="M6.915,0a6.761,6.761,0,0,1,7.029,6.612,22.753,22.753,0,0,1-.7,5.474,10.373,10.373,0,0,1-3.435,5.059c-2.476,2.3-7.756,4.033-7.756,4.033s5.635-7.407,4.382-7.407C2.617,13.771,0,10.735,0,6.915A6.915,6.915,0,0,1,6.915,0Z" transform="translate(15.959)" fill="#16111a"/>
</svg>
</div></button>


          </div>
          
        </div>
       
       
       
       
        
      </div>
      <div className="bild
      ">
        {!isMobile && <img className="logo" src={logo} alt="Mobile" />}
      </div>
      
    </>
  );
}

export default App;
