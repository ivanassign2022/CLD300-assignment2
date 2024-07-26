import * as React from 'react';
import {Box, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText, Typography, Button} from '@mui/material';


import {Menu as MenuIcon} from '@mui/icons-material';

function NavBurger(props){

  const drawerWidth = 240;
  const navItems = [
    {name:'Home',path:'/'}, 
    {name:'Library',path:'/library'}, 
    {name:'Contact',path:'/'}
  ];

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const item_mobile = (    
    <List>
      {navItems.map((item) => (
        <ListItem key={item.name} disablePadding>
          <ListItemButton sx={{ textAlign: 'center' }}>
          <a href={item.path}><ListItemText primary={item.name} /></a>
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );

  const item_desktop = (
    <>
    {navItems.map((item) => (
      <Button key={item.name}>
        <a  style={{ color: '#fff' }} href={item.path}>{item.name}</a>
      </Button>
    ))}
    </>
  )
  const container = window !== undefined ? () => window().document.body : undefined;
  return (
    <>
    <Box sx={{  verticalAlign:"middle", height:"100%", justifyContent:"flex-end" , display: {xs:'flex', sm: 'none' }}}>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        edge="start"
        onClick={handleDrawerToggle}          
      >
        <MenuIcon />
      </IconButton>
      <Drawer
        container={container}
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
        }}
      >
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
          <Typography variant="h6" sx={{ my: 2 }}>
            Next AI
          </Typography>
          <Divider />
            {item_mobile}
        </Box>
      </Drawer>
    </Box>

    <Box sx={{  verticalAlign:"middle", height:"100%", justifyContent:"flex-end" , display: { xs: 'none', sm: 'flex' }}}>
        {item_desktop}
    </Box>
    </>
  );
}
export default NavBurger;