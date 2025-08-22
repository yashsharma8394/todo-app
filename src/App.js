import React, { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  const addTask = () => {
    if (input.trim() === "") return;
    setTasks([...tasks, { text: input, completed: false }]);
    setInput("");
  };

  const toggleTask = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 p-4">
      <div className="bg-white/80 backdrop-blur-lg p-8 rounded-3xl shadow-2xl w-full max-w-md transition-all">
        {/* Heading */}
        <h1 className="text-3xl font-extrabold text-center text-gray-800 mb-6 tracking-wide drop-shadow-md">
          ✨ My Todo List
        </h1>

        {/* Input & Add Button */}
        <div className="flex mb-6 shadow-sm">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="What’s on your mind?"
            className="flex-1 border border-gray-300 rounded-l-xl px-4 py-3 outline-none focus:ring-2 focus:ring-purple-400 focus:border-purple-400 transition-all"
          />
          <button
            onClick={addTask}
            className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-r-xl hover:from-purple-600 hover:to-pink-600 font-semibold transition-all"
          >
            Add
          </button>
        </div>

        {/* Tasks List */}
        <ul className="space-y-3">
          {tasks.map((task, index) => (
            <li
              key={index}
              className="flex items-center justify-between bg-white p-3 rounded-xl shadow hover:shadow-md transition-all"
            >
              <div className="flex items-center">
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => toggleTask(index)}
                  className="mr-3 w-5 h-5 accent-purple-500 cursor-pointer"
                />
                <span
                  className={`text-lg ${
                    task.completed
                      ? "line-through text-gray-400 italic"
                      : "text-gray-700"
                  }`}
                >
                  {task.text}
                </span>
              </div>
              <button
                onClick={() => deleteTask(index)}
                className="text-red-400 hover:text-red-600 text-lg font-bold transition-all"
              >
                ✖
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
