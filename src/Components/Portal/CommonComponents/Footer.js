import React from 'react';
import {useTranslation} from 'react-i18next';
import clsx from 'clsx';
import {SM_SCREEN} from '../../../Theme/constants';
import {
  Button,
  Grid,
  Toolbar,
  Typography,
  Paper,
  Divider,
  Link,
} from '@material-ui/core';
import {makeStyles, ThemeProvider} from '@material-ui/core/styles';
import {HelpDrawer, FeedbackDialog} from './Dialogs';
import {darkTheme} from '../../../Theme/theme';

const useStyles = makeStyles((theme) => ({
  footer: {
    borderRadius: 0,
  },
  footerBtn: {
    margin: theme.spacing(0, 0.5, 0, 0),
  },
  canadaLogo: {
    height: theme.spacing(4),
  },
  actions: {
    display: 'flex',
    alignItems: 'center',
  },
}));

const Footer = React.forwardRef((props, ref) => {
  const {t} = useTranslation();
  const classes = useStyles();
  const [state, setState] = React.useState({
    windowWidth: window.innerWidth,
  });
  const [open, setOpen] = React.useState({
    helpDrawer: false,
    feedbackDialog: false,
  });

  const toggleDialog = (state, value) => {
    setOpen({...open, [state]: value});
  };

  const openDrawer = (element) => {
    setOpen({...open, [element]: true});
  };

  const closeDrawer = (element) => {
    setOpen({...open, [element]: false});
  };
  const isSmScreen = state.windowWidth < SM_SCREEN;

  React.useEffect(() => {
    // Detect screen size
    const handleResize = () =>
      setState({...state, windowWidth: window.innerWidth});
    window.addEventListener('resize', handleResize);
    window.addEventListener('orientationchange', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', handleResize);
    };
  }, [state]);

  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <Paper className={classes.footer} tabIndex="-1">
          <footer>
            <Toolbar>
              <Grid container justify="space-between" alignItems="center">
                <Grid item className={classes.actions}>
                  <Button className="mr-2">{t('Français')}</Button>
                  <Divider orientation="vertical" flexItem className="mr-2" />
                  <ul
                    className={clsx({
                      'list-horizontal': !isSmScreen,
                    })}
                  >
                    <li>
                      <Button className={classes.footerBtn}>
                        {t('About')}
                      </Button>
                    </li>
                    <li>
                      <Button
                        href="https://www.statcan.gc.ca/eng/reference/terms-conditions"
                        className={classes.footerBtn}
                      >
                        {t('Terms and conditions')}
                      </Button>
                    </li>
                    <li>
                      <Button
                        href="https://www.statcan.gc.ca/eng/reference/privacy"
                        className={classes.footerBtn}
                      >
                        {t('Privacy')}
                      </Button>
                    </li>
                    <li>
                      <Button
                        className={classes.footerBtn}
                        onClick={() => openDrawer('helpDrawer')}
                      >
                        {t('Help')}
                      </Button>
                    </li>
                    <li>
                      <Button
                        className={classes.footerBtn}
                        onClick={() =>
                          toggleDialog('feedbackDialog', !open.feedbackDialog)
                        }
                      >
                        {t('Feedback')}
                      </Button>
                    </li>
                  </ul>
                </Grid>
                <Grid item>
                  <Grid container spacing={4}>
                    <Grid item>
                      <Typography variant="body2">
                        Updated Fed 24, 2021 (v2.0)
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography variant="body2">
                        Illustrations by{' '}
                        <Link color="inherit" href="https://www.freepik.com/">
                          Freepik
                        </Link>
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Toolbar>
            <Toolbar>
              <Grid container justify="flex-end" alignItems="center">
                <Grid item>
                  <img
                    className={classes.canadaLogo}
                    src={process.env.PUBLIC_URL + '/images/wmms-white.svg'}
                    alt={t('Symbol of the Government of Canada')}
                  />
                </Grid>
              </Grid>
            </Toolbar>
          </footer>
        </Paper>
      </ThemeProvider>

      {/* Help drawer */}
      <HelpDrawer
        open={open.helpDrawer}
        closeDrawer={() => closeDrawer('helpDrawer')}
      />
      {/* Feedback dialog */}
      <FeedbackDialog
        open={open.feedbackDialog}
        toggleDialog={() =>
          toggleDialog('feedbackDialog', !open.feedbackDialog)
        }
      />
    </>
  );
});

export default Footer;
