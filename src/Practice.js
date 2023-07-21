import React from 'react'
import {Swiper, SwiperSlide }from 'swiper/react'

import 'swiper/css';

export default function Practice() {
  const style={
    border:"1px solid black",
    borderRadius:"12px",
    textAlign:"center",
    padding:"3px"
  }
  return (
    
     <Swiper
     slidesPerView={9}
     spaceBetween={20}>

                <SwiperSlide style={style}>Dementia</SwiperSlide> 
                <SwiperSlide>Depression</SwiperSlide>
               <SwiperSlide>Diabetes</SwiperSlide>
                <SwiperSlide>Diphtheria</SwiperSlide>
                <SwiperSlide>Dyslexia</SwiperSlide>
                <SwiperSlide>Obesity</SwiperSlide>
                <SwiperSlide>Vertigo</SwiperSlide>
                <SwiperSlide>Vaginitis</SwiperSlide>
                <SwiperSlide>Ulcers</SwiperSlide>
                <SwiperSlide>Typhoid</SwiperSlide>
                <SwiperSlide>Alcoholism</SwiperSlide>
                <SwiperSlide>Anaemia</SwiperSlide>
                <SwiperSlide>Arthritis</SwiperSlide>
                <SwiperSlide>Asthma</SwiperSlide>
                <SwiperSlide>Autism</SwiperSlide>
                <SwiperSlide>Bird flu</SwiperSlide>
                <SwiperSlide>Chlamydia</SwiperSlide>
                <SwiperSlide>Cholera</SwiperSlide>
                <SwiperSlide>Tetanus</SwiperSlide>
                <SwiperSlide>Cancer</SwiperSlide>
                <SwiperSlide>Acne</SwiperSlide>
                <SwiperSlide>Dengue</SwiperSlide>
                <SwiperSlide>Edema</SwiperSlide>  
            </Swiper>
 
  )
}


// import * as React from 'react';
// import PropTypes from 'prop-types';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import CssBaseline from '@mui/material/CssBaseline';

// import Drawer from '@mui/material/Drawer';
// import IconButton from '@mui/material/IconButton';

// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import MenuIcon from '@mui/icons-material/Menu';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import { BubbleChart, Person } from '@mui/icons-material';

// const drawerWidth = 240;

// function ResponsiveDrawer(props) {
//   const { window } = props;
//   const [mobileOpen, setMobileOpen] = React.useState(false);

//   const handleDrawerToggle = () => {
//     setMobileOpen(!mobileOpen);
//   };

//   const drawer = (
//     <div>
//       <Toolbar />
//       <List>
//           <ListItem  disablePadding>
//             <ListItemButton>
//               <ListItemIcon>
//                 <Person/>
//               </ListItemIcon>
//               <ListItemText primary="Doctors" />
//             </ListItemButton>
//           </ListItem>
//           <ListItem  disablePadding>
//             <ListItemButton>
//               <ListItemIcon>
//                 <BubbleChart/>
//               </ListItemIcon>
//               <ListItemText primary="Specialities" />
//             </ListItemButton>
//           </ListItem>
//       </List>
//     
//   );

//   const container = window !== undefined ? () => window().document.body : undefined;

//   return (
//     <Box sx={{ display: 'flex' }}>
//       <CssBaseline />
//       <AppBar
//         position="fixed"
//         sx={{
//           width: { sm: `calc(100% - ${drawerWidth}px)` },
//           ml: { sm: `${drawerWidth}px` },
//         }}
//       >
//         <Toolbar>
//           <IconButton
//             color="inherit"
//             aria-label="open drawer"
//             edge="start"
//             onClick={handleDrawerToggle}
//             sx={{ mr: 2, display: { sm: 'none' } }}
//           >
//             <MenuIcon />
//           </IconButton>
//         </Toolbar>
//       </AppBar>
//       <Box
//         component="nav"
//         sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
//         aria-label="mailbox folders"
//       >
//         <Drawer
//           container={container}
//           variant="temporary"
//           open={mobileOpen}
//           onClose={handleDrawerToggle}
//           ModalProps={{
//             keepMounted: true, // Better open performance on mobile.
//           }}
//           sx={{
//             display: { xs: 'block', sm: 'none' },
//             '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
//           }}
//         >
//           {drawer}
//         </Drawer>
//         <Drawer
//           variant="permanent"
//           sx={{
//             display: { xs: 'none', sm: 'block' },
//             '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
//           }}
//           open
//         >
//           {drawer}
//         </Drawer>
//       </Box>
//       <Box
//         component="main"
//         sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
//       >
//         <Toolbar />
//         <Typography paragraph>
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
//           tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
//           enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
//           imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus.
//           Convallis convallis tellus id interdum velit laoreet id donec ultrices.
//           Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
//           adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra
//           nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum
//           leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis
//           feugiat vivamus at augue. At augue eget arcu dictum varius duis at
//           consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa
//           sapien faucibus et molestie ac.
//         </Typography>
//         <Typography paragraph>
//           Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper
//           eget nulla facilisi etiam dignissim diam. Pulvinar elementum integer enim
//           neque volutpat ac tincidunt. Ornare suspendisse sed nisi lacus sed viverra
//           tellus. Purus sit amet volutpat consequat mauris. Elementum eu facilisis
//           sed odio morbi. Euismod lacinia at quis risus sed vulputate odio. Morbi
//           tincidunt ornare massa eget egestas purus viverra accumsan in. In hendrerit
//           gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem
//           et tortor. Habitant morbi tristique senectus et. Adipiscing elit duis
//           tristique sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
//           eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
//           posuere sollicitudin aliquam ultrices sagittis orci a.
//         </Typography>
//       </Box>
//     </Box>
//   );
// }

// ResponsiveDrawer.propTypes = {
//   /**
//    * Injected by the documentation to work in an iframe.
//    * You won't need it on your project.
//    */
//   window: PropTypes.func,
// };

// export default ResponsiveDrawer;
