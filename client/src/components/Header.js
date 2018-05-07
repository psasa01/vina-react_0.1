import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Dropdown, NavItem, SideNav, SideNavItem } from 'react-materialize';
import { Tooltip } from 'react-tippy';

class Header extends Component {


    renderAdmin() {
        if (this.props.auth.level > 11) {
            return (
                <li>
                    <Tooltip
                        title="Admin panel"
                        position="bottom"
                        arrow="true"
                        distance="2"
                    >
                        <a href="/admin">
                            <i
                                className="fa fa-user fa-2x tooltip-icon"
                                title="Admin panel"
                                style={{ fontSize: 1.4 + 'em' }}>
                            </i>
                        </a>
                    </Tooltip>
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
                            <Tooltip
                                title="Dodaj vino"
                                position="bottom"
                                arrow="true"
                                distance="2"
                            >
                                <Link to="/dodaj-vino">
                                    <i
                                        className="fa fa-plus-square fa-2x tooltip-icon"
                                        style={{ fontSize: 1.4 + 'em' }}>
                                    </i>
                                </Link>
                            </Tooltip>
                        </li>
                        <li>
                            <Tooltip
                                title="Galerija"
                                position="bottom"
                                arrow="true"
                                distance="2"
                            >
                                <a href="/galerija">
                                    <i
                                        className="fa fa-photo fa-2x tooltip-icon"
                                        title="Galerija"
                                        style={{ fontSize: 1.4 + 'em' }}>
                                    </i>
                                </a>
                            </Tooltip>
                        </li>

                        <li>
                            <Dropdown
                                trigger={<a>Pretraga po<i className="material-icons right">arrow_drop_down</i></a>}
                                options={{
                                    hover: true,
                                    belowOrigin: true
                                }}
                            >


                                <NavItem><Link className="no-hover" to="/vrste">Vrstama</Link></NavItem>
                                <NavItem divider />
                                <NavItem><Link className="no-hover" to="/zemlje">Zemljama</Link></NavItem>
                                <NavItem divider />
                                <NavItem><Link className="no-hover" to="/korisnici">Korisnicima</Link></NavItem>
                                <NavItem divider />
                                <NavItem><Link className="no-hover" to="/godine/">Godinama</Link></NavItem>
                                <NavItem className="brown lighten-2" divider />
                                <NavItem style={{ borderTop: "solid #a1887f 1px" }}><Link className="no-hover" to="/vina/zadnjeDodanaVina">Najnovije dodana vina</Link></NavItem>

                            </Dropdown>
                        </li>
                        <li>
                            <Tooltip
                                title="Prijava"
                                position="bottom"
                                arrow="true"
                                distance="2"
                            >
                                <Link
                                    className="green-text text-lighten-2"
                                    to="/login">
                                    <i
                                        class="fa fa-sign-in fa-2x tooltip-icon"
                                        title="Prijava"
                                        style={{ fontSize: 1.4 + 'em' }}
                                    ></i>
                                </Link>
                            </Tooltip>
                        </li>
                        <li>
                            <Tooltip
                                title="Facebook prijava"
                                position="bottom"
                                arrow="true"
                                distance="2"
                            >
                                <a href="/auth/facebook">
                                    <i
                                        className="fa fa-facebook fa-2x tooltip-icon"
                                        title="FB prijava"
                                        style={{ color: '#6392f5', fontSize: 1.4 + 'em' }}
                                    ></i>
                                </a>
                            </Tooltip>
                        </li>
                        <li>
                            <Tooltip
                                title="Google prijava"
                                position="bottom"
                                arrow="true"
                                distance="2"
                            >
                                <a href="/auth/google">
                                    <i
                                        className="fa fa-google fa-2x tooltip-icon"
                                        title="Google prijava"
                                        style={{ color: '#db3236', fontSize: 1.4 + 'em' }}
                                    ></i>
                                </a>
                            </Tooltip>
                        </li>
                        <li>
                            <Tooltip
                                title="Registracija"
                                position="bottom"
                                arrow="true"
                                distance="2"
                            >
                                <Link to="/register">
                                    <i
                                        className="fa fa-user-plus fa-2x tooltip-icon"
                                        title="Registracija"
                                        style={{ fontSize: 1.4 + 'em' }}
                                    ></i>
                                </Link>
                            </Tooltip>
                        </li>
                    </ul>
                )
            default:
                return (
                    <ul>
                        <li>
                            <Tooltip
                                title="Dodaj vino"
                                position="bottom"
                                arrow="true"
                                distance="2"
                            >
                                <a href="/dodaj-vino">
                                    <i
                                        className="fa fa-plus-square fa-2x tooltip-icon"
                                        title="Dodaj vino"
                                        style={{ fontSize: 1.4 + 'em' }}>
                                    </i>
                                </a>
                            </Tooltip>
                        </li>
                        <li>
                            <Tooltip
                                title="Galerija"
                                position="bottom"
                                arrow="true"
                                distance="2"
                            >
                                <a href="/galerija">
                                    <i
                                        className="fa fa-photo fa-2x tooltip-icon"
                                        title="Galerija"
                                        style={{ fontSize: 1.4 + 'em' }}>
                                    </i>
                                </a>
                            </Tooltip>
                        </li>

                        <li>

                            <Dropdown
                                trigger={<a>Pretraga po<i className="material-icons right">arrow_drop_down</i></a>}
                                options={{
                                    hover: true,
                                    belowOrigin: true
                                }}
                            >


                                <NavItem><Link className="no-hover" to="/vrste">Vrstama</Link></NavItem>
                                <NavItem divider />
                                <NavItem><Link className="no-hover" to="/zemlje">Zemljama</Link></NavItem>
                                <NavItem divider />
                                <NavItem><Link className="no-hover" to="/korisnici">Korisnicima</Link></NavItem>
                                <NavItem divider />
                                <NavItem><Link className="no-hover" to="/godine/">Godinama</Link></NavItem>
                                <NavItem className="brown lighten-2" divider />
                                <NavItem style={{ borderTop: "solid #a1887f 1px" }}><Link className="no-hover" to="/vina/zadnjeDodanaVina">Najnovije dodana vina</Link></NavItem>

                            </Dropdown>


                        </li>
                        <li>
                            <Tooltip
                                title="Forum"
                                position="bottom"
                                arrow="true"
                                distance="2"
                            >
                                <a href="/forum">
                                    <i
                                        className="fa fa-list fa-2x tooltip-icon"
                                        title="Forum"
                                        style={{ fontSize: 1.4 + 'em' }}
                                    ></i>
                                </a>
                            </Tooltip>
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
                        <li>{this.props.auth.ime}</li>
                        <li>
                            <Tooltip
                                title="Odjava"
                                position="bottom"
                                arrow="true"
                                distance="2"
                            >
                                <a
                                    className="red-text text-lighten-1"
                                    href="/api/logout">
                                    <i
                                        class="fa fa-sign-out fa-2x tooltip-icon"
                                        title="Odjava"
                                        style={{ fontSize: 1.4 + 'em' }}
                                    ></i>
                                </a>
                            </Tooltip>
                        </li>
                    </ul >


                )
        }
    }
    renderUser() {
        if (this.props.auth) {
            return (
                <div>

                    <div
                        style={{ lineHeight: 0 + 'em' }}
                    >
                        <p
                            className="right brown-text"
                            style={{ marginRight: 1 + 'em', marginTop: 4.8 + 'em' }}
                        >
                            {this.props.auth.ime}
                        </p>
                        <img
                            className="circle responsive-img"
                            style={{ height: 5 + 'em', marginTop: .5 + 'em', marginLeft: 1 + 'em' }}
                            src={this.props.auth.slika}
                            alt="" />
                    </div>
                    <SideNavItem divider />
                </div>


            )
        }
    }

