import { useState, useEffect } from 'react'
import styles from '../styles/Search.module.css'
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import logo from '../img/searchIcon.png';

// function Search({ placeholder, data } : { placeholder : string; data : Data_recipe[] })

// export interface Data_recipe {
// 	recipe : string;
// 	country : string;
// }

function Search(props) {
	const [searchInput, setSearchInput] = useState('');

	function handleClickSearch() {

    }

	function handleUserInput(e) {
		setSearchInput(e.target.value);
		props.input = e.target.value; // Potentiellement utiliser e.target.value;
	}
	return (
	<>
		<div className={styles.search}>
			<input className={styles.inputSearchBar} onChange={handleUserInput} type="text" id="SearchBar" value={searchInput}/>
			<div id="searchIcon">
				<button className={styles.buttonSearch} id="Search" onClick={handleClickSearch}>
                <img className={styles.buttonSearch} src={logo} alt="logo"/>
           		</button>
			</div>
		</div>
	</>
	);
}

export default Search;