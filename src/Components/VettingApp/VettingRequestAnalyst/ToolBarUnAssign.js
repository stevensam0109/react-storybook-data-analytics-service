import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Button, Toolbar, IconButton, Typography, TextField, FormControl} from '@material-ui/core';
import Icon from '@mdi/react';
import ReplayIcon from '@material-ui/icons/Replay';
import SaveIcon from '@material-ui/icons/Save';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import {mdiAccountPlus} from '@mdi/js';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Select,
  InputLabel,
  Snackbar,
  Divider,
} from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiDialog-paperWidthSm': {
      'width': 400,
      '& .MuiTextField-root': {
        'width': '100%',
      },
      '& .MuiFormLabel-root': {
        'line-height': 1,
      },
      '& .MuiInputBase-input': {
        'max-height': 130,
        'overflow': 'hidden auto !important',
      },
      '& .MuiAutocomplete-endAdornment': {
        'top': '5.5px',
      },
    },
  },
  dialogTitle: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  main: {
    background: theme.palette.grey[100],
    paddingBottom: theme.spacing(6),
  },
  title: {
    flexGrow: 1,
  },
  headerBtn: {
    marginLeft: theme.spacing(3),
  },
  dialogFooter: {
    padding: theme.spacing(2, 3),
    display: 'flex',
    justifyContent: 'flex-end',
  },
  footerBtns: {
    marginLeft: [theme.spacing(2), '!important'],
  },
}));

