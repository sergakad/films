function Filter () {



    return <div>
        <label >
            <input name="filter" type="radio" checked/>
            <span className='radioFilter'>All</span>
        </label>
        <label  >
            <input name="filter" type="radio" checked/>
            <span className='radioFilter'>Movies only</span>
        </label>
        <label  >
            <input name="filter" type="radio" checked/>
            <span className='radioFilter'>Series only</span>
        </label>
    </div>
}

export {Filter};