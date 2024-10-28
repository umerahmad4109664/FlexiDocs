    import { RouteObject } from "react-router-dom";
import NotFound from "../components/NotFound";
import Login from "../components/Login";

    const routes:RouteObject[] = [
        { path: '/', element:<Login/>  },
        { path: '*', element:<NotFound/>  },
        
    ];
    
    export default routes;