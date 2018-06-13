import * as React from 'react';
import './App.css';
import Person from './People';

const allPeople = [
  new Person("Brandon", "Buchanan"),
  new Person("Jorge", "Garcia"),
  new Person("Drake", "Loud"),
  new Person("Pierre", "Pierre")
]

const peopleList = allPeople.map((p) => 
  <li key={p.firstName} className="people-item list-group-item d-flex justify-content-between align-items-center">
    <img className="img-fluid img-person" src="https://loremflickr.com/75/75" />{p.firstName} {p.lastName}
  </li>);

enum Page {
  home,
  profile,
  requests
}

interface IAppState{
  currentPage: Page
}

class App extends React.Component<{}, IAppState>{

  constructor(props: any) {
    super(props);
    this.state = {
      currentPage: Page.home
    }
  }

  public setProfilePage = () => {
    this.setState({currentPage: Page.profile})
  }

  public setHomePage = () => {
    this.setState({currentPage: Page.home})
  }

  public setRequestsPage = () => {
    this.setState({currentPage: Page.requests})
  }
  public render() {
    
    let renderPage;

    if(this.state.currentPage === Page.home) {
      renderPage = <ul id="people" className="list-group list-people">
        {peopleList}
      </ul>;
    } else if (this.state.currentPage === Page.profile) {
      renderPage = "PROFILE!!!";
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
        <ul className="nav nav-pills nav-bottom nav-fill">
          <li className="nav-item">
            <a onClick={this.setProfilePage} className="nav-link">
              <i className="fas fa-user fa-lg" />
            </a>
          </li>
          <li className="nav-item">
            <a onClick={this.setHomePage} className="nav-link active">
              <i className="fas fa-home fa-lg" />
            </a>
          </li>
          <li className="nav-item">
            <a onClick={this.setRequestsPage} className="nav-link">
              <i className="fas fa-envelope fa-lg"/>
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default App;
