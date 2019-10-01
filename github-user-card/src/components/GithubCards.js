import React from 'react';

class GithubCards extends React.Component {
    render() {
        console.log("this is followers in GHC.js", this.props.followers)
        return (
            <>
                {this.props.followers.map(users => {
                    return (
                        <div key={users.id} className='user-card'>
                            <img src={users.avatar_url} alt={users.login} className='user-photo'></img>
                            <p>{users.login}</p>
                            <p>{users.id}</p>

                        </div>)
                })}
            </>
        )
    }
}

export default GithubCards;