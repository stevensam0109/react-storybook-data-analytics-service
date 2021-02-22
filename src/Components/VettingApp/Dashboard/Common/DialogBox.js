/* eslint-disable jsx-a11y/no-autofocus */
import React from 'react';
import {useTranslation} from 'react-i18next';
import {useHistory, useLocation} from 'react-router-dom';
import {makeStyles} from '@material-ui/core/styles';
import {green} from '@material-ui/core/colors';
import CloseIcon from '@material-ui/icons/Close';
import Icon from '@mdi/react';
import {mdiAccount} from '@mdi/js';
import {
  Box,
  Typography,
  TextField,
  FormControl,
  Avatar,
  Button,
  Divider,
  Dialog,
  DialogTitle,
  IconButton,
  InputLabel,
  Select,
  FormControlLabel,
  FormHelperText,
} from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import NumberFormat from 'react-number-format';
import Alert from '@material-ui/lab/Alert';

import CustomizedSnackbar from './CustomizedSnackbar';
import {AnalystMenu} from './ContextMenu';
import {analystList} from '../../../../Data/fakeData';

const ROW_HEIGHT = 56;

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiDialog-paperWidthSm': {
      'width': 400,
      '& .MuiTextField-root': {
        width: '100%',
      },
      '& .MuiFormLabel-root': {
        'line-height': 1,
        'background-color': 'white',
      },
      '& .MuiOutlinedInput-multiline': {
        padding: 0,
      },
      '& .MuiOutlinedInput-inputMultiline': {
        'max-height': 130,
        'overflow': 'auto !important',
        'padding': theme.spacing(2),
      },
      '& .MuiAutocomplete-endAdornment': {
        top: '5.5px',
      },
    },
    '& .MuiFormControl-root': {
      width: '100%',
    },
    '& .MuiFormControlLabel-root': {
      'margin-left': '0px',
      'flex-basis': '50%',
      'height': '100%',
      '&:last-child': {
        'margin-right': '0px',
      },
      '& .MuiTextField-root': {
        width: '100% !important',
      },
    },
    '& .Mui-error ~.MuiFormHelperText-root, & .Mui-error + label': {
      color: theme.palette.error.main,
    },
    '& .MuiInputBase-input:not(.MuiInputBase-inputMultiline)': {
      height: '100%',
    },
    '& .MuiDialogTitle-root': {
      padding: theme.spacing(1.5, 3),
    },
  },
  avatar: {
    backgroundColor: green[500],
    color: theme.palette.grey[100],
  },
  avatarTransparent: {
    backgroundColor: 'transparent',
    color: theme.palette.grey[600],
  },
  dialogTitle: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  dialogContent: {
    display: 'flex',
    padding: theme.spacing(3),
  },
  dialogRow: {
    display: 'flex',
    padding: theme.spacing(1, 0),
    flexFlow: 'column',
    height: '100%',
    justifyContent: 'center',
  },
  dialogColumn: {
    display: 'flex',
    flexDirection: 'column',
  },
  hiddenRow: {
    display: 'none',
  },
  dialogText: {
    paddingLeft: theme.spacing(1),
  },
  analystListing: {
    display: 'flex',
    flexFlow: 'column',
    marginRight: 'auto',
  },
  supportAnalysts: {
    maxHeight: `calc(${ROW_HEIGHT}px * 3)`,
    overflow: 'auto',
  },
  dialogFooter: {
    padding: theme.spacing(1.75, 3),
    display: 'flex',
    justifyContent: 'flex-end',
  },
  footerBtns: {
    marginLeft: theme.spacing(1),
  },
  box: {
    padding: theme.spacing(1, 0),
  },
  alert: {
    margin: theme.spacing(1, 0, 2, 0),
  },
  textField: {
    width: '100%',
    padding: 0,
  },
  formControl: {
    'display': 'flex',
    'flexFlow': 'row',
    'justifyContent': 'space-between',
    '& .MuiTextField-root': {
      width: '49% !important',
    },
  },
}));

// ////////////////////////////////////////// ANALYST INFORMATION
export function DialogAnalyst(props) {
  const {open, toggleDialog, header} = props;
  const {t} = useTranslation();
  const classes = useStyles();

  return (
    <React.Fragment>
      <Dialog
        onClose={toggleDialog}
        aria-labelledby="dashboard-dialog-title"
        open={open}
        className={classes.root}
      >
        <DialogTitle id="dashboard-dialog-title">
          <div className={classes.dialogTitle}>
            <Typography variant="h6">{t(header)}</Typography>
            <IconButton
              id="dialog-close"
              onClick={toggleDialog}
              edge="end"
              aria-label="Analyst information - close"
            >
              <CloseIcon />
            </IconButton>
          </div>
        </DialogTitle>
        <Divider />
        <div className={classes.dialogContent}>
          <div className={classes.dialogColumn}>
            <div className={classes.dialogRow}>
              <Avatar className={classes.avatar}>BB</Avatar>
            </div>
          </div>
          <div className={classes.dialogColumn}>
            <div className={classes.dialogRow}>
              <Typography className={classes.dialogText} variant="body2">
                Bill Brian
              </Typography>
              <Typography className={classes.dialogText} variant="body2">
                brian.bill@cloud.statcan.ca
              </Typography>
              <Typography className={classes.dialogText} variant="body2">
                +1 (999) 999 9999
              </Typography>
            </div>
          </div>
        </div>
        <Divider />
        <div className={classes.dialogFooter}>
          <Button variant="contained" color="primary" onClick={toggleDialog}>
            {t('Done')}
          </Button>
        </div>
      </Dialog>
    </React.Fragment>
  );
}

