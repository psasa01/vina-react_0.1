import React, { Component } from 'react'

class Login extends Component {
    render() {
        return (


            <div class="row"><br /><br />
                <div class="z-depth-3 brown lighten-5 col s12 login-forma">
                    <form id="loginForm" action="auth/login" method="POST">
                        <h4 className="login-h4 brown-text center-align col s10 offset-s1">Molimo unesite podatke za prijavu
                    <hr />
                            <div className="input-field col s10 offset-s1"><input className="validate" id="email" type="email" name="email" /><label for="email">Email</label></div>
                            <div className="input-field col s10 offset-s1"><input className="validate" id="password" type="password" name="password" /><label for="password">Šifra</label></div>
                            <div className="col s10 offset-s1"><br />
                                <div className="row"><a className="btn-floating btn-large left tooltip-icon" id="btn-reg" title="Facebook prijava" href="/auth/facebook" style={{ borderRadius: 0, backgroundColor: "#3b5998" }}><i class="fa fa-facebook"></i></a><a class="btn-floating btn-large left tooltip-icon"
                                    id="btn-reg" title="Google prijava" href="/auth/google" style={{ borderRadius: 0, backgroundColor: "#db3236" }}><i class="fa fa-google">                              </i></a><button class="green btn-floating btn-large right tooltip-icon"
                                        id="btn-reg" title="Prijava" type="submit" style={{ borderRadius: 0 }}><i className="fa fa-sign-in"></i></button></div>
                            </div>
                            <div className="col s10 offset-s1"><label style={{ float: 'right' }}><br /><a class="pink-text" href="/reset"><b>Zaboravili ste šifru?</b><span className="brown-text" style={{ fontSize: 2 + 'em' }}>&nbsp;&nbsp; | &nbsp;&nbsp;</span></a><a className="blue-text" href="/register"><b>Registrujte se</b></a></label></div>
                        </h4>
                    </form>
                </div>
            </div>


            // <div>
            //     <h3>Please enter username and password</h3>
            //     <form action="/auth/login" method="POST">
            //         <label htmlFor="email">Email:</label>
            //         <input type="email" name="email" />
            //         <label htmlFor="password">Password:</label>
            //         <input type="password" name="password" />
            //         <button className="btn indigo waves-effect waves-light darken-4" type="submit">Submit</button>
            //     </form>
            // </div>


        )
    }
}

export default Login;

