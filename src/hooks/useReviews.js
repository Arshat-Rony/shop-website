const { useState, useEffect } = require("react")
const useReviews = () =>{
    const [reviews,setReveiws] = useState([])
    useEffect (()=>{
        fetch('data/Fakedb.json')
        .then(res=>res.json())
        .then(data => setReveiws(data))
    },[])
    return [reviews,setReveiws]
}

export default useReviews;