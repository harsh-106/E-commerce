import React, { useEffect } from "react";
import { Button } from "@radix-ui/themes";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setUser } from "../redux/authSlice";
import { USER_API_END_POINT } from "../utils/constant";

const Navbar = () => {
  const { user } = useSelector((store) => store.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get(`${USER_API_END_POINT}/me`, { withCredentials: true });
        if (res.data.success) {
          dispatch(setUser(res.data.user)); 
        }
      } catch (error) {
        console.error("Failed to fetch user", error);
        dispatch(setUser(null));
      }
    };

    fetchUser();
  }, [dispatch]);

  const logoutHandler = async () => {
    console.log("Logging out...");
    try {
      await axios.get(`${USER_API_END_POINT}/logout`, { withCredentials: true });
      dispatch(setUser(null)); 
      navigate("/login");
    } catch (error) {
      console.error("Logout failed", error);
    }
  };

  return (
    <div className="bg-white">
      <div className="flex items-center justify-between mx-auto max-w-7xl h-16">
        <div>
          <h1 className="text-2xl font-bold">
            E-<span className="text-blue-800">Commerce</span>
          </h1>
        </div>
        <div className="flex items-center gap-5">
          <ul className="flex font-medium items-center gap-5">
            <li className="cursor-pointer" onClick={() => navigate("/")}>Home</li>
            <li className="cursor-pointer" >Account</li>
            <li className="cursor-pointer" >Cart</li>
          </ul>
          
            <div className="flex items-center gap-2">
              <Button onClick={() => navigate("/login")} className="cursor-pointer" variant="outline">
                Login
              </Button>
              <Button onClick={() => navigate("/signup")} className="rounded-sm bg-[#6A38C2]">
                Sign Up
              </Button>
            </div>
        
            <div>
              <Button onClick={logoutHandler} className="cursor-pointer" variant="outline">
                Logout
              </Button>
            </div>
          
        </div>
      </div>
    </div>
  );
};

export default Navbar;
