import React from 'react';
import styles from '../styles/SideBar.module.css';

function SideBar(props) {
    let state: string = 'menu';
    if (props.state === 'unclicked') {
        state = 'menu' + 'Hidden';
    }
    else {
        state = 'menu' + 'Visible';
    }

    return (
        <div className={styles[state]}>
            <ul>
                <li>Coucou</li>
                <li>Salut</li>
            </ul>
        </div>
    );
}

export default SideBar;