

const sample = (
    <div>
        <img src="./react-logo.png" width="40" />
        <h1>Fun facts about React</h1>
        <ul>
            <li>
                Was first released in 2013
            </li>
            <li>
                Was originally created by Jordan Walke
            </li>
            <li>
                Has well over 100k stars on Github
            </li>
            <li>
                Is maintained by Facebook
            </li>
            <li>
                Powers thousands of enterprise apps, including mobile apps
            </li>
        </ul>
    </div>
)


const root = document.getElementById("root");

ReactDOM.render(sample, root);