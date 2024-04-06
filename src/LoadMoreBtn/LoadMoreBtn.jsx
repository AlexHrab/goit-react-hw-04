

function LoadMoreBtn({onClick, value}){
    return(
        <button onClick={() => onClick(value)}>Load more</button>
    )
}

export default LoadMoreBtn