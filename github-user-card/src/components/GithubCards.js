import React from 'react';
import axios from 'axios';

class GithubCards extends React.Component {
    state = {
        username: []
    }

    render() {
        console.log('adfadfa', this.state)
        console.log("this is followers in GHC.js", this.props.followers)
        return (
            <>
                {this.props.followers.map(users => {
                    return (
                        <div key={users.id} className='cards'>
                            <img src={users.avatar_url} alt={users.login} className='photos'></img>
                            <p>Username: {users.login}</p>
                            <p>Repositories: <a href={`https://github.com/${users.login}?tab=repositories`}>https://github.com/{users.login}?tab=repositories</a></p>
                            <img src={`http://ghchart.rshah.org/${users.login}`}></img>
                        </div>)
                })}
            </>
        )
    }
}

export default GithubCards;