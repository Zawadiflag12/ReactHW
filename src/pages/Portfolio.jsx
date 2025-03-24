//build my portfolio page
// create a grid of images that link to my projects
import weatherImage from "../assets/Weather.jpg";
import vehicleImage from "../assets/vehicle.jpg";
import employeeImage from "../assets/employee.png";
import calendarImage from "../assets/Calendar.jpg";
import readImage from "../assets/read.jpg";

function Portfolio() {
  return (
    <div className="Portfolio">
      <h1 className="title"> Portfolio</h1>
      <div className="grid-container">
        <div className="grid-item">
          <a href="https://github.com/Zawadiflag12/Weather.git">
            <img
              src={weatherImage}
              alt="Weather Dashboard"
            ></img>
          </a>
        </div>
        <div className="grid-item">
          <a href="https://github.com/Zawadiflag12/TypeScriptApplication.git">
            <img
              src={vehicleImage}
              alt="Vehicle Builder"
            ></img>
          </a>
        </div>
        <div className="grid-item">
          <a href=" https://github.com/Zawadiflag12/EETracker.git">
            <img
              src={employeeImage}
              alt="Emplyee Tracker"
            ></img>
          </a>
        </div>
        <div className="grid-item">
          <a href="https://github.com/p1t5-Calendar/ProjectOne.git">
            <img
              src={calendarImage}
              alt="Task Calendar"
            ></img>
          </a>
        </div>
        <div className="grid-item">
          <a href="https://github.com/Zawadiflag12/Node-Assignmnet.git">
            <img
              src={readImage}
              alt="READ ME Creator"
            ></img>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
