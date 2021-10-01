import {FunctionComponent} from 'react'
import ImageNotFound from '../../images/404-v1.svg';
import { Link} from "react-router-dom";


const NotFound:FunctionComponent = () => {
  return (
    <div className="pageNotFound">
      <img  src={ImageNotFound} alt="Imagen de pagina no encontrada" width="500" height="500"/>
      <Link to="/" className="btn btn--text" role='button'>Back to home</Link>
    </div>
  )
}

export default NotFound
