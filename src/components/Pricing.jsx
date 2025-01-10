import React from 'react';
import './Pricing.css';

 function Pricing() {
  return (
    // Pricing Section
    <section id="pricing">
      <div className="pricing-container">
        {/* Pricing Title */}
        <h2 className="pricing-title">Our Pricing Plans</h2>
        
        {/* Pricing Cards List */}
        <div className="pricing-list">
          {/* Pricing Card 1 */}
          <div className="pricing-card">
            <div className="pricing-card-header">Basic Plan</div>
            <div className="pricing-card-price">$19.99/month</div>
            <div className="pricing-card-description">
              Access to all basic features and updates.
            </div>
            <a href="#" className="pricing-card-button">Choose Plan</a>
          </div>

          {/* Pricing Card 2 */}
          <div className="pricing-card">
            <div className="pricing-card-header">Standard Plan</div>
            <div className="pricing-card-price">$39.99/month</div>
            <div className="pricing-card-description">
              Includes everything in Basic plus additional features.
            </div>
            <a href="#" className="pricing-card-button">Choose Plan</a>
          </div>

          {/* Pricing Card 3 */}
          <div className="pricing-card">
            <div className="pricing-card-header">Premium Plan</div>
            <div className="pricing-card-price">$59.99/month</div>
            <div className="pricing-card-description">
              All features with premium support and more.
            </div>
            <a href="#" className="pricing-card-button">Choose Plan</a>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Pricing;