import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Login = () => {
	const { store, actions } = useContext(Context);


    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const loginFunction = (e) => {
        e.preventDefault();
        actions.login(email, password);
    }

	return (
		<div className="text-center mt-5 px-5">
            <h1>Log in</h1>
			    <form className="row g-3 text-start" method="POST" action="/register" enctype="multipart/form-data" onSubmit={loginFunction}>

                    <div className="col-12">
                        <label for="email" className="form-label">Email</label>
                        <input type="email" onChange={(e) => setEmail(e.target.value)} className="form-control" id="email" required />
                    </div>

                    <div className="col-md-12">
                        <label for="password" className="form-label">Password</label>
                        <input type="password" onChange={(e) => setPassword(e.target.value)} className="form-control" id="password" required />
                    </div>

                    <div className="col-12 text-center">
                        <button type="submit" className="btn btn-primary">Log in</button>
                    </div>
            </form>
		</div>
	);
};

export default Login;