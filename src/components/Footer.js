import './Footer.css'

function Footer()
{
    return(
        <div>
           <footer class="footer-distributed">

<div class="footer-left">

    <h3>TODO LIST</h3>

    <p class="footer-links">
        <a href="#" class="link-1">Home</a>
        
<a href="#">About</a>

        <a href="#">Sign Up</a>
        
        <a href="#">Faq</a>
        
        <a href="#">Contact</a>
    </p>

</div>

<div class="footer-center">

    <div>
        <i class="fa fa-map-marker"></i>
        <p><span>Hyderabad</span></p>
    </div>

    <div>
        <i class="fa fa-phone"></i>
        <p>+91 123456789</p>
    </div>

    <div>
        <i class="fa fa-envelope"></i>
        <p><a href="mailto:support@company.com">support@todolist.com</a></p>
    </div>

</div>

<div class="footer-right">

    <p class="footer-company-about">
        <span>About the company</span>
        Our website helps you list your to-do's 
Stop Procrastinating
Use TODO LIST 
    </p>

    <div class="footer-icons">

        <a href="#"><i class="fa fa-facebook"></i></a>
        <a href="#"><i class="fa fa-twitter"></i></a>
        <a href="#"><i class="fa fa-linkedin"></i></a>
        <a href="#"><i class="fa fa-github"></i></a>

    </div>

</div>

</footer>
        </div>
    )
}
export default Footer