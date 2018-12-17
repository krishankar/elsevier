import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a href="/" id="gh-branding" class="u-flex-center-ver">
                        <img src="https://cdn.elsevier.io/matrix/includes/img/logo-tree.svg" class="gh-logo" />
                        <img src="https://cdn.elsevier.io/matrix/includes/img/logo-text.svg" class="gh-wordmark gh-elsevier-wordmark" />
                    </a>
                    
                    <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{position:"absolute", left:"800px", paddingTop:"20px"}}>
                        <ul className="navbar-nav mr-auto" >                            
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" 
                                    id="navbarDropdown" 
                                    role="button" 
                                    data-toggle="dropdown" 
                                    aria-haspopup="true" 
                                    aria-expanded="false"
                                    style={{paddingRight:"20px"}}
                                >
                                    About
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a className="dropdown-item" href="#">About Elsevier</a>
                                    <a className="dropdown-item" href="#">Elsevier content</a>
                                    <a className="dropdown-item" href="#">Careers</a>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" 
                                    id="navbarDropdown" 
                                    role="button" 
                                    data-toggle="dropdown" 
                                    aria-haspopup="true" 
                                    aria-expanded="false"
                                    style={{paddingRight:"20px"}}
                                >
                                    Solutions
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a className="dropdown-item" href="#">R&D Solutions</a>
                                    <a className="dropdown-item" href="#">Clinical Decision support</a>
                                    <a className="dropdown-item" href="#">Healthcare Education</a>
                                    <a className="dropdown-item" href="#">Research Intelligence</a>
                                    <a className="dropdown-item" href="#">Research Platforms</a>
                                    <a className="dropdown-item" href="#">All solutions</a>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" 
                                    id="navbarDropdown" 
                                    role="button" 
                                    data-toggle="dropdown" 
                                    aria-haspopup="true" 
                                    aria-expanded="false"
                                    style={{paddingRight:"20px"}}
                                >
                                    Services                                
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a className="dropdown-item" href="#">Authors</a>
                                    <a className="dropdown-item" href="#">Editors</a>
                                    <a className="dropdown-item" href="#">Librarians</a>
                                    <a className="dropdown-item" href="#">Reviewers</a>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" 
                                    id="navbarDropdown" 
                                    role="button" 
                                    data-toggle="dropdown" 
                                    aria-haspopup="true" 
                                    aria-expanded="false"
                                    style={{paddingRight:"20px"}}
                                >
                                    Shop
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a className="dropdown-item" href="#">Books & Journals</a>
                                    <a className="dropdown-item" href="#">Author Webshop</a>                                    
                                </div>
                            </li>
                            <li className="nav-item" style={{paddingTop:"10px", paddingRight:"20px"}}>
                                <img src="./img/active-search.svg" alt="search" height="30px" width="30px"/>
                            </li>
                            <li className="nav-item" style={{paddingTop:"10px", paddingRight:"20px"}}>
                                <img src="./img/shopping-cart-210-714507.png" alt="search" height="30px" width="30px"/>
                            </li>
                            <li className="nav-item" style={{paddingTop:"10px"}}>
                                <img src="./img/clipart-man-icon.png" alt="search" height="30px" width="30px"/>
                            </li>                           
                            
                        </ul>                        
                    </div>
                </nav>

            </div>
        )
    }
}

export default Header