Features

    Users can create Teams and add users to teams

    Users can create multiple projects within teams depending on scope

    Users can create and assign tasks to members of teams

    Users can check off completed tasks via tasklists

Future Features

    Search functionality
    Ability to drag tasklists
    Removal of team members



// src/App.js
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App p-8 bg-gray-200 min-h-screen">
      <header className="text-4xl mb-8 text-gray-800">Project Management Tool</header>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Teams */}
        <div className="col-span-1 bg-white p-4 rounded-md shadow-md">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Teams</h2>
          <ul>
            {/* Sample Team */}
            <li className="mb-2 cursor-pointer transition duration-300 ease-in-out hover:bg-gray-100 p-2 rounded">
              Team Alpha
            </li>
            {/* Add more teams as needed */}
          </ul>
        </div>

        {/* Projects */}
        <div className="col-span-1 bg-white p-4 rounded-md shadow-md">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Projects</h2>
          <ul>
            {/* Sample Project */}
            <li className="mb-2 cursor-pointer transition duration-300 ease-in-out hover:bg-gray-100 p-2 rounded">
              Project A
            </li>
            {/* Add more projects as needed */}
          </ul>
        </div>

        {/* Tasks */}
        <div className="col-span-1 bg-white p-4 rounded-md shadow-md">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Tasks</h2>
          <ul>
            {/* Sample Task */}
            <li className="mb-2 cursor-pointer transition duration-300 ease-in-out hover:bg-gray-100 p-2 rounded">
              Task 1
            </li>
            {/* Add more tasks as needed */}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;





///////////////////////////////////////////////////


import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faCheck } from '@fortawesome/free-solid-svg-icons';

function SampleUI() {
  // State for teams, projects, and tasks
  const [teams, setTeams] = useState(['Team Alpha']);
  const [projects, setProjects] = useState(['Project A']);
  const [tasks, setTasks] = useState([
    { name: 'Task 1', description: 'This is the description for Task 1' },
    { name: 'Task 2', description: 'Another task with a description' },
    // Add more tasks as needed
  ]);

  // State for input values
  const [newTeam, setNewTeam] = useState('');
  const [newProject, setNewProject] = useState('');
  const [newTask, setNewTask] = useState('');

  const [taskDetails, setTaskDetails] = useState({});

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
      setTasks([...tasks, { name: newTask, description: '' }]);
      setNewTask('');
    }
  };

  // Function to toggle task description
  const toggleTaskDetails = (taskIndex) => {
    setTaskDetails((prevDetails) => ({
      ...prevDetails,
      [taskIndex]: !prevDetails[taskIndex],
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
      <div className="container mx-auto p-8 flex flex-col">
        <header className="text-4xl mb-8 text-gray-800">Project Tool</header>
        <div className="flex">
          {/* Teams */}
          <div className="flex-shrink-0 bg-white p-8 rounded-md shadow-md mr-4 h-full overflow-y-auto">
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
              <button onClick={addTeam} className="bg-blue-500 text-white px-3 py-1 rounded min-w-max">Add Team</button>
            </div>
          </div>

          {/* Projects */}
          <div className="flex-shrink-0 bg-white p-8 rounded-md shadow-md mr-4 h-full overflow-y-auto">
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
              <button onClick={addProject} className="bg-blue-500 text-white px-3 py-1 rounded min-w-max">Add Project</button>
            </div>
          </div>

          {/* Tasks */}
          <div className="flex-shrink-0 bg-white p-8 rounded-md shadow-md h-full overflow-y-auto">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Tasks</h2>
            <ul>
              {tasks.map((task, index) => (
                <li key={index} className="mb-2 transition duration-300 ease-in-out hover:bg-gray-100 p-2 rounded">
                  <div className="flex items-center">
                    <span className="cursor-pointer" onClick={() => toggleTaskDetails(index)}>
                      {taskDetails[index] ? '➕' : '✅'}
                    </span>
                    {task.name}
                  </div>
                  {taskDetails[index] && (
                    <div className="text-gray-600 mt-2 ml-8">
                      {task.description || 'No description available'}
                    </div>
                  )}
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
              <button onClick={addTask} className="bg-blue-500 text-white px-3 py-1 rounded min-w-max">Add Task</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SampleUI;















# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
