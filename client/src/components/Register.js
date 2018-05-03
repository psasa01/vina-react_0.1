import React, { Component } from 'react'

class Register extends Component {
    render() {
        return (


            <div className="row"><br /><br />
                <div className="z-depth-3 brown lighten-5 col s12 login-forma">
                    <form id="registerForm" action="/auth/register" method="POST">
                        <h4 className="login-h4 brown-text center-align col s10 offset-s1">Molimo unesite podatke za registraciju
                    <hr />
                            <div className="input-field col s10 offset-s1"><input className="validate" id="ime" type="text" name="name" /><label for="name">Korisničko ime                          </label></div>
                            <div className="input-field col s10 offset-s1"><input className="validate" id="email" type="email" name="email" /><label for="email">Email</label></div>
                            <div className="input-field col s10 offset-s1"><input className="validate" id="password" type="password" name="password" /><label for="password">Šifra</label></div>
                            <div className="input-field col s10 offset-s1"><input className="validate" id="password-potvrda" type="password" name="password-potvrda" /><label for="passwordPotvrda">Potvrdi šifru                            </label></div>
                            <div className="col s10 offset-s1"><br />
                                <div className="row"><a className="btn-floating btn-large left tooltip-icon" id="btn-reg" title="Facebook prijava" href="/auth/facebook" style={{ borderRadius: 0, backgroundColor: '#3b5998' }}><i className="fa fa-facebook"></i></a><a className="btn-floating btn-large left tooltip-icon"
                                    id="btn-reg" title="Google prijava" href="/auth/google" style={{ borderRadius: 0, backgroundColor: '#db3236' }}><i className="fa fa-google">                              </i></a><button className="green btn-floating btn-large right tooltip-icon"
                                        id="btn-reg" title="Registracija" type="submit" style={{ borderRadius: 0 }}><i className="fa fa-user-plus"></i></button></div>
                            </div>
                        </h4>
                    </form>
                </div>
            </div>


            // <div>
            //     <h3>Please enter registration details</h3>
            //     <form action="/auth/register" method="POST">
            //         <label htmlFor="name">Enter name</label>
            //         <input className="validate" type="text" name="name" />
            //         <label htmlFor="email">Enter Email</label>
            //         <input className="validate" type="email" name="email" />
            //         <label htmlFor="password">Enter Password</label>
            //         <input className="validate" type="password" name="password" />
            //         <label htmlFor="password-potvrda">Confirm Password</label>
            //         <input className="validate" type="password" name="password-potvrda" />
            //         <button className="btn indigo waves-effect waves-light darken-4" type="submit">Submit</button>
            //     </form>
            // </div>

        )
    }
}

export default Register;

