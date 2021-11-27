import { useState, useEffect } from 'react';
import Element from './Element';

function Sorting() {

    const [array, setArray] = useState([]);
    const [size, setSize]= useState(30);
    const [speed, setSpeed] =  useState(30);


    const randomArray = (size)=>{
        // console.log("size",size);
        const array = [];
        for (let i = 0; i < size; i++) {
            array.push(parseInt(Math.random() * (550)));
        }
        setArray(array);
    }

    const bubbleSort=()=>{
        const newArray=array.slice();
        console.log(newArray);
        for(let i=0;i<newArray.length;i++){
            for(let j=0;j<newArray.length-1;j++){
                const j1=document.getElementById(j.toString());
                const j2 = document.getElementById((j+1).toString());
                setTimeout(()=>{
                    j1.style.backgroundColor="red";
                    j2.style.backgroundColor="red";

                }, j*speed);
                if(newArray[j]>newArray[j+1]){
                    const t=newArray[j];
                    newArray[j]=newArray[j+1];
                    newArray[j+1]=t;
                }
               setTimeout(()=>{
                j1.style.height=newArray[j+1];
                j2.style.height=newArray[j];
                j1.style.backgroundColor=" rgba(91, 33, 182)";
                j2.style.backgroundColor=" rgba(91, 33, 182)";
               }, j*speed);                
            }
        }
        // newArray.sort((a, b)=> a-b)
        setTimeout(()=>{
            console.log(newArray);
        }, 2000);
        setArray(newArray);
    }

    const handleArraySize = (e)=>{
        if( e.target.value!==undefined){
            setSize(e.target.value);
        }else{
            setSize(30);
        }
        randomArray(e.target.value);
        // console.log(array);
    }

    useEffect(() => {
       randomArray(size);
    }, [size])

    return (
        <div className="mx-10 ">
            <div className="bg-blue-100">
            <div className="flex mx-10">
                <p className="text-sm text-purple-500">Array Size ({size} elements)  </p>
                <input className="mx-5 relative hover:cursor-pointer" type="range" min={5} max={50} step={5} defaultValue={size} onChange={(e)=>handleArraySize(e) }/> 
                 <p className="text-sm text-purple-500">Sorting Speed ({speed} ms)  </p>
                <input className="mx-5 relative" type="range" min={5} step={5} max={200} defaultValue={speed} onChange={(e)=>setSpeed(e.target.value)}/>   
            </div>
            <div className="container flex text-md ">
                <button className="bg-blue-200 text-black hover:bg-green-200 text-center px-4 py-2 m-6 rounded"
                 onClick={()=>randomArray(size)}>New Array</button>
                <button className="bg-blue-200 text-black hover:bg-red-200 text-center px-4 py-2 m-6 rounded border-red-400"
                onClick={()=>bubbleSort()}>Bubble Sort</button>
                <button className="bg-blue-200 text-black hover:bg-red-200 text-center px-4 py-2 m-6 rounded">Merge Sort</button>
                <button className="bg-blue-200 text-black hover:bg-red-200 text-center px-4 py-2 m-6 rounded">Quick Sort</button>
                <button className="bg-blue-200 text-black hover:bg-red-200 text-center px-4 py-2 m-6 rounded">Heap Sort</button>
                <button className="bg-blue-200 text-black hover:bg-red-200 text-center px-4 py-2 m-6 rounded">Insertion Sort</button>
                <button className="bg-blue-200 text-black hover:bg-red-500 text-center px-4 py-2 m-6 rounded">Stop</button>
            </div>  

            </div>
            
            <Element array={array} />

        </div>
    )
}


export default Sorting
