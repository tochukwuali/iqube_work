import './App.css';
import UserForm from "./components/UserForm";

const App = () => {
  return (
    <div className="App">
      <div className="wrapper">
        <div className="wrapper-content">
          <div className="inner-wrapper">
            <UserForm />
          </div>  
        </div>
        
        <div className="shape-divider">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" className="shape-fill"></path>
        </svg>
      </div>
      </div>
    </div>
  );
}

export default App;
