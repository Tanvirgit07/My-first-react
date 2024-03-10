import { useEffect, useState } from "react"
import Friend from "./Friend"
import './Friend.css'

export default function Friends(){
    const [Friends, setFriends] = useState([])
    useEffect(() =>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setFriends(data))
        console.log(Friends)
    },[])
    return(
        <div className="Box1">
            <h2>Friends Name : {Friends.length}</h2>
            {
                Friends.map(friend => <Friend friend ={friend}></Friend>)
            }
        </div>
    )
}