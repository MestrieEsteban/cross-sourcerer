import React from "react"
import "../App.css"


export const UserReposInfos = ({ repo }) => (
	<div>
		<span style={{ float: 'left', fontSize: "13px" }}>Nombre de commits</span>
		<br />
		<span style={{ color: "white", float: 'left', backgroundColor: "#00ace0", border: "4px solid", borderColor: "#00ace0", borderRadius: "10px", marginRight: '5px' }}>{repo.defaultBranchRef.target.history.totalCount}</span>
		<br />
		<br />
		<span style={{ float: 'left', fontSize: "13px" }}>Tout les languages</span>
		<br />
		{repo.languages.nodes.map(lang =>
			<div>
				<span style={{ color: "white", float: 'left', backgroundColor: lang.color ? lang.color : "black", border: "4px solid", borderColor: lang.color ? lang.color : "black", borderRadius: "10px", marginRight: '5px' }}>{lang.name}</span>
			</div>
		)}
		<br />
		<br />
		<span style={{ float: 'left', fontSize: "13px" }}>Collaborators</span>
		<br />
		{repo.collaborators.nodes.map(collab =>
				<a href={collab.url}>
				<img style={{ color: "black"}} alt="avatar" className="Card--avatar2" src={collab.avatarUrl} />
				</a>

		)}
		<br />
	</div>
)