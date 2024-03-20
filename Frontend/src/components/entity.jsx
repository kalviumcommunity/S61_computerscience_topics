import '../components/entity.css'
import data from '../../data.json'
const Entity = () => {
    return (
        <div className="entity">
            <div className='items'>
            <h1> {data.id}</h1>
            <h2>Topic: {data.topic}</h2>
            <p><strong>Description: </strong>{data.description}</p>
            <p><strong>Required Knowledge:</strong> {data.RequiredKnowledge}</p>
            <p><strong>Popularity:</strong> {data.Popularity}</p>
            <p><strong>Level of Hardness: </strong>{data.LevelOfHardness}</p>
            </div>
            
        </div>
    )
}

    export default Entity
