export default function Joke(props) {
    return (
        <>
        <p>{props.setup}setup: {props.setup}</p>
        <p>{props.punchline}punchline: {props.punchline}</p>
        <hr />
        </>
    )
}