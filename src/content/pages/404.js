import React from 'react';

import { Box, Typography } from '@material-ui/core';
import { StaticQuery, graphql } from 'gatsby';

import Layout from '../../components/Layout';
import theme from '../../style/theme';

const Error404Template = () => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={(data) => (
      <Layout location={window.location} title={data.site.siteMetadata.title}>
        <Box display="flex" flexDirection="column" flexGrow={1}>
          <Box
            flexGrow={1}
            textAlign="center"
            paddingTop={4}
            paddingBottom={12}
            paddingX={8}
            style={{
              color: theme.palette.common.black,
            }}
          >
            <Box marginBottom={4}>
              <Typography
                color="inherit"
                variant="h2"
                style={{
                  fontWeight: 'bold',
                  fontFamily:
                    'Work Sans, -apple-system, BlinkMacSystemFont, Roboto, sans-serif',
                  marginBottom: 4,
                }}
              >
                404 Error
              </Typography>
              <Typography color="inherit" variant="body1">
                The requested page was not found.
              </Typography>
            </Box>
          </Box>
        </Box>
      </Layout>
    )}
  />
);

export default Error404Template;
