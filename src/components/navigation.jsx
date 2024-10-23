import "../Assets/CSS/nav.css"

function Navbar_2() {
    return(
        <div>
           <div class="navbar">
                <Link to ="/">Home</Link>
                <Link to ="/about">About</Link>
                <Link to ="/News">News</Link>
                <Link to ="/services">Services</Link>
                <Link to ="/products">products</Link>
                <Link to ="/MyCounter">counter</Link>
                <div class="dropdown">
                <button class="dropbtn">Dropdown 
                <i class="fa fa-caret-down"></i>
                </button>
                <div class="dropdown-content">
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
                
    </div>
  </div> 
</div>


        </div>
    )
}
export default Navbar_2