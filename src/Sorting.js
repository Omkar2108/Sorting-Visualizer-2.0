import { useState, useEffect } from 'react';
import Element from './Element';

function Sorting() {

    const [array, setArray] = useState([]);
    const [size, setSize]= useState(30);
    const [speed, setSpeed] =  useState(100);
    const [stop, setStop] = useState(false);

    const randomArray = (size)=>{
        // console.log("size",size);
        const array = [];
        for (let i = 0; i < size; i++) {
            array.push(parseInt(Math.random() * (550)));
        }
        setArray(array);
    }


    const bubbleSort=()=>{
       let count=0;
       const newArray = array.slice();
       for(let i=0;i<newArray.length;i++){
           for(let j=0;j<newArray.length-i-1;j++){
                if(newArray[j]>newArray[j+1]){
                    let temp = newArray[j];
                    newArray[j]=newArray[j+1];
                    newArray[j+1]=temp;
                }
                const j1=document.getElementById(j.toString());
                const j2 = document.getElementById((j+1).toString());
                const arr = newArray.slice();
                setTimeout(()=>{
                    j1.style.backgroundColor="red";
                    j2.style.backgroundColor="red";
                    setArray(arr);
                }, count++ * speed);
                setTimeout(()=>{
                    j1.style.backgroundColor="#553c9a";
                    j2.style.backgroundColor="#553c9a";
                }, count++ * speed );
           }
        }
    }
       
    const selectionSort =()=>{
        const newArray = array.slice();
        let count=0;
        for(let i=0;i<newArray.length;i++){
            let min = i;
            for(let j=i+1;j<newArray.length;j++){
                if(newArray[min] > newArray[j]){
                    min = j;
                }
                const j1=document.getElementById(j.toString());
                const j2 = document.getElementById(min.toString());
                setTimeout(()=>{
                    j1.style.backgroundColor="red";
                    j2.style.backgroundColor="red";
                }, count++ * speed);
                setTimeout(()=>{
                    j1.style.backgroundColor="#553c9a";
                    j2.style.backgroundColor="#553c9a";
                }, count++ * speed );
            }
            if(min !== i){
                const temp = newArray[min];
                newArray[min] = newArray[i];
                newArray[i] = temp;
                const j1=document.getElementById(i.toString());
                const j2 = document.getElementById(min.toString());
                const arr = newArray.slice();
                setTimeout(()=>{
                    j1.style.backgroundColor="red";
                    j2.style.backgroundColor="red";
                    setArray(arr);
                }, count++ * speed);
                setTimeout(()=>{
                    j1.style.backgroundColor="#553c9a";
                    j2.style.backgroundColor="#553c9a";
                }, count++ * speed );
            }
        }
        console.log(newArray);
    }

    const insertionSort = ()=>{
        const newArray = array.slice();
        let count=0;
        for(let i=1;i<newArray.length;i++){
            let key = newArray[i], j=i-1;
            while(j >=0 && newArray[j] > key){
                newArray[j+1] = newArray[j];
                const j1=document.getElementById(i.toString());
                const j2 = document.getElementById(j.toString());
                const arr = newArray.slice();
                setTimeout(()=>{
                    j1.style.backgroundColor="red";
                    j2.style.backgroundColor="red";
                    setArray(arr);
                }, count++ * speed);
                setTimeout(()=>{
                    j1.style.backgroundColor="#553c9a";
                    j2.style.backgroundColor="#553c9a";
                }, count++ * speed );
                j--;
            }
            newArray[j+1] = key;
        }
    }

    const mergeSort = (array) =>{
        let left=[], right=[];
        const n = array.length, mid =parseInt(n/2);
        if(n >1) {
            for(let i=0;i<n;i++){
                if(i<mid){
                    left[i]=array[i];
                }else{
                    right[i-mid]=array[i];
                }
            }
            mergeSort(left);
            mergeSort(right);
            let i=0,j=0,k=0;
            while(i<mid && j < n-mid ){
                array[k++] = left[i] < right[j] ? left[i++] : right[j++];
            }
            while(i<mid){
                array[k++] = left[i++];
            }
            while(j<n-mid){
                array[k++] = right[j++];
            }
            console.log(array);
            setArray(array);
        }
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
                <button className="bg-blue-200 text-black hover:bg-red-200 text-center px-4 py-2 m-6 rounded" onClick={()=>mergeSort(array)}>Merge Sort</button>
                <button className="bg-blue-200 text-black hover:bg-red-200 text-center px-4 py-2 m-6 rounded">Quick Sort</button>
                <button className="bg-blue-200 text-black hover:bg-red-200 text-center px-4 py-2 m-6 rounded">Heap Sort</button>
                <button className="bg-blue-200 text-black hover:bg-red-200 text-center px-4 py-2 m-6 rounded" onClick={()=> insertionSort()}>Insertion Sort</button>
                <button className="bg-blue-200 text-black hover:bg-red-200 text-center px-4 py-2 m-6 rounded" onClick={()=>selectionSort()}>Selection Sort</button>
                <button className="bg-blue-200 text-black hover:bg-red-500 text-center px-4 py-2 m-6 rounded" onClick={()=>setStop(true)}>Stop</button>
            </div>  

            </div>
            
            <Element array={array} stop={stop}/>

        </div>
    )
}


export default Sorting
