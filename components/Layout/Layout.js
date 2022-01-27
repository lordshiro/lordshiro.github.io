import React, { useRef, useEffect, useState } from "react";
import { makeStyles } from '@mui/styles';
import { Container, Box, CssBaseline } from '@mui/material';
import { useRouter } from 'next/router'
import Router from "next/router";
import dynamic from 'next/dynamic'

const Appbar = dynamic(() => import('./Appbar'))
const Copyright = dynamic(() => import('./Copyright'))

const useStyles = makeStyles({
  root: {
    display: 'flex',
  },

  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
    backgroundColor: '#ffffff'
  }
});

export default function Layout({ children }) {
   const classes = useStyles();
   const router = useRouter();
  const path = router.pathname;

  return (
    <div className={classes.root}>
          <Appbar />
          <main className={classes.content}>
            <div className={classes.appBarSpacer} />
            <Container maxWidth="xl" className={classes.container} style={{  paddingTop: '100px', paddingBottom: "30px"}}>
              {children}
                <Copyright />
            </Container>
          </main>
    </div>
  );
}