    renderSidenav() {
        return (
            <div>
                <SideNavItem
                    className="mobile-home no-hover"
                >

                    <img

                        className="moja-kolekcija-vina no-hover"
                        style={{ height: 3 + 'em', bottom: 0.3 + 'em', left: 3 + 'em' }}
                        src="/images/logo-mobile.svg"
                        alt="mojaKolekcijaVina"
                    />

                </SideNavItem>
                <SideNavItem divider />
                {this.renderUser()}


                <SideNavItem>
                    <Link
                        className="no-hover brown-text"
                        style={{ left: -2 + 'em' }}
                        to="/"
                    >
                        <b>Dodaj Vino</b>
                    </Link>
                </SideNavItem>
                <SideNavItem>
                    <Link
                        className="no-hover brown-text"
                        to="/"
                    >
                        <b>Galerija</b>
                    </Link>
                </SideNavItem>
                <SideNavItem>
                    <Link
                        className="no-hover brown-text"
                        to="/zemlje"
                    >
                        <b>Pretraga po zemljama</b>
                    </Link>
                </SideNavItem>
                <SideNavItem>
                    <Link
                        className="no-hover brown-text"
                        to="/vrste"
                    >
                        <b>Pretraga po vrstama</b>
                    </Link>
                </SideNavItem>
                <SideNavItem>
                    <Link
                        className="no-hover brown-text"
                        to="/korisnici"
                    >
                        <b>Pretraga po korisnicima</b>
                    </Link>
                </SideNavItem>
                <SideNavItem>
                    <Link
                        className="no-hover brown-text"
                        to="/godine/"
                    >
                        <b>Pretraga po godinama</b>
                    </Link>
                </SideNavItem>
                <SideNavItem>
                    <Link
                        className="no-hover brown-text"
                        to="/vina/zadnjeDodanaVina"
                    >
                        <b>Najnovije dodana vina</b>
                    </Link>
                </SideNavItem>
                {this.renderInOut()}
            </div>
        )
    }


    renderInOut() {

        if (this.props.auth) {
            return (
                <SideNavItem>
                    <a
                        className="no-hover brown-text"
                        href="/api/logout"
                    >
                        <b>Odjava</b>
                    </a>
                </SideNavItem>
            )

        } else {
            return (
                <div>
                    <SideNavItem>
                        <Link
                            className="no-hover brown-text"
                            to="/login"
                        >
                            <b>Prijava</b>
                        </Link>
                    </SideNavItem>
                    <SideNavItem>
                        <Link
                            className="no-hover brown-text"
                            to="/register"
                        >
                            <b>Registracija</b>
                        </Link>
                    </SideNavItem>
                </div>
            )
        }


    }

    render() {
        return (
            <div>
                <nav>
                    <div className="nav-wrapper brown">
                        <Link to="/mojaKolekcijaVina" className="left brand-logo">
                            <img
                                className="moja-kolekcija-vina"
                                src="/images/logo.svg"
                                alt="mojaKolekcijaVina" />
                        </Link>
                        <ul className="right hide-on-med-and-down right-margin">
                            <li>
                                {this.renderContent()}
                            </li>
                        </ul>
                        <SideNav
                            trigger={
                                <a
                                    className="sidenav-trigger"
                                ><i className="material-icons">menu</i></a>
                            }
                            options={{ closeOnClick: true }}
                        >
                            {this.renderSidenav()}
                        </SideNav>
                    </div>
                </nav>
            </div>
        )
    }
}

const mapStateToProps = ({ auth }) => {
    return { auth };
}

export default connect(mapStateToProps)(Header);
