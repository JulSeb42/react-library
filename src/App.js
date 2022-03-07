// Packages
import React from "react"
import { Routes, Route } from "react-router-dom"

// Routes
import routes from "./routes/routes"

// Components
import Nav from "./components/demo/NavDemo"
import ContainerDemo from "./components/demo/ContainerDemo"
import DemoPageLoading from "./pages/demos/DemoPageLoading"

const App = () => {
    return (
        <>
            <Nav />

            <ContainerDemo>
                <Routes>
                    {routes.map((route, i) => (
                        <Route
                            path={route.path}
                            element={<route.element />}
                            key={i}
                        />
                    ))}

                    <Route
                        path="/page-loading/demo"
                        element={<DemoPageLoading />}
                    />
                </Routes>
            </ContainerDemo>
        </>
    )
}

export default App
