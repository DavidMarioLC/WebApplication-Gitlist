// import {FunctionComponent} from 'react'
import React from 'react';
import {IRepository} from '../../interfaces/repo.interface'
interface Props{
  // setRepositories:React.Dispatch<React.SetStateAction<IRepository[]>>
  repositories:IRepository[];
  setRepoFiltered:(value:IRepository[])=> void
  setSearchName:(value:string)=>void
  searchName:string
}

const Search = ({setRepoFiltered,setSearchName,repositories,searchName}:Props) => {

  const handleChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    setSearchName(event.target.value);
    const newListRepositories = repositories.filter((repository) => repository.name.toLowerCase().includes(searchName))
    setRepoFiltered(newListRepositories);
  }



  return (
    <div className="search">
        <input
        value={searchName}
        onChange={handleChange}
        placeholder="Find a repository…"
        className="search__input"
        type="search" />

       
    </div>
  )
}

export default Search
