import {IRepository} from "../../interfaces/repo.interface";
import Repository from "../repository/Repository";


interface Props{
  repositories: IRepository[];
}

const Repositories = ({repositories}:Props) => {

    


    if(repositories.length===0) return <h2>user doesn't have any public repositories yet.</h2>
    return (
    <div  className="repositories">
      {
        repositories.map((repository:IRepository,index:number) => (
        <Repository
          key={index}
          name={repository.name}
          description={repository.description}
          language={repository.language}
          visibility={repository.visibility}
          owner={repository.owner}
          pushed_at={repository.pushed_at}
          license={repository.license}
          stargazers_count={repository.stargazers_count}
        />
        ))
      }
    </div>
  )
}

export default Repositories
