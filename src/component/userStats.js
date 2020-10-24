import React from "react"
import "../App.css"


export const UserStats = ({ stats: { countCommit, countRepo, followers } }) => (
	<div className="Card--stats">
		<span>Commits : {countCommit}</span>
		<span>Repos : {countRepo}</span>
		<span>Followers : {followers}</span>
	</div>
)