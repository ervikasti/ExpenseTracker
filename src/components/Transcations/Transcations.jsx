
import { PiNotePencil, PiTrashLight } from "react-icons/pi";
import styles from './Transcations.module.css';

export default function Transacation({data,handleEdit}){

    return(
        <div className={styles.transc_container}>
        {data.map( (obj,index)=>(     
            <div key={index+1} className={styles.container}>
                
                <div className={styles.section_one}>
                    <PiTrashLight />
                    <div className={styles.section_one_sub}>
                        <p>{obj.title}</p>
                        <h4>{obj.date}</h4>
                    </div>
                    
                </div>
                <div className={styles.section_two}>
                    <p>{obj.price}</p>
                    <button><PiTrashLight /></button>
                    <button onClick={handleEdit}>Edit <PiNotePencil/></button>
                </div>
            
            </div>
        ))}
          
        </div>
    )
}