import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import {
    Box,
    Button,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Grid,
    Typography
} from "@material-ui/core"
import Navbar from "./Navbar";
import project3 from "../images/react-redux.jpg"

const useStyles = makeStyles({
    mainContainer: {
        background: "#4a536b",
        minHeight: "100vh"
    },
    cardContainer: {
        maxWidth: 345,
        margin: "5rem auto"
    },
    particlesCanva: {
        position: "fixed",
        opacity: "0.5"
    }
})

const Portfolio = () => {
    const classes = useStyles()
    return (
        <Box component="div" className={classes.mainContainer}>
            <Navbar/>
            <Grid container justify="center" alignItems="center">
                {/* Project 1 */}
                <Grid item xs={12} sm={8} md={6}>
                    <Card className={classes.cardContainer}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                alt="Project 1"
                                height="140"
                                image={project3}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5">
                                    Project 1
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    This is the Project 1
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                                Share
                            </Button>
                            <Button size="small" color="primary">
                                Live Demo
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
                {/* Project 2 */}
                <Grid item xs={12} sm={8} md={6}>
                    <Card className={classes.cardContainer}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                alt="Project 2"
                                height="140"
                                image={project3}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5">
                                    Project 2
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    This is the Project 2
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                                Share
                            </Button>
                            <Button size="small" color="primary">
                                Live Demo
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
                {/*/!* Project 3 *!/*/}
                {/*<Grid item xs={12} sm={8} md={6}>*/}
                {/*    <Card className={classes.cardContainer}>*/}
                {/*        <CardActionArea>*/}
                {/*            <CardMedia*/}
                {/*                component="img"*/}
                {/*                alt="Project 3"*/}
                {/*                height="140"*/}
                {/*                image={project3}*/}
                {/*            />*/}
                {/*            <CardContent>*/}
                {/*                <Typography gutterBottom variant="h5">*/}
                {/*                    Project 3*/}
                {/*                </Typography>*/}
                {/*                <Typography variant="body2" color="textSecondary" component="p">*/}
                {/*                    This is the Project 3*/}
                {/*                </Typography>*/}
                {/*            </CardContent>*/}
                {/*        </CardActionArea>*/}
                {/*        <CardActions>*/}
                {/*            <Button size="small" color="primary">*/}
                {/*                Share*/}
                {/*            </Button>*/}
                {/*            <Button size="small" color="primary">*/}
                {/*                Live Demo*/}
                {/*            </Button>*/}
                {/*        </CardActions>*/}
                {/*    </Card>*/}
                {/*</Grid>*/}
                {/*/!* Project 4 *!/*/}
                {/*<Grid item xs={12} sm={8} md={6}>*/}
                {/*    <Card className={classes.cardContainer}>*/}
                {/*        <CardActionArea>*/}
                {/*            <CardMedia*/}
                {/*                component="img"*/}
                {/*                alt="Project 4"*/}
                {/*                height="140"*/}
                {/*                image={project4}*/}
                {/*            />*/}
                {/*            <CardContent>*/}
                {/*                <Typography gutterBottom variant="h5">*/}
                {/*                    Project 4*/}
                {/*                </Typography>*/}
                {/*                <Typography variant="body2" color="textSecondary" component="p">*/}
                {/*                    This is the Project 4*/}
                {/*                </Typography>*/}
                {/*            </CardContent>*/}
                {/*        </CardActionArea>*/}
                {/*        <CardActions>*/}
                {/*            <Button size="small" color="primary">*/}
                {/*                Share*/}
                {/*            </Button>*/}
                {/*            <Button size="small" color="primary">*/}
                {/*                Live Demo*/}
                {/*            </Button>*/}
                {/*        </CardActions>*/}
                {/*    </Card>*/}
                {/*</Grid>*/}
            </Grid>
        </Box>
    );
};

export default Portfolio;