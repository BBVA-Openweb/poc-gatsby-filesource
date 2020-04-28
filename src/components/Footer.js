import React from 'react';

import { Box, Container, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { StaticQuery, graphql } from 'gatsby';

import Link from './Link';

const useStyles = makeStyles((theme) => ({
  footer: {
    color: theme.palette.common.white,
    backgroundColor: theme.palette.primary.dark.toString(),
    '& a': {
      color: theme.palette.grey[300],
      textDecoration: 'none',
      fontSize: '.9rem',
    },
    '& a:hover': {
      textDecoration: 'underline',
    },
    '& ul': {
      padding: 0,
      listStyle: 'none',
    },
    '& li': {
      marginBottom: theme.spacing(0.5),
    },
  },
}));

const FooterColumns = ({ columns }) => (
  <Grid container spacing={2}>
    {columns.map((column) => (
      <Grid xs={12} sm={4} item key={column.heading}>
        <Typography style={{ fontWeight: 'bold' }}>{column.heading}</Typography>
        <ul>
          {column.links.map((link) => (
            <li key={link.title}>
              <Link to={link.url}>{link.title}</Link>
            </li>
          ))}
        </ul>
      </Grid>
    ))}
  </Grid>
);

const Footer = () => {
  const classes = useStyles();
  return (
    <StaticQuery
      query={graphql`
        {
          site {
            siteMetadata {
              components {
                footer {
                  columns {
                    heading
                    links {
                      title
                      url
                    }
                  }
                  copyright
                }
              }
            }
          }
        }
      `}
      render={({
        site: {
          siteMetadata: {
            components: {
              footer: { columns, copyright },
            },
          },
        },
      }) => (
        <Box component="footer" className={classes.footer}>
          <Container maxWidth="md">
            <Box padding={4}>
              <FooterColumns columns={columns} />
              <Box textAlign="center" marginTop={2}>
                <Typography variant="caption">
                  &copy; {new Date().getFullYear()} {copyright}
                </Typography>
              </Box>
            </Box>
          </Container>
        </Box>
      )}
    />
  );
};
Footer.displayName = 'Footer';

export default Footer;
