import {
    BsAwardFill, 
    BsGithub, 
    BsGlobe} from "react-icons/bs";

const Winner = ({top, team, git, web}) => {
  return (
    <div className="winner">
        <div className="winner-top">
            <span className="top">{top}</span>
            <BsAwardFill />
        </div>
        <div className="winner-body">
            <h2 className="winner-team">{team}</h2>
            <div className="winner-social">
                {git && <a href={git} target="_blank"><BsGithub /></a>}
                {web && <a href={web} target="_blank"><BsGlobe/></a>}
            </div>
        </div>
    </div>
  )
}

export default Winner