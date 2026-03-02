function Card({title,value,percent,icon,chartImg}){
    return(
        <div className="card">
            <div className="card-top">
                {icon && <img src={icon} alt="icon" className="icon"/>}
                <h1>{value}</h1>
            </div>
            <div className="card-body">
                <h3>{value}</h3>
            <p>{title}</p>
            <span className="green">{percent}</span>

            </div>
            {chartImg && <img src={chartImg} className="card-chart" alt="graph"/>}
        </div>
    );
}
export default Card;