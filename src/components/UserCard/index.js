import './index.css';

function UserCard({user}) {
  return (
    <div className="user-card">
      <div className="primary-info">
        <div className="avatar">
          <img src={user.avatar_url} alt="user profile photo"/>
        </div>
        <div className="names-and-date">
          <div className="name">
            <h1>{user.name}</h1>
            <p><a href={user.html_url} target="_blank">@{user.login}</a></p>
          </div>
          <p className="date">{user.created_at}</p>
        </div>
      </div>
      <div className="detailed-info">
        <p className="bio">{user.bio || 'This profile has no bio'}</p>
        <div className="highlight">
          <div className="repos">
            <span className="label">Repos</span>
            <p>{user.public_repos}</p>
          </div>
          <div className="followers">
            <span className="label">Followers</span>
            <p>{user.followers}</p>
          </div>
          <div className="following">
            <span className="label">Following</span>
            <p>{user.following}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserCard;
