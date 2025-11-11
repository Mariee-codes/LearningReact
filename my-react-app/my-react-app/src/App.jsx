import { useState } from 'react';
import Header from "./components/header"
import Entry from "./components/Entry"


 export default function App() {
  
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
           text="Mount Fuji is the tallest mountain in Japan, standing at 3,776 metres (12,380<br></br>
                  feet). <br></br>Mount Fuji is the single most popular tourist site in Japan, for both  
                  Japanese and foreign tourists. "              
      />
      </main>
    </>
    
  );
 }