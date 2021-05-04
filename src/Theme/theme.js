import {createMuiTheme} from '@material-ui/core';

export const theme = createMuiTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#1A73E8',
      light: '#d4e5ff',
      dark: '#0049b3',
    },
    secondary: {
      main: '#34dbc5',
      light: '#77fff8',
      dark: '#00a995',
    },
    error: {
      main: '#E91B0C',
    },
    grey: {
      500: '#949494', // has 3:1 color contrast with white
    },
    action: {
      hover: 'rgba(0,0,0,0.08)',
      hoverOpacity: 0.08,
      selected: 'rgba(0,0,0,0.12)',
      selectedOpacity: 0.12,
    },
  },
  props: {
    MuiButton: {
      disableFocusRipple: true,
    },
  },
  shadows: [
    'none',
    '0px 2px 1px -1px rgba(117,117,117,0.2),0px 1px 1px 0px rgba(117,117,117,0.14),0px 1px 3px 0px rgba(117,117,117,0.12)',
    '0px 3px 1px -2px rgba(117,117,117,0.2),0px 2px 2px 0px rgba(117,117,117,0.14),0px 1px 5px 0px rgba(117,117,117,0.12)',
    '0px 3px 3px -2px rgba(117,117,117,0.2),0px 3px 4px 0px rgba(117,117,117,0.14),0px 1px 8px 0px rgba(117,117,117,0.12)',
    '0px 2px 4px -1px rgba(117,117,117,0.2),0px 4px 5px 0px rgba(117,117,117,0.14),0px 1px 10px 0px rgba(117,117,117,0.12)',
    '0px 3px 5px -1px rgba(117,117,117,0.2),0px 5px 8px 0px rgba(117,117,117,0.14),0px 1px 14px 0px rgba(117,117,117,0.12)',
    '0px 3px 5px -1px rgba(117,117,117,0.2),0px 6px 10px 0px rgba(117,117,117,0.14),0px 1px 18px 0px rgba(117,117,117,0.12)',
    '0px 4px 5px -2px rgba(117,117,117,0.2),0px 7px 10px 1px rgba(117,117,117,0.14),0px 2px 16px 1px rgba(117,117,117,0.12)',
    '0px 5px 5px -3px rgba(117,117,117,0.2),0px 8px 10px 1px rgba(117,117,117,0.14),0px 3px 14px 2px rgba(117,117,117,0.12)',
    '0px 5px 6px -3px rgba(117,117,117,0.2),0px 9px 12px 1px rgba(117,117,117,0.14),0px 3px 16px 2px rgba(117,117,117,0.12)',
    '0px 6px 6px -3px rgba(117,117,117,0.2),0px 10px 14px 1px rgba(117,117,117,0.14),0px 4px 18px 3px rgba(117,117,117,0.12)',
    '0px 6px 7px -4px rgba(117,117,117,0.2),0px 11px 15px 1px rgba(117,117,117,0.14),0px 4px 20px 3px rgba(117,117,117,0.12)',
    '0px 7px 8px -4px rgba(117,117,117,0.2),0px 12px 17px 2px rgba(117,117,117,0.14),0px 5px 22px 4px rgba(117,117,117,0.12)',
    '0px 7px 8px -4px rgba(117,117,117,0.2),0px 13px 19px 2px rgba(117,117,117,0.14),0px 5px 24px 4px rgba(117,117,117,0.12)',
    '0px 7px 9px -4px rgba(117,117,117,0.2),0px 14px 21px 2px rgba(117,117,117,0.14),0px 5px 26px 4px rgba(117,117,117,0.12)',
    '0px 8px 9px -5px rgba(117,117,117,0.2),0px 15px 22px 2px rgba(117,117,117,0.14),0px 6px 28px 5px rgba(117,117,117,0.12)',
    '0px 8px 10px -5px rgba(117,117,117,0.2),0px 16px 24px 2px rgba(117,117,117,0.14),0px 6px 30px 5px rgba(117,117,117,0.12)',
    '0px 8px 11px -5px rgba(117,117,117,0.2),0px 17px 26px 2px rgba(117,117,117,0.14),0px 6px 32px 5px rgba(117,117,117,0.12)',
    '0px 9px 11px -5px rgba(117,117,117,0.2),0px 18px 28px 2px rgba(117,117,117,0.14),0px 7px 34px 6px rgba(117,117,117,0.12)',
    '0px 9px 12px -6px rgba(117,117,117,0.2),0px 19px 29px 2px rgba(117,117,117,0.14),0px 7px 36px 6px rgba(117,117,117,0.12)',
    '0px 10px 13px -6px rgba(117,117,117,0.2),0px 20px 31px 3px rgba(117,117,117,0.14),0px 8px 38px 7px rgba(117,117,117,0.12)',
    '0px 10px 13px -6px rgba(117,117,117,0.2),0px 21px 33px 3px rgba(117,117,117,0.14),0px 8px 40px 7px rgba(117,117,117,0.12)',
    '0px 10px 14px -6px rgba(117,117,117,0.2),0px 22px 35px 3px rgba(117,117,117,0.14),0px 8px 42px 7px rgba(117,117,117,0.12)',
    '0px 11px 14px -7px rgba(117,117,117,0.2),0px 23px 36px 3px rgba(117,117,117,0.14),0px 9px 44px 8px rgba(117,117,117,0.12)',
    '0px 11px 15px -7px rgba(117,117,117,0.2),0px 24px 38px 3px rgba(117,117,117,0.14),0px 9px 46px 8px rgba(117,117,117,0.12)',
  ],
  typography: {
    fontFamily: ['"Roboto"', 'sans-serif'],
  },
  overrides: {
    MuiTooltip: {
      tooltip: {
        fontSize: '0.75rem',
        backgroundColor: '#616161E6',
      },
    },
  },
});

export const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#1A73E8',
      light: '#d4e5ff',
      dark: '#0049b3',
    },
    background: {
      paper: '#173048',
    },
  },
  overrides: {
    MuiButton: {
      label: {
        textTransform: 'none',
      },
    },
  },
});
