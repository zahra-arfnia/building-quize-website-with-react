function Welcome({ onStart }) {
    return (
        <div className="welcome-div">
            <h1>The React Quiz</h1>
            <h2>Welcome to the React Quiz!</h2>
            <p>15 questions to test your React mastery.</p>
            <button onClick={onStart}>Let's get started</button>
        </div>
    );
}

export default Welcome;
