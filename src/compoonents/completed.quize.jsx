function Completed({ score }) {
    return(
        <div className="cantainer-div">
            <h2>Quiz Completed!</h2>
            <p>Your score : {score}/90</p>
            <button onClick={() => window.location.reload()}>Try again</button>
        </div>
    )
}
export default Completed



