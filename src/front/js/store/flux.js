import { redirect } from "react-router-dom";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],

			token: null
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			getMessage: async () => {
				try{
					// fetching data from the backend
					const resp = await fetch(process.env.BACKEND_URL + "/api/hello")
					const data = await resp.json()
					setStore({ message: data.message })
					// don't forget to return something, that is how the async resolves
					return data;
				}catch(error){
					console.log("Error loading message from backend", error)
				}
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},

			verifyIfUserLoggedIn: () => {
				const token = localStorage.getItem('token');
				if (token) setStore({ token: token });
			},

			signup: (email, password) => {
				var options = {
					method: 'POST',
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({ email: email, password: password })
				};

				fetch(process.env.BACKEND_URL + 'api/signup', options)
				.then(response => {
					if(response.ok) return response.json()
					else throw Error('Something went wrong')
				})
				.then(data => {
					console.log(data)
				})

				.catch(error => {
					console.log(error)
				})
			},

			login: (email, password) => {
				var options = {
					method: 'POST',
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({ email: email, password: password })
				};

				fetch(process.env.BACKEND_URL + 'api/login', options)
				.then(response => {
					if(response.ok) return response.json()
					else throw Error('Something went wrong')
				})
				.then(data => {
					localStorage.setItem("token", data.token);
					setStore({ token: data.token })
				})

				.catch(error => {
					console.log(error)
				})
			},

			logout: () => {
				localStorage.removeItem("token");
				setStore({ token: null });
				window.location.href = "/login";
			},
		}
	};
};

export default getState;
