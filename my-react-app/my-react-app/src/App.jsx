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
            key={entry.id}
            entry={entry}

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