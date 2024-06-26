import * as React from 'react';
import {styled} from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import LeftPanel from './extra/LeftPanel';
import {Star} from '@mui/icons-material';
import LogoutIcon from '@mui/icons-material/Logout';
import {useNavigate} from 'react-router-dom';
import Tooltip from '@mui/material/Tooltip';
import {useEffect} from 'react'
import LocalActivityOutlinedIcon from '@mui/icons-material/LocalActivityOutlined';

const drawerWidth = 240;

export const Main = styled('main', {shouldForwardProp: (prop) => prop !== 'open'})(
    ({theme, open}) => ({
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: `-${drawerWidth}px`,
        ...(open && {
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: 0,
        }),
    }),
);

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({theme, open}) => ({
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

export const DrawerHeader = styled('div')(({theme}) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));

export default function PageLayout({children, onSearchChange}) {
    const [open, setOpen] = React.useState(false);
    const navigate = useNavigate();
    const user = sessionStorage.getItem("user");

    const handleDrawerOpenClose = () => {
        setOpen(!open);
    }

    const checkLoggedIn = () => {
        if (!user) {
            navigate('/login')
        }
    }

    const handleLogOut = () => {
        sessionStorage.removeItem("user");
        navigate("/login")
    }

    const handleTicket = () => {
        navigate("/misreservas")
    }

    useEffect(() => {
        checkLoggedIn()
    });

    const userJSON = JSON.parse(user);

    return (
        <>
            <Box sx={{display: 'flex'}}>
                <CssBaseline/>
                <AppBar position="fixed" sx={{zIndex: (theme) => theme.zIndex.drawer + 1}}>
                    <Toolbar sx={{background: "#FA7525"}}>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={handleDrawerOpenClose}
                            edge="start"
                            sx={{mr: 2}}
                        >
                            <MenuIcon/>
                        </IconButton>
                        <Typography sx={{display: {xs: "none", sm: "block", cursor: "pointer"}}} variant="h6" noWrap
                                    component="div"
                                    onClick={() => {
                                        navigate("/")
                                    }}>
                            Salas de Cine ULima
                        </Typography>
                        <Box sx={{flexGrow: 1}}/>
                        {userJSON ? (
                            <Box sx={{display: 'flex', alignItems: 'center'}}>
                                <Typography sx={{display: {xs: "none", sm: "block"}}}>{userJSON.nombre}</Typography>
                                <Tooltip title="Mis reservas">
                                    <IconButton color="inherit">
                                        <LocalActivityOutlinedIcon sx={{ml: 2, cursor: 'pointer'}}
                                                                   onClick={handleTicket}/>
                                    </IconButton>
                                </Tooltip>
                                <Tooltip title="Logout">
                                    <IconButton color="inherit">
                                        <LogoutIcon sx={{ml: 2, cursor: 'pointer'}} onClick={handleLogOut}/>
                                    </IconButton>
                                </Tooltip>
                            </Box>
                        ) : (
                            <>
                                <Star sx={{marginRight: '15px'}}/>
                                <Star sx={{marginRight: '15px'}}/>
                                <Star sx={{marginRight: '15px'}}/>
                                <Star sx={{marginRight: '15px'}}/>
                                <Star sx={{marginRight: '15px'}}/>
                            </>
                        )}
                    </Toolbar>
                </AppBar>
                <Drawer
                    sx={{
                        width: drawerWidth,
                        flexShrink: 0,
                        '& .MuiDrawer-paper': {
                            width: drawerWidth,
                            boxSizing: 'border-box',
                        },
                    }}
                    variant="persistent"
                    anchor="left"
                    open={open}
                    PaperProps={{
                        style: {
                            marginTop: "64px",
                        },
                    }}
                >
                    <LeftPanel searchOn={onSearchChange}/>
                </Drawer>
                <Main open={open}>
                    <DrawerHeader/>
                    {children}
                </Main>
            </Box>
        </>
    );
}