// ////////////////////////////////////////// MANAGE TEAM
export function DialogManageTeam(props) {
  const {open, toggleDialog} = props;
  const {t} = useTranslation();
  const classes = useStyles();
  const [analysts, setAnalysts] = React.useState(analystList);
  const [selected, setSelected] = React.useState([]);

  const makeLead = (value) => (e) => {
    setAnalysts(
        analysts.map((item) =>
        item.role === 'lead' ?
          {...item, role: 'support'} :
          item.id === value.id ?
          {...item, role: 'lead'} :
          item,
        ),
    );
  };

  const makeSupport = (value) => (e) => {
    setAnalysts(
        analysts.map((item) =>
        item.id === value.id ? {...item, role: 'support'} : item,
        ),
    );
  };

  const unassignRequest = (value) => (e) => {
    setAnalysts(
        analysts.map((item) =>
        item.id === value.id ?
          {...item, assigned: false, role: 'support'} :
          item,
        ),
    );
  };

  function selectSupports(value) {
    const ids = value.map((item) => {
      return item.id;
    });

    setAnalysts(
        analysts.map((item) =>
        ids.includes(item.id) ?
          {...item, assigned: true, role: 'support'} :
          item,
        ),
    );

    setSelected([]);
  }

  const leadAnalysts = () => {
    const content = analysts
        .filter((analyst) => analyst.assigned && analyst.role === 'lead')
        .map((analyst, index) => {
          return (
            <div className={classes.dialogRow} key={analyst.id}>
              <Avatar>
                <Icon path={mdiAccount} size={1} />
              </Avatar>
              <div className={classes.analystListing}>
                <Typography className={classes.dialogText} variant="body2">
                  {analyst.name}
                </Typography>
                <Typography className={classes.dialogText} variant="body2">
                  {analyst.email}
                </Typography>
              </div>
              <AnalystMenu
                role={'lead'}
                makeSupport={makeSupport(analyst)}
                unassignRequest={unassignRequest(analyst)}
                controls={index}
              />
            </div>
          );
        });
    if (content.length > 0) {
      return content;
    } else {
      return (
        <div className={classes.dialogRow}>
          <Box fontStyle="italic" className={classes.box}>
            <Typography>{t('No lead assigned')}</Typography>
          </Box>
        </div>
      );
    }
  };

  return (
    <React.Fragment>
      <Dialog
        onClose={toggleDialog}
        aria-labelledby="dashboard-dialog-title"
        open={open}
        className={classes.root}
      >
        <DialogTitle id="dashboard-dialog-title">
          <div className={classes.dialogTitle}>
            <Typography variant="h6">{t('Manage team')}</Typography>
            <IconButton
              id="dialog-close"
              edge="end"
              onClick={toggleDialog}
              aria-label="Manage team - close"
            >
              <CloseIcon />
            </IconButton>
          </div>
        </DialogTitle>
        <Divider className="mb-2" />
        <div className={classes.dialogRow}>
          <Typography variant="subtitle2">{t('Lead')}</Typography>
        </div>
        {leadAnalysts()}
        <Divider className="mt-2 mb-2" />
        <div className={classes.dialogRow}>
          <FormControl variant="outlined" className={classes.textField}>
            <Autocomplete
              value={selected}
              multiple
              limitTags={2}
              clearOnEscape={true}
              disableCloseOnSelect={true}
              id="analyst-multiselect"
              options={analysts.filter((analyst) => !analyst.assigned)}
              getOptionLabel={(option) => option.name}
              onChange={(event, value) => {
                setSelected(value);
              }}
              renderInput={(params) => {
                return (
                  <TextField
                    {...params}
                    variant="outlined"
                    fullWidth
                    label={t('Search support analysts')}
                  />
                );
              }}
            />
          </FormControl>
        </div>
        <div className={classes.dialogRow}>
          <Button
            variant="outlined"
            color="primary"
            onClick={() => selectSupports(selected)}
          >
            {t('Add support analyst')}
          </Button>
        </div>
        <div className={classes.dialogRow}>
          <Typography variant="subtitle2" className="mt-2">
            {t('Support Analysts')}
          </Typography>
        </div>
        <div className={classes.supportAnalysts}>
          {analysts
              .filter((analyst) => analyst.assigned && analyst.role === 'support')
              .map((analyst, index) => {
                return (
                  <div className={classes.dialogRow} key={analyst.id}>
                    <Avatar>
                      <Icon path={mdiAccount} size={1} />
                    </Avatar>
                    <div className={classes.analystListing}>
                      <Typography className={classes.dialogText} variant="body2">
                        {analyst.name}
                      </Typography>
                      <Typography className={classes.dialogText} variant="body2">
                        {analyst.email}
                      </Typography>
                    </div>
                    <AnalystMenu
                      role={'support'}
                      makeLead={makeLead(analyst)}
                      unassignRequest={unassignRequest(analyst)}
                      controls={index}
                    />
                  </div>
                );
              })}
        </div>
        <Divider className="mt-2" />
        <div className={classes.dialogFooter}>
          <Button
            variant="outlined"
            color="primary"
            onClick={toggleDialog}
            className={classes.footerBtns}
          >
            {t('Cancel')}
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={toggleDialog}
            className={classes.footerBtns}
          >
            {t('Apply')}
          </Button>
        </div>
      </Dialog>
    </React.Fragment>
  );
}