function ToolBarUnassign() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const [open, setOpen] = React.useState({
    dialogUpdate: false,
    dialogUnAssign: false,
    dialogDeny: false,
    snackBarUnassign: false,
    snackBarDeny: false,
  });

  const handleClickOpen = (state) => {
    setOpen({...open, [state]: true});
  };

  const handleClickClose = (state) => {
    setOpen({...open, [state]: false});
  };

  const handleUnassign = () => {
    setOpen({...open, dialogUnAssign: false, snackBarUnassign: true});
  };

  const handleDeny = () => {
    setOpen({...open, dialogDeny: false, snackBarDeny: true});
  };

  return (
    <Toolbar>
      <IconButton
        edge="start"
        className={classes.menuButton}
        color="inherit"
        aria-label="menu"
      >
        <ArrowBackIcon />
      </IconButton>
      <Typography variant="body2" className={classes.title}>
              Vetting requests dashboard
      </Typography>
      <Button
        onClick={() => handleClickOpen('dialogUnAssign')}
        color="primary"
        className={classes.headerBtn}>
        <Icon path={mdiAccountPlus} className="icon-grey" size={1} />
        <Typography variant="subtitle2" color="textSecondary">Unassign from me
        </Typography>
      </Button>
      <Dialog open={open.dialogUnAssign}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        onClose={() => handleClickClose('dialogUnAssign')}
        className={classes.root}
      >
        <DialogTitle id="alert-dialog-update">
          <div className={classes.dialogTitle}>Unassign from me
            <IconButton
              onClick={() => handleClickClose('dialogUnAssign')}
              edge='end'>
              <CloseIcon />
            </IconButton>
          </div>
        </DialogTitle>
        <Divider className="mb-2" />
        <DialogContent className="mb-2">
          <Typography variant="body2" >If you choose to proceed the request will no longer have a lead analyst and an email will be sent to the researcher notifying them of the change.</Typography>
        </DialogContent>
        <Divider className="mb-2" />
        <DialogActions className={classes.dialogFooter}>
          <Button color="primary" variant="outlined" onClick={() => handleClickClose('dialogUnAssign')}>
            Cancel
          </Button>
          <Button color="primary" variant="contained" onClick={handleUnassign} className={classes.footerBtns}>
         Unassign
          </Button>
        </DialogActions>
      </Dialog>
      <Snackbar
        onClose={() => handleClickClose('snackBarUnassign')}
        open={open.snackBarUnassign} autoHideDuration={6000} anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}>
        <Alert
          open={open.snackBarUnassign}
          onClose={() => handleClickClose('snackBarUnassign')}
          severity="success"
          className={classes.alert}
          variant="filled"
        >
                   You have been unassigned from request 10_2020_4564677
        </Alert>
      </Snackbar>
      <Button
        variant="outlined"
        color="primary"
        className={classes.headerBtn}
        startIcon={<SaveIcon />}
      >
              Save
      </Button>
      <Button
        variant="outlined"
        color="primary"
        className={classes.headerBtn}
        startIcon={<ReplayIcon />}
        onClick={() => handleClickOpen('dialogUpdate')}
      >
        Request an update
      </Button>
      <Dialog
        open={open.dialogUpdate}
        onClose={() => handleClickClose('dialogUpdate')}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        className={classes.root}
      >
        <DialogTitle id="alert-dialog-update">
          <div className={classes.dialogTitle}>Request an update
            <IconButton
              onClick={() => handleClickClose('dialogUpdate')}
              edge='end'>
              <CloseIcon />
            </IconButton>
          </div>
        </DialogTitle>
        <Divider className="mb-2" />
        <DialogContent className="pb-0">
          <TextField
            className={classes.inputMargin}
            margin="dense"
            defaultValue="Please provide the supporting files requested."
            label="Comments"
            variant="outlined"
            fullWidth
            required
            multiline
          />
        </DialogContent>
        <Divider className="mb-2 mt-3" />
        <DialogActions className={classes.dialogFooter}>
          <Button
            onClick={() => handleClickClose('dialogUpdate')}
            color="primary" variant="outlined">
            Cancel
          </Button>
          <Button
            onClick={() => handleClickClose('dialogUpdate')}
            color="primary" variant="contained" className={classes.footerBtns}>
          Submit request
          </Button>
        </DialogActions>
      </Dialog>
      <Button aria-controls="toolbar-unassign-menu" aria-haspopup="true" onClick={handleClick} variant="contained" color="primary" className={classes.headerBtn}>
  Resolve<ArrowDropDownIcon />
      </Button>
      <Menu
        id="toolbar-unassign-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Approve</MenuItem>
        <MenuItem
          onClick={() => handleClickOpen('dialogDeny')}
        >
          Deny</MenuItem>
      </Menu>
      <Dialog
        open={open.dialogDeny}
        onClose={() => handleClickClose('dialogDeny')}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        className={classes.root}
      >
        <DialogTitle id="alert-dialog-denied-request">
          <div className={classes.dialogTitle}>Denied request
            <IconButton
              onClick={() => handleClickClose('dialogDeny')}
              edge='end'>
              <CloseIcon />
            </IconButton>
          </div>
        </DialogTitle>
        <Divider className="mb-2" />
        <DialogContent className="pb-0">
          <TextField
            className={classes.inputMargin}
            margin="dense"
            id="Billable hours"
            label="Billable hours"
            variant="outlined"
            required
            placeholder="3.5"
            helperText="Only numbers"
          />
          <FormControl
            className={classes.inputMargin}
            margin="dense"
            required
            variant="outlined"
            fullWidth
          >
            <InputLabel id="outputMethod-label">Denied reason</InputLabel>
            <Select
            >
              <MenuItem>Non-SSI project</MenuItem>
              <MenuItem>Confidentiality requirements are not met</MenuItem>
              <MenuItem>Request is missing information</MenuItem>
              <MenuItem>Output file(s) are not in line with the project proposal</MenuItem>
              <MenuItem>Other</MenuItem>
            </Select>
          </FormControl>
        </DialogContent>
        <Divider className="mb-1 mt-3" />
        <DialogActions className={classes.dialogFooter}>
          <Button
            onClick={() => handleClickClose('dialogDeny')}
            color="primary" variant="outlined">
            Cancel
          </Button>
          <Button
            color="primary"
            variant="contained"
            className={classes.footerBtns}
            onClick={handleDeny}
          >
          Submit
          </Button>
        </DialogActions>
      </Dialog>
      <Snackbar
        open={open.snackBarDeny}
        onClose={() => handleClickClose('snackBarDeny')}
        autoHideDuration={6000} anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}>
        <Alert
          onClose={() => handleClickClose('snackBarDeny')}
          severity="success"
          className={classes.alert}
          variant="filled"
        >
          The vetting request 10_2020_4564677 has been denied.
        </Alert>
      </Snackbar>
    </Toolbar>
  );
}

export default ToolBarUnassign;

