import React from 'react';
import {makeStyles, ThemeProvider} from '@material-ui/core/styles';
import clsx from 'clsx';
import {Typography, Button, Grid, Paper} from '@material-ui/core';
import {darkTheme} from '../../Theme/theme';
import {AccountDetailsDialog} from './CommonComponents/Dialogs';

const useStyles = makeStyles((theme) => ({
  banner: {
    textAlign: 'left',
    boxSizing: 'border-box',
    borderRadius: 0,
    margin: theme.spacing(0, -3, 6, -3),
  },
  bannerContent: {
    paddingLeft: theme.spacing(12),
  },
  bannerBtn: {
    width: '320px',
    padding: theme.spacing(1.5),
  },
  logo: {
    marginRight: theme.spacing(3),
  },
  triangles: {
    overflow: 'hidden',
  },
}));

function Banner(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState({
    accountDetailsDialog: false,
  });

  const toggleDialog = (state, value) => {
    setOpen({...open, [state]: value});
  };

  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <Paper className={classes.banner}>
          <Grid container justify="space-between" alignItems="center">
            <Grid item xs={6} className={classes.bannerContent}>
              <Grid container alignItems="center">
                <Grid item>
                  <img
                    className={classes.logo}
                    src={process.env.PUBLIC_URL + '/images/daaas-logo.svg'}
                    alt=""
                  />
                </Grid>
                <Grid item>
                  <Typography variant="h3" component="h1" color="textPrimary">
                    Data Analytics as a Service
                  </Typography>
                  <Typography variant="h5" component="h2" color="textPrimary">
                    Harness the power of your data
                  </Typography>
                </Grid>
              </Grid>
              <Typography className="mt-3 mb-6" color="textPrimary">
                Our platforms provide virtual access to Statistics Canada data.
                From these platforms, choose from a variety of tools to help
                prepare and transform datasets. Use the Collaborative Analytics
                Environment (CAE) and the Advanced Analytics Workspace (AAW) to
                analyze and present data to help share compelling data stories.
              </Typography>
              <Grid container direction="column">
                <Grid item>
                  <Button
                    className={clsx(classes.bannerBtn, 'mb-3')}
                    variant="contained"
                    color="primary"
                    onClick={() =>
                      toggleDialog(
                          'accountDetailsDialog',
                          !open.accountDetailsDialog,
                      )
                    }
                  >
                    Get started
                  </Button>
                </Grid>
                <Grid item>
                  <Button className={classes.bannerBtn} variant="outlined">
                    Sign in
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={6} className={classes.triangles}>
              <img
                src={process.env.PUBLIC_URL + '/images/daaas-triangles.svg'}
                alt=""
              />
            </Grid>
          </Grid>
        </Paper>
      </ThemeProvider>

      {/* Account details dialog */}
      <AccountDetailsDialog
        open={open.accountDetailsDialog}
        toggleDialog={() =>
          toggleDialog('accountDetailsDialog', !open.accountDetailsDialog)
        }
        // handlePrimaryClick={handleNext}
      />
    </>
  );
}
export default Banner;
