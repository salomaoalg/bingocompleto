import styles from './numeros.module.css'
export default function Numeros() {
    return (
        <div>
            <table className={styles.borda}>
                <tbody>
                <tr>
                    <th className={styles.borda} colSpan={5}>BINGO</th>
                </tr>
                <tr>
                    <td ><button>B-1</button></td>
                    <td ><button>I-19</button></td>
                    <td ><button>N-37</button></td>
                    <td ><button>G-55</button></td>
                    <td ><button>0-73</button></td>
                </tr>
                <tr>
                    <td ><button>B-2</button></td>
                    <td ><button>I-20</button></td>
                    <td ><button>N-38</button></td>
                    <td ><button>G-56</button></td>
                    <td ><button>0-74</button></td>
                </tr>
                <tr>
                    <td ><button>B-3</button></td>
                    <td ><button>I-21</button></td>
                    <td ><button>N-39</button></td>
                    <td ><button>G-57</button></td>
                    <td ><button>0-75</button></td>
                </tr>
                <tr>
                    <td ><button>B-4</button></td>
                    <td ><button>I-22</button></td>
                    <td ><button>N-40</button></td>
                    <td ><button>G-58</button></td>
                    <td ><button>0-76</button></td>
                </tr>
                <tr>
                    <td ><button>B-5</button></td>
                    <td ><button>I-23</button></td>
                    <td ><button>N-41</button></td>
                    <td ><button>G-59</button></td>
                    <td ><button>0-77</button></td>
                </tr>
                <tr>
                    <td ><button>B-6</button></td>
                    <td ><button>I-24</button></td>
                    <td ><button>N-42</button></td>
                    <td ><button>G-60</button></td>
                    <td ><button>0-78</button></td>
                </tr>
                </tbody>
            </table>
        </div>
    )
}