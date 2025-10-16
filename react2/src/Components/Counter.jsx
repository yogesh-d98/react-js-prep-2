import React, { useEffect, useState ,useContext, useRef } from 'react'
import { dataContext } from './Home';
export default function Counter() {
    const [count, setCount] = useState(0);
    const check = useContext(dataContext); 

    let refCount = useRef(0); //using let since value got updated everytime  -->use ref
    // console.log(check,"check use context")
// console.log(value,"data from login")/
    function inc() {
        setCount(count + 1);
        // refCount.current++;
        // console.log(count,"updated count value",refCount.current)
        // setCount(count + 1)

        //instead of giving count+1 
        // setCount(prev => prev + 1);
        // setCount(prev => prev + 1)  //updation of state
    }
    function dec() {
        setCount(count - 1);
    }

    // useEffect(() => {
    //     console.log(count);
    //     console.log(refCount,"ref count")
    // }, [count])
     useEffect(() => {
        // console.log(count);
        // console.log(refCount,"ref count")
    })
    return (
        <div>
            <h1>{check}</h1>
            {/* <h2>{value.data}</h2>  props drilling */}
            {/* <h2 className='m-5'>{refCount.current}</h2> */}
            <h2>{count}</h2>
            <button onClick={inc} className='mx-5 btn btn-primary'>Up</button>
            {/* <button onClick={()=>setCount(refCount.current)} className='mx-5 btn btn-primary'>Update</button> */}
            <button onClick={dec} className='mx-5  btn btn-primary'>Down</button>
        </div>
    )
}
