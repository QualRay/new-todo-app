"use client"
import { useState } from "react"

export default function Home() {

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [mainTask, setMainTask] = useState([]);

  const deleteHandler = (i) => {
    let copyTask =[...mainTask]
    copyTask.splice(i, 1)
    setMainTask(copyTask)
    console.log(copyTask)
  }


  const submitHandler = (e) => {
    e.preventDefault();

    setMainTask([...mainTask, { title, desc }]);

    setTitle("");
    setDesc("");
    console.log(mainTask)
  }

  let renderTask = <h2>No Task Available</h2>
  if( mainTask.length > 0){
    renderTask = mainTask.map((t,i) => {
      return (
        <li key={i} className="flex items-center justify-between mb-5">
        <div className="flex items-center justify-between mb-5 w-2/3">
          <h5 className="text-2xl font-semibold">{t.title}</h5>
          <h6 className="text-l">{t.desc}</h6>
        </div>
        <button 
        onClick={() => {
          deleteHandler(i)
        }}
        className="bg-red-600 px-4 py-2 text-white rounded"> Delete </button>
        </li>
      );
    });

  }

  return (
    <>
      <main className='min-h-screen'>
        <h1 className="text-2xl font-bold text-center items-center pt-5">My To-Do List(s)</h1>
        <div className='flex justify-center mb-5'>
          <form onSubmit={submitHandler}>
            <input
              type='text'
              className="text-xl border-4 m-5 px-4 py-2"
              placeholder="Enter title..."
              value={title}
              onChange={(e) => {
                setTitle(e.target.value)
              }}
            />
            <input
              type='text'
              className="text-xl border-4 m-5 px-4 py-2"
              placeholder="Enter description..."
              value={desc}
              onChange={(e) => {
                setDesc(e.target.value)
              }}
            />
            <button className="rounded bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm m-5">Add Items</button>

          </form>
          
        </div>
        <hr/>
        <div className="p-8 bg-slate-200">
          <ul>
            {renderTask}
          </ul>
        </div>
      </main>
    </>
  )
}
