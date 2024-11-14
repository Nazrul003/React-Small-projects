import { useContext } from "react";
import { AuthContext } from "./AuthProvider";

function Dashboard()
{
    const {isAuthenticated} = useContext(AuthContext);
    
    return(
        <>
        {(isAuthenticated) ? (
            <h1 className="text-[18px] font-semibold">Welcome to Dashboard </h1>
        ) :
        (
            <h1 className="text-[18px] font-semibold">Please login for Dashboard</h1>
        )

        }
        </>
    )
}

export default Dashboard;