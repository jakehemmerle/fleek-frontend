import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import PropTypes from 'prop-types';

import Keys from './Keys';
import Requests from './Requests';
import { generateNewKey } from '../utils/api.requests';


const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    table: {
      marginTop: theme.spacing(1),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(1, 0, 1),
    },
    tableTitles: {
      marginTop: theme.spacing(8),
    },
}));

function Title(props) {
  return (
    <Typography component="h3" variant="h6" color="primary" gutterBottom>
      {props.children}
    </Typography>
  );
}

Title.propTypes = {
  children: PropTypes.node,
};

const KeyManagement = () => {
    const classes = useStyles();

    return (
        <Container component="main" maxWidth="md">
          <CssBaseline />
          <div className={classes.paper}>

            <Typography component="h1" variant="h5">
              IPFS Proxy API Keys
            </Typography>

            <div className={classes.tableTitles}>
              <Title>Keys</Title>
            </div>

            <Grid container>
                <Grid item xs>
                  <Button
                    type="newKey"
                    maxWidth='xs'
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                    onClick={generateNewKey}
                  >
                    Generate New Key
                  </Button>
                </Grid>
            </Grid>

            <form className={classes.form} noValidate>
              <Grid item xs={12}>
                <Paper className={classes.table}>
                  <Keys />
                </Paper>
              </Grid>
            </form>

            <div className={classes.tableTitles}>
              <Title>Requests</Title>
            </div>

            <form className={classes.form} noValidate>
              <Grid item xs={12}>
                <Paper className={classes.table}>
                  <Requests />
                </Paper>
              </Grid>
            </form>
          </div>
      </Container>
    );
}


export default KeyManagement;