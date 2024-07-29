import style from './ExibeShow.module.css'
import Numeros from '../numeros/page';

export default function ExibeShow({exibenumero}){
    console.log(exibenumero);
    return(
        <div className={style.show}>
            <p className={style.alinhar}>{exibenumero}</p>
        </div>
    )
}