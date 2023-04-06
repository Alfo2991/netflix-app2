import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

const MyFooter = () => {
  return (
    <footer className="bg-dark text-light py-5">
      <Container>
        <Row>
          <Col md={2} sm={12}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
              alt="Netflix Logo"
              className="mb-3"
              width="130"
            />
          </Col>
          <Col md={8} sm={12}>
            <Row>
              <Col md={2} sm={6}>
                <h5 className="mb-4">Company</h5>
                <ul className="list-unstyled">
                  <li>About Us</li>
                  <li>Jobs</li>
                  <li>Contact Us</li>
                </ul>
              </Col>
              <Col md={2} sm={6}>
                <h5 className="mb-4">Help</h5>
                <ul className="list-unstyled">
                  <li>FAQ</li>
                  <li>Terms of Use</li>
                  <li>Privacy</li>
                </ul>
              </Col>
              <Col md={2} sm={6}>
                <h5 className="mb-4">Account</h5>
                <ul className="list-unstyled">
                  <li>My Account</li>
                  <li>Sign up</li>
                  <li>Log in</li>
                </ul>
              </Col>
              <Col md={2} sm={6}>
                <h5 className="mb-4">Media Center</h5>
                <ul className="list-unstyled">
                  <li>Netflix Originals</li>
                  <li>Press Releases</li>
                  <li>Media Coverage</li>
                </ul>
              </Col>
            </Row>
          </Col>
          <Col md={2} sm={12}>
            <Row className="mb-4">
              <Col>
                <FaFacebookF size={24} className="text-light mr-3" />
                <FaTwitter size={24} className="text-light mr-3" />
                <FaInstagram size={24} className="text-light mr-3" />
                <FaYoutube size={24} className="text-light mr-3" />
              </Col>
            </Row>
            <Row>
              <Col>
                <p className="text-muted mb-0 small">
                  &copy; {new Date().getFullYear()} Netflix, Inc.
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default MyFooter;
