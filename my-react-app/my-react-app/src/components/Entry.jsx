export default function Entry(props){
    console.log(props)
    return(
        <article className="journal-entry">
            <div className="main-image-container">
           <img 
          className= "main-image" 
          src ={props.img.src} 
          alt={props.img.alt} >

          </img>
           </div>
    
    <div className="container-two">
        <img  className="marker"src ="../marker png.png" alt="marker icon"></img>
         <span>JAPAN</span>
        <a href ="https://www.google.com/search?q=mt+fuji+in+jaapn+google+maps+link&oq=mt+fuji+in+jaapn+google+maps+link&gs_lcrp=
         EgZjaHJvbWUyBggAEEUYOTIJCAEQIRgKGKABMgcIAhAhGI8CMgcIAxA
         hGI8C0gEJMTk3MThqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8">View on google maps</a>

         <h2 className="fuji-entry">Mount Fuji</h2>

         <p className="p-entry">12 Jan, 2021- 24 Jan,
             <br></br>2021</p>
        <p>Mount Fuji is the tallest mountain in Japan, standing at 3,776 metres (12,380<br></br>
         feet). <br></br>Mount Fuji is the single most popular tourist site in Japan, for both  
        Japanese and foreign tourists. </p>
                                      

     </div>

        </article>
    )
}