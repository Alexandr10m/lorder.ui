import React from 'react';

import cn from 'classnames';

import { Paper, Slide } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles, Theme } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@material-ui/icons/Delete';
import FilterListIcon from '@material-ui/icons/FilterList';

const useStyles = makeStyles((theme: Theme) => ({
  create: {
    marginLeft: theme.spacing(2),
  },
  filterWrapper: {
    alignItems: 'center',
    display: 'flex',
    flexFlow: 'column',
    height: 40,
    justifyContent: 'center',
    marginRight: 15,
    minWidth: 220,
  },
  highlight:
    theme.palette.type === 'light'
      ? {
          backgroundColor: theme.palette.primary.main,
          color: theme.palette.primary.contrastText,
        }
      : {
          backgroundColor: theme.palette.primary.dark,
          color: theme.palette.text.primary,
        },
  root: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(1),
  },
  title: {
    alignItems: 'center',
    display: 'flex',
    flex: '1 1 100%',
    flexFlow: 'row nowrap',
  },
}));

interface TableToolbarProps {
  numSelected: number;
  entityName: string;
  createItem: any;
  createTitle: string;
  deleteBulk?: any;
  FilterComponent?: React.FC;
}

export const TableToolbarTsx: React.FC<TableToolbarProps> = ({
  createItem,
  createTitle = 'Создать',
  deleteBulk,
  entityName,
  numSelected,
  FilterComponent,
}) => {
  const classes = useStyles();

  const [opened, setOpened] = React.useState(false);

  const handleClick = () => {
    setOpened(prev => !prev);
  };

  return (
    <Toolbar
      className={cn(classes.root, {
        [classes.highlight]: numSelected > 0,
      })}
    >
      {numSelected > 0 ? (
        <Typography className={classes.title} color="inherit" variant="body1">
          {numSelected}&nbsp;выбрано
        </Typography>
      ) : (
        <div className={classes.title}>
          <Typography variant="h6" id="tableTitle">
            {entityName}
          </Typography>
          {createItem && (
            <Button className={classes.create} variant="outlined" color="default" onClick={createItem}>
              {createTitle}
            </Button>
          )}
        </div>
      )}
      {numSelected > 0 && Boolean(deleteBulk) ? (
        <Tooltip title="Delete">
          <IconButton aria-label="delete" onClick={deleteBulk}>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      ) : (
        <>
          {FilterComponent ? (
            <Slide direction="left" in={opened} mountOnEnter unmountOnExit>
              <Paper className={classes.filterWrapper}>
                <FilterComponent />
              </Paper>
            </Slide>
          ) : null}

          <Tooltip title="Filter list">
            <IconButton aria-label="filter list" onClick={handleClick}>
              <FilterListIcon />
            </IconButton>
          </Tooltip>
        </>
      )}
    </Toolbar>
  );
};
