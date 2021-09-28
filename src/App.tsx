import "./sass/main.scss";


function App() {
  const fullname:string = 'Kent C. Dodds';
  const username:string = 'kentcdodds';
  const biography:string = 'working hard to make the world better with software';
  const followers:string = '20.8';
  const following:string ='42';
  const star:string = '81';
  const city:string = 'Salt Lake City, Utah, USA';
  const website:string = 'https://kentcdodds.com';
  const twitter:string = '@kentcdodds';

  return (
  <>
  <header></header>
    <main className="home">
    <div className="sidebar">
      <div className="profile">
        <div className="profile__user">
          <div className="avatar">
            <figure className="avatar__image">
              <img src="https://avatars.githubusercontent.com/u/1500684?v=4" alt="username" title="username"  loading="lazy" />
            </figure>
            <div className="avatar__info">
            <p className="avatar__fullname">{fullname}</p>
             <p className="avatar__username">{username}</p>
            </div>
          </div>
        </div>
        <div className="profile__details">
          <p className="biography">{biography}</p>
           <div className="info">
              <a className="info__link" href="#l1"><i className="icon-users"></i> <span>{followers}k</span>  Followers</a> ·  
              <a className="info__link" href="#l2"><span>{following}</span> Following</a> ·
              <a className="info__link" href="#l3"><i className="icon-star"></i> <span>{star}</span></a>
           </div>
        </div>
        <div className="profile__contact">
          <ul className="contacts">
            <li><a className="contacts__link" href="#c1"><i className="icon-pingMap"></i> {city}</a></li>
            <li><a className="contacts__link" href="#c2"><i className="icon-link"></i> {website}</a></li>
            <li><a className="contacts__link" href="#c3"><i className="icon-twitter"></i> {twitter}</a></li>
          </ul>
        </div>
        <div className="profile__buttons">
              <button className="btn btn--text">Follow</button>
              {/* <button className="btn btn--icon"><i className="icon-heart"></i> Sponsor</button> */}
        </div>
      </div>
     </div>
  
     <div className="main">
        <div className="actions">
          <div className="search">
            
          </div>
          <div className="selectGroup">
              
          </div>
        </div>
        <div className="repositories">
  
        </div>
     </div>
   </main>
    
  </>
  
  );

}

export default App;
