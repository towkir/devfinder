import IconLocation from 'components/VectorIcons/IconLocation';
import IconLink from 'components/VectorIcons/IconLink';
import IconTwitter from 'components/VectorIcons/IconTwitter';
import IconCompany from 'components/VectorIcons/IconCompany';
import formatDate from 'helper/date';
import './index.css';

function UserCard({user}) {
  function setDeadClass(data) {
    return !data ? 'unavailable' : null;
  }
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
          <p className="date">Joined {formatDate(user.created_at)}</p>
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
        <div className="detailed-links">
          <ul>
            <li className={setDeadClass(user.location)}><IconLocation/> {user.location || 'Not Available'}</li>
            <li className={setDeadClass(user.blog)}>
              <IconLink/> {user.blog ? <a href={user.blog}>{user.blog}</a> : 'Not linked'}
            </li>
          </ul>
          <ul>
            <li className={setDeadClass(user.twitter_username)}><IconTwitter/> {user.twitter_username || 'Not Available'}</li>
            <li className={setDeadClass(user.company)}><IconCompany/> {user.company || 'Not Set'}</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default UserCard;
