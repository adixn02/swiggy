import Header from "./components/header"
import Home from "./pages/home"
import Footer from "./components/footer"
import About from "./pages/about"
import Contact from "./pages/contact"
import { createBrowserRouter, Outlet } from "react-router-dom"
import Restromenu from "./pages/restaurentmenu"
import React, { lazy, Suspense, useState } from "react"
import UserContext from "./utils/userContext"
import {Provider} from "react-redux" 
import store from "./utils/store"
import Cart from "./pages/cart"

// import Instamart from "./pages/instamart"

// lazy loading for instamart
const Instamart = lazy(() => import("./pages/instamart"))


const Applayout = () => {
        const [userinfo, setUserinfo] = useState({
                name: "Swiggyx",
                email: "johndoe@example.com"
        })

        return (
                <Provider store={store}>
                <UserContext.Provider value={{
                        user: userinfo,
                        setUser: setUserinfo
                }}> 
                        <Header />
                        <Outlet />
                        <Footer />
                </UserContext.Provider>
                </Provider>
        )
}

const appRouter = createBrowserRouter([
        {
                path: "/",
                element: <Applayout />,
                children: [
                        {
                                path: "/",
                                element: <Home userPd={{
                                        name: "Swiggy",
                                        email: "johndoe@example.com"
                                }} />
                        },
                        {
                                path: "/about",
                                element: <About />
                        },
                        {
                                path: "/contact",
                                element: <Contact />
                        }, {
                                path: "/restaurent/:id",
                                element: <Restromenu />
                        }, {
                                path: "/instamart",
                                element: <Suspense><Instamart /></Suspense>
                        },{
                                path: "/cart",
                                element: <Cart />
                        }
                ]


        }
])
export default appRouter