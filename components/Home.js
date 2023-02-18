import React from "react";
import { Button, Tab, Tabs } from "@mui/material";
import "./app.css"
import App from "./App";

export default function Home() {
    
   return(
        <div className="home">
            <div className="home-top">
             <Tabs>
                    <Tab sx={{
                        color:"black",
                    }} label="Promodoro"/>   
                </Tabs> 
                <Tabs>
                    <Tab sx={{
                        color:"black",
                    }} label="Shortbreak"/>   
                </Tabs> 
                <Tabs>
                    <Tab sx={{
                        color:"black",
                    }} label="longbreak"/>   
                </Tabs> 
            </div>
            <div className="home-bottom">
                <App/>
            </div>

        </div>
   )
}
