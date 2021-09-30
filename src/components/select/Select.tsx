import {FC} from 'react';

interface Props {
  
}

const Select:FC<Props> = (props) => {
  return (
    <div>
          <button className="btn btn--text">Type <i className="icon-dropDown"></i></button>
          <button className="btn btn--text">Language <i className="icon-dropDown"></i></button>
          <button className="btn btn--text">Sort <i className="icon-dropDown"></i></button>
    </div>
  )
}

export default Select;
