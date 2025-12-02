import { useState } from 'react';
import Header from "./components/header.jsx"
import Entry from "./components/Entry.jsx"
import data from "./data.jsx"


 export default function App() {
  console.log("App is rendering") ;
  console.log("Data:", data);



  const entryElements = data.map((entry) => {
    console.log("Mapping entry:", entry);

    return (
      <Entry
      img={entry.img}
      title={entry.title}
      country= {entry.country}
      googleMapsLink= {entry.googleMapsLink}
      dates ={ entry.dates}
      text= {entry.text}

       />
    )
  })
  
  return (
    <>
      <Header />
      <main className='container'>
      {entryElements}
      </main>
    </>
    
  );
 }