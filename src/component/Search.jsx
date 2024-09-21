import React, {useState} from "react";


function Search (props) {

    // const [searchMovie = Function.prototype] = props;

    const[search, setSearch] = useState('');
    const[filter, setFilter] = useState('');



    const stateFilter = (event) => {
        setFilter(event.target.value);
        props.searchMovie(search,filter);
    }
    const pressEnter = (event) => {
        if(event.which === 13 || event.keyCode === 13) {
            // console.log(true);
            props.searchMovie(search, filter);
        }
    }
    const clickButton = () => {
        props.searchMovie(search, filter);
    }

        return <div className="row">
            <div className="col s12">
                <div className="input-field">
                    <input id="text"
                           className="validate"
                           type="email" //измение влияет на стили materializecss
                           placeholder='Search'
                           onChange={(event)=>{setSearch(event.target.value)}}
                           value={search}
                           onKeyDown={pressEnter}

                    />
                    <button id='buttonSearch'
                            className="btn waves-effect waves-light"
                            type="submit"
                            name="action"
                            onClick={clickButton}
                    >
                        Search
                    </button>

                </div>
            </div>
            <label>
                <input name="filter" type="radio" value='' onClick={stateFilter} checked = {filter === ''} />
                <span className='radioFilter'>All</span>
            </label>
            <label>
                <input name="filter" type="radio" value='movie' onClick={stateFilter} checked = {filter === 'movie'} />
                <span className='radioFilter'>Movies only</span>
            </label>
            <label>
                <input name="filter" type="radio" value='series' onClick={stateFilter} checked = {filter === 'series'} />
                <span className='radioFilter'>Series only</span>
            </label>
        </div>

}

export {Search}