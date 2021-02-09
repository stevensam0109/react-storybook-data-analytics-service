import React from 'react';
import {useTranslation} from 'react-i18next';
import {makeStyles} from '@material-ui/core/styles';
import {
  Typography,
  TableCell,
  Chip,
  Link,
} from '@material-ui/core';

import {DialogAnalyst, DialogManageTeam} from './DialogBox';
import {ROW_HEIGHT} from './TableContainerComponent';

const useStyles = makeStyles((theme) => ({
  tablesCellsFlex: {
    display: 'flex',
    alignItems: 'center',
    minHeight: `calc(${ROW_HEIGHT}px - ${theme.spacing(2)}px)`,
  },
  leadChip: {
    paddingRight: theme.spacing(1),
    marginRight: theme.spacing(1),
    borderRight: '1px solid',
    borderRightColor: theme.palette.divider,
  },
}),
);

export default function AnalystCell(props) {
  const {t} = useTranslation();
  const {role, analysts} = props;
  const extraAnalysts = analysts.support.length;
  const classes = useStyles();
  const [open, setOpen] = React.useState({
    analystInfo: false,
    manageTeam: false,
  });

  function toggleDialog(value) {
    if (value === 'info') {
      setOpen({...open, analystInfo: !open.analystInfo});
    }
    if (value === 'list') {
      setOpen({...open, manageTeam: !open.manageTeam});
    }
  }

  if (role === 'researcher') {
    if (analysts.lead !== '') {
      return (
        <TableCell className={classes.tablesCellsFlex}>
          <Chip label={analysts.lead} onClick={() => toggleDialog('info')}/>
          <DialogAnalyst open={open.analystInfo} toggleDialog={() => toggleDialog('info')}/>
        </TableCell>
      );
    } else {
      return (
        <TableCell className={classes.tablesCellsFlex}>
          <Typography variant="body2" color="textSecondary">{t('Unassigned')}</Typography>
        </TableCell>
      );
    }
  } else if (role === 'analyst') {
    if (analysts.lead !== '' && analysts.support.length > 0) {
      return (
        <TableCell className={classes.tablesCellsFlex}>
          <div className={classes.leadChip}>
            <Chip label={analysts.lead} onClick={() => toggleDialog('list')}/>
          </div>
          <Chip label={`${extraAnalysts} ${t('support')}`} onClick={() => toggleDialog('list')} />
          <DialogManageTeam open={open.manageTeam} toggleDialog={() => toggleDialog('list')} />
        </TableCell>
      );
    } else if (analysts.lead !== '' && analysts.support.length === 0) {
      return (
        <TableCell className={classes.tablesCellsFlex}>
          <Chip label={analysts.lead} onClick={() => toggleDialog('list')}/>
          <DialogManageTeam open={open.manageTeam} toggleDialog={() => toggleDialog('list')} />
        </TableCell>
      );
    } else if (analysts.lead === '' && analysts.support.length > 0) {
      return (
        <TableCell className={classes.tablesCellsFlex}>
          <div className={classes.leadChip}>
            <Typography variant="body2" color="textSecondary">{t('No lead')}</Typography>
          </div>
          <Chip label={`${extraAnalysts} ${t('support')}`} onClick={() => toggleDialog('list')} />
          <DialogManageTeam open={open.manageTeam} toggleDialog={() => toggleDialog('list')} />
        </TableCell>
      );
    } else {
      return (
        <TableCell className={classes.tablesCellsFlex}>
          <Typography variant="body2">
            <Link onClick={() => toggleDialog('list')}>{t('Manage team')}</Link>
          </Typography>
          <DialogManageTeam open={open.manageTeam} toggleDialog={() => toggleDialog('list')} />
        </TableCell>
      );
    }
  }
};
