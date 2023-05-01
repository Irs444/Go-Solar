import React from 'react';
import './AdminProfile.css';

const AdminProfile = () => {
  return (
    <div>
      <>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Profile Page</title>
        {/* Custom Css */}
        <link rel="stylesheet" href="style.css" />
        {/* FontAwesome 5 */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.1/css/all.min.css"
        />
        
        {/* End */}
        {/* Sidenav */}
        <div className="sidenav">
          <div className="profile">
            <img
              src="images.jpeg"
              alt=""
              width={100}
              height={100}
            />
            <div className="name">Name</div>
            <div className="job">Web Developer</div>
          </div>
          <div className="sidenav-url">
            <div className="url">
              <a href="#profile" className="active">
                <b>Profile</b>
              </a>
              <hr align="center" />
            </div>
            
          </div>
        </div>
        {/* End */}
        {/* Main */}
        <div className="main">
          <h1>IDENTITY</h1>
          <div className="card">
            <div className="card-body">
              <i className="fa fa-pen fa-xs edit" />
              <table>
                <tbody>
                  <tr>
                    <td><h4>Department</h4></td>
                    <td>:</td>
                    <td>ImDezCode</td>
                  </tr>
                  <tr>
                    <td><h4>Email</h4></td>
                    <td>:</td>
                    <td>imdezcode@gmail.com</td>
                  </tr>
                  <tr>
                    <td><h4>Country</h4></td>
                    <td>:</td>
                    <td>Bali, Indonesia</td>
                  </tr>
                  <tr>
                    <td><h4>Hobbies</h4></td>
                    <td>:</td>
                    <td>Diving, Reading Book</td>
                  </tr>
                  <tr>
                    <td><h4>Job</h4></td>
                    <td>:</td>
                    <td>Web Developer</td>
                  </tr>
                  <tr>
                    <td><h4>Skill</h4></td>
                    <td>:</td>
                    <td>PHP, HTML, CSS, Java</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <h1>SOCIAL MEDIA</h1>
          <div className="card">
            <div className="card-body">
              <i className="fa fa-pen fa-xs edit" />
              <div className="social-media">
                <span className="fa-stack fa-sm">
                  <i className="fas fa-circle fa-stack-2x" />
                  <i className="fab fa-facebook fa-stack-1x fa-inverse" />
                </span>
                <span className="fa-stack fa-sm">
                  <i className="fas fa-circle fa-stack-2x" />
                  <i className="fab fa-twitter fa-stack-1x fa-inverse" />
                </span>
                <span className="fa-stack fa-sm">
                  <i className="fas fa-circle fa-stack-2x" />
                  <i className="fab fa-instagram fa-stack-1x fa-inverse" />
                </span>
                <span className="fa-stack fa-sm">
                  <i className="fas fa-circle fa-stack-2x" />
                  <i className="fab fa-invision fa-stack-1x fa-inverse" />
                </span>
                <span className="fa-stack fa-sm">
                  <i className="fas fa-circle fa-stack-2x" />
                  <i className="fab fa-github fa-stack-1x fa-inverse" />
                </span>
                <span className="fa-stack fa-sm">
                  <i className="fas fa-circle fa-stack-2x" />
                  <i className="fab fa-whatsapp fa-stack-1x fa-inverse" />
                </span>
                <span className="fa-stack fa-sm">
                  <i className="fas fa-circle fa-stack-2x" />
                  <i className="fab fa-snapchat fa-stack-1x fa-inverse" />
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* End */}
      </>


    </div>
  )
}

export default AdminProfile