// ////////////////////////////////////////// WITHDRAW REQUEST
export function DialogWithdraw(props) {
  const classes = useStyles();
  const {t} = useTranslation();
  const {toggleDialog, open} = props;
  const [snackbar, setSnackbar] = React.useState(false);
  const initial = {
    // blank object used to reset state
    comments: {
      text: '',
      errorText: '',
      helperText: 'Please fill out some comment.',
      invalid: '',
      commands: '',
    },
  };
  const [state, setState] = React.useState({
    comments: {
      text: '',
      errorText: '',
      helperText: 'Please fill out some comment.',
      invalid: '',
      commands: '',
    },
  });

  const handleChange = (e, val) => {
    const comment = e.target.value;
    setState({
      ...state,
      [val]: {
        // updates state with text from input
        ...state[val],
        text: comment,
      },
    });

    if (e.target.value && state[val].errorText) {
      // if input text is valid, clear error
      setState({
        ...state,
        [val]: {
          ...state[val],
          text: comment,
          errorText: '',
          helperText: initial[val].helperText,
          invalid: '',
          commands: '',
        },
      });
    }
  };

  const SnackbarClose = () => {
    setSnackbar(false);
  };

  const validateForm = () => {
    let isError = false;
    if (state.comments.text.trim() === '') {
      isError = true;
      state.comments.invalid = t('Enter some comments.');
      state.comments.errorText = t('Enter some comments.');
      state.comments.helperText = t('Enter some comments.');
    }

    if (isError) {
      setState({
        ...state,
      });
    }

    return isError;
  };

  const submitForm = (e) => {
    e.preventDefault();
    const err = validateForm();
    if (!err) {
      // if no errors exist, submit the form and reset the inputs
      toggleDialog();
      setSnackbar(!snackbar);
      setState({...initial});
    } else {
      for (const property in state) {
        // focus on the first input that has an error on submit
        if (state[property].invalid) {
          switch (property) {
            case 'comments':
              document.getElementById('comments-input').focus();
              break;
            default:
              break;
          }
          break;
        }
      }
    }
  };

  const disableCutCopyPaste = (e, command, value) => {
    // display error if user tries to cut/copy/paste
    let msg;
    e.preventDefault();
    switch (command) {
      case 'cut':
        msg = t('Cut has been disabled for security purposes.');
        setState({
          ...state,
          [value]: {
            ...state[value],
            commands: msg,
            errorText: msg,
            helperText: msg,
          },
        });
        break;
      case 'copy':
        msg = t('Copy has been disabled for security purposes.');
        setState({
          ...state,
          [value]: {
            ...state[value],
            commands: msg,
            errorText: msg,
            helperText: msg,
          },
        });
        break;
      case 'paste':
        msg = t('Paste has been disabled for security purposes.');
        setState({
          ...state,
          [value]: {
            ...state[value],
            commands: msg,
            errorText: msg,
            helperText: msg,
          },
        });
        break;
      default:
        break;
    }
  };

  const toggleHelperText = (value) => {
    if (state[value].commands === state[value].errorText) {
      if (Boolean(state[value].invalid)) {
        // set error text back to invalid error
        setState({
          ...state,
          [value]: {
            ...state[value],
            helperText: state[value].invalid,
          },
        });
      } else {
        // clear error text if no invalid error exists
        setState({
          ...state,
          [value]: {
            ...state[value],
            helperText: initial[value].helperText,
            errorText: initial[value].errorText,
          },
        });
      }
    }
  };

  return (
    <React.Fragment>
      <Dialog
        onClose={() => {
          setState({...initial});
          toggleDialog();
        }}
        aria-labelledby="dashboard-dialog-title"
        open={open}
        className={classes.root}
      >
        <DialogTitle id="dashboard-dialog-title">
          <div className={classes.dialogTitle}>
            <Typography variant="h6">{t('Withdraw request')}</Typography>
            <IconButton
              id="dialog-close"
              onClick={toggleDialog}
              edge="end"
              aria-label="Withdraw request - close"
            >
              <CloseIcon />
            </IconButton>
          </div>
        </DialogTitle>
        <Divider className="mb-2" />
        <form onSubmit={submitForm} noValidate>
          <div className={classes.dialogRow}>
            <FormControl variant="outlined" className={classes.textField}>
              <TextField
                id="comments-input"
                label={t('Comments')}
                aria-label={t('Comments')}
                value={state.comments.text}
                variant="outlined"
                placeholder={t('Please provite us with a withdrawal reason')}
                multiline
                required
                error={Boolean(state.comments.errorText)}
                helperText={state.comments.helperText}
                onCut={(e) => disableCutCopyPaste(e, 'cut', 'comments')}
                onCopy={(e) => disableCutCopyPaste(e, 'copy', 'comments')}
                onPaste={(e) => disableCutCopyPaste(e, 'paste', 'comments')}
                onChange={(e) => handleChange(e, 'comments')}
                onClick={() => toggleHelperText('comments')}
                onBlur={() => toggleHelperText('comments')}
                onFocus={() => toggleHelperText('comments')}
              />
            </FormControl>
          </div>
          <Divider className="mt-2" />
          <div className={classes.dialogFooter}>
            <Button
              variant="outlined"
              color="primary"
              onClick={() => {
                setState({...initial});
                toggleDialog();
              }}
              className={classes.footerBtns}
            >
              {t('Cancel')}
            </Button>
            <Button
              variant="contained"
              color="primary"
              className={classes.footerBtns}
              type="submit"
            >
              {t('Withdraw request')}
            </Button>
          </div>
        </form>
      </Dialog>
      <CustomizedSnackbar
        open={snackbar}
        severity="success"
        message={t('Vetting request has been withdrawn')}
        toggleSnackbar={SnackbarClose}
      />
    </React.Fragment>
  );
}

// ////////////////////////////////////////// UNASSIGN REQUEST
export function DialogUnassign(props) {
  const classes = useStyles();
  const {t} = useTranslation();
  const {toggleDialog, open} = props;

  return (
    <React.Fragment>
      <Dialog
        onClose={toggleDialog}
        aria-labelledby="dashboard-dialog-title"
        open={open}
        className={classes.root}
      >
        <DialogTitle id="dashboard-dialog-title">
          <div className={classes.dialogTitle}>
            <Typography variant="h6">{t('Unassign from me')}</Typography>
            <IconButton
              id="dialog-close"
              onClick={toggleDialog}
              edge="end"
              aria-label="Unassign from me - close"
            >
              <CloseIcon />
            </IconButton>
          </div>
        </DialogTitle>
        <Divider className="mb-2" />
        <div className={classes.dialogRow}>
          <Typography variant="body2">
            {t(
                'If you choose to proceed, the request will no longer have a lead analyst and an email will be sent to the researcher notifying them of the change.',
            )}
          </Typography>
        </div>
        <Divider className="mt-2" />
        <div className={classes.dialogFooter}>
          <Button
            variant="outlined"
            color="primary"
            onClick={toggleDialog}
            className={classes.footerBtns}
          >
            {t('Cancel')}
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={toggleDialog}
            className={classes.footerBtns}
          >
            {t('Unassign')}
          </Button>
        </div>
      </Dialog>
    </React.Fragment>
  );
}

// ////////////////////////////////////////// MAKE ME SUPPORT
export function DialogSupport(props) {
  const classes = useStyles();
  const {t} = useTranslation();
  const {toggleDialog, open} = props;

  return (
    <React.Fragment>
      <Dialog
        onClose={toggleDialog}
        aria-labelledby="dashboard-dialog-title"
        open={open}
        className={classes.root}
      >
        <DialogTitle id="dashboard-dialog-title">
          <div className={classes.dialogTitle}>
            <Typography variant="h6">{t('Make me support')}</Typography>
            <IconButton
              id="dialog-close"
              onClick={toggleDialog}
              edge="end"
              aria-label="Make me support - close"
            >
              <CloseIcon />
            </IconButton>
          </div>
        </DialogTitle>
        <Divider className="mb-2" />
        <div className={classes.dialogRow}>
          <Typography variant="body2">
            {t(
                'If you choose to proceed, the request will no longer have a lead analyst and an email will be sent to the researcher notifying them of the change.',
            )}
          </Typography>
        </div>
        <Divider className="mt-2" />
        <div className={classes.dialogFooter}>
          <Button
            variant="outlined"
            color="primary"
            onClick={toggleDialog}
            className={classes.footerBtns}
          >
            {t('Cancel')}
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={toggleDialog}
            className={classes.footerBtns}
          >
            {t('Continue')}
          </Button>
        </div>
      </Dialog>
    </React.Fragment>
  );
}

