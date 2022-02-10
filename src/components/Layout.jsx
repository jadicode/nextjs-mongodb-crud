import Navbar from "./Navbar"

// Layout.js means to provide all pages a static content. 

export const Layout = ({children}) => {
  return <>
    <Navbar/>
    {children}
  </>
}

