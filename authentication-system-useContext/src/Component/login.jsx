import { useContext } from "react";
import { AuthContext } from "./AuthProvider";

function Login()
{
    const {isAuthenticated,login}=useContext(AuthContext);

    return(
        <>
        {(isAuthenticated) ?(
            <h1 className="my-2 text-[30px] font-bold"
            >You are Logged in</h1>
        ) : (
            <button className="my-2 bg-slate-700 rounded-md p-2 text-white
             hover:bg-slate-800 active:bg-slate-950"
            onClick={login}>Login</button>
        )

        }
        </>
    )
}
export default Login;