// ////////////////////////////////////////// ASSIGN TO ME
export function DialogAssign(props) {
  const classes = useStyles();
  const {t} = useTranslation();
  const {toggleDialog, open} = props;
  const initial = {
    // blank object used to reset state
    phone: {
      text: '',
      errorText: '',
      invalid: '',
      commands: '',
    },
  };
  const [state, setState] = React.useState({
    phone: {
      text: '',
      errorText: '',
      invalid: '',
      commands: '',
    },
  });

  const phoneExp = /^[+][1]\s\([0-9]{3}\)\s[0-9]{3}\s[0-9]{4}/;

  const handleChange = (e, val) => {
    const comment = e.target.value.trim();
    setState({
      ...state,
      [val]: {
        // updates state with text from input
        ...state[val],
        text: comment,
      },
    });

    if (e.target.value.match(phoneExp) && state[val].errorText) {
      // if input text is valid, clear error
      setState({
        ...state,
        [val]: {
          ...state[val],
          text: comment,
          errorText: '',
          invalid: '',
          commands: '',
        },
      });
    }
  };

  const validateForm = () => {
    let isError = false;
    if (!state.phone.text.match(phoneExp)) {
      isError = true;
      state.phone.invalid = t('Enter phone number.');
      state.phone.errorText = t('Enter phone number.');
    }

    if (isError) {
      setState({
        ...state,
      });
    }

    return isError;
  };

  const submitForm = (e) => {
    e.preventDefault();
    const err = validateForm();
    if (!err) {
      // if no errors exist, submit the form and reset the inputs
      toggleDialog();
      setState({...initial});
    } else {
      for (const property in state) {
        // focus on the first input that has an error on submit
        if (state[property].invalid) {
          switch (property) {
            case 'phone':
              document.getElementById('phone-input').focus();
              break;
            default:
              break;
          }
          break;
        }
      }
    }
  };

  const disableCutCopyPaste = (e, command, value) => {
    // display error if user tries to cut/copy/paste
    let msg;
    e.preventDefault();
    switch (command) {
      case 'cut':
        msg = t('Cut has been disabled for security purposes.');
        setState({
          ...state,
          [value]: {
            ...state[value],
            commands: msg,
            errorText: msg,
          },
        });
        break;
      case 'copy':
        msg = t('Copy has been disabled for security purposes.');
        setState({
          ...state,
          [value]: {
            ...state[value],
            commands: msg,
            errorText: msg,
          },
        });
        break;
      case 'paste':
        msg = t('Paste has been disabled for security purposes.');
        setState({
          ...state,
          [value]: {
            ...state[value],
            commands: msg,
            errorText: msg,
          },
        });
        break;
      default:
        break;
    }
  };

  const toggleHelperText = (value) => {
    if (state[value].commands === state[value].errorText) {
      if (Boolean(state[value].invalid)) {
        // set error text back to invalid error
        setState({
          ...state,
          [value]: {
            ...state[value],
            errorText: state[value].invalid,
          },
        });
      } else {
        // clear error text if no invalid error exists
        setState({
          ...state,
          [value]: {
            ...state[value],
            errorText: '',
          },
        });
      }
    }
  };

  return (
    <React.Fragment>
      <Dialog
        onClose={() => {
          setState({...initial});
          toggleDialog();
        }}
        aria-labelledby="dashboard-dialog-title"
        open={open}
        className={classes.root}
      >
        <DialogTitle id="dashboard-dialog-title">
          <div className={classes.dialogTitle}>
            <Typography variant="h6">{t('Assign to me')}</Typography>
            <IconButton
              id="dialog-close"
              onClick={toggleDialog}
              edge="end"
              aria-label="Assign to me - close"
            >
              <CloseIcon />
            </IconButton>
          </div>
        </DialogTitle>
        <Divider className="mb-2" />
        <form onSubmit={submitForm} noValidate>
          <div className={classes.dialogRow}>
            <Typography variant="subtitle2">
              {t('Provide a phone number')}
            </Typography>
          </div>
          <div className={classes.dialogRow}>
            <FormControl variant="outlined" className={classes.textField}>
              <NumberFormat
                id="phone-input"
                label={t('Phone number')}
                aria-label={t('Phone number')}
                value={state.phone.text}
                customInput={TextField}
                type="text"
                variant="outlined"
                format="+1 (###) ### ####"
                mask="_"
                allowEmptyFormatting
                autoComplete="phone"
                error={Boolean(state.phone.errorText)}
                helperText={state.phone.errorText}
                required
                onCut={(e) => disableCutCopyPaste(e, 'cut', 'phone')}
                onCopy={(e) => disableCutCopyPaste(e, 'copy', 'phone')}
                onPaste={(e) => disableCutCopyPaste(e, 'paste', 'phone')}
                onChange={(e) => handleChange(e, 'phone')}
                onClick={() => toggleHelperText('phone')}
                onBlur={() => toggleHelperText('phone')}
                onFocus={() => toggleHelperText('phone')}
              />
            </FormControl>
          </div>
          <Divider className="mt-2" />
          <div className={classes.dialogFooter}>
            <Button
              variant="outlined"
              color="primary"
              onClick={() => {
                setState({...initial});
                toggleDialog();
              }}
              className={classes.footerBtns}
            >
              {t('Cancel')}
            </Button>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              className={classes.footerBtns}
            >
              {t('Continue')}
            </Button>
          </div>
        </form>
      </Dialog>
    </React.Fragment>
  );
}

