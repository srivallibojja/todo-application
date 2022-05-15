import './Login.css'
function Login()
{
    return(
        <div class="container">
            <div class="row">
                <div >
                <form >
                   <div>
                      <h1 class='log'>Login</h1>
                   </div>
            <div>
                <label for="um">Username</label>
                <input type="text" name="username" id="un" placeholder="Enter your username here..." ></input>
            </div>
            <div>
                <label for="pw">Password</label>
                <input type="password" name="password" id="pw" placeholder="Enter your password"></input>
            </div>
            <div>
                <button type="submit">Login</button>
            </div>
        </form>
                </div>

            </div>
        </div>
        
    )
}
export default Login;