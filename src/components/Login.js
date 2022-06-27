import './Login.css';
import {useForm} from 'react-hook-form';
function Login()
{
    const {register,handleSubmit,formState: {errors}} = useForm();
    //form submission
    const onFormSubmit = (userCredentialsObject) =>
    {
        console.log(userCredentialsObject)
    }
    return(
        <div className='row '>
            <div className="col-11 col-sm-8 col-md-6 mx-auto">
                <form className="bg-success m-5 p-5 text-white" onSubmit={handleSubmit(onFormSubmit)}>
                <h1 className='text-white text-center' >Login</h1>
                    {/* username */}
                <div className="mb-3">
                    <label htmlFor='un'>Username</label>
                    <input type="text" id="un" className="form-control" {...register("username",{required:true})}/>
                    {errors.username?.type=='required' && <p className="text-danger">* This field is mandatory</p>}
                </div>
                {/* password */}
                <div className="mb-3">
                    <label htmlFor='pw1'>Password</label>
                    <input type="password" id="pw1" className="form-control" {...register("password",{required:true})}/>
                    {errors.password?.type=='required' && <p className="text-danger">* This field is mandatory</p>}
                </div>
                {/* submit button */}
                <div className="text-center">
                        <button type="submit" className="btn btn-info m-5 text-white">Login</button>
                </div>
                </form>

            </div>

        </div>
        
    )
}
export default Login;