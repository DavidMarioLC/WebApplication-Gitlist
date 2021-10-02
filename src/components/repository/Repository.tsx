
import {Owner} from "../../interfaces/repo.interface";
import {License} from "../../interfaces/repo.interface";
import {formatStars} from '../../utils/formatNumber';
import {formatDate} from "../../utils/formatDate";

interface Props {
  name:string;
  description:string;
  language:string;
  visibility:string;
  owner:Owner;
  pushed_at:Date;
  license?:License;
  stargazers_count:number
}


const Repository = ({name,description,language,visibility,owner,pushed_at,license,stargazers_count}:Props) => {
  


  return (
    <article className="repository">
              <div className="repository__content">
               <div className="repository__header">
                 <a className="repository__name" href={`${owner.html_url}/${name}`} target="_blank" rel="noreferrer">{name}</a>
                 <span className="repository__tag">{visibility}</span>
                </div>
                
                <p className="repository__description">{description}</p>
                <div className="repository__tags">
                  <a className="tag" target="_blank" rel="noreferrer" href={'https://github.com/topics/css'}>css</a>
                  <a className="tag" target="_blank" rel="noreferrer" href={'https://github.com/topics/html'}>html</a>
                  <a className="tag" target="_blank" rel="noreferrer" href={'https://github.com/topics/javascript'}>javascript</a>
                  <a className="tag" target="_blank" rel="noreferrer" href={'https://github.com/topics/reactjs'}>reactjs</a>
                  <a className="tag" target="_blank" rel="noreferrer" href={'https://github.com/topics/sass'}>sass</a>
                </div>
                <div className="repository__details">
                  {language&&<span className={`dot dot--${language}`}></span>}
                  {language&& <span>{language}</span>}
                  {license &&<span>{license.name}</span> }
                  {stargazers_count>0&&<span><i className="icon-star"></i> {formatStars(stargazers_count)}</span>}
                  {pushed_at&&<time>{formatDate(pushed_at)}</time>}
                 
                 
                </div>
              </div>  

              <div className="repository__actions">
                <button className="btn btn--star"><i className="icon-star"></i> Star</button>
              </div>
              
          </article>
  )
}

export default Repository
