// import{ cresteRoot }  from "react-dom/client"       
   //import ReactDom from "react-dom/client"      
         
         // 1. create a root
         //const root = createRoot(document.getElementById("root"))
         // // 2. render some markup to the root
         //root.render(<h1>Hello, React!</h1>)
         
        // ReactDom.createRoot(document.querySelector("#root")).render(<p>hello react world</p>)

        // import {createRoot} from "react-dom/client"
        // createRoot(document.getElementById("root")).render(
        //     <ul>
        //         <Li>super popular js library</Li>
        //         <Li>will help me be even more employable</Li>
        //         <Li>React has a pretty cool logo</Li>
        //         <li>i love react</li>
        //     </ul>
        // )


//         import  { createElement } from "react";
//         import { createRoot } from "react-dom/client";

// const root = createRoot(document.getElementById("root"))
// const reactElement = createElement("h1", null, "hello from createElement!")

// console.log(reactElement)

// root.render(reactElement)
// <h1><span>children love react</span></h1>

/*
 CREATE A CUSTOM REACT COMPONENET
create your very first custom react component
call it "main content", and have it return a simple h1 element that says "react is great"
afterward, render it on the line below MyAwesomeNavbar
*/

// function MainContent() {
//     return <h1>React is great!</h1>
// }

// root.render (
// <div>
//     <MyAwesomeNavbar />
//     <MainContent />
// </div>
// )

/*
create a new h1 element (createElement)
give it some textContent
give it a class of "header"
append it as a child(using 'appendChild') of the div#root
dont use inner html
*/

// const h1 = document.createElement("h1")
// h1.textContent = "This is imperative coding"
// h1.className = "header"
// document.getElementById("root").appendChild(h1)

/*
set up a new react app from scratch.
hints: need to import the method to create a new root from the "react-dom/client package)
"
use that root to render some jsx .for now, just render a h1 element that says anythung you want.
*/
// import { createElement } from "react"
// import { createRoot } from "react-dom/client"
// const root = createRoot(document.getElementById("root"))
// //root.render(<h1>This is React</h1>)
// root.render(
//     <div>
//     <img src =  "react logo.png" />
//     <h1>This is another element</h1>
//     </div>
// )

// createElement("div", null, createElement(
    
// ))

/*
starting from scratch, build and render the html for our section projects.check the google slide for what youre trying to build */
// import { createRoot } from "react-dome/client"
// const root = createRoot(document.getElementById("root"))

 function Page() {
   return (
    <div>
        <header>
            <img src = "react-logo-png"width="40px"alt="React logo" />
        </header>
        <main>
            <h1>Reason i am excited to learn React</h1>
        <ol>
            <li>React is a popular library, so i will be able to fit in with all the coolest devs out there</li>
             <li>I am more likely to get a job as a frony end developer if i know react</li>
         </ol>
         </main>
         <footer>
            <small>"@2024  Marie development.  All rights reserved"</small>
         </footer>
         </div>
     )
 }
 root.render(
   // < temporaryName />
   <page></page>
)


// function TemporaryName() {
//     return (
//     <main>
//         <img src = "react logo.png" width="40px" alt="react logo" />
//         <h1>fun facts about React</h1>
//         <ul>
//             <li>was first released in 2013</li>
//             <li>was originally created by jordan walker</li>
//             <li>has well over 200k stars on github</li>
//             <li>its maintained by meta</li>
//         </ul>
//     </main>
//     )
//}