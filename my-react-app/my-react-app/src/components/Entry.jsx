export default function Entry(props){
    console.log(props)
    return(
        <article className="journal-entry">
            <div className="main-image-container">
           <img 
          className= "main-image" 
          src ={props.entry.img.src} 
          alt={props.entry.img.alt} >

          </img>
           </div>
    
    <div className="container-two">
        <img  className="marker"src ="../marker png.png" alt="marker icon"></img>
         <span className="country">{props.entry.country}</span>
        <a href ={props.entry.googleMapsLink}>View on google maps</a>

         <h2 className="fuji-entry">{props.entry.title}</h2>

         <p className="p-entry">{props.entry.dates}
             </p>
        <p>{props.entry.text} </p>
                                      

     </div>

        </article>
    )
}