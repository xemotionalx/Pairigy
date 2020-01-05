import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <html lang='en'>
      <head>
        <meta charset='UTF-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta http-equiv='X-UA-Compatible' content='ie=edge' />
        <link
          href='https://fonts.googleapis.com/css?family=Raleway'
          rel='stylesheet'
        />
        <link
          rel='stylesheet'
          href='https://use.fontawesome.com/releases/v5.8.1/css/all.css'
          integrity='sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf'
          crossorigin='anonymous'
        />

        <link rel='stylesheet' href='styles.css' />
        <title>Pairigy</title>
      </head>
      <body>
        <section class='container'>
          <h1 class='large text-primary'>Sign Up</h1>
          <p class='lead'>
            <i class='fas fa-user'></i> Create Your Account
          </p>
          <form class='form' action='create-profile.html'>
            <div class='form-group'>
              <input type='text' placeholder='Name' name='name' required />
            </div>
            <div class='form-group'>
              <input type='email' placeholder='Email Address' name='email' />
              <small class='form-text'>
                This site uses Gravatar so if you want a profile image, use a
                Gravatar email
              </small>
            </div>
            <div class='form-group'>
              <input
                type='password'
                placeholder='Password'
                name='password'
                minlength='6'
              />
            </div>
            <div class='form-group'>
              <input
                type='password'
                placeholder='Confirm Password'
                name='password2'
                minlength='6'
              />
            </div>
            <input type='submit' class='btn btn-primary' value='Register' />
          </form>
          <p class='my-1'>
            Already have an account? <a href='login.html'>Sign In</a>
          </p>
        </section>
      </body>
    </html>
  );
};

export default Register;
