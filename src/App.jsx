import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MainLayout from "./layouts/MainLayout";
import JobsPage from "./pages/JobsPage";
import NotFoundPage from "./pages/NotFoundPage";
import JobPage, { jobLoader } from "./pages/JobPage";
import AddJobPage from "./pages/AddJobPage";
import EditJobPage from "./pages/EditJobPage";




const App = () => {

  const addJob = async (newJob) => {
    const res = await fetch('/api/jobs', {
      method: "POST",
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(newJob),
    });
    return;
  };

  const deleteJob = async (id) =>{
    const res = await fetch(`/api/jobs/${id}`, {
      method: "DELETE",
    });
    return;
  }
  const updateJob = async (updatedJob) => {

    console.log(updatedJob);

    const res = await fetch(`/api/jobs/${updatedJob.id}`, {
      method: "PUT",
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(updatedJob),
    });
    return;
  };


  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/Jobs" element={<JobsPage />} />
        <Route path="/job/:id" element={<JobPage deleteJob={deleteJob} />} loader={jobLoader} />
        <Route path="/edit-job/:id" element={<EditJobPage updateJobSummit={updateJob}/>} loader={jobLoader} />
        <Route path="/add-job" element={<AddJobPage addJobSummit={addJob} />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App
