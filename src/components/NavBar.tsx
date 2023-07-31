import { useState } from 'react'
import styles from '../styles/NavBar.module.css'
import Search from './Search'
import SideBar from './SideBar';
import ButtonSearch from './ButtonSearch';
import {Data_recipe} from './Search'
import Data from '../data.json'

function NavBar() {
	const [burgerClass, setBurgerClass] = useState('unclicked');
	const [menuClass, setMenuClass] = useState("menu hidden");
	const [isMenuClicked, setIsMenuClicked] = useState(false);
	const [searchInput, setSearchInput] = useState('');
	
	function handleClickBurgerMenu () {
		if (burgerClass === 'unclicked') {
			setBurgerClass('clicked');
		}
		else {
			setBurgerClass('unclicked');
		}
	}

	function handleSearchInput(value) {
		setSearchInput(value);
	}

	return (
		<div id="topBar" className={styles.topBar}>
			<div id="burgerMenu" className={styles.burgerMenu}>
				<div className={styles.burgerMenuButton} onClick={handleClickBurgerMenu}>
					<div className={styles[burgerClass]}></div>
					<div className={styles[burgerClass]}></div>
					<div className={styles[burgerClass]}></div>
				</div>
			</div>
			<SideBar state={burgerClass}/>
			<div className={styles.searchBar}>
				<Search input={handleSearchInput}/>
			</div>
			<div className={styles.connexionButton}>
				<a href="#" id="connexion">Connexion</a>
			</div>
		</div>	
	);
}

export default NavBar
