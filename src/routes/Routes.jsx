import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

import { makeStyles } from '@material-ui/core/styles';

import Login from '../components/pages/Login/Login';
import Navbar from '../components/layouts/Navbar/Navbar';
import Dashboard from '../components/pages/Dashboard';
import Products from '../components/pages/Product/Products';
import TabsProduct from '../components/pages/Product/TabsProduct';
import Footer from '../components/layouts/Footer/Footer';

import PrivateRoute from './PrivateRoute';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
    },
    container: {
        paddingTop: theme.spacing(3),
        paddingBottom: theme.spacing(3),
    },
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    },
    fixedHeight: {
        height: 240,
    },
}));

const Routes = () => {
    const classes = useStyles();

    return (
        <Switch>
            <Route exact path="/" component={Login} />
            <div className={classes.root}>
                <Navbar />
                <main className={classes.content}>
                    <div className={classes.appBarSpacer} />
                    <Container maxWidth="lg" className={classes.container}>
                        <PrivateRoute exact path="/dashboard" component={Dashboard} />
                        <PrivateRoute exact path="/products" component={Products} />
                        <PrivateRoute exact path="/products/add" component={TabsProduct} />
                        <Box pt={4}>
                            <Footer />
                        </Box>
                    </Container>
                </main>
            </div>
        </Switch>
    )
}

export default Routes;