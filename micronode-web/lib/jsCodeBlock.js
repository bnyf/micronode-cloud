import styles from '../styles/utils.module.css';
import { server } from '../config';

const url = server + '/api/code_download?file_name=';

const fetcher = (name) => fetch(url + name).then(
    res => res.ok ? alert(name + ' downloaded!') : alert(name + ' download failed!')
);

export default function JsCodeBlock({ name, description }) {
    console.log(url);
    return (
        <button className={styles.card} onClick={()=>fetcher(name)}>
            <h3>{name} &darr;</h3>
            <p>{description}</p>
        </button>
    )
}
