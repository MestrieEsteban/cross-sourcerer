import React from "react"
import 'materialize-css';
import { Collapsible, CollapsibleItem } from 'react-materialize';
import "../App.css";




export const UserRepos = ({ repos }) => (
	<Collapsible accordion popout header="Repository" className="Card" style={{ maxWidth: 700 }}>

		{repos.nodes.map(repo =>
			<CollapsibleItem className="row"
				expanded={false}
				header={
					<div style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
						<span style={{ float: 'left' }}>{repo.name}</span>
						<br/>
						<span style={{ color: "white", float: 'left', backgroundColor: repo.primaryLanguage.color, border:"4px solid", borderColor: repo.primaryLanguage.color, borderRadius: "10px" }}>{repo.primaryLanguage.name}</span>
					</div>
				}
			>
				
			</CollapsibleItem>

		)}
	</Collapsible>
)