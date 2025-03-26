function Navbar(){
    return <>
    <div className="navbar-container">
        <div className="logo">
            <h1>BUILD AID</h1>
        </div>
        
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>
                    <div className="dropdown">
                        <button className="dropbtn">Services
                            <i className="fa fa-caret-down"></i>
                        </button>
                        <div className="dropdown-content">
                            <a href="service.html">Services</a>
                            <a href="engineer.html">Engineers</a>
                            <a href="#">DTCP Approvers</a>
                            <a href="#">Architects</a>
                        </div>
                    </div>
                </li>
                
                <li>Projects</li>
            </ul>
        
        <div className="login">
            <button>Log in</button>
            <button>Sign in</button>
        </div>
     </div>
    </>
}

export default Navbar