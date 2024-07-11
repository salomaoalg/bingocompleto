import style from './ExibeShow.module.css'

export default function ExibeShow({numero}){
    return(
        <div className={style.show}>
            <p className={style.alinhar}>{numero}</p>
        </div>
    )
}