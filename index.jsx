// import{ cresteRoot }  from "react-dom/client"       
   import ReactDom from "react-dom/client"      
         
         // 1. create a root
         //const root = createRoot(document.getElementById("root"))
         // // 2. render some markup to the root
         //root.render(<h1>Hello, React!</h1>)
         
         ReactDom.createRoot(document.querySelector("#root")).render(<p>hello react world</p>)