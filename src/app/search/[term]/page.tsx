
type props={
params:{
    term:string
}
}

function Search({params:{term}}:props){
    
    return <h1>
        Search Page {term}
    </h1>
}
export default Search