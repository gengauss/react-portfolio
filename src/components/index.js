import React from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import Particles from "react-particles-js";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
    particlesCanva: {
        position: "fixed"
    }
})

const Home = () => {
    const classes = useStyles()
    return (
        <div>
            <Navbar/>
            <Header/>
            <Particles
                style={{backgroundColor: "#4a536b"}}
                canvasClassName={classes.particlesCanva}
                params={{
                    particles: {
                        number: {
                            value: 45,
                            density: {
                                enable: false,
                                value_area: 900
                            }
                        },
                        shape: {
                            type: "circle",
                            stroke: {
                                width: 1,
                                color: "#ff9a8d"
                            }
                        },
                        size: {
                            value: 8,
                            random: true,
                            anim: {
                                enable: false,
                                speed: 6,
                                size_min: 0.1,
                                sync: true
                            }
                        },
                        opacity: {
                            value: 1,
                            random: true,
                            anim: {
                                enable: true,
                                speed: 1,
                                opacity_min: 0.1,
                                sync: true
                            }
                        }
                    }
                }}/>
        </div>
    );
};

export default Home;
