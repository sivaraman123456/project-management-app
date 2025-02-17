import NewProject from "./components/NewProject";
import { NoProjectSelected } from "./components/NoProjectSelected";
import SelectedProject from "./components/SelectedProject";
import SideBar from "./components/SideBar";
import { useState } from "react";
const App = () => {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: [],
 
  });
  console.log("SelectedProjectID>>>>>", projectState);

  // create a new project
  const handleSlectedProject = () => {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  };

  //Add a new  peroject
  const handleAddProject = (project) => {
    console.log("Project:", project);

    setProjectState((prevState) => {
      const newData = {
        ...project,
        id: Math.random(),
      };
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newData],
      };
    });
  };

  // move to NO project
  const handleCancelProject = () => {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
      };
    });
  };

  // Add selected Project ID

  const handleSelectedProjectId = (id) => {
    console.log("ID>>>>:", id);

    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: id,
      };
    });
  };
  // find the slected project data
  const selectedProject = projectState.projects.find((data) => {
    return data?.id === projectState?.selectedProjectId;
  });
  console.log("selectedproject:", selectedProject);

  // delete project scenario
  const handleDelete = () => {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: prevState.projects.filter(
          (data) => data.id !== prevState.selectedProjectId
        ),
      };
    });
  };

  // // create new Task logic
  // const handleAddTask = (data) =>{
  //   setProjectState((prevState)=>{
  //     const newTask ={
  //       task :data,
  //       id :Math.random()
  //     }
  //     return {
  //       ...prevState,
  //       projects:[...prevState.projects],
  //       tasks:[...(prevState.tasks || []),newTask]

  //     }
  //   })
  // }

  const handleAddTask = (data) =>{
setProjectState((prevState)=>{
  return{
    ...prevState,
    projects: prevState.projects.map((project)=>
    project.id === prevState.selectedProjectId ?
      {
        ...project,
        tasks:[...(project.tasks || []),{id:Math.random(),task:data}]
      }
      :
      project
    )
  }
})
  }

  let content = null;
  if (projectState.selectedProjectId === null) {
    content = (
      <NewProject onCancel={handleCancelProject} onAdd={handleAddProject} />
    );
  } else if (projectState.selectedProjectId === undefined) {
    content = <NoProjectSelected onSelected={handleSlectedProject} />;
  } else {
    content = (
      <SelectedProject
        project={selectedProject}
        onDelete={handleDelete}
        onAdd={handleAddTask}
        tasks={selectedProject?.tasks|| []}
        setProject={setProjectState}
      />
    );
  }
  return (
    <>
      <main className="h-screen flex gap-8">
        <SideBar
          onSelected={handleSlectedProject}
          title={projectState?.projects}
          selectedID={handleSelectedProjectId}
        />
        {content}
      </main>
    </>
  );
};

export default App;
