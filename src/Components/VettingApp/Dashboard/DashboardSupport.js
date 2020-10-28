import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {makeStyles} from '@material-ui/core/styles';
import {
  AppBar,
  Typography,
  Box,
} from '@material-ui/core';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

import TableContainerComponent from './TableContainerComponent';
import Header from '../CommonComponents/Header';
import Footer from '../CommonComponents/Footer';
import DashboardDrawer from './DashboardDrawer';
import BypassBlocks from '../../BypassBlocks';
import {requestListResearchers} from '../../../Data/fakeData';

export const DRAWER_WIDTH = 240;

const useStyles = makeStyles((theme) => ({
  main: {
    background: '#F7F7F7',
    height: 'calc(100% - 84px)',
  },
  appBar: {
    color: theme.palette.text.primary,
    backgroundColor: theme.palette.common.white,
    position: 'static',
    top: 0,
    left: 'auto',
    width: '100%',
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
  },
  appBarHeader: {
    color: theme.palette.text.primary,
    background: '#F7F7F7',
    position: 'static',
    top: 0,
    left: 'auto',
    width: '100%',
    paddingBottom: theme.spacing(3),
    paddingRight: '0px !important',
    boxShadow: 'none !important',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  content: {
    background: '#F7F7F7',
    padding: theme.spacing(0, 3, 3, 3),
    paddingTop: `calc(24px + 64px)`,
    minHeight: `calc(100vh - 284px)`,
    flexGrow: 1,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: 0,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: DRAWER_WIDTH,
  },
  button: {
    height: 36,
  },
  visuallyHidden: {
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: 1,
    margin: -1,
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    top: 20,
    width: 1,
  },
  thead: {
    width: '15.7%',
  },
  theadNarrow: {
    width: '7%',
  },
  tabs: {
    borderBottom: '1px solid',
    borderBottomColor: theme.palette.grey[300],
  },
  tabPanel: {
    '& .MuiBox-root': {
      width: '100%',
      padding: 0,
      boxSizing: 'border-box',
      overflowY: 'auto',
      boxShadow: '0px 2px 4px -1px rgba(117,117,117,0.2), 0px 4px 5px 0px rgba(117,117,117,0.14), 0px 1px 10px 0px rgba(117,117,117,0.12)',
    },
  },
  tableHead: {
    '& th': {
      padding: theme.spacing(2.5, 1),
    },
  },
}));

function createData(id, statusHead, status, researcherEmail, analystEmail, submitted, updated) {
  return {id, statusHead, status, researcherEmail, analystEmail, submitted, updated};
}

let tabStatus = 'active';

const rows = requestListResearchers.map((el, index) =>
  createData(el.id, el.statusHead, el.status, el.researcherEmail, el.analystEmail, el.submitted, el.updated),
);

const filteredRows = () => {
  return (
    rows.filter((val) => val.statusHead === tabStatus)
  );
};

// /////////// TABPANEL
function TabPanel(props) {
  const {children, value, index, ...other} = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`projects-tabpanel-${index}`}
      aria-labelledby={`projects-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    'id': `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function VettingDashboardSupport() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [open, setOpen] = React.useState({
    drawer: true,
  });
  const [project, setProject] = React.useState({
    title: 'All projects',
  });

  const handleChange = (event, newValue) => {
    setValue(newValue);
    switch (newValue) {
      case 0:
        tabStatus = 'active';
        break;
      case 1:
        tabStatus = 'withdrawn';
        break;
      case 2:
        tabStatus = 'approved';
        break;
      case 3:
        tabStatus = 'denied';
        break;
      default:
        tabStatus = 'active';
    }
  };

  const toggleDrawer = () => {
    setOpen({...open, drawer: !open.drawer});
  };

  const handleProjectTitle = (value) => {
    setProject({...project, title: value});
  };

  const mainRef = React.createRef();
  const aboutRef = React.createRef();


  return (
    <React.Fragment>
      <Header clickHandler={toggleDrawer}/>
      <main className={classes.main}>
        <BypassBlocks ref={{main: mainRef, about: aboutRef}} />
        <Paper
          className={clsx(classes.content, classes.paper, {
            [classes.contentShift]: open.drawer,
          })}
          elevation={0}
        >
          <DashboardDrawer
            open={open.drawer}
            projectTitle={handleProjectTitle}
          />
          <AppBar
            className={classes.appBarHeader}
            elevation={0}
          >
            <Typography
              variant="h6"
              component="h1"
            >
              {project.title}
            </Typography>
            <Button variant="contained" color="primary" className={classes.button}>
            New vetting request
            </Button>
          </AppBar>
          <AppBar
            position="static"
            component="div"
            className={classes.appBar}
            ref={mainRef} tabIndex="-1"
          >
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="Vetting request tabs"
              indicatorColor="primary"
              textColor="primary"
              className={classes.tabs}
            >
              <Tab label="Active" {...a11yProps(0)} />
              <Tab label="Withdrawn" {...a11yProps(1)} />
              <Tab label="Approved" {...a11yProps(2)} />
              <Tab label="Denied" {...a11yProps(3)} />
            </Tabs>
          </AppBar>
          <TabPanel value={value} index={0} className={classes.tabPanel}>
            <TableContainerComponent status="active" filteredRows={filteredRows} />
          </TabPanel>
          <TabPanel value={value} index={1} className={classes.tabPanel}>
            <TableContainerComponent status="withdrawn" filteredRows={filteredRows}/>
          </TabPanel>
          <TabPanel value={value} index={2} className={classes.tabPanel}>
            <TableContainerComponent status="approved" filteredRows={filteredRows}/>
          </TabPanel>
          <TabPanel value={value} index={3} className={classes.tabPanel}>
            <TableContainerComponent status="denied" filteredRows={filteredRows}/>
          </TabPanel>
        </Paper>
        <Footer />
      </main>
    </React.Fragment>
  );
}
