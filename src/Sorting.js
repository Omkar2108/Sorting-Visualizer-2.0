import { useState, useEffect } from "react";
import Element from "./Element";
import BubbleSort from "./algorithms/bubbleSort";
import SelectionSort from "./algorithms/selectionSort";
import InsertionSort from "./algorithms/insertionSort";
import MergeSort from "./algorithms/mergeSort";

const DEFAULT_COLOUR = "#553c9a";
const RED = "red";

function Sorting() {
  const [array, setArray] = useState([]);
  const [size, setSize] = useState(30);
  const [speed, setSpeed] = useState(200);
  //   const [timeouts, setTimeouts] = useState([]);
  const [button, setButton] = useState(false);

  //   const handleStop = () => {
  //     // console.log(timeouts);
  //     for (let i of timeouts) {
  //       console.log(i);
  //       clearTimeout(i);
  //     }
  //   };

  const randomArray = (size) => {
    const array = [];
    for (let i = 0; i < size; i++) {
      array.push(parseInt(Math.random() * 550));
    }
    setArray(array);
  };

  const animate = (i, j, count, arr = []) => {
    const j1 = document.getElementById(i.toString());
    const j2 = document.getElementById(j.toString());
    setTimeout(() => {
      j1.style.backgroundColor = RED;
      j2.style.backgroundColor = RED;
      if (arr.length > 1) setArray(arr);
    }, count++ * speed);
    setTimeout(() => {
      j1.style.backgroundColor = DEFAULT_COLOUR;
      j2.style.backgroundColor = DEFAULT_COLOUR;
    }, count++ * speed);
    return count;
  };

  const bubbleSort = () => {
    setButton(true);
    const ans = BubbleSort(array);
    let count = 0;
    for (let value of ans) {
      const { i, j, arr } = value;
      count = animate(i, j, count, arr.slice());
    }
    setTimeout(()=>{
      setButton(false);
    }, count * speed);
  };

  const selectionSort = () =>{
    setButton(true);
    const ans = SelectionSort(array);
    let count =0;
    for(let value of ans){
      const {i, j, arr } = value;
      count = animate(i, j, count, arr.slice());
    }
    setTimeout(()=>{
      setButton(false);
    }, count * speed);
  }

  const insertionSort = () =>{
    setButton(true);
    const ans = InsertionSort(array);
    let count =0;
    for(let value of ans){
      const {i, j, arr} = value;
      count = animate(i, j, count, arr.slice());
    }
    setTimeout(()=>{
      setButton(false);
    }, count * speed);
  }

  const mergeSort = () =>{
    setButton(true);
    const ans = MergeSort(array);
    let count =0;
    // for(let value of ans){
    //   const {i, j, arr} = value;
    //   count = animate(i, j, count, arr.slice());
      // console.log(arr);
    // }
    setTimeout(()=>{
      setButton(false);
    }, count * speed);
  }

  // const mergeSort = (array) => {
  //   let left = [], right = [], count=0;
  //   const n = array.length,
  //     mid = parseInt(n / 2);
  //   if (n > 1) {
  //     for (let i = 0; i < n; i++) {
  //       if (i < mid) {
  //         left[i] = array[i];
  //       } else {
  //         right[i - mid] = array[i];
  //       }
  //     }
  //     mergeSort(left);
  //     mergeSort(right);
  //     let i = 0,
  //       j = 0,
  //       k = 0;
  //     while (i < mid && j < n - mid) {
  //       array[k++] = left[i] < right[j] ? left[i++] : right[j++];
  //       count = animate(i, k, count, array.slice());
  //     }
  //     while (i < mid) {
  //       array[k++] = left[i++];
  //       count = animate(i, k, count, array.slice());
  //     }
  //     while (j < n - mid) {
  //       array[k++] = right[j++];
  //       count = animate(j, k, count, array.slice());
  //     }
  //   }
  // };

  const handleArraySize = (e) => {
    if (e.target.value !== undefined) {
      setSize(e.target.value);
    } else {
      setSize(30);
    }
    randomArray(e.target.value);
    // console.log(array);
  };

  useEffect(() => {
    randomArray(size);
  }, [size]);

  return (
    <div className="mx-auto">
      <div className="flex justify-center items-center bg-blue-100">
        <div className="flex-col">
          <p className="text-sm text-purple-500">
            Array Size ({size} elements){" "}
          </p>
          <input
            disabled={button}
            className="hover:cursor-pointer"
            type="range"
            min={5}
            max={50}
            step={5}
            defaultValue={size}
            onChange={(e) => handleArraySize(e)}
          />
          <p className="text-sm text-purple-500">Sorting Speed ({speed} ms) </p>
          <input
            className=""
            disabled={button}
            type="range"
            min={1}
            step={10}
            max={301}
            defaultValue={speed}
            onChange={(e) => setSpeed(e.target.value)}
          />
        </div>
        <div className="flex justify-center items-center  m-6 space-x-6">
          <button
            disabled={button}
            className="bg-blue-200  hover:bg-green-200  px-4 py-2  rounded"
            onClick={() => randomArray(size)}
          >
            New Array
          </button>
          <button
            disabled={button}
            className="bg-blue-200 text-black hover:bg-red-200  px-4 py-2  rounded border-red-400"
            onClick={() => bubbleSort()}
          >
            Bubble Sort
          </button>
          <button
            disabled={button}
            className="bg-blue-200 hover:bg-red-200 r px-4 py-2  rounded"
            onClick={() => mergeSort(array)}
          >
            Merge Sort
          </button>
          <button
            disabled={button}
            className="bg-blue-200 hover:bg-red-200  px-4 py-2  rounded"
          >
            Quick Sort
          </button>
          <button
            disabled={button}
            className="bg-blue-200 hover:bg-red-200  px-4 py-2 rounded"
          >
            Heap Sort
          </button>
          <button
            disabled={button}
            className="bg-blue-200  hover:bg-red-200 px-4 py-2 rounded"
            onClick={() => insertionSort()}
          >
            Insertion Sort
          </button>
          <button
            disabled={button}
            className="bg-blue-200 hover:bg-red-200 text-center px-4 py-2 rounded"
            onClick={() => selectionSort()}
          >
            Selection Sort
          </button>
          {/* <button
            className="bg-blue-200 text-black hover:bg-red-500 text-center px-4 py-2 m-6 rounded"
            onClick={() => handleStop()}
          >
            Stop
          </button> */}
        </div>
      </div>

      <Element array={array} />
    </div>
  );
}

export default Sorting;
