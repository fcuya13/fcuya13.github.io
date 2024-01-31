
import { TextField, Typography, List, ListItem } from "@mui/material"
import { Star } from '@mui/icons-material'
import { Link } from "react-router-dom"
import { useState } from "react"

const LeftPanel = () => {
  const [search, setSearch] = useState("")

  return <div>
      <img
          src="https://tierrafilms.pe/images/logos/ULIMA.png"
          alt="logo-ulima"
          style={{ width: '128px', height: '126.954px', marginLeft : '22%', marginTop: "20px" }}></img>
        <TextField 
          id="outlined-basic" 
          label="Busca" 
          variant="outlined"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          sx={ { marginLeft : "8px", marginBottom : "15%" } }/>
          <List>
            <ListItem key={"peliculas"}>
              <Typography component={Link} to="/peliculas"
              sx={{ 
                fontSize : '16px',
                fontWeight : 400,
                letterSpacing : 0.15,
                marginBottom : '20px',
                textDecoration : 'none',
                color : 'gray',
                marginLeft: '20px'}}>
                <Star sx={ { color: "#0000008F", marginRight: '20px'}}/>Películas
              </Typography>
              
            </ListItem>
            
            <ListItem key={"salas"}>
              <Typography component={Link} to="/salas"
              sx={{ 
                fontSize : '16px',
                fontWeight : 400,
                letterSpacing : 0.15,
                marginBottom : '20px',
                textDecoration : 'none',
                color : 'gray',
                marginLeft: '20px'}}
                >
                <Star sx={ { color: "#0000008F", marginRight: '20px'}}/>Salas
            </Typography>
            </ListItem>
            
          </List>
          
          
    </div>
}

export default LeftPanel
