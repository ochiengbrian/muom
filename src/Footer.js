import React from "react";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyles";
  
const Footer = () => {
  return (
    <Box>
      <h1 style={{ color: "aliceblue", 
                   textAlign: "center", 
                   marginTop: "-50px" }}>
        o1ne MASTERPIECE, WHERE YOU BELONG
      </h1>
      <Container>
        <Row>
          <Column>
            <Heading>About Us</Heading>
            <FooterLink href="#">Aim</FooterLink>
            <FooterLink href="#">Vision</FooterLink>
            <FooterLink href="#">Testimonials</FooterLink>
          </Column>
          <Column>
            <Heading>Services</Heading>
            <FooterLink href="#">Software Development</FooterLink>
            <FooterLink href="#">Computer Checkup & Repair</FooterLink>
            <FooterLink href="#">Phone and Laptop Stickers</FooterLink>
            <FooterLink href="#">Gaming</FooterLink>
          </Column>
          <Column>
            <Heading>Contact Us</Heading>
            <FooterLink href="#">Charles .K. Macharia</FooterLink>
            <FooterLink href="#">Polycarp .W. King'ori</FooterLink>
            <FooterLink href="#">Ochieng .B. Omollo</FooterLink>
            
          </Column>
          <Column>
            <Heading>Social Media</Heading>
            <FooterLink href="#">
              <i className="fab fa-facebook-f">
                <span style={{ marginLeft: "10px" }}>
                  Facebook
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-instagram">
                <span style={{ marginLeft: "10px" }}>
                  Instagram
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-twitter">
                <span style={{ marginLeft: "10px" }}>
                  Twitter
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-youtube">
                <span style={{ marginLeft: "10px" }}>
                  Youtube
                </span>
              </i>
            </FooterLink>
          </Column>
        </Row>
      </Container>
    </Box>
    
  );
};
export default Footer;