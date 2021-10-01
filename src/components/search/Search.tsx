import {FunctionComponent} from 'react'

interface Props {
  
}

const Search:FunctionComponent<Props> = (props) => {
  return (
    <div className="search">
      <input placeholder="Find a repository…" className="search__input" type="text" />
    </div>
  )
}

export default Search
