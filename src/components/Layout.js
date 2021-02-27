import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import styled from "styled-components";

import GlobalStyle from "../globalStyles";

const StyledSite = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
`;

const StyledContent = styled.div`
  flex: 1;
`;

const Layout = ({ title, description, children }) => (
  <StyledSite>
    <GlobalStyle />
    <Helmet>
      <title>Yordevs » {title}</title>
      {/* Add SEO, og:graph and any other metadata stuff in here */}

      <meta charset="utf-8" />
      <meta name="description" content={description} />
      <meta name="keywords" content="Yordevs, York, web, development, programming, website" />
      <meta name="author" content="Yordevs Team" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      <meta property="og:title" content={`Yordevs » ${title}`} />
      <meta property="og:description" content={description} />
      <meta property="og:locale" content="en_GB" />
      <meta property="og:site_name" content="Yordevs" />
    </Helmet>
    {/* <Navbar /> */}
    <StyledContent>{children}</StyledContent>
    {/* <Footer /> */}
  </StyledSite>
);

export default Layout;

Layout.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  children: PropTypes.node,
};
