    import { RouteObject } from "react-router-dom";
import NotFound from "../components/NotFound";
import Login from "@/pages/Login";
import Document from "@/pages/Document";

    const routes:RouteObject[] = [
        { path: '/', element:<Login/>  },
        { path: '/document', element:<Document/>  },
        { path: '*', element:<NotFound/>  },
        
    ];
    
    export default routes;