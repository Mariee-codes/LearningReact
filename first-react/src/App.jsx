import { useState } from 'react'
 import reactLogo from './assets/react.svg'
 import viteLogo from '/vite.svg'
 import './App.css'
 import Header from './components/header'
 import Entry from './components/Entry'

// function App() {
 
//   return (
//     <>
//     {/* header */}
//   <Header/>
//     {/* body */}

//     <div className="main--el">
//     <h2>i love my school</h2>
//     <p>
//     The default value of the position property in CSS is static. 
// This means that elements are positioned according to the normal flow of the document. When an element has position: static;, the top, right, bottom, left, and z-index properties have no effect on its placement. 
//     </p>
//     </div>
    

//     {/* footer */}
//   <footer className='footer--el'>
//     <p>copyright 2025</p>
//   </footer>
//     </>
//   )
// }

export default function App() {
  return (
    
    
    
    <Header>
      <img src ="../globe image.png"alt="globe icon" />
       <h1>my travel journal</h1>
   </Header> 
    
  )
}
