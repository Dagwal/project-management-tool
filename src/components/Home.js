// src/App.js
import React, { useState } from 'react';

function Home() {
  // State for teams, projects, and tasks
  const [teams, setTeams] = useState(['Team Alpha']);
  const [projects, setProjects] = useState(['Project A']);
  const [tasks, setTasks] = useState(['Task 1']);

  // State for input values
  const [newTeam, setNewTeam] = useState('');
  const [newProject, setNewProject] = useState('');
  const [newTask, setNewTask] = useState('');

  // Function to add a new team
  const addTeam = () => {
    if (newTeam.trim() !== '') {
      setTeams([...teams, newTeam]);
      setNewTeam('');
    }
  };

  // Function to add a new project
  const addProject = () => {
    if (newProject.trim() !== '') {
      setProjects([...projects, newProject]);
      setNewProject('');
    }
  };

  // Function to add a new task
  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  };

  return (
    <div className="App bg-gray-200 min-h-screen">
      {/* Navigation Bar */}
      <nav className="bg-white shadow-md p-4 text-black">
        <div className="container mx-auto">
          <h1 className="text-2xl font-semibold">Project Manager</h1>
        </div>
      </nav>

      {/* Body */}
      <div className="container mx-auto p-8">
        <header className="text-4xl mb-8 text-gray-800">Project Tool</header>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Teams */}
          <div className="col-span-1 bg-white p-4 rounded-md shadow-md">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Teams</h2>
            <ul>
              {teams.map((team, index) => (
                <li key={index} className="mb-2 cursor-pointer transition duration-300 ease-in-out hover:bg-gray-100 p-2 rounded">
                  {team}
                </li>
              ))}
            </ul>
            <div className="flex mt-4">
              <input
                type="text"
                value={newTeam}
                onChange={(e) => setNewTeam(e.target.value)}
                placeholder="New Team"
                className="mr-2 p-2 border rounded w-full"
              />
              <button onClick={addTeam} className="bg-blue-500 text-white px-3 py-1 rounded min-w-fit">Add Team</button>
            </div>
          </div>

          {/* Projects */}
          <div className="col-span-1 bg-white p-4 rounded-md shadow-md">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Projects</h2>
            <ul>
              {projects.map((project, index) => (
                <li key={index} className="mb-2 cursor-pointer transition duration-300 ease-in-out hover:bg-gray-100 p-2 rounded">
                  {project}
                </li>
              ))}
            </ul>
            <div className="flex mt-4">
              <input
                type="text"
                value={newProject}
                onChange={(e) => setNewProject(e.target.value)}
                placeholder="New Project"
                className="mr-2 p-2 border rounded w-full"
              />
              <button onClick={addProject} className="bg-blue-500 text-white px-3 py-1 rounded min-w-fit">Add Project</button>
            </div>
          </div>

          {/* Tasks */}
          <div className="col-span-1 bg-white p-4 rounded-md shadow-md">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Tasks</h2>
            <ul>
              {tasks.map((task, index) => (
                <li key={index} className="mb-2 cursor-pointer transition duration-300 ease-in-out hover:bg-gray-100 p-2 rounded">
                  {task}
                </li>
              ))}
            </ul>
            <div className="flex mt-4">
              <input
                type="text"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
                placeholder="New Task"
                className="mr-2 p-2 border rounded w-full"
              />
              <button onClick={addTask} className="bg-blue-500 text-white px-3 py-1 rounded min-w-fit">Add Task</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
