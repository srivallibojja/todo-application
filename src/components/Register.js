import './Register.css'
function Register()
{
    return(
     <form>
         <fieldset>
            <legend class="sup">Signup form</legend>
            <div class="col-3 col-s-12">
                <label for="um">Username</label>
                <input type="text" name="username" id="un" placeholder="Enter your username here..." ></input>
            </div>
            <div class="col-3 col-s-12">
                <label for="pw">Password</label>
                <input type="password" name="password" id="pw" placeholder="Create a strong password"></input>
            </div>
            <div>
                <label for="cpw">Confirm Password</label>
                <input type="password" name="confirm password" id="cpw"></input>
            </div>
            <div>
                <label for="email">Email</label>
                <input type="email" name="email" id="email" placeholder="Enter your email here..."></input>
            </div>
            <div>
                <label for="name">Name</label>
                <input type="text" name="name" id="name" placeholder="First" autocomplete="off"></input>
                <input type="text" name="name" id="name" placeholder="Last" autocomplete="off"></input>
            </div>
            <div>
                <label for="phno">Phone Number</label>
                <input type="number" name="phno" id="phno"></input>
            </div>
            <div>
                <label for="dob">Date of Birth</label>
                <input type="date" name="dob" id="dob"></input>
            </div>
            <div>
                <label for="gender">Gender</label>
                <div>
                    <input type="radio" name="gender" id="male"></input>
                    <label for="male">Male</label>
            
                </div>
                <div>
                    <input type="radio" name="gender" id="female"></input>
                    <label for="female">Female</label>
                </div>
                <div>
                    <input type="radio" name="gender" id="other"></input>
                    <label for="other">Other</label>
                </div>
            </div>
            <div>
                <label for="address">Address</label>
                <textarea name="address" id="address" rows="8"></textarea>
            </div>
            <div>
                <label for="city">City</label>
                <select name="city" id="city">
                    <option value="hyd">Hyderabad</option>
                    <option value="chennai">Chennai</option>
                    <option value="bengaluru">Bengaluru</option>
                    <option value="mumbai">Mumbai</option>
                </select>
            </div>
            <div>
                <label for="photo">Upload your photo</label>
                <input type="file" name="photo" id="photo"></input>
            </div>
            <div>
                <button type="submit" class="first">Register</button>
                <button type="submit" class="sec">Cancel</button>
            </div>
        </fieldset>    
     </form>
     
    )    
}
export default Register