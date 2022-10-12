import Clima from "./Clima";
import './Climas.css'


const Climas = ({climas}) => {
 return (
   <div className='grid'>
    
     {
      climas.map(c=>
        <Clima
        key={c.id}
        clima={c}
        
        />
        )
     }
   </div>
 );
}
export default Climas;
