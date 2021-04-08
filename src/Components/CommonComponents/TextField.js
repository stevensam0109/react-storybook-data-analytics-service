import React from 'react';
import PropTypes from 'prop-types';
import {TextField as MUITextField} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  'Root': {
    'margin': theme.spacing(1),
  },
}));

export function TextField(props) {
  const classes = useStyles();
  return (
    <MUITextField
      classes={
        {
          root: classes.Root,
        }
      }
      {...props}
    ></MUITextField>
  );
}

const COLOR = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
};

const VARIANT = {
  FILLED: 'filled',
  OUTLINED: 'outlined',
  STANDARD: 'standard',
};

const SIZE = {
  SMALL: 'small',
  MEDIUM: 'medium',
};
TextField.propTypes = {
  /**
    The color of the component
  */
  color: PropTypes.oneOf(Object.values(COLOR)),
  /**
    If true, the button will be disabled.
  */
  disabled: PropTypes.bool,
  /**
  If true, the label will be displayed in an error state.
  */
  error: PropTypes.bool,
  /**
    If true, the textfield will take up the full width of its container.
  */
  fullWidth: PropTypes.bool,
  /**
  The helper text content.
   */
  helpertext: PropTypes.node,
  /**
   Textfield id used for a11y
  */
  id: PropTypes.string,
  /**
  If dense or normal, will adjust vertical spacing of this and contained components.
  */
  margin: PropTypes.string,
  /**
  If true, a textarea element will be rendered instead of an input.
  */
  multiline: PropTypes.bool,
  /**
  The short hint displayed in the input before the user enters a value.
  */
  placeholder: PropTypes.string,
  /**
 If true, the label is displayed as required and the input element` will be required.
  */
  required: PropTypes.bool,
  /**
 Number of rows to display when multiline option is set to true.
  */
  rows: PropTypes.string,
  /**
 Maximum number of rows to display when multiline option is set to true.
  */
  rowsmax: PropTypes.string,
  /**
    Render a Select element while passing the Input element to Select as input parameter. If this option is set you must pass the options of the select as children.
  */
  select: PropTypes.bool,
  /**
    The size of the button
  */
  size: PropTypes.oneOf(Object.values(SIZE)),
  /**
The value of the input element, required for a controlled component.
  */
  value: PropTypes.any,
  /**
The variant to use.
  */
  variant: PropTypes.any,
};

TextField.defaultProps = {
  color: COLOR.PRIMARY,
  disabled: false,
  fullWidth: false,
  select: false,
  variant: VARIANT.STANDARD,
};
