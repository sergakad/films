function Movie(props) {
    return <div id={props.imdbID} className="card movie">
        <div className="card-image waves-effect waves-block waves-light">
            <img id= 'poster'
                 className="activator"
                 src={props.poster}
                 onError={(event)=>{
                     event.target.src = 'https://stroikomfort-m.ru/image/cache/catalog/img/dvp/vtr.590.n_0-1000x1340.jpg'}} />
        </div>
        <div className="card-content">
            <span className="card-title activator grey-text text-darken-4">{props.title}</span>
            <p className="card-title activator grey-text text-darken-4">{props.year}</p>
            <p className="card-title activator grey-text text-darken-4">{props.type}</p>
            {/*<p><a href="#">This is a link</a></p>*/}
        </div>
    </div>

}

export {Movie};