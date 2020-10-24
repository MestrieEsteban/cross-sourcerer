import React from "react"

export const UserInfo = ({ user: { login, avatarUrl, bio } }) => (
	<div className="Card">
		<img alt="avatar" className="Card--avatar" src={avatarUrl} />
		<h1 className="Card--name">{login}</h1>
		<h4>{bio}</h4>
	</div>
)