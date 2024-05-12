import { useState } from "react"

function Search(){
  const [searchText, setSearchText] = useState("");
  
  const handledOnChange = ({target: {value}}) => {
    console.log(value);
    setSearchText(value);
  }

  return (
      <>
        <div className="card">
          <input type='text' onChange={handledOnChange}/>
          <button value={searchText} className='btn'>
            Buscar
          </button>
        </div>
      </>
    )
}

export default Search