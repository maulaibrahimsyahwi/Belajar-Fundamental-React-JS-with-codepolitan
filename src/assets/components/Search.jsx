import { useState } from "react";

function Search(props) {
    const [search, setSearch] = useState("");

    const onSearchChange = () => {
        props.onSearchChange(search);
    }
    const searchKeyDown = (e) => {
        e.key === "Enter" && onSearchChange();
    }
    return(
        <>
            <div>
                cari artikel: 
                <input onChange={(e) => setSearch(e.target.value)} onKeyDown={searchKeyDown}></input>
                <button onClick={onSearchChange}>Cari</button>
            </div>
            <small>Ditemukan {props.totalPosts} Data dengan pencarian kata {search}</small>
        </>
    )

}

export default Search;