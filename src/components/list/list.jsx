const CustomList=()=>{
    return(
        <ul>
            <ListItems/>
        </ul>
    )
}
export default CustomList

export const CustomOrderedList=()=>{
    return(
        <ol>
            <ListItems/>
        </ol>
    )
}

const ListItems=()=>{
    const Fruits=["Apple", "Banana", "Kiwi", "Mango", "Orange"]
    return(
        <>
        {
            Fruits.map((eachFruit)=>{
                // eslint-disable-next-line react/jsx-key
                return <li>{eachFruit}</li>
            })
        }
        
        </>
      
    )
}

