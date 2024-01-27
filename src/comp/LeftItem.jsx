import * as React from 'react';
import StarIcon from '@mui/icons-material/Star';
import {Container,Typography,Grid,Button,TextField,Divider,Link,Box} from '@mui/material';


const LeftItem = () => {
    return (<Container>
                <Box
                    component="img"
                    src="https://tierrafilms.pe/images/logos/ULIMA.png"
                    sx={{
                        width: "100%",
                      }}
                />
                <TextField id="outlined-basic" fullWidth label="Buscar" variant="outlined" sx={{
                        mt:1,
                      }}/>
                <Typography color="gray" sx={{
                        mt:4,
                      }}><StarIcon sx={{
                        ml:1,
                        mr:4
                      }}/>Peliculas</Typography>
                <Typography color="gray" sx={{
                        mt:2,
                      }}><StarIcon sx={{
                        ml:1,
                        mr:4
                      }}/>Sala</Typography>
            </Container>
    )
}

export default LeftItem