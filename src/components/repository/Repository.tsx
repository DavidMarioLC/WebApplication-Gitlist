import {FunctionComponent} from 'react';

interface Props {
  name:string;
  tag:string;
  description:string;
  technologiesTags:[];
  

}

const Repository:FunctionComponent<Props> = (props) => {
  return (
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
  )
}

export default Repository
