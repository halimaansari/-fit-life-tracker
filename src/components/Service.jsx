import React from 'react';
import './Service.css';  

function Services() {
  return (
    <section id="services" className="services-section">
      <div className="services-container">
        <h2 className="services-title">Fitness Services</h2>
        <div className="services-list">
          
          {/* Service Item: Fitness Tracking */}
          <div className="service-item">
            <div className="service-icon">
              <i className="fa fa-heartbeat"></i> {/* Icon for Fitness Tracking */}
            </div>
            <div className="service-content">
              <h3>Fitness Tracking</h3>
              <p>
                Track your daily activities, workouts, and progress with real-time data and performance insights. Stay on top of your fitness goals with our easy-to-use tracking tools.
              </p>
            </div>
          </div>

          {/* Service Item: Personalized Coaching */}
          <div className="service-item">
            <div className="service-icon">
              <i className="fa fa-users"></i> {/* Icon for Coaching */}
            </div>
            <div className="service-content">
              <h3>Personalized Coaching</h3>
              <p>
                Receive custom fitness plans and expert coaching to achieve your fitness goals faster. Whether it's weight loss, muscle gain, or endurance building, we've got you covered.
              </p>
            </div>
          </div>

          {/* Service Item: Nutrition Plans */}
          <div className="service-item">
            <div className="service-icon">
              <i className="fa fa-apple-alt"></i> {/* Icon for Nutrition */}
            </div>
            <div className="service-content">
              <h3>Nutrition Plans</h3>
              <p>
                Our app provides personalized nutrition plans to complement your fitness journey. Fuel your workouts with the right food and track your calorie intake.
              </p>
            </div>
          </div>

          {/* Service Item: Mobile App Development */}
          <div className="service-item">
            <div className="service-icon">
              <i className="fa fa-mobile-alt"></i> {/* Icon for Mobile App Development */}
            </div>
            <div className="service-content">
              <h3>Mobile App Development</h3>
              <p>
                We build intuitive and engaging fitness tracker mobile applications for iOS and Android. Stay connected to your fitness data anytime, anywhere.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Services;
