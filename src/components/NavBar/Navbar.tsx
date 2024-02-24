import { AppBar, Box, Container, MenuItem, Toolbar, Typography } from "@mui/material"
import {namePage, navBar} from '../../config'
import { Link, Outlet } from "react-router-dom"

const Navbar = () => {
  return (
    <>
    <AppBar color="transparent" variant='outlined'  position='relative' sx={{width: "100vw", backgroundColor: "#3498DB"}}>
        <Container maxWidth={false} sx={{display: "flex", width: "100%"}}> 
            <Toolbar disableGutters sx={{display:"flex", justifyContent: "space-around"}}>
                <Box>
                    <Typography
                        variant="h6"
                        component="a"
                        href="/"
                        sx={{
                        mr: 10,
                        display: { xs: 'none', md: 'flex' },
                        fontFamily: "Pokemon Solid",
                        fontWeight: 700,
                        fontStyle: "normal",
                        letterSpacing: '.3rem',
                        color: 'black',
                        textDecoration: 'none',
                        }}>
                        {namePage}
                    </Typography>
                </Box>
            </Toolbar>
            <Box sx={{display: "flex", justifySelf: "end", width: "100%"}}>
                {navBar.map((page: string, index: number)=>
                    <Link style={{textDecoration: "none", color: "white", alignSelf: "center"}} to={`/${page == "Home" ? "": page}`}>
                        <MenuItem key={index}> 
                            {page}
                        </MenuItem>
                    </Link>
                )}
           </Box>
        </Container>
    </AppBar>
    <Outlet/>
    </>
  )
}

export default Navbar