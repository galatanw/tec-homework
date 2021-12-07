function SingleNumber(props) {
    
    return <button id={props.id} onClick={props.onClick} disabled={props.dis}>{props.item}</button>

}
function Messages(props) {
    return <>
        <h1>{props.won}</h1>
        <h1>{props.fineAlert}</h1>
    </>
}
function Scores(props) {
    return <>
        <button onClick={props.scoreDisplay}>{props.displayScore.display==="block"?"hide":"scores Board"}</button>
        <ol style={props.displayScore} className={props.class}>
            {props.localStorageData.map((item) => item)}
        </ol>
    </>
}


export {
    SingleNumber,
    Messages,
    Scores
}