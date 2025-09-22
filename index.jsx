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


        import { createElement } from "react"
        import { createElement } from "react-dom/client"

        const root = createRoot(document.getElementById("root"))
        root.render(
            createElement("h1", null, "Hello from createElement")
        )