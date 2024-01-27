import { AppBar, Toolbar, IconButton, Typography, Drawer } from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from "react";
import { Star } from '@mui/icons-material';
import { Box } from "@mui/material"
import LeftPanel from "./LeftPanel";

const DrawerBar = () => {
    const [drawerOpen, setDrawerOpen] = useState(false)

    const onMenuIconClick = () => {
        setDrawerOpen(true)
    }

    const onMenuClose = () => {
        setDrawerOpen(false)
    }

    const drawerWidth = 250

    return (
        <div>
                <AppBar position="static">
                    <Toolbar sx={{ background: "#FA7525" }}>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                            onClick={onMenuIconClick}>
                            <MenuIcon />
                        </IconButton>
                        <Typography
                            variant="h6"
                            noWrap
                            component="div">
                            Salas de cine ULima
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
                        '& .MuiDrawer-paper': {
                            width: drawerWidth,
                            boxSizing: 'border-box',
                        },
                    }}
                    variant="temporary"
                    anchor="left"
                    onClose={onMenuClose}
                    open={drawerOpen}
                    PaperProps={{
                        style: {
                            marginTop: "64px",
                        },
                    }}>
                    <LeftPanel />
                </Drawer>
        </div>
    )
}

export default DrawerBar
