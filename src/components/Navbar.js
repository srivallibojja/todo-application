import './Navbar.css'

function Navbar()
{
   return (
       <div>
           <div class="container mt-5">
           <div class="card ">
           <div class="shadow-lg p-3 mb-5 bg-white rounded">
             <div class="card-header p-0">
                <nav class="navbar navbar-expand-sm bg-light inavbar-light">
                    

                    <button class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#menu">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="menu">
                        <ul class="navbar-nav mx-auto">
                            <li class="nav-item ">
                                <a href="#" class="nav-link ps-5 pe-5 me-5 text-dark"><strong>HOME</strong></a>
                            </li>
                          
                            <li class="nav-item">
                                <a href="#" class="nav-link ps-5 pe-5 me-5 text-dark"><strong> Sign Up</strong></a>
                            </li>
                            <li class="nav-item">
                               <a href="" class="nav-link ps-5 pe-5 me-5 text-dark"><strong> Login</strong></a>
                            </li>
                            <li class="nav-item">
                                <a href="#" class="nav-link ps-5 pe-5 text-dark"><strong>SUPPORT US</strong></a>
                            </li>
                        </ul>
                    </div>
                </nav>
             </div>
            </div>
            </div>
            </div>
      </div>      
  

   )
}
export default Navbar