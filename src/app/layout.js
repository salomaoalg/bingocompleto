import "./globals.css";
import Numeros from "./numeros/page";
import ExibeShow from "./exibeshow/page";
import style from './layout.module.css'

export default function Home() {
  return (
    <html lang="pt-br">
      <body>
        <div className={style.lados}>
          <Numeros />
          <ExibeShow />
        </div>
      </body>
    </html>
  );
}
