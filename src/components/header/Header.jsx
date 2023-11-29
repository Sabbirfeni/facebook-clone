import React from 'react'
import './header.css'
import { logo, sabbirProfile } from '../../assets/images'
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import FlagIcon from '@mui/icons-material/Flag';
import SmartDisplayIcon from '@mui/icons-material/SmartDisplay';
import StorefrontIcon from '@mui/icons-material/Storefront';
import GroupIcon from '@mui/icons-material/Group';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Add } from '@mui/icons-material';

import { Avatar, Badge, IconButton, styled } from '@mui/material';


const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      backgroundColor: '#44b700',
      color: '#44b700',
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      '&::after': {
        position: 'absolute',
        top: -1,
        left: -1,
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        animation: 'ripple 1.2s infinite ease-in-out',
        border: '1px solid currentColor',
        content: '""',
      },
    },
    '@keyframes ripple': {
      '0%': {
        transform: 'scale(.8)',
        opacity: 1,
      },
      '100%': {
        transform: 'scale(2.4)',
        opacity: 0,
      },
    },
  }));


function Header() {
  return (
    <div className='header'>
        <div className="header__left">
            <img src={logo} alt="logo" />
            <SearchIcon/>
            <input type="text" />
        </div>
        <div className="header__middle">
            <div className="header__option">
                <HomeIcon/>
            </div>
            <div className="header__option">
                <FlagIcon/>
            </div>
            <div className="header__option">
                <SmartDisplayIcon/>
            </div>
            <div className="header__option">
                <StorefrontIcon/>
            </div>
            <div className="header__option">
                <GroupIcon/>
            </div>
        </div>
        <div className="header__right">
            <div className="header__info">
            <StyledBadge
                overlap="circular"
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                variant="dot"
            >
                <Avatar src={sabbirProfile}/>
            </StyledBadge>
                <h5>Sabbir</h5>
            </div>
            <IconButton>
                <Add/>
            </IconButton>
            <IconButton>
                <Badge badgeContent={4} color="primary">
                    <MailOutlineIcon color="action" />
                </Badge>
            </IconButton>
            <IconButton>
                <Badge badgeContent={133} color="primary">
                    <NotificationsNoneIcon color="action" />
                </Badge>
            </IconButton>
            <IconButton>
                <KeyboardArrowDownIcon/>
            </IconButton>
        </div>
    </div>
  )
}

export default Header