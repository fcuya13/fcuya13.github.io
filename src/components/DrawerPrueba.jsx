import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import LeftPanel from './extra/LeftPanel';
import { Star } from '@mui/icons-material';

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
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
})(({ theme, open }) => ({
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

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function DrawerPrueba() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpenClose = () =>{
    if (open) {
        setOpen(false);
    } else {
        setOpen(true);
    }
  }

  return (
    <>
    
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar sx={{ background: "#FA7525" }}>
        <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpenClose}
            edge="start"
            sx={{ mr: 2}}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Salas de Cine ULima
          </Typography>
            <Box position="absolute" top={0} right={0} mt={2.5} mr={4}>
                            <Star sx={{ marginRight: '15px' }} />
                            <Star sx={{ marginRight: '15px' }} />
                            <Star sx={{ marginRight: '15px' }} />
                            <Star sx={{ marginRight: '15px' }} />
                            <Star sx={{ marginRight: '15px' }} />
            </Box>
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
     
        <LeftPanel/>
        
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
            <Typography>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo dolores eligendi aut minima nam a rerum ducimus commodi recusandae nisi, facere quas temporibus odit dolorem. Totam laboriosam ab aperiam labore.
            </Typography>
            <Typography>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae accusantium dicta quisquam fuga vel, voluptatum aspernatur, iure aperiam impedit cupiditate temporibus modi quasi delectus libero minima sunt provident quidem veniam!
            </Typography>
      </Main>
    </Box>
    </>
  );
}