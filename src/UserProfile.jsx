function UserProfile({ user, courses }) { // props      
    console.log(courses)
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
export default UserProfile