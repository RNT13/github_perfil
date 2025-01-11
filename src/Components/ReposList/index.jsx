import { useState, useEffect } from 'react';

import styles from './ReposList.module.css';

const ReposList = ({ userName }) => {
    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        setError(null);
        const fetchRepos = async () => {
            try {
                const response = await fetch(`https://api.github.com/users/${userName}/repos`);
                if (!response.ok) {
                    throw new Error(`O perfil de ${userName} não existe no Github`);
                }
                const data = await response.json();
                setTimeout(() => {
                    setLoading(false);
                    setRepos(data);
                }, 2000);
            } catch (err) {
                setLoading(false);
                setError(err.message);
            }
        };

        fetchRepos();
    }, [userName]);

    return (
        <div className='container'>
            {loading ? (
                <h1>Carregando repositórios de {userName}</h1>
            ) : error ? (
                <h1>{error}</h1>
            ) : (
                <ul className={styles.list}>
                    {repos.map(({ id, name, language, html_url }) => (
                        <li className={styles.listItem} key={id}>
                            <div className={styles.itemName}>
                                <b>Nome:</b>
                                {name}
                            </div>
                            <div className={styles.itemLanguage}>
                                <b>Linguagem:</b> 
                                {language}
                            </div>
                            <a className={styles.itemLink} target='_blank' href={html_url}>Visitar no Github</a>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default ReposList;