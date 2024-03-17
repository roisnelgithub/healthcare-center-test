import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MQContextProvider, MenuContextProvider } from "./components";

import {
  AboutPage,
  ContactPage,
  HomePage,
  ServicePage,
  ServicesPage,
  WhyUsPage,
} from "./pages";
import { ShareLayout } from "./layout";

import "./app.css";
import { LanguageContextProvider } from "./context";

function App() {
  return (
    <MQContextProvider>
      <LanguageContextProvider>
        <MenuContextProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<ShareLayout />}>
                <Route index element={<HomePage />} />
                <Route path="/about" element={<AboutPage />}></Route>
                <Route path="/about/why-us" element={<WhyUsPage />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/services/:id" element={<ServicePage />} />
                <Route path="/contact" element={<ContactPage />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </MenuContextProvider>
      </LanguageContextProvider>
    </MQContextProvider>
  );
}

export default App;
