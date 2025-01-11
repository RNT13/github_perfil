import styles from './Perfil.module.css';

const Perfil = ({userName, endereco}) => {    
    return (
        <header className={styles.header}>
            <img className={styles.avatar} src={`https://github.com/${userName}.png`} />
            <h1 className={styles.name}>
                {userName}
            </h1>
        </header>
    )
}

export default Perfil;