import React from 'react';
import { MoviesGrid } from './components/MoviesGrid';
import style from "./App.module.css"
import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";
import { MovieDetails } from './pages/MoviesDetails';
import { LandinPage } from './pages/LandingPage';

export function App () {
  return (
  <Router>
    <header>
         <Link to="/"> <h1 className={style.title}> Movies </h1>  </Link>
    </header>
    <main>
      <Switch>
        <Route exact path="/movies/:movieId">
          <MovieDetails/>
        </Route>
        <Route path="/">
          <LandinPage />
        </Route>
      </Switch>
    </main>
  </Router>)
}

