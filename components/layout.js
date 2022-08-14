import Header from "./Header";
import Footer from "./Footer";


const layout = ({children}) => {
  
  return (
    <div>
        <Header/>
            {children}
        <Footer/>
    </div>
  )
}

export default layout