import React 			from "react"
import { useQuery } 	from "@apollo/react-hooks"
import "./App.css"
import { GET_USER } 	from "./graphql/getUser";
import { UserInfo } 	from "./component/userInfo"
import { UserStats } 	from "./component/userStats"
import { UserRepos } 	from "./component/userRepos"



function App() {
	const { loading, error, data } = useQuery(GET_USER)
	if (error) return <h1>{error}</h1>
	if (loading) return (<div className="App"><h2>Chargement des donneés</h2> <br /><div className="lds-heart"><div></div></div>  </div>)

	let countCommit = 0;
	let countRepo = 0;
	let stats = [];

	if (data) {
		let user = data.user
		user.repositories.nodes.forEach(element => {
			countRepo++;
			countCommit += element.defaultBranchRef.target.history.totalCount;
			stats['countCommit'] = countCommit;
			stats['countRepo'] = countRepo;
		});


		stats['followers'] = user.followers.totalCount

		return (
			<main className="App">
				<UserInfo key={data.user.id} user={user} />
				<UserStats key={data.user.id} stats={stats} />
				<div className="Card" style={{backgroundColor: "rgba(255, 255, 255, 0.4)", maxWidth:"800px", marginTop:'50px', borderRadius : "20px"}}>
					<h3 style={{textAlign:'left'}}>Repositories</h3>
					<UserRepos key={data.user.id} repos={user.repositories} />
				</div>

			</main>
		)
	}
}

export default App