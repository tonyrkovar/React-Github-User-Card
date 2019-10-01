import React from 'react';
import axios from 'axios';

class GithubUser extends React.Component {
    state = {
        user: []
    }

    componentDidMount = () => {
        axios
            .get('https://api.github.com/users/tonyrkovar')
            .then(res => {
                // console.log('This is wrong', res)
                this.setState({
                    user: res.data
                })
            })
            .catch(err => {
                console.log(err, 'Error')
            })
    }

    render() {
        console.log("this is state in GHU.js", this.state.user)
        return (
            <>
                <div key={this.state.user.id} className='cards'>
                    <img src={this.state.user.avatar_url} alt={this.state.user.login} className='photos'></img>
                    <p>{this.state.user.login}</p>
                    <p>Repositories: <a href={`https://github.com/${this.state.user.login}?tab=repositories`}>https://github.com/{this.state.user.login}?tab=repositories</a></p>
                </div>
            </>
        )
    }
}

export default GithubUser;