// ////////////////////////////////////////// REQUEST AN UPDATE
export function DialogUpdate(props) {
  const classes = useStyles();
  const {t} = useTranslation();
  const {toggleDialog, open} = props;
  const initial = {
    // blank object used to reset state
    comments: {
      text: '',
      errorText: '',
      invalid: '',
      commands: '',
    },
  };
  const [state, setState] = React.useState({
    comments: {
      text: '',
      errorText: '',
      invalid: '',
      commands: '',
    },
  });

  const handleChange = (e, val) => {
    const comment = e.target.value;
    setState({
      ...state,
      [val]: {
        // updates state with text from input
        ...state[val],
        text: comment,
      },
    });

    if (e.target.value && state.comments.errorText) {
      // if input text is valid, clear error
      setState({
        ...state,
        [val]: {
          ...state[val],
          text: comment,
          errorText: '',
          invalid: '',
          commands: '',
        },
      });
    }
  };

  const validateForm = () => {
    let isError = false;
    if (state.comments.text.trim() === '') {
      isError = true;
      state.comments.invalid = t('Enter some comments.');
      state.comments.errorText = t('Enter some comments.');
    }

    if (isError) {
      setState({
        ...state,
      });
    }

    return isError;
  };

  const submitForm = (e) => {
    e.preventDefault();
    const err = validateForm();
    if (!err) {
      // if no errors exist, submit the form and reset the inputs
      toggleDialog();
      setState({...initial});
    } else {
      for (const property in state) {
        // focus on the first input that has an error on submit
        if (state[property].invalid) {
          switch (property) {
            case 'comments':
              document.getElementById('comments-input').focus();
              break;
            default:
              break;
          }
          break;
        }
      }
    }
  };

  const disableCutCopyPaste = (e, command, value) => {
    // display error if user tries to cut/copy/paste
    let msg;
    e.preventDefault();
    switch (command) {
      case 'cut':
        msg = t('Cut has been disabled for security purposes.');
        setState({
          ...state,
          [value]: {
            ...state[value],
            commands: msg,
            errorText: msg,
          },
        });
        break;
      case 'copy':
        msg = t('Copy has been disabled for security purposes.');
        setState({
          ...state,
          [value]: {
            ...state[value],
            commands: msg,
            errorText: msg,
          },
        });
        break;
      case 'paste':
        msg = t('Paste has been disabled for security purposes.');
        setState({
          ...state,
          [value]: {
            ...state[value],
            commands: msg,
            errorText: msg,
          },
        });
        break;
      default:
        break;
    }
  };

  const toggleHelperText = (value) => {
    if (state[value].commands === state[value].errorText) {
      if (Boolean(state[value].invalid)) {
        // set error text back to invalid error
        setState({
          ...state,
          [value]: {
            ...state[value],
            errorText: state[value].invalid,
          },
        });
      } else {
        // clear error text if no invalid error exists
        setState({
          ...state,
          [value]: {
            ...state[value],
            errorText: '',
          },
        });
      }
    }
  };

  return (
    <React.Fragment>
      <Dialog
        onClose={() => {
          setState({...initial});
          toggleDialog();
        }}
        aria-labelledby="dashboard-dialog-title"
        open={open}
        className={classes.root}
      >
        <DialogTitle id="dashboard-dialog-title">
          <div className={classes.dialogTitle}>
            <Typography variant="h6">{t('Request an update')}</Typography>
            <IconButton
              id="dialog-close"
              onClick={toggleDialog}
              edge="end"
              aria-label="Request an update - close"
            >
              <CloseIcon />
            </IconButton>
          </div>
        </DialogTitle>
        <Divider className="mb-2" />
        <Alert severity="warning" className={classes.alert}>
          {t('Do not include any confidential information.')}
        </Alert>
        <form onSubmit={submitForm} noValidate>
          <div className={classes.dialogRow}>
            <FormControl variant="outlined" className={classes.textField}>
              <TextField
                id="comments-input"
                label={t('Comments')}
                aria-label={t('Comments')}
                value={state.comments.text}
                variant="outlined"
                multiline
                required
                error={Boolean(state.comments.errorText)}
                helperText={state.comments.errorText}
                onCut={(e) => disableCutCopyPaste(e, 'cut', 'comments')}
                onCopy={(e) => disableCutCopyPaste(e, 'copy', 'comments')}
                onPaste={(e) => disableCutCopyPaste(e, 'paste', 'comments')}
                onChange={(e) => handleChange(e, 'comments')}
                onClick={() => toggleHelperText('comments')}
                onBlur={() => toggleHelperText('comments')}
                onFocus={() => toggleHelperText('comments')}
              />
            </FormControl>
          </div>
          <Divider className="mt-2" />
          <div className={classes.dialogFooter}>
            <Button
              variant="outlined"
              color="primary"
              onClick={() => {
                setState({...initial});
                toggleDialog();
              }}
              className={classes.footerBtns}
            >
              {t('Cancel')}
            </Button>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              className={classes.footerBtns}
            >
              {t('Submit request')}
            </Button>
          </div>
        </form>
      </Dialog>
    </React.Fragment>
  );
}

