import Header from "./Header";
import Footer from "./Footer";
import { useRouter } from "next/router";


const layout = ({children}) => {

  const router = useRouter();
  const showHeader = router.pathname === "/joinus" ? false : true;

  
  return (
    <div>
      {showHeader && <Header/>}
            {children}
       {showHeader && <Footer/>}
    </div>
  )
}

export default layout