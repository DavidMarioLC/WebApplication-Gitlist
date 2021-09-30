import {FC} from 'react'

interface Props {
  
}

const Search:FC<Props> = (props) => {
  return (
    <div className="search">
      <input placeholder="Find a repository…" className="search__input" type="text" />
    </div>
  )
}

export default Search
