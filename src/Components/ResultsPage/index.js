import React from 'react';
import {useTranslation} from 'react-i18next';
import {
  Container,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Typography,
  Divider,
} from '@material-ui/core';
import queryString from 'query-string';
import Pagination from '@material-ui/lab/Pagination';
import {makeStyles} from '@material-ui/styles';

import {datasets} from '../../Data/fakeData';
import {sortByKey, sortByKeyDesc} from '../../Utils/sorting';
import BypassBlocks from '../BypassBlocks';
import Footer from '../Footers/Footer';
import DefaultHeader from '../Headers/DefaultHeader';
import FilterPills from './FilterPills';
import Filters from './Filters';
import ResultItem from './ResultItem';

const useStyles = makeStyles((theme) => ({
  sortContainer: {
    padding: theme.spacing(0, 1),
  },
  sort: {
    width: '100%',
  },
  results: {
    margin: theme.spacing(3, 0),
    padding: theme.spacing(0, 1),
  },
  pagination: {
    marginBottom: theme.spacing(6),
    display: 'flex',
    justifyContent: 'center',
  },
}));

export default function Results(props) {
  const classes = useStyles();
  const {t} = useTranslation();

  const [state, setState] = React.useState({
    numResults: 437,
    sortBy: 10,
    searchTerm: queryString.parse(props.location.search).search,
    offset: 0,
    filters: {
      selected: true,
      subjects: ['Coal', 'Prices'],
      commodities: [],
      sources: [],
      date: {startDate: '2009-10-24', endDate: '2011-03-10'},
      frequency: [],
      geography: [],
    },
  });

  const mainRef = React.createRef();
  const aboutRef = React.createRef();
  const ref = React.createRef();
  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);

  const handleChangeSort = (event) => {
    setState({...state, sortBy: event.target.value});

    if (event.target.value === 20) {
      sortByKeyDesc(datasets, 'dateReleased');
    } else {
      sortByKey(datasets, 'id');
    }
  };

  React.useEffect(() => {
    document.title = `${t('DAaaS - Results for')} ${state.searchTerm}`;
    setLabelWidth(inputLabel.current.offsetWidth);
  }, [state.searchTerm, t]);

  return (
    <React.Fragment>
      <BypassBlocks ref={{main: mainRef, about: aboutRef}} />
      <DefaultHeader />
      <main ref={mainRef} tabIndex="-1">
        <Container maxWidth="xl" className="page-container">
          <Typography variant="h1" className="screen-reader-text">
            {t('Search results')}
          </Typography>
          <Grid container>
            <Grid item xs={4} lg={3}>
              <Filters ref={ref} />
            </Grid>
            <Grid item xs={8} lg={9} ref={ref} className="pl-2" tabIndex="-1">
              <Grid container>
                <Grid item xs={12} lg={12}>
                  <FilterPills searchTerm="Coal" filters={state.filters} />
                  <Grid
                    container
                    justify="space-between"
                    alignItems="center"
                    className={classes.sortContainer}
                  >
                    <Grid item xs={3} lg={2}>
                      <FormControl variant="outlined" className={classes.sort}>
                        <InputLabel id="sort-by-label" ref={inputLabel}>
                          {t('Sort by')}
                        </InputLabel>
                        <Select
                          value={state.sortBy}
                          onChange={handleChangeSort}
                          variant="outlined"
                          labelWidth={labelWidth}
                          labelId="sort-by-label"
                          margin="dense"
                          inputProps={{
                            id: 'sort-by',
                          }}
                        >
                          <MenuItem value={10}>{t('Relevance')}</MenuItem>
                          <MenuItem value={20}>{t('Release date')}</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid item>
                      <Typography variant="body2" color="textSecondary">
                        {state.numResults} {t('results')} (0.78 {t('seconds')})
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid
                    container
                    direction="column"
                    className={classes.results}
                  >
                    {datasets.map((pumf) => {
                      return <ResultItem key={pumf.id} {...pumf} />;
                    })}
                  </Grid>
                  <Pagination
                    className={classes.pagination}
                    count={Math.ceil(state.numResults / 8)}
                  />
                </Grid>
              </Grid>
              <Divider />
              <Grid item xs={12}>
                <Footer ref={aboutRef} />
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </main>
    </React.Fragment>
  );
}