// ////////////////////////////////////////// DENY REQUEST
export function DialogDenied(props) {
  const classes = useStyles();
  const {toggleDialog, open} = props;
  const {t} = useTranslation();
  const [snackbar, setSnackbar] = React.useState(false);
  const initial = {
    // blank object used to reset state
    hours: {
      text: '',
      errorText: '',
      invalid: '',
      commands: '',
    },
    minutes: {
      text: '',
      errorText: '',
      invalid: '',
      commands: '',
    },
    reason: {
      text: '',
      errorText: '',
      invalid: '',
      commands: '',
    },
    comments: {
      text: '',
      errorText: '',
      invalid: '',
      commands: '',
    },
  };
  const [state, setState] = React.useState({
    hours: {
      text: '',
      errorText: '',
      invalid: '',
      commands: '',
    },
    minutes: {
      text: '',
      errorText: '',
      invalid: '',
      commands: '',
    },
    reason: {
      text: '',
      errorText: '',
      invalid: '',
      commands: '',
    },
    comments: {
      text: '',
      errorText: '',
      invalid: '',
      commands: '',
    },
  });

  const handleChange = (e, val) => {
    const comment = e.target.value;
    setState({
      ...state,
      [val]: {
        // updates state with text from input
        ...state[val],
        text: comment,
      },
    });

    if (e.target.value && state[val].errorText) {
      // if input text is valid, clear errors
      setState({
        ...state,
        [val]: {
          ...state[val],
          text: comment,
          errorText: '',
          invalid: '',
          commands: '',
        },
      });
    }
  };

  const SnackbarClose = () => {
    setSnackbar(false);
  };

  const validateForm = () => {
    let isError = false;
    if (state.hours.text.trim() === '') {
      isError = true;
      state.hours.invalid = t('Enter total hours.');
      state.hours.errorText = t('Enter total hours.');
    }
    if (state.minutes.text.trim() === '' || state.minutes.text.trim() === '.') {
      isError = true;
      state.minutes.invalid = t('Enter total minutes.');
      state.minutes.errorText = t('Enter total minutes.');
    }
    if (state.reason.text.trim() === '') {
      isError = true;
      state.reason.invalid = t('Select a reason.');
      state.reason.errorText = t('Select a reason.');
    }
    if (state.comments.text.trim() === '') {
      isError = true;
      state.comments.invalid = t('Enter some comments.');
      state.comments.errorText = t('Enter some comments.');
    }

    if (isError) {
      setState({
        ...state,
      });
    }

    return isError;
  };

  const submitForm = (e) => {
    e.preventDefault();
    const err = validateForm();
    if (!err) {
      // if no errors exist, submit the form, toggle snackbar, and reset the inputs
      toggleDialog();
      setSnackbar(!snackbar);
      setState({...initial});
    } else {
      for (const property in state) {
        // focus on the first input that has an error on submit
        if (state[property].invalid) {
          switch (property) {
            case 'hours':
              document.getElementById('hours-input').focus();
              break;
            case 'minutes':
              document.getElementById('minutes-input').focus();
              break;
            case 'reason':
              document.getElementById('denied-select-label').focus();
              break;
            case 'comments':
              document.getElementById('comments-input').focus();
              break;
            default:
              break;
          }
          break;
        }
      }
    }
  };

  const disableCutCopyPaste = (e, command, value) => {
    // display error if user tries to cut/copy/paste
    let msg;
    e.preventDefault();
    switch (command) {
      case 'cut':
        msg = t('Cut has been disabled for security purposes.');
        setState({
          ...state,
          [value]: {
            ...state[value],
            commands: msg,
            errorText: msg,
          },
        });
        break;
      case 'copy':
        msg = t('Copy has been disabled for security purposes.');
        setState({
          ...state,
          [value]: {
            ...state[value],
            commands: msg,
            errorText: msg,
          },
        });
        break;
      case 'paste':
        msg = t('Paste has been disabled for security purposes.');
        setState({
          ...state,
          [value]: {
            ...state[value],
            commands: msg,
            errorText: msg,
          },
        });
        break;
      default:
        break;
    }
  };

  const toggleHelperText = (value) => {
    if (state[value].commands === state[value].errorText) {
      if (Boolean(state[value].invalid)) {
        // set error text back to invalid error
        setState({
          ...state,
          [value]: {
            ...state[value],
            errorText: state[value].invalid,
          },
        });
      } else {
        // clear error text if no invalid error exists
        setState({
          ...state,
          [value]: {
            ...state[value],
            errorText: '',
          },
        });
      }
    }
  };

  return (
    <React.Fragment>
      <Dialog
        onClose={() => {
          setState({...initial});
          toggleDialog();
        }}
        aria-labelledby="dashboard-dialog-title"
        open={open}
        className={classes.root}
      >
        <DialogTitle id="dashboard-dialog-title">
          <div className={classes.dialogTitle}>
            <Typography variant="h6">{t('Deny request')}</Typography>
            <IconButton
              id="dialog-close"
              onClick={toggleDialog}
              edge="end"
              aria-label="Deny request - close"
            >
              <CloseIcon />
            </IconButton>
          </div>
        </DialogTitle>
        <Divider className="mb-2" />
        <Alert severity="warning" className={classes.alert}>
          {t('Do not include any confidential information.')}
        </Alert>
        <form onSubmit={submitForm} noValidate>
          <div className={classes.dialogRow}>
            <Typography variant="subtitle2">{t('Billable hours')}</Typography>
          </div>
          <div className={classes.dialogRow}>
            <FormControl variant="outlined" className={classes.formControl}>
              <FormControlLabel
                control={
                  <NumberFormat
                    id="hours-input"
                    label={t('Hours')}
                    aria-label={t('Hours')}
                    value={state.hours.text}
                    customInput={TextField}
                    type="text"
                    variant="outlined"
                    error={Boolean(state.hours.errorText)}
                    helperText={state.hours.errorText}
                    required
                    onCut={(e) => disableCutCopyPaste(e, 'cut', 'hours')}
                    onCopy={(e) => disableCutCopyPaste(e, 'copy', 'hours')}
                    onPaste={(e) => disableCutCopyPaste(e, 'paste', 'hours')}
                    onChange={(e) => handleChange(e, 'hours')}
                    onClick={() => toggleHelperText('hours')}
                    onBlur={() => toggleHelperText('hours')}
                    onFocus={() => toggleHelperText('hours')}
                  />
                }
              />
              <FormControlLabel
                control={
                  <NumberFormat
                    id="minutes-input"
                    label={t('Minutes')}
                    aria-label={t('Minutes')}
                    value={state.minutes.text}
                    customInput={TextField}
                    type="text"
                    variant="outlined"
                    isAllowed={(values) => {
                      const {formattedValue, floatValue} = values;
                      return formattedValue === '' || floatValue <= 60;
                    }}
                    error={Boolean(state.minutes.errorText)}
                    helperText={state.minutes.errorText}
                    required
                    onCut={(e) => disableCutCopyPaste(e, 'cut', 'minutes')}
                    onCopy={(e) => disableCutCopyPaste(e, 'copy', 'minutes')}
                    onPaste={(e) => disableCutCopyPaste(e, 'paste', 'minutes')}
                    onChange={(e) => handleChange(e, 'minutes')}
                    onClick={() => toggleHelperText('minutes')}
                    onBlur={() => toggleHelperText('minutes')}
                    onFocus={() => toggleHelperText('minutes')}
                  />
                }
              />
            </FormControl>
          </div>
          <div className={classes.dialogRow}>
            <FormControl variant="outlined" required>
              <Select
                native
                inputProps={{
                  id: 'denied-select-label',
                }}
                label={t('Denied reason')}
                value={state.reason.text}
                fullWidth
                placeholder={t('Select an option')}
                onChange={(e) => handleChange(e, 'reason')}
                error={Boolean(state.reason.errorText)}
              >
                <option value=""></option>
                <option value="Non-SSI project">{t('Non-SSI project')}</option>
                <option value="Confidential requirements are not met">
                  {t('Confidential requirements are not met')}
                </option>
                <option value="Request is missing information">
                  {t('Request is missing information')}
                </option>
                <option value="Output file(s) are not in line with the project proposal">
                  {t(
                      'Output file(s) are not in line with the project proposal',
                  )}
                </option>
                <option value="Other">{t('Other')}</option>
              </Select>
              <InputLabel htmlFor="denied-select-label">
                {t('Denied reason')}
              </InputLabel>
              <FormHelperText>{state.reason.errorText}</FormHelperText>
            </FormControl>
          </div>
          <>
            {state.reason.text !== 'Other'? (
          <div className={classes.dialogRow}>
            <FormControl variant="outlined">
              <TextField
                id="comments-input"
                label={t('Comments')}
                aria-label={t('Comments')}
                value={state.comments.text}
                variant="outlined"
                multiline
                error={Boolean(state.comments.errorText)}
                helperText={state.comments.errorText}
                onCut={(e) => disableCutCopyPaste(e, 'cut', 'comments')}
                onCopy={(e) => disableCutCopyPaste(e, 'copy', 'comments')}
                onPaste={(e) => disableCutCopyPaste(e, 'paste', 'comments')}
                onChange={(e) => handleChange(e, 'comments')}
                onClick={() => toggleHelperText('comments')}
                onBlur={() => toggleHelperText('comments')}
                onFocus={() => toggleHelperText('comments')}
              />
            </FormControl>
          </div>
          ) : (
            <FormControl variant="outlined">
              <TextField
                id="comments-input"
                label={t('Comments')}
                aria-label={t('Comments')}
                value={state.comments.text}
                variant="outlined"
                multiline
                required
                error={Boolean(state.comments.errorText)}
                helperText={state.comments.errorText}
                onCut={(e) => disableCutCopyPaste(e, 'cut', 'comments')}
                onCopy={(e) => disableCutCopyPaste(e, 'copy', 'comments')}
                onPaste={(e) => disableCutCopyPaste(e, 'paste', 'comments')}
                onChange={(e) => handleChange(e, 'comments')}
                onClick={() => toggleHelperText('comments')}
                onBlur={() => toggleHelperText('comments')}
                onFocus={() => toggleHelperText('comments')}
              />
            </FormControl>
            )}
          </>
          <Divider className="mt-2" />
          <div className={classes.dialogFooter}>
            <Button
              variant="outlined"
              color="primary"
              onClick={() => {
                setState({...initial});
                toggleDialog();
              }}
              className={classes.footerBtns}
            >
              {t('Cancel')}
            </Button>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              className={classes.footerBtns}
            >
              {t('Submit')}
            </Button>
          </div>
        </form>
      </Dialog>
      <CustomizedSnackbar
        open={snackbar}
        severity="success"
        message={t('Vetting request 10-2020-2354326 has been denied')}
        toggleSnackbar={SnackbarClose}
      />
    </React.Fragment>
  );
}

