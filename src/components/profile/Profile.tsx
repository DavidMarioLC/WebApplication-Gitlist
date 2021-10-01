import {FunctionComponent} from 'react';
import {User} from '../../interfaces/user.interface';


const Profile:FunctionComponent<{user:User}> = ({user:{
  avatar_url,
  login:nickname,
  name,bio,followers,
  following,
  company,
  location,
  blog,
  twitter_username
 }}) => {

  // generate stars
  const star:number = Math.ceil(Math.random()*1000);
  
  return (
    <div className="profile">
    <div className="profile__user">
      <div className="avatar">
        <figure className="avatar__image">
          <img src={avatar_url} alt="username" title="username" width="80" height="80"  loading="lazy" />
        </figure>
        <div className="avatar__info">
        <p className="avatar__fullname">{name}</p>
         <p className="avatar__username">{nickname}</p>
        </div>
      </div>
    </div>
    <div className="profile__buttons">
          <button className="btn btn--text">Follow</button> 
    </div>
    <div className="profile__details">
      <p className="biography">{bio}</p>
       <div className="info">
          <a className="info__link" href="#followers">
            <i className="icon-users"></i>
            <span className="info__value">{followers}</span>
            Followers
          </a>  
          <a className="info__link" href="#Following">
            <span className="info__value">{following}</span>
            Following
            </a> 
          <a className="info__link" href="#stars">
            <i className="icon-star"></i>
            <span className="info__value">{star}</span>
          </a>
       </div>
    </div>
    <div className="profile__contact">
      <div className="contacts">
      <p className="contacts__item">
          <i className="icon-pingMap"></i> 
          <span>{company}</span>
      </p>
      <p className="contacts__item">
          <i className="icon-pingMap"></i> 
          <span>{location}</span>
      </p>
      <p className="contacts__item" >
          <i className="icon-link"></i> 
          <a className="contacts__link" href={`${blog}`}>{blog}</a>
      </p>
      <p className="contacts__item" >
          <i className="icon-twitter"></i>
          <a className="contacts__link" href={`https://twitter.com/${twitter_username}`}>@{twitter_username}</a>
      </p>
      </div>
    </div>
  </div>
  )
}

export default Profile;
