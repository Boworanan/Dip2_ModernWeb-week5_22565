//1.Assignment variable
const fname = "WAVE"

//2.Function
function Greeting() {
    return(
        <div>
            <h1>Hello ReactJS!</h1>
        </div>
    ) 
}
function Frontend() {
    return(
        <div>
            <h2>Client side rendering</h2>
            <ol >
                <li>ReactJS</li>
                <li>VueJS</li>
                <li>Angular</li>
            </ol>
        </div>
    )
}
function Backend() {
    return(
        <div>
            <h2>Server side rendering</h2>
            <ol>
                <li>ReactJS</li>
                <li>VueJS</li>
                <li>Angular</li>
            </ol>
        </div>
    )
}
function Time(){
    const cTime = new Date().toTimeString()
    return(
        <div>
            <p>Time is {cTime}</p>
        </div>
    )
}
function getCurrentTime(){
    return(
        toTime(){
            
        }
    )
}

function MyApp(){
    return(
    <div>
        <h1 className="text">Welcome to ReactJS!</h1>
        <hr />
        <h1 className="text2">Hello, World! {fname}</h1>    
        <hr />
        <Greeting />
        <hr />
        <Frontend />
        <Backend />
        <hr />
        <Time />
        <p>The curent time is <span className="text3">{getCurrentTime()}</span></p>
    </div>
    )
}

// const domContainer = document.querySelector('#root');
const domContainer = document.getElementById('root');
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MyApp />);