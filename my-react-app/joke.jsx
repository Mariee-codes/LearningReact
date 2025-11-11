export default function Joke(props) {
    return (
        <>
        {props.setup && <p className="setup">Setup: {props.setup}</p>}
        <p className="punchline">punchline: {props.punchline}</p>
        <hr />
        </>
    )
}