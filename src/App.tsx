import * as React from 'react';
import Activity from './Activity';
import './App.css';
import Person from './People';


const allPeople = [
  new Person("Brandon", "Buchanan"),
  new Person("Jorge", "Garcia"),
  new Person("Drake", "Loud"),
  new Person("Pierre", "Pierre")
]

const allActivities = [
  new Activity("Food", "utensils"),
  new Activity("Coffee", "coffee"),
  new Activity("Drinks", "beer"),
  new Activity("Football", "football-ball"),
  new Activity("Soccer", "futbol"),
  new Activity("Chess", "chess"),
  new Activity("Hockey", "hockey-puck"),
  new Activity("Reading", "book-open"),
  new Activity("Bird Watching", "crow")
]

const peopleList = allPeople.map((p) => 
  <li key={p.firstName} className="people-item list-group-item d-flex justify-content-between align-items-center">
    <img className="img-fluid img-person" src="https://loremflickr.com/75/75" />{p.firstName} {p.lastName}
  </li>);

const activityList = allActivities.map((a) =>
<li key={a.name} className="list-group-item"><i className={'fas fa-'+a.icon}/> {a.name}</li>
);

enum Page {
  home,
  profile,
  requests
}

interface IAppState{
  currentPage: Page,
  isProfileActive: boolean,
  isHomeActive: boolean,
  isRequestsActive: boolean,
}

class App extends React.Component<{}, IAppState>{

  constructor(props: any) {
    super(props);
    this.state = {
      currentPage: Page.home,
      isHomeActive: true,
      isProfileActive: false,
      isRequestsActive: false,
    }
  }

  public setProfilePage = () => {
    this.setState({currentPage: Page.profile, isProfileActive: true, isHomeActive: false, isRequestsActive: false,})
  }

  public setHomePage = () => {
    this.setState({currentPage: Page.home, isHomeActive: true, isProfileActive: false, isRequestsActive: false})
  }

  public setRequestsPage = () => {
    this.setState({currentPage: Page.requests, isRequestsActive: true})
  }
  public render() {
    
    let renderPage;

    if(this.state.currentPage === Page.home) {
      renderPage = <ul id="people" className="list-group list-people">
        {peopleList}
      </ul>;
    } else if (this.state.currentPage === Page.profile) {
      renderPage = <ul id="activity_list" className="list-group list-activities">
        {activityList}
      </ul>;
    } else if (this.state.currentPage === Page.requests) {
      renderPage = "REQUESTS!!!";
    }
    
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <h1>Fins you should meet.</h1>
          </div>
        </div>
        <div className="row">
          <div className="col">
            {renderPage}
          </div>

        </div>
        <ul id="nav_bottom" className="nav nav-pills nav-fill">
          <li className="nav-item">
            <a onClick={this.setProfilePage} className={'nav-link '+(this.state.isProfileActive ? 'active' : '')}>
              <i className="fas fa-user fa-lg" />
            </a>
          </li>
          <li className="nav-item">
            <a onClick={this.setHomePage} className={'nav-link ' + (this.state.isHomeActive ? 'active' : '')}>
              <i className="fas fa-home fa-lg" />
            </a>
          </li>
          <li className="nav-item">
            <a onClick={this.setRequestsPage} className={'nav-link ' + (this.state.isRequestsActive ? 'active' : '')}>
              <i className="fas fa-envelope fa-lg"/>
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default App;
