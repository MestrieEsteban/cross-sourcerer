import React from "react"
import "../App.css"


export const UserInfo = ({ user: { login, avatarUrl, bio, location } }) => (
	<div className="Card">
		<img alt="avatar" className="Card--avatar" src={avatarUrl} />
		<h3 className="">{login}</h3>
		<span>{bio}</span> <br/>
		<span>{location}</span>
	</div>
)