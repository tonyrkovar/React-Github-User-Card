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
                this.setState({
                    user: res.data
                })
            })
            .catch(err => {
                console.log(err, 'Error')
            })
    }

    render() {
        return (
            <>
                <div key={this.state.user.id} className='cards'>
                    <img src={this.state.user.avatar_url} alt={this.state.user.login} className='photos'></img>
                    <p>{this.state.user.login}</p>
                    <p>Repositories: <a href={`https://github.com/${this.state.user.login}?tab=repositories`}>https://github.com/{this.state.user.login}?tab=repositories</a></p>
                    <img src={`http://ghchart.rshah.org/${this.state.user.login}`}></img>
                </div>
            </>
        )
    }
}

export default GithubUser;