import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, NavLink, Redirect } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg';
import twitter from './twitter.svg';
import facebook from './facebook.svg';
import google from './google.svg';
import vimeo from './vimeo.svg';
import './App.css';

import Map from './Map'

const Cases = () => <h2>Кейсы</h2>;
const Formats = () => <h2>Форматы</h2>;
const Publisher = () => <h2>Издателям</h2>;
const Platform = () => <h2>Платформа</h2>;
const Always = () => <h2>404</h2>;

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container-fluid">
          <div className="row">
            <section className="col-sm p-0 m-0 col-map">
              <div id="map" style={{ width: "100%", height: "100%" }}>
                <Switch>
                  <Route path='/cases' component={Cases} />
                  <Route path='/formats' component={Formats} />
                  <Route path='/publisher' component={Publisher} />
                  <Route path='/platform' component={Platform} />
                  <Route path='/map/:latitude/:longitude/:icon' component={Map} />
                  <Redirect from="/" to="/cases" />
                  <Route component={Always} />
                </Switch>
              </div>
            </section>
            <nav className="col-sm flex-fixed-width-item">
              <div className="d-flex flex-column">
                <div className="card-header">
                  <a className="navbar-brand" href="/">
                    <img src={logo} className="d-inline-block align-top logo" alt="" />
                  </a>
                </div>
                <div className="card-body m-0">
                  <ul className="nav flex-column">
                    <li className="nav-item">
                      <NavLink to="/cases" activeClassName="active" className="nav-link" href="">Кейсы</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink to="/formats" activeClassName="active" className="nav-link" href="">Форматы</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink to="/publisher" activeClassName="active" className="nav-link" href="">Издателям</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink to="/platform" activeClassName="active" className="nav-link" href="">Платформа</NavLink>
                    </li>
                  </ul>
                </div>
                <footer>
                  <ul className="nav flex-column">
                    <li className="nav-item star">
                      <NavLink to="/map/55.708133/37.653241/star" activeClassName="active" className="nav-link" href="">
                        <p>Москва</p>
                        <p>+7 (495) 269 84 10</p>
                        <p>ул. Ленинская Слобода, 19</p>
                        <p>Бизнес-центр "Омега-плаза"</p>
                      </NavLink>
                    </li>
                    <li className="nav-item anker">
                      <NavLink to="/map/59.909877/30.286587/anker" activeClassName="active" className="nav-link" href="">
                        <p>Санкт-Петербург</p>
                        <p>+7 (812) 240-43-35</p>
                        <p>196158, наб. Обводного канала 199,</p>
                        <p>"Обводной двор", офис 3 "A"</p>
                      </NavLink>
                    </li>
                  </ul>
                  <ul className="nav flex-column footer">
                    <li className="nav-item">
                      <div className="nav-link" href="#">
                        <p>Размещение рекламы:</p>
                        <p>+7 945 249-48-91</p>
                        <p>+7 966 009-30-65</p>
                        <p><a className="mailto" href="mailto:media@hpmnetwork.ru">media@hpmnetwork.ru</a></p>
                      </div>
                    </li>
                    <li className="nav-item">
                      <div className="nav-link" href="#">
                        <p>По вопросам подключения сайтов к сети</p>
                        <p>HPDM Network или использовании</p>
                        <p>SSP HPDM Ads:</p>
                        <p><a className="mailto" href="mailto:media@hpmnetwork.ru">media@hpmnetwork.ru</a></p>
                      </div>
                    </li>
                  </ul>
                  <ul className="nav ">
                    <li className="nav-item">
                      <div className="nav-link">
                        <img src={twitter} className="d-inline-block align-top logo" alt="" />
                      </div>
                    </li>
                    <li className="nav-item">
                      <div className="nav-link">
                        <img src={facebook} className="d-inline-block align-top logo" alt="" />
                      </div>
                    </li>
                    <li className="nav-item">
                      <div className="nav-link">
                        <img src={google} className="d-inline-block align-top logo" alt="" />
                      </div>
                    </li>
                    <li className="nav-item">
                      <div className="nav-link">
                        <img src={vimeo} className="d-inline-block align-top logo" alt="" />
                      </div>
                    </li>
                  </ul>
                </footer>
              </div>
            </nav>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
