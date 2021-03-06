import React from 'react';
import './App.css';
import MovieCardContainer from '../../containers/MovieCardContainer/MovieCardContainer';
import MovieDetails from '../../containers/MovieDetails/MovieDetails';
import NavBar from '../../containers/NavBar/NavBar';
import LoginPage from '../LoginPage/LoginPage';
import { Route, Switch } from 'react-router-dom';

const App = () => {
    return (
      <div className="App">
        <NavBar />
        <Switch>
          <Route
            path="/" exact
            component={() =>
              <MovieCardContainer />
            }
          />
          <Route
            path="/login" exact
            component={() =>
              <LoginPage />
            }
          />
          <Route
            path="/movies/:movie_id"
            component={({ match }) => {
              const { params } = match;
              return (<MovieDetails
                id={parseInt(params.movie_id)}
              />)
            }}
          />
          <Route
            path="/users/:user_id/ratings" exact
            component={() =>
              <MovieCardContainer />
            }
          />
        </Switch>
      </div>
    );
}

export default App;