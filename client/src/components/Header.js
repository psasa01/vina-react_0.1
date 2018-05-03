import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Header extends Component {
    renderAdmin() {
        if(this.props.auth.level > 11) {
            return(
                <li> 
                    <a href="/admin">
                        <i 
                            className="fa fa-user fa-2x tooltip-icon" 
                            title="Admin panel" 
                            style={{ fontSize: 1.4 + 'em' }}>
                        </i>
                    </a>
                </li>
            )
        }
    }

    renderContent() {
        switch (this.props.auth) {
            case null:
                return (
                    <ul>
                        <li>
                            <div className="preloader-wrapper small active" style={{ margin: 0.8 + 'em' }}>
                                <div className="spinner-layer spinner-blue-only">
                                    <div className="circle-clipper left">
                                        <div className="circle"></div>
                                    </div><div className="gap-patch">
                                        <div className="circle"></div>
                                    </div><div className="circle-clipper right">
                                        <div className="circle"></div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                )
            case false:
                return (
                    <ul>
                        <li>
                            <a href="/dodaj-vino">
                                <i
                                    className="fa fa-plus-square fa-2x tooltip-icon"
                                    title="Dodaj vino"
                                    style={{ fontSize: 1.4 + 'em' }}>
                                </i>
                            </a>
                        </li>
                        <li>
                            <a href="/galerija">
                                <i
                                    className="fa fa-photo fa-2x tooltip-icon"
                                    title="Galerija"
                                    style={{ fontSize: 1.4 + 'em' }}>
                                </i>
                            </a>
                        </li>

                        <li>
                            <a
                                className="dropdown-trigger"
                                href="#!"
                                data-target="dropdown1"
                            >Pretraga po<i className="material-icons right">arrow_drop_down</i>
                            </a>
                        </li>
                        <li>
                            <a
                                className="green-text text-lighten-2"
                                href="/login">
                                <i
                                    class="fa fa-sign-in fa-2x tooltip-icon"
                                    title="Prijava"
                                    style={{ fontSize: 1.4 + 'em' }}
                                ></i>
                            </a>
                        </li>
                        <li>
                            <a href="/auth/facebook">
                                <i
                                    className="fa fa-facebook fa-2x tooltip-icon"
                                    title="FB prijava"
                                    style={{ color: '#6392f5', fontSize: 1.4 + 'em' }}
                                ></i>
                            </a>
                        </li>
                        <li>
                            <a href="/auth/google">
                                <i
                                    className="fa fa-google fa-2x tooltip-icon"
                                    title="Google prijava"
                                    style={{ color: '#db3236', fontSize: 1.4 + 'em' }}
                                ></i>
                            </a>
                        </li>
                        <li>
                            <a href="/register">
                                <i
                                    className="fa fa-user-plus fa-2x tooltip-icon"
                                    title="Registracija"
                                    style={{ fontSize: 1.4 + 'em' }}
                                ></i>
                            </a>
                        </li>
                    </ul>
                )
            default:
                return (
                    <ul>
                        <li>
                            <a href="/dodaj-vino">
                                <i
                                    className="fa fa-plus-square fa-2x tooltip-icon"
                                    title="Dodaj vino"
                                    style={{ fontSize: 1.4 + 'em' }}>
                                </i>
                            </a>
                        </li>
                        <li>
                            <a href="/galerija">
                                <i
                                    className="fa fa-photo fa-2x tooltip-icon"
                                    title="Galerija"
                                    style={{ fontSize: 1.4 + 'em' }}>
                                </i>
                            </a>
                        </li>

                        <li>
                            <a
                                className="dropdown-trigger"
                                href="#!"
                                data-target="dropdown1"
                            >Pretraga po<i className="material-icons right">arrow_drop_down</i>
                            </a>
                        </li>
                        <li>
                            <a href="/forum">
                                <i 
                                    className="fa fa-list fa-2x tooltip-icon" 
                                    title="Forum" 
                                    style={{ fontSize: 1.4 + 'em' }}
                                ></i>
                            </a>
                        </li>
                        {this.renderAdmin()}
                        
                        <li>
                            <a class="nav-slika" href="/racun">
                                <img 
                                    className="circle responsive-img user-image" 
                                    alt="Korisnik" 
                                    src={this.props.auth.slika || this.props.auth.gravatar} 
                                />
                            </a>
                        </li>
                        <li>{this.props.auth.name}</li>
                        <li>
                            <a 
                                className="red-text text-lighten-1" 
                                href="/api/logout">
                                    <i 
                                        class="fa fa-sign-out fa-2x tooltip-icon" 
                                        title="Odjava" 
                                        style={{ fontSize: 1.4 + 'em' }}
                                    ></i>
                            </a>
                        </li>
                    </ul>
                )
        }
    }



    render() {
        return (
            <nav>
                <div className="nav-wrapper brown">
                    <Link to="/" className="left brand-logo">
                        <img
                            className="moja-kolekcija-vina"
                            src="/images/logo.svg"
                            alt="mojaKolekcijaVina" />
                    </Link>
                    <a
                        className="sidenav-trigger"
                        href="#"
                        data-target="mobile-demo"
                    ><i className="material-icons">menu</i></a>

                    <ul className="right hide-on-med-and-down right-margin">
                        <li>
                            {this.renderContent()}
                        </li>


                    </ul>
                    <ul class="dropdown-content" id="dropdown1">
                        <li><a href="/zemlje">Zemljama</a></li>
                        <li className="divider"></li>
                        <li><a href="/vrste">Vrstama</a></li>
                        <li className="divider"></li>
                        <li><a href="/korisnici">Korisnicima</a></li>
                        <li className="divider"></li>
                        <li><a href="/godine">Godinama</a></li>
                        <li className="divider brown lighten-2"></li>
                        <li><a href="/zadnjeDodani">Najnovije dodana vina</a></li>
                    </ul>
                </div>

            </nav>


        )
    }
}

const mapStateToProps = ({ auth }) => {
    return { auth };
}

export default connect(mapStateToProps)(Header);
