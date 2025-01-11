import { useState, useEffect } from 'react';

import styles from './ReposList.module.css';

const ReposList = ({ userName }) => {
    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        const fetchRepos = async () => {
            const response = await fetch(`https://api.github.com/users/${userName}/repos`);
            const data = await response.json();
            setTimeout(() => {
                setLoading(false);
                setRepos(data);
            }, 2000);
        };

        fetchRepos();
    }, [userName]);

    return (
        <div className='container'>
            {loading ? (
                <h1>Carregando...</h1>
            ): (
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