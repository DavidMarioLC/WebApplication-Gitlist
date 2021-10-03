import {IUser} from '../../interfaces/user.interface';
import {formatStars} from "../../utils/formatNumber";
const Profile = (user:IUser) => {
  const { avatar_url,
    login:nickname,
    name,bio,followers,
    following,
    company,
    location,
    blog,
    twitter_username} = user;


  
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
            <span className="info__value">{formatStars(followers)}</span>
            Followers
          </a>  
          <a className="info__link" href="#Following">
            <span className="info__value">{following}</span>
            Following
            </a> 
          <a className="info__link" href="#stars">
            <i className="icon-star"></i>
            <span className="info__value">{78}</span>
          </a>
       </div>
    </div>
    <div className="profile__contact">
      <div className="contacts">
      {company&& 
          <p className="contacts__item">
          <i className="icon-link"></i> 
          <span>{company}</span>
      </p>
      }
     {
       location &&  
       <p className="contacts__item">
        <i className="icon-pingMap"></i> 
        <span>{location}</span>
        </p>
     }
      {blog&&
      <p className="contacts__item" >
          <i className="icon-link"></i> 
          <a className="contacts__link" href={`${blog}`}>{blog}</a>
      </p>
      }
     {twitter_username&&
      <p className="contacts__item" >
      <i className="icon-twitter"></i>
      <a className="contacts__link" href={`https://twitter.com/${twitter_username}`}>@{twitter_username}</a>
      </p>
     }
      </div>
    </div>
  </div>
  )
}

export default Profile;
