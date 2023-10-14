import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

export const Private = () => {
	const { store, actions } = useContext(Context);

	return (

		<div className="container text-center">
			{store.token ? <h1 className="mt-5 text-success">YOU ARE LOGGED IN</h1> : <h1 className="mt-5 text-danger">YOU ARE NOT LOGGED IN</h1>} 
		</div>
	);
};
export default Private;