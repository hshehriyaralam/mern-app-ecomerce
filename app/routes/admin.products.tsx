
import { useEffect, useRef, useState } from "react"
import { Button } from "~/components/ui/button"



export default function AdminProducts() {   
    const [count,setCount]=useState(0)
    const PrevCount = useRef<number>(0)

    useEffect(() => {
        PrevCount.current = count
    },[count])
    
    return(
    <div>
        <h1>Admin Products Page</h1>
        <p>Current Count: {count}</p>
        <p>Previous Count: {PrevCount.current}</p>
        <Button  className="px-2 py-1 border mx-40" onClick={() => setCount(count + 1)}>Increment</Button>
    </div>
)
}
