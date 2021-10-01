import {FunctionComponent,Fragment} from 'react';

interface Props {
  
}

const Select:FunctionComponent<Props> = (props) => {
  return (
    <Fragment>
          <button className="btn btn--text">Type <i className="icon-dropDown"></i></button>
          <button className="btn btn--text">Language <i className="icon-dropDown"></i></button>
          <button className="btn btn--text">Sort <i className="icon-dropDown"></i></button>
    </Fragment>
  )
}

export default Select;
