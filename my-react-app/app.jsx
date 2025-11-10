/**
 * challenge: create a page that displays your favourite jokes
 * create a joke component on its own file
 * import and render 4-5 <joke /> components
 * each joke should receive a "setup" prop and "punchline" prop 
 * and render those you'd like
 * use your favourite 2-parts jokes (setup & punchline), or check
 * jokes.md file for some examples.
 * 
 * EXTRA CREDIT
 * some jokes are only a punchline with no set up
 * e.g "its hard to explain puns to kleptomaniacs because
 * they always takes things literally"
 * if you dont pass in a question prop ,how might you make only show the 
 * punchline.
 */


import Joke from "./Joke"
export default function App() {
    return(
        <main>
            <joke />
            <joke />
            <joke />
            <joke />
            <joke />
        </main>
    )
}