import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NativeBaseProvider } from "native-base";

import {
  Login,
  Register,
  Home,
  NewBussiness,
  Transaksi,
  Pengambilan,
  Status,
  Pelanggan,
  PelangganDetail
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
            <Route path="/pelanggan" element={<Pelanggan />} />
            <Route path="/pelanggan/:id" element={<PelangganDetail />} />
          </Routes>
        </NativeBaseProvider>
      </Router>
    </div>
  );
}

export default App;