// ////////////////////////////////////////// APPROVE REQUEST
export function DialogApprove(props) {
  const classes = useStyles();
  const {t} = useTranslation();
  const {toggleDialog, open} = props;
  const [snackbar, setSnackbar] = React.useState(false);
  const initial = {
    // blank object used to reset state
    hours: {
      text: '',
      errorText: '',
      invalid: '',
      commands: '',
    },
    minutes: {
      text: '',
      errorText: '',
      invalid: '',
      commands: '',
    },
  };
  const [state, setState] = React.useState({
    hours: {
      text: '',
      errorText: '',
      invalid: '',
      commands: '',
    },
    minutes: {
      text: '',
      errorText: '',
      invalid: '',
      commands: '',
    },
  });

  const handleChange = (e, val) => {
    const comment = e.target.value;
    setState({
      ...state,
      [val]: {
        // updates state with text from input
        ...state[val],
        text: comment,
      },
    });

    if (e.target.value && state[val].errorText) {
      // if input text is valid, clear error
      setState({
        ...state,
        [val]: {
          ...state[val],
          text: comment,
          errorText: '',
          invalid: '',
          commands: '',
        },
      });
    }
  };

  const SnackbarClose = () => {
    setSnackbar(false);
  };

  const validateForm = () => {
    let isError = false;
    if (state.hours.text.trim() === '') {
      isError = true;
      state.hours.invalid = t('Enter total hours.');
      state.hours.errorText = t('Enter total hours.');
    }
    if (state.minutes.text.trim() === '' || state.minutes.text.trim() === '.') {
      isError = true;
      state.minutes.invalid = t('Enter total minutes.');
      state.minutes.errorText = t('Enter total minutes.');
    }

    if (isError) {
      setState({
        ...state,
      });
    }

    return isError;
  };

  const submitForm = (e) => {
    e.preventDefault();
    const err = validateForm();
    if (!err) {
      // if no errors exist, submit the form, toggle snackbar, and reset the inputs
      toggleDialog();
      setSnackbar(!snackbar);
      setState({...initial});
    } else {
      for (const property in state) {
        // focus on the first input that has an error on submit
        if (state[property].invalid) {
          switch (property) {
            case 'hours':
              document.getElementById('hours-input').focus();
              break;
            case 'minutes':
              document.getElementById('minutes-input').focus();
              break;
            default:
              break;
          }
          break;
        }
      }
    }
  };

  const disableCutCopyPaste = (e, command, value) => {
    // display error if user tries to cut/copy/paste
    let msg;
    e.preventDefault();
    switch (command) {
      case 'cut':
        msg = t('Cut has been disabled for security purposes.');
        setState({
          ...state,
          [value]: {
            ...state[value],
            commands: msg,
            errorText: msg,
          },
        });
        break;
      case 'copy':
        msg = t('Copy has been disabled for security purposes.');
        setState({
          ...state,
          [value]: {
            ...state[value],
            commands: msg,
            errorText: msg,
          },
        });
        break;
      case 'paste':
        msg = t('Paste has been disabled for security purposes.');
        setState({
          ...state,
          [value]: {
            ...state[value],
            commands: msg,
            errorText: msg,
          },
        });
        break;
      default:
        break;
    }
  };

  const toggleHelperText = (value) => {
    if (state[value].commands === state[value].errorText) {
      if (Boolean(state[value].invalid)) {
        // set error text back to invalid error
        setState({
          ...state,
          [value]: {
            ...state[value],
            errorText: state[value].invalid,
          },
        });
      } else {
        // clear error text if no invalid error exists
        setState({
          ...state,
          [value]: {
            ...state[value],
            errorText: '',
          },
        });
      }
    }
  };

  return (
    <React.Fragment>
      <Dialog
        onClose={toggleDialog}
        aria-labelledby="dashboard-dialog-title"
        open={open}
        className={classes.root}
      >
        <DialogTitle id="dashboard-dialog-title">
          <div className={classes.dialogTitle}>
            <Typography variant="h6">{t('Approve request')}</Typography>
            <IconButton
              id="dialog-close"
              onClick={toggleDialog}
              edge="end"
              aria-label="Approve request - close"
            >
              <CloseIcon />
            </IconButton>
          </div>
        </DialogTitle>
        <Divider className="mb-2" />
        <form onSubmit={submitForm} noValidate>
          <div className={classes.dialogRow}>
            <Typography variant="subtitle2">{t('Billable hours')}</Typography>
          </div>
          <div className={classes.dialogRow}>
            <FormControl variant="outlined" className={classes.formControl}>
              <FormControlLabel
                control={
                  <NumberFormat
                    id="hours-input"
                    label={t('Hours')}
                    aria-label={t('Hours')}
                    value={state.hours.text}
                    customInput={TextField}
                    type="text"
                    variant="outlined"
                    error={Boolean(state.hours.errorText)}
                    helperText={state.hours.errorText}
                    required
                    onCut={(e) => disableCutCopyPaste(e, 'cut', 'hours')}
                    onCopy={(e) => disableCutCopyPaste(e, 'copy', 'hours')}
                    onPaste={(e) => disableCutCopyPaste(e, 'paste', 'hours')}
                    onChange={(e) => handleChange(e, 'hours')}
                    onClick={() => toggleHelperText('hours')}
                    onBlur={() => toggleHelperText('hours')}
                    onFocus={() => toggleHelperText('hours')}
                  />
                }
              />
              <FormControlLabel
                control={
                  <NumberFormat
                    id="minutes-input"
                    label={t('Minutes')}
                    aria-label={t('Minutes')}
                    value={state.minutes.text}
                    customInput={TextField}
                    type="text"
                    variant="outlined"
                    isAllowed={(values) => {
                      const {formattedValue, floatValue} = values;
                      return formattedValue === '' || floatValue <= 60;
                    }}
                    error={Boolean(state.minutes.errorText)}
                    helperText={state.minutes.errorText}
                    required
                    onCut={(e) => disableCutCopyPaste(e, 'cut', 'minutes')}
                    onCopy={(e) => disableCutCopyPaste(e, 'copy', 'minutes')}
                    onPaste={(e) => disableCutCopyPaste(e, 'paste', 'minutes')}
                    onChange={(e) => handleChange(e, 'minutes')}
                    onClick={() => toggleHelperText('minutes')}
                    onBlur={() => toggleHelperText('minutes')}
                    onFocus={() => toggleHelperText('minutes')}
                  />
                }
              />
            </FormControl>
          </div>
          <Divider className="mt-2" />
          <div className={classes.dialogFooter}>
            <Button
              variant="outlined"
              color="primary"
              onClick={() => {
                setState({...initial});
                toggleDialog();
              }}
              className={classes.footerBtns}
            >
              {t('Cancel')}
            </Button>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              className={classes.footerBtns}
            >
              {t('Submit')}
            </Button>
          </div>
        </form>
      </Dialog>
      <CustomizedSnackbar
        open={snackbar}
        severity="success"
        message={t('Vetting request 10-2020-2354326 has been approved')}
        toggleSnackbar={SnackbarClose}
      />
    </React.Fragment>
  );
}

