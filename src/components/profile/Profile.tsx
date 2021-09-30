import {FC} from 'react';

interface Props {
  
}

const Profile:FC<Props> = (props) => {
  
  const img:string = "https://avatars.githubusercontent.com/u/1500684?v=4";
  const fullname:string = 'Kent C. Dodds';
  const username:string = 'kentcdodds';
  const biography:string = 'Destructuring React & the Static Web';
  const followers:string = '20.8';
  const following:string ='42';
  const star:string = '81';
  const city:string = 'Salt Lake City, Utah, USA';
  const website:string = 'https://kentcdodds.com';
  const twitter:string = '@kentcdodds';

  return (
    <div className="profile">
    <div className="profile__user">
      <div className="avatar">
        <figure className="avatar__image">
          <img src={img} alt="username" title="username" width="80" height="80"  loading="lazy" />
        </figure>
        <div className="avatar__info">
        <p className="avatar__fullname">{fullname}</p>
         <p className="avatar__username">{username}</p>
        </div>
      </div>
    </div>
    <div className="profile__buttons">
          <button className="btn btn--text">Follow</button> 
    </div>
    <div className="profile__details">
      <p className="biography">{biography}</p>
       <div className="info">
          <a className="info__link" href="#followers">
            <i className="icon-users"></i>
            <span className="info__value">{followers}k</span>
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
        <p className="contacts__item"><i className="icon-pingMap"></i> <span>{city}</span></p>
        <p className="contacts__item" ><i className="icon-link"></i> <a className="contacts__link" href="#c2">{website}</a></p>
        <p className="contacts__item" ><i className="icon-twitter"></i> <a className="contacts__link" href="#c3">{twitter}</a></p>
      </div>
    </div>
  </div>
  )
}

export default Profile;
