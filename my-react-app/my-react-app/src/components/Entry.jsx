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
         <span className="country">{props.country}</span>
        <a href ={props.googleMapsLink}>View on google maps</a>

         <h2 className="fuji-entry">{props.title}</h2>

         <p className="p-entry">{props.dates}
             </p>
        <p>{props.text} </p>
                                      

     </div>

        </article>
    )
}