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
                console.log('This is wrong', res)
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
                {this.state.user.map(users => {
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

export default GithubUser;