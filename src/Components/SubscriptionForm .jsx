import React, { useState } from "react";
import axios from "axios";
import "./HomePage.css";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

const SubscriptionForm = () => {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    // Validate inputs
    if (!firstName || !email || !isChecked) {
      setError("Please fill in all fields and agree to the terms.");
      return;
    }

    // Call API
    try {
      const response = await axios.post(
        "https://bringecommerce.site/api/global-form/HG_SCG/newsletter-registrations",
        {
          firstName,
          email,
        }
      );
      setSuccess("Subscription successful!");
    } catch (err) {
      setError("Failed to subscribe. Please try again later.");
    }
  };

  return (
    <div className="container">
      <h2 className="title">SUBSCRIBE</h2>
      <p className="description">Receive updates straight to your inbox</p>
      {error && <p className="error" style={{background:'transparent'}}>{error}</p>}
      {success && <p className="success" style={{background:'transparent'}}>{success}</p>}
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            className="form-control"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              background: "transparent",
              alignItems: "center",
              textAlign: "left",
            }}
          >
            <input
              type="checkbox"
              className="form-checkbox"
              checked={isChecked}
              onChange={(e) => setIsChecked(e.target.checked)}
              required
            />
            <label className="form-checkbox-label">
              Yes, I would like the Office of H.H. Sundara Chaitanya Goswami to
              send me emails about its activities. You can unsubscribe at any
              time.
            </label>
          </div>
        </div>
        <button type="submit" className="btn">
          SUBSCRIBE
        </button>
      </form>
      <h2 className="title">FOLLOW</h2>
      <div className="social-icons" style={{background:'transparent'}}>
        <a
          href="https://www.instagram.com/sundarachaitanyagoswami/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <InstagramIcon/>
        </a>
        <a
          href="https://www.facebook.com/groups/632607916875927"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FacebookIcon/>
        </a>
      </div>
    </div>
  );
};

export default SubscriptionForm;
