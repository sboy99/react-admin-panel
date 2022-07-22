import "./App.css";
import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { Navbar, Footer, Sidebar, ThemeSettings } from "./components";
import {
  Line,
  Ecommerce,
  Orders,
  Calendar,
  Employees,
  Stacked,
  Pyramid,
  Customers,
  Kanban,
  Area,
  Bar,
  Financial,
  Pie,
  ColorMapping,
  ColorPicker,
  Editor,
} from "./pages";
import { useStateContext } from "./context/contextProvider";

const App = () => {
  const {
    activeMenu,
    themeSettings,
    setThemeSettings,
    currentColor,
    currentMode,
  } = useStateContext();
  return (
    <main className={currentMode === "Dark" && `dark`}>
      <BrowserRouter>
        <div className="relative flex dark:bg-main-dark-bg  ">
          <div className="fixed right-3 bottom-3 " style={{ zIndex: "1000" }}>
            <TooltipComponent content={`Settings`} position="LeftCenter">
              <button
                type="button"
                className=" p-3 text-2xl text-white hover:bg-light-gray hover:drop-shadow-xl"
                style={{ background: currentColor, borderRadius: "50%" }}
                onClick={() => setThemeSettings(true)}
              >
                <FiSettings />
              </button>
            </TooltipComponent>
          </div>
          {activeMenu ? (
            <div className=" sidebar fixed w-80 bg-white dark:bg-main-dark-bg ">
              <Sidebar />
            </div>
          ) : (
            <div className="w-0 dark:bg-main-dark-bg">
              <Sidebar />
            </div>
          )}
          <div
            className={`min-h-screen w-full bg-main-bg dark:bg-main-dark-bg ${
              activeMenu ? `md:ml-80` : `flex-2`
            }`}
          >
            <div className="navbar fixed w-full bg-main-bg dark:bg-main-dark-bg md:static">
              <Navbar />
            </div>
            {/* //Routes */}
            <div className="mt-16">
              {themeSettings && <ThemeSettings />}
              <Routes>
                {/* DashBoard */}
                <Route path="/" element={<Ecommerce />} />
                <Route path="/ecommerce" element={<Ecommerce />} />

                {/* Pages */}
                <Route path="/orders" element={<Orders />} />
                <Route path="/employees" element={<Employees />} />
                <Route path="/customers" element={<Customers />} />

                {/* Apps */}
                <Route path="/kanban" element={<Kanban />} />
                <Route path="/editor" element={<Editor />} />
                <Route path="/calendar" element={<Calendar />} />
                <Route path="/color-picker" element={<ColorPicker />} />

                {/* Charts */}
                <Route path="/line" element={<Line />} />
                <Route path="/area" element={<Area />} />
                <Route path="/bar" element={<Bar />} />
                <Route path="/pie" element={<Pie />} />
                <Route path="/financial" element={<Financial />} />
                <Route path="/color-mapping" element={<ColorMapping />} />
                <Route path="/pyramid" element={<Pyramid />} />
                <Route path="/stacked" element={<Stacked />} />
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </main>
  );
};

export default App;
