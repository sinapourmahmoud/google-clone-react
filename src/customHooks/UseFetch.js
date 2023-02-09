import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
let KEY='AIzaSyDQ0yAy7dKNGu9CyDWjx_pXAIDU4pKgKfM'
export default function useFetch() {
    let params=useParams()
    let [items,setItems]=useState([])
    let [info,setInfo]=useState(null)
    useEffect(()=>{
        const fetching=async ()=>{
            let res=await fetch(`https://www.googleapis.com/customsearch/v1?key=${KEY}&cx=017576662512468239146:omuauf_lfve&q=${params.id}`)
           let data=await res.json()
           if(data.items){

               setItems([...data.items])
           }
           setInfo(data.searchInformation)
        }
        fetching()
    },[params.id])
    return {items,info,id:params.id}
}
