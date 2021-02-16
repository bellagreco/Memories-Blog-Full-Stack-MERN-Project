import React, { useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core'
import Memories from './images/logo.png'
import { useDispatch } from 'react-redux';
import { getPosts } from './actions/posts.js'
import Posts from './components/Posts/Posts.js'
import Form from './components/Form/Form.js'
import useStyles from './styles';
const App = () => {
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch]);
    return (
        <Container maxwidth="lg">
            <AppBar className={classes.appBar} position="static" color="inherit">
                {/* <Typography className={classes.heading} variant="h2" align="center">Memories</Typography> */}
                <img className={classes.image} src={Memories} alt="Memories" height="150" justify="center" />
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Posts />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>

        </Container>
    );
}

export default App;