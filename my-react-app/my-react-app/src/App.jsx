import { useState } from 'react';
import Header from "./components/header"
import Entry from "./components/Entry"
import data from "./data"


 export default function App() {
  const entryElements = data.map((entry) => {
    return (
      <Entry
      img={{
        src: entry.img.src,
        alt: entry.img.alt
      }}

      />
    )
  }
  )
  
  return (
    <>
      <Header />
      <main className='container'>
      <Entry  
           img={{
            src:"mt fuji.jpeg" ,
            alt:" Mt Fuji"
           }}
           title= "Mount Fuji"
           country="JAPAN"
           googleMapsLink="https://www.google.com/search?q=mt+fuji+in+jaapn+google+maps+link&oq=mt+fuji+in+jaapn+google+maps+link&gs_lcrp=
                           EgZjaHJvbWUyBggAEEUYOTIJCAEQIRgKGKABMgcIAhAhGI8CMgcIAxA
                            hGI8C0gEJMTk3MThqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8"
           dates= " 12 Jan, 2021- 24 Jan, "
           text="Mount Fuji is the tallest mountain in Japan, standing at 3,776 metres (12,380
                  feet). 
                  Mount Fuji is the single most popular tourist site in Japan, for both  
                  Japanese and foreign tourists. "              
      />
      </main>
    </>
    
  );
 }