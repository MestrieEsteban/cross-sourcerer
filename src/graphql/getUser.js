import gql from 'graphql-tag';

export const GET_USER = gql`
{
	user(login: "mestrieesteban") {
    login
    name
    bio
    url
    followers {
      totalCount
    }
    location
    avatarUrl
    repositories(first: 20, orderBy: {field: CREATED_AT, direction: DESC}) {
      	totalCount
        nodes {
        	name
			isPrivate
          	description
          	url
          	createdAt
          	updatedAt 
          	primaryLanguage {
          	  name
          	  color
          	}   
		  	languages(first: 20) {
          	  nodes{
					name
					color
				} 
		  	}  
		  	collaborators{
				nodes{
					name
					login
					avatarUrl
					url
				}
			}   
			defaultBranchRef {
				target {
				... on Commit {
					history {
					totalCount
					}
				}
				}
			}
        }
    }
  }
}
`