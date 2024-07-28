import React from 'react';
import { AppBar, Toolbar, Typography, CssBaseline } from '@mui/material';
import { styled } from '@mui/system';

const MainTypography = styled(Typography)(({ theme }) => ({
  fontFamily: '"Times New Roman", serif',
  fontWeight: '100',
  fontSize: '2rem', // Main title size
  textAlign: 'center',
  color: '#7c7a7a',
  letterSpacing: '1px',
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.6rem',
  },
  [theme.breakpoints.down('xs')]: {
    fontSize: '1.0rem',
  },
}));

const SubTypography = styled(Typography)(({ theme }) => ({
  fontFamily: '"Times New Roman", serif',
  fontWeight: '100',
  fontSize: '0.9rem', // Sub title size
  textAlign: 'center',
  color: '#7c7a7a',
  letterSpacing: '1px',
  [theme.breakpoints.down('sm')]: {
    fontSize: '0.7rem',
  },
  [theme.breakpoints.down('xs')]: {
    fontSize: '0.5rem',
  },
}));


const AppHeader = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="static" sx={{ zIndex:'99999',backgroundColor: '#fcf9f2', padding: '20px 0' , position:'fixed', boxShadow: 'rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset'}}>
        <Toolbar>
          <div style={{ textAlign: 'center', width: '100%' }}>
          <SubTypography style={{textTransform: 'uppercase'}}>
              The Official Website of His Holiness
            </SubTypography>

            <MainTypography style={{textTransform: 'uppercase'}}>
              Sundara Caitanya Goswami Maharaja
            </MainTypography>
          
          </div>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default AppHeader;
