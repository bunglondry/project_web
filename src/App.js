import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NativeBaseProvider, Text, Box, extendTheme } from "native-base";

import {
  Login,
  Register,
  Home,
  NewBussiness,
  Transaksi,
  Pengambilan,
  Status,
} from "./pages";
import "./App.scss";

function App() {
  return (
    <div className="container-landing-page">
      <Router>
        <NativeBaseProvider>
          <Routes>
            {/* Auth */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            {/* Pages */}
            <Route path="/" element={<Home />} />
            <Route path="/transaksi" element={<Transaksi />} />
            <Route path="/pengambilan" element={<Pengambilan />} />
            <Route path="/status" element={<Status />} />
            <Route path="/new-bussiness" element={<NewBussiness />} />
          </Routes>
        </NativeBaseProvider>
      </Router>
    </div>
  );
}

export default App;
