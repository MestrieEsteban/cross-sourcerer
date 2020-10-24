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