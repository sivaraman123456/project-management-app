import NewProject from "./components/NewProject";
import { NoProjectSelected } from "./components/NoProjectSelected";
import SideBar from "./components/SideBar";
import { useState } from "react";
const App = () => {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: [],
  });
  const handleSlectedProject = () => {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  };
  let content = null;
  if (projectState.selectedProjectId === null) {
    content = <NewProject />;
  } else {
    content = <NoProjectSelected />;
  }
  return (
    <>
      <main className="h-screen flex gap-8">
        <SideBar onSelected={handleSlectedProject} />
        {content}
      </main>
    </>
  );
};

export default App;
