import { Route, Routes } from "react-router-dom";
import WebsiteLayout from "./Layout/websiteLayout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<WebsiteLayout />} />
      </Routes>
    </>
  );
}

export default App;
