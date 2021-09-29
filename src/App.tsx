import "./sass/main.scss";


function App() {
 
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
  <>
    
    <div className="home">
    <aside className="sidebar">
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
     </aside>
     <main className="main">
        <div className="actions">
          <div className="search">
            <input placeholder="Find a repository…" className="search__input" type="text" />
          </div>
          <div className="selectGroup">
          <button className="btn btn--text">Type <i className="icon-dropDown"></i></button>
          <button className="btn btn--text">Language <i className="icon-dropDown"></i></button>
          <button className="btn btn--text">Sort <i className="icon-dropDown"></i></button>
          div
          </div>
        </div>
        <div className="repositories">
          <article className="repository">
              <div className="repository__content">
               <div className="repository__header">
                 <a className="repository__name" href="#">testing-react-apps</a>
                 <span className="repository__tag">Public</span>
                </div>
                
                <p className="repository__description">A workshop for testing react applications</p>
                <div className="repository__tags">
                  <a className="tag" href="https://github.com/">css</a>
                  <a className="tag" href="https://github.com/">html</a>
                  <a className="tag" href="https://github.com/">javascript</a>
                  <a className="tag" href="https://github.com/">react</a>
                  <a className="tag" href="https://github.com/">sass</a>
                </div>
                <div className="repository__details">
                  <span>Javascript</span>
                  <time>5 days ago</time>
                </div>
              </div>  

              <div className="repository__actions">
                <button className="btn btn--star"><i className="icon-star"></i> Star</button>
              </div>
              
          </article>
          
        </div>
     </main>
   </div>
    
  </>
  
  );

}

export default App;
