import React, { useState } from "react";
import "../App.css";

function SampleUI() {
  // State for teams, projects, and tasks
  const [teams, setTeams] = useState([
    { name: "Dagim", description: "This is the description for Team 1" },
    { name: "Kidest", description: "Another team with a description" },
  ]);
  const [projects, setProjects] = useState([
    { name: "Project 1", description: "This is the description for Project 1" },
    { name: "Project 2", description: "Another Project with a description" },
  ]);
  const [tasks, setTasks] = useState([
    { name: "Task 1", description: "This is the description for Task 1" },
    { name: "Task 2", description: "Another task with a description" },
  ]);

  // State for input values
  const [newTeamName, setNewTeamName] = useState("");
  const [newTeamDescription, setNewTeamDescription] = useState("");

  const [newTaskName, setNewTaskName] = useState("");
  const [newTaskDescription, setNewTaskDescription] = useState("");

  const [newProjectName, setNewProjectName] = useState("");
  const [newProjectDescription, setNewProjectDescription] = useState("");

  const [taskDetails, setTaskDetails] = useState({});
  const [projectDetails, setProjectDetails] = useState({});
  const [teamDetails, setTeamDetails] = useState({});

  // Function to add a new team
  const addTeam = () => {
    if (newTeamName.trim() !== "") {
      const newTeam = {
        name: newTeamName.trim(),
        description: newTeamDescription.trim() || "",
      };

      setTeams([...teams, newTeam]);

      // Reset input fields
      setNewTeamName("");
      setNewTeamDescription("");
    }
  };

  // Function to add a new project
  const addProject = () => {
    if (newProjectName.trim() !== "") {
      const newProject = {
        name: newProjectName.trim(),
        description: newProjectDescription.trim() || "",
      };

      setProjects([...projects, newProject]);

      // Reset input fields
      setNewProjectName("");
      setNewProjectDescription("");
    }
  };

  // Function to add a new task
  const addTask = () => {
    if (newTaskName.trim() !== "") {
      const newTask = {
        name: newTaskName.trim(),
        description: newTaskDescription.trim(),
      };

      setTasks([...tasks, newTask]);
      // Reset input fields

      setNewTaskName("");
      setNewTaskDescription("");
    }
  };

  // Function to toggle task description
  const toggleTaskDetails = (taskIndex) => {
    setTaskDetails((prevDetails) => ({
      ...prevDetails,
      [taskIndex]: !prevDetails[taskIndex],
    }));
  };

  // Function to toggle project description
  const toggleProjectDetails = (projectIndex) => {
    setProjectDetails((prevDetails) => ({
      ...prevDetails,
      [projectIndex]: !prevDetails[projectIndex],
    }));
  };

  // Function to toggle team description
  const toggleTeamDetails = (teamIndex) => {
    setTeamDetails((prevDetails) => ({
      ...prevDetails,
      [teamIndex]: !prevDetails[teamIndex],
    }));
  };

  return (
    <div className="App bg-gray-200 min-h-screen">
      {/* Navigation Bar */}
      <nav className="bg-gray-800 shadow-md p-4 text-white">
        <div className="container mx-auto">
          <h1 className="text-2xl font-semibold">Project Manager</h1>
        </div>
      </nav>

      {/* Body */}
      <div className="container mx-auto p-10 flex flex-col" style={{ backgroundImage: 'url("../src/assets/bg.png")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <header className="text-4xl mb-8 text-gray-800">Project Managment Tool</header>
        <div className="flex">

          {/* Teams */}
          <div className="flex-shrink-0 bg-white p-8 rounded-md shadow-md h-full max-w-sm  ml-auto max overflow-y-auto">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Teams</h2>
            <ul>
              {teams.map((team, index) => (
                <li
                  key={index}
                  className="mb-2 transition duration-300 ease-in-out hover:bg-gray-100 p-2 rounded"
                >
                  <div className="flex items-center">
                    <span
                      className="cursor-pointer"
                      onClick={() => toggleTeamDetails(index)}
                    >
                      {teamDetails[index] ? "➕" : "✅"}
                    </span>
                    {team.name}
                  </div>
                  {teamDetails[index] && (
                    <div className="text-gray-600 mt-2 ml-8">
                      {team.description || "No description available"}
                    </div>
                  )}
                </li>
              ))}
            </ul>
            <div className="flex mt-4">
              <input
                type="text"
                value={newTeamName}
                onChange={(e) => setNewTeamName(e.target.value)}
                placeholder="Team Name"
                className="mr-2 p-2 border rounded w-full"
              />
              <input
                type="text"
                value={newTeamDescription}
                onChange={(e) => setNewTeamDescription(e.target.value)}
                placeholder="Team Description"
                className="mr-2 p-2 border rounded w-full"
              />
              <button
                onClick={addTeam}
                className="bg-blue-500 text-white px-3 py-1 rounded min-w-max"
              >
                Add Team
              </button>
            </div>
          </div>

          {/* Projects */}
          <div className="flex-shrink-0 bg-white p-8 rounded-md shadow-md h-full max-w-sm  ml-auto max overflow-y-auto">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">
              Projects
            </h2>
            <ul>
              {projects.map((project, index) => (
                <li
                  key={index}
                  className="mb-2 transition duration-300 ease-in-out hover:bg-gray-100 p-2 rounded"
                >
                  <div className="flex items-center">
                    <span
                      className="cursor-pointer"
                      onClick={() => toggleProjectDetails(index)}
                    >
                      {projectDetails[index] ? "➕" : "✅"}
                    </span>
                    {project.name}
                  </div>
                  {projectDetails[index] && (
                    <div className="text-gray-600 mt-2 ml-8">
                      {project.description || "No description available"}
                    </div>
                  )}
                </li>
              ))}
            </ul>
            <div className="flex mt-4">
              <input
                type="text"
                value={newProjectName}
                onChange={(e) => setNewProjectName(e.target.value)}
                placeholder="Project Name"
                className="mr-2 p-2 border rounded w-full"
              />
              <input
                type="text"
                value={newProjectDescription}
                onChange={(e) => setNewProjectDescription(e.target.value)}
                placeholder="Project Description"
                className="mr-2 p-2 border rounded w-full"
              />
              <button
                onClick={addProject}
                className="bg-blue-500 text-white px-3 py-1 rounded min-w-max"
              >
                Add Project
              </button>
            </div>
          </div>

          {/* Tasks */}
          <div className="flex-shrink-0 bg-white p-8 rounded-md shadow-md h-full max-w-sm ml-auto max overflow-y-auto">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Tasks</h2>
            <ul>
              {tasks.map((task, index) => (
                <li
                  key={index}
                  className="mb-2 transition duration-300 ease-in-out hover:bg-gray-100 p-2 rounded"
                >
                  <div className="flex items-center">
                    <span
                      className="cursor-pointer"
                      onClick={() => toggleTaskDetails(index)}
                    >
                      {taskDetails[index] ? "➕" : "✅"}
                    </span>
                    {task.name}
                  </div>
                  {taskDetails[index] && (
                    <div className="text-gray-600 mt-2 ml-8">
                      {task.description || "No description available"}
                    </div>
                  )}
                </li>
              ))}
            </ul>
            <div className="flex mt-4">
              <input
                type="text"
                value={newTaskName}
                onChange={(e) => setNewTaskName(e.target.value)}
                placeholder="Task Name"
                className="mr-2 p-2 border rounded w-full"
              />
              <input
                type="text"
                value={newTaskDescription}
                onChange={(e) => setNewTaskDescription(e.target.value)}
                placeholder="Task Description"
                className="mr-2 p-2 border rounded w-full"
              />
              <button
                onClick={addTask}
                className="bg-blue-500 text-white px-3 py-1 rounded min-w-max"
              >
                Add Task
              </button>
            </div>
          </div>

          
        </div>
      </div>
    </div>
  );
}

export default SampleUI;
