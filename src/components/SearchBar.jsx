import React from 'react';
import TextField from '@mui/material/TextField';
import { FormControl } from '@mui/material';


const SearchBar = ({stateChanger}) => {

	const onEnter = (e) => {
		if (e.key === "Enter"){
			stateChanger(e.target.value)
			e.target.value=""
			e.target.blur()
		}
		else{
			
		}

	}

	return (
		<FormControl className="bg-white w-[200%] translate-x-[-50%] rounded-2xl">
			<TextField variant="outlined" type="text" defaultValue= "City Name.." onFocus={(e)=>e.target.value=""} onKeyDown = {onEnter} onBlur={(e)=>e.target.value="City Name..."} />
		</FormControl>
	)
}

export default SearchBar;