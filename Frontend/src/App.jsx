import "./App.css";
import { Route, Routes } from "react-router-dom";
import IndexPage from "./pages/IndexPage.jsx";
import LoginPage from "./pages/Login.jsx";
import Layout from "./Layout";
import RegisterPage from "./pages/Register.jsx";
import axios from "axios";
import { UserContextProvider } from "./UserContext";
import ProfilePage from "./pages/ProfilePage.jsx";
import PlacesPage from "./pages/PlacesPage";
import PlacesFormPage from "./pages/PlacesFormPage";
import PlacePage from "./pages/PlacePage";
import BookingsPage from "./pages/BookingsPage";
import Allposts from "./pages/AllPosts.jsx";

axios.defaults.baseURL = "http://localhost:8000/api";
axios.defaults.withCredentials = true;

// https://placebooking-com.onrender.com
function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<IndexPage />} />
          <Route path="/all" element={<Allposts />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/account" element={<ProfilePage />} />
          <Route path="/account/places" element={<PlacesPage />} />
          <Route path="/account/places/new" element={<PlacesFormPage />} />
          <Route path="/account/places/:id" element={<PlacesFormPage />} />
          <Route path="/place/:id" element={<PlacePage />} />
          <Route path="/account/bookings" element={<BookingsPage />} />
        </Route>
      </Routes>
    </UserContextProvider>
  );
}

export default App;