// ////////////////////////////////////////// NEW REQUEST TITLE
export function DialognNewRequestTitle(props) {
  const classes = useStyles();
  const {t} = useTranslation();
  const history = useHistory();
  const location = useLocation();
  const {toggleDialog, open, role} = props;
  const initial = {
    // blank object used to reset state
    name: {
      text: 'Untitled request',
      errorText: '',
      invalid: '',
      commands: '',
    },
  };
  const [state, setState] = React.useState({
    name: {
      text: 'Untitled request',
      errorText: '',
      invalid: '',
      commands: '',
    },
    from: location.pathname,
  });

  const handleChange = (e, val) => {
    const comment = e.target.value;
    setState({
      ...state,
      [val]: {
        // updates state with text from input
        ...state[val],
        text: comment,
      },
    });

    if (e.target.value && state.name.errorText) {
      // if input text is valid, clear error
      setState({
        ...state,
        [val]: {
          ...state[val],
          text: comment,
          errorText: '',
          invalid: '',
          commands: '',
        },
      });
    }
  };

  const validateForm = () => {
    let isError = false;
    if (state.name.text.trim() === '') {
      isError = true;
      state.name.invalid = t('Enter a title.');
      state.name.errorText = t('Enter a title.');
    }

    if (isError) {
      setState({
        ...state,
      });
    }

    return isError;
  };

  const submitForm = (e) => {
    e.preventDefault();
    const err = validateForm();
    if (!err) {
      // if no errors exist, submit the form and reset the inputs
      toggleDialog();
      setState({...initial});

      if (role === 'researcher') {
        history.push({
          pathname: '/vetting-app/request-researcher',
          state,
        });
      }
    } else {
      for (const property in state) {
        // focus on the first input that has an error on submit
        if (state[property].invalid) {
          switch (property) {
            case 'title':
              document.getElementById('title-input').focus();
              break;
            default:
              break;
          }
          break;
        }
      }
    }
  };

  const disableCutCopyPaste = (e, command, value) => {
    // display error if user tries to cut/copy/paste
    let msg;
    e.preventDefault();
    switch (command) {
      case 'cut':
        msg = t('Cut has been disabled for security purposes.');
        setState({
          ...state,
          [value]: {
            ...state[value],
            commands: msg,
            errorText: msg,
          },
        });
        break;
      case 'copy':
        msg = t('Copy has been disabled for security purposes.');
        setState({
          ...state,
          [value]: {
            ...state[value],
            commands: msg,
            errorText: msg,
          },
        });
        break;
      case 'paste':
        msg = t('Paste has been disabled for security purposes.');
        setState({
          ...state,
          [value]: {
            ...state[value],
            commands: msg,
            errorText: msg,
          },
        });
        break;
      default:
        break;
    }
  };

  const toggleHelperText = (value) => {
    if (state[value].commands === state[value].errorText) {
      if (Boolean(state[value].invalid)) {
        // set error text back to invalid error
        setState({
          ...state,
          [value]: {
            ...state[value],
            errorText: state[value].invalid,
          },
        });
      } else {
        // clear error text if no invalid error exists
        setState({
          ...state,
          [value]: {
            ...state[value],
            errorText: '',
          },
        });
      }
    }
    if (!state[value].text) {
      // if field is empty, set field to "untitled request"
      setState({
        ...state,
        [value]: {
          ...state[value],
          text: initial[value].text,
        },
      });
    }
  };

  return (
    <React.Fragment>
      <Dialog
        onClose={() => {
          setState({...initial});
          toggleDialog();
        }}
        aria-labelledby="dashboard-dialog-title"
        open={open}
        className={classes.root}
      >
        <DialogTitle id="dashboard-dialog-title">
          <div className={classes.dialogTitle}>
            <Typography variant="h6">{t('New vetting request')}</Typography>
            <IconButton
              id="dialog-close"
              onClick={toggleDialog}
              edge="end"
              aria-label="New vetting request - close"
            >
              <CloseIcon />
            </IconButton>
          </div>
        </DialogTitle>
        <Divider className="mb-2" />
        <form onSubmit={submitForm} noValidate>
          <div className={classes.dialogRow}>
            <Typography variant="subtitle2">
              {t('Please name your new request.')}
            </Typography>
          </div>
          <div className={classes.dialogRow}>
            <FormControl variant="outlined" className={classes.textField}>
              <TextField
                id="name-input"
                label={t('Request name')}
                aria-label={t('Request name')}
                value={state.name.text}
                variant="outlined"
                error={Boolean(state.name.errorText)}
                helperText={state.name.errorText}
                onCut={(e) => disableCutCopyPaste(e, 'cut', 'name')}
                onCopy={(e) => disableCutCopyPaste(e, 'copy', 'name')}
                onPaste={(e) => disableCutCopyPaste(e, 'paste', 'name')}
                onChange={(e) => handleChange(e, 'name')}
                onClick={() => toggleHelperText('name')}
                onBlur={() => toggleHelperText('name')}
              />
            </FormControl>
          </div>
          <Divider className="mt-2" />
          <div className={classes.dialogFooter}>
            <Button
              variant="outlined"
              color="primary"
              onClick={() => {
                setState({...initial});
                toggleDialog();
              }}
              className={classes.footerBtns}
            >
              {t('Cancel')}
            </Button>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              className={classes.footerBtns}
            >
              {t('Create')}
            </Button>
          </div>
        </form>
      </Dialog>
    </React.Fragment>
  );
}
