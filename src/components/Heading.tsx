import React from 'react'
import { AppBar, Box,  Typography, Button, Container  } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import AddIcon from '@mui/icons-material/Add';
import { Link, useLocation, useParams } from 'react-router-dom';


const Heading = () => {

  const location = useLocation();


  return (
    <>
     <Container>
        <AppBar color="default" position="fixed">
          <Box
            height={"64px"}
            display="flex"
            flexDirection="row"
            alignItems="center"
            style={{ backgroundColor: "white" }}
            paddingLeft={3}
          >
            {location.pathname === "/" ? (
              ""
            ) : (
              <Button
                data-cy="button-back"
                component={Link}
                to="/"
                style={{ color: "rgba(0, 0, 0, 0.65)" }}
              >
                <ArrowBackIcon />
                Volver
              </Button>
            )}
              
            <Typography data-cy="title-list-student-add"  variant="h6" paddingLeft={2}>
              {location.pathname === "/" ? "Lista de estudiantes" : "Agregar estudiante"}
            </Typography>
            {location.pathname === "/" ? (
              <Button
              data-cy="button-add-student"
              component={Link}
              to="/add-student"
                style={{
                  color: "white",
                  backgroundColor: "red",
                  marginLeft: "auto",
                  marginRight: "25px",
                }}
              >
                <AddIcon />
                Agregar estudiante
              </Button>
            ) : (
              ""
            )}
          </Box>
        </AppBar>
      </Container>
    </>

    )
}

export default Heading