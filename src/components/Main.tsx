import {FunctionComponent,useState,useEffect, Fragment} from 'react';
import { useParams} from "react-router-dom";
import {fetchGithubApi} from '../api/githubApi';
import {User} from '../interfaces/user.interface';
import {Repo} from "../interfaces/repo.interface";
import Profile from "./profile/Profile";
import Search from "./search/Search";
import Select from "./select/Select";
import Repositories from "./repositories/Repositories"
import NotFound from "./404/NotFound";

const Main:FunctionComponent = () => {

  const initialState:User = {
      avatar_url: '',
      bio: '',
      blog: '',
      company: '',
      created_at: new Date(),
      email: null,
      events_url: '',
      followers: 0,followers_url: '',
      following: 0,following_url: '',
      gists_url: '',
      gravatar_id: '',
      hireable: null,
      html_url: '',
      id: 0,location: '',
      login: '',
      name: '',
      node_id: '',
      organizations_url: '',
      public_gists: 0,
      public_repos: 0,
      received_events_url: '',
      repos_url: '',
      site_admin: false,
      starred_url: '',
      subscriptions_url: '',
      twitter_username: '',
      type: '',
      updated_at: new Date(),
      url: '',
    
  }

  const initialRepoState = {
    
  };
  
  const {username} = useParams<{username:string}>();

  const [user, setUser] = useState<User>(initialState);
  const [loading,setLoading] = useState<boolean>(true);
  const [notFound,setNotFound] = useState<boolean>(false);
  const [repositories,setRepositories] = useState<Repo>([]);



 useEffect( () => {   
 
  const fetchApi = async () => {
    const {user,repos,userExist} = await fetchGithubApi(username);
    console.log(repos)
    if(userExist){
      setUser(user)
      setNotFound(false)
      setLoading(false)
      setRepositories(repos)
    }
    else{
      setLoading(false)
      setNotFound(true)
      console.log('loading activo');
    }
   }

   fetchApi();

  },[username])

  if(loading) return <p>Cargando...</p>;
  if(notFound) return <NotFound/>

  return (
    <Fragment>
      <div className="home">
    <aside className="sidebar">
      <Profile user={user}/>
     </aside>
     <main className="main">
        <div className="actions">
            <Search/>
          <div className="selectGroup">
           
            <Select/>
          </div>
        </div>
        {/*  */}
        <Repositories repositories={repositories}  />
     </main>
   </div>
    </Fragment>
  )
}

export default Main;
