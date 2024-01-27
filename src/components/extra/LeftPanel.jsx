
import { TextField, Typography } from "@mui/material"
import { Star } from '@mui/icons-material'
import { useState } from "react"
const LeftPanel = () => {
  const [search, setSearch] = useState("")

  return <div>
      <img
          src="https://tierrafilms.pe/images/logos/ULIMA.png"
          alt="logo-ulima"
          style={{ width: '128px', height: '126.954px', marginLeft : '23%' }}></img>
        <TextField 
          id="outlined-basic" 
          label="Busca" 
          variant="outlined"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          sx={ { marginLeft : "10px", marginBottom : "15%" } }/>
          <Typography 
            sx={{ 
              fontSize : '16px',
              fontWeight : 400,
              letterSpacing : 0.15,
              marginBottom : '20px',
              marginLeft: '20px'}}>
              <Star sx={ { color: "#0000008F", marginRight: '20px'}}/>Películas
          </Typography>
          <Typography 
            sx={{ 
              fontSize : '16px',
              fontWeight : 400,
              letterSpacing : 0.15,
              marginBottom : '20px',
              marginLeft: '20px'}}
              >
              <Star sx={ { color: "#0000008F", marginRight: '20px'}}/>Salas
          </Typography>
    </div>
}

export default LeftPanel
