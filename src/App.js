import React from "react"
import { useQuery } from "@apollo/react-hooks"
import "./App.css"
import { GET_USER } from "./graphql/getUser";



const UserInfo = ({ user: { login, avatarUrl, bio } }) => (
	<div className="Card">
		<img alt="avatar" className="Card--avatar" src={avatarUrl} />
		<h1 className="Card--name">{login}</h1>
		<h4>{bio}</h4>
	</div>
)

const UsterStats = ({ stats: { countCommit, countRepo, followers } }) => (
	<div className="Card--stats">
		<span>Commits : {countCommit}</span>
		<span>Repos : {countRepo}</span>
		<span>Followers : {followers}</span>
	</div>
)

function App() {
	const { loading, error, data } = useQuery(GET_USER)
	if (error) return <h1>{error}</h1>
	if (loading) return (<div className="App"><h2>Chargement des donneés</h2> <br /><div className="lds-heart"><div></div></div>  </div>)

	let countCommit = 0;
	let countRepo = 0;
	let stats = [];

	if (data) {

		data.user.repositories.nodes.forEach(element => {
			countRepo++;
			countCommit += element.defaultBranchRef.target.history.totalCount;
			stats['countCommit'] = countCommit;
			stats['countRepo'] = countRepo;
		});

		stats['followers'] = data.user.followers.totalCount

		return (
			<main className="App">
				<UserInfo key={data.user.id} user={data.user} />
				<UsterStats key={data.user.id} stats={stats} />

			</main>
		)
	}
}

export default App