import { Tab, Tabs } from "@mui/material";
import React from "react";
import "./app.css";

export default function Navbar(){
    return(
        <div className="navbar">
            <div>
                <Tabs>
                    <Tab sx={{
                        color:"black",
                    }} label="PromoFocus"/>   
                </Tabs> 
            </div>
            <div className="nav-right">
                <Tabs>
                    <Tab sx={{
                        color:"black",
                    }} label="Report"/>   
                </Tabs>
                <Tabs>
                    <Tab sx={{
                        color:"black",
                    }} label="Settings"/>   
                </Tabs>
                <Tabs>
                    <Tab sx={{
                        color:"black",
                    }} label="Login"/>   
                </Tabs> 
            </div>

       </div>
    )
}