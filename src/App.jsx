import NewProject from "./components/NewProject";
import { NoProjectSelected } from "./components/NoProjectSelected";
import SideBar from "./components/SideBar";
import { useState } from "react";
const App = () => {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: [],
  });
  console.log("SelectedProjectID>>>>>", projectState);

  const handleSlectedProject = () => {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  };

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


  const handleCancelProject = () => {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
      };
    });
  };
  let content = null;
  if (projectState.selectedProjectId === null) {
    content = (
      <NewProject onCancel={handleCancelProject} onAdd={handleAddProject} />
    );
  } else {
    content = <NoProjectSelected onSelected={handleSlectedProject} />;
  }
  return (
    <>
      <main className="h-screen flex gap-8">
        <SideBar onSelected={handleSlectedProject}  title={projectState.projects} />
        {content}
      </main>
    </>
  );
};

export default App;
