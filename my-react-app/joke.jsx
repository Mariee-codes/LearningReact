export default function Joke(props) {
    return (
        <>
        <p style= {{display: props.setup? "block" : "none"}} className = "setup">Setup:
            {props.setup}
        </p>
        <p className="punchline">punchline: {props.punchline}</p>
        <hr />
        </>
    )
}