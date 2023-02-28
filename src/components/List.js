import React from 'react'
import Title from './Title'

export default function List() {
    const details = [
        {
            id:1,
            title : "This is First Title",
            description : "This is First description",
        },
        {
            id:2,
            title : "This is Second Title",
            description : "This is Second description",
        },
        {
            id:3,
            title : "This is Third Title",
            description : "This is Third description",
        }
        
    ]
  return (
    <>
    {details.map((detail)=>{
        return(
        <Title key = {detail.title} title = {detail.title} description ={detail.description}/>
        )
    })}
    </>
  )
}
