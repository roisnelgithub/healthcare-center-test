import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MQContextProvider, MenuContextProvider } from "./components";

import {
  AboutPage,
  ContactPage,
  HomePage,
  LaPage,
  ServicesPage,
  WhyUsPage,
} from "./pages";
import { ShareLayout } from "./layout";

import "./app.css";

function App() {
  return (
    <MQContextProvider>
      <MenuContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<ShareLayout />}>
              <Route index element={<HomePage />} />
              <Route path="/about" element={<AboutPage />}></Route>
              <Route path="/about/why-us" element={<WhyUsPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/services/la" element={<LaPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </MenuContextProvider>
    </MQContextProvider>
  );
}

export default App;
