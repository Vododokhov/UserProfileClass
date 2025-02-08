import { Component } from "react"

export default class UserProfile extends Component {
    render() {
        const user = this.props.user
        const getName = () => user.name
        return (
            <div className='profile'>
                <p>
                    Имя: {getName() ?? 'Аноним'}
                </p>
                <p>
                    Должность: {user.position}
                </p>
                <img src={user.avatar} alt={user.name} />
            </div>
        )
    }
}