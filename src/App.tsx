import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import * as Loadable from 'react-loadable';
import NoSsr from '@material-ui/core/NoSsr';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import createStyles from '@material-ui/core/styles/createStyles';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const Loading = () => <div>Loading...</div>;

const Home = Loadable({
  loader: () => import('./pages/home'),
  loading: Loading,
});

const styles = (theme: Theme) =>
  createStyles({
    root: {
      paddingLeft: theme.spacing.unit * 2,
    },
    grow: {
      flexGrow: 1,
    },
  });

class App extends React.Component<WithStyles<typeof styles>, {}> {
  public render() {
    return (
      <NoSsr>
        <React.Fragment>
          <CssBaseline />
          <div>
            <AppBar position="static">
              <Toolbar>
                <Typography variant="h6" color="inherit" className={this.props.classes.grow}>
                  React + TypeScript + Material-UI
                </Typography>
              </Toolbar>
            </AppBar>
            <div className={this.props.classes.root}>
              <Router>
                <Switch>
                  <Route exact path="/" component={Home} />
                </Switch>
              </Router>
            </div>
          </div>
        </React.Fragment>
      </NoSsr>
    );
  }
}

export default withStyles(styles)(App);
