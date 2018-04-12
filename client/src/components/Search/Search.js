import React from 'react';
import "./style.css";

const Search = () =>{
	return (
		<div className='row'>	
			<div className='col-sm-12'>
				<form>
					<input label="Search for recipes" />    
				</form> 
			</div>  
		</div>	
	);
}

export default Search;