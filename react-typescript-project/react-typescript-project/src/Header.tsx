import React from 'react';

interface PropsInterface{
    title: string,
    color?:string,
    textAlign:any
}

const Header =(props: PropsInterface)=>{
    return(
        <>
        <h1 style={{textAlign:props.textAlign,color:props.color?props.color:'#3178c6'}}>{props.title}</h1>
        </>
    )
}

export default Header;