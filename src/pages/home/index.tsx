import { Grid, Button, Container, CircularProgress, Box, Pagination } from "@mui/material";
import React from "react";
import { characters } from "../../api/characters";
import { CardComponent, HeaderComponent } from "../../components";
import { TypeCharacter } from "./interface/character.interface";

export const HomePage: React.FC<{}> = () => {
  const [count, setCount] = React.useState(0);
  const [page, setPage] = React.useState(1);//determina la pagian que se esta mostrando lo que respeta a la paginacion
  const [allCharacters, setAllCharacters] = React.useState<
    TypeCharacter[] | null
  >(null);//para almacenar todos los personajes que se recuperan del api

  const [loading, setLoading] = React.useState<boolean>(true);//para implementar loading element por cada render de CArds
  //permite cargar el dato por primera vez cuando se muestra la pagina
  React.useEffect(() => {
    setLoading(true);
    characters
      .getAll({ page })
      .then((r) => {
        setCount(r.data.info.pages);
        setAllCharacters(r.data.results);
        setTimeout(() => setLoading(false), 1000);
      })
      .catch((e) => {
        console.error(e);
      });
  }, [page]);//se le pasa la pagina para que refresque por cada evento clic en la paginacion

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  }
  return (
    <Container maxWidth="xl">
      <HeaderComponent
        title="hola mundo"
        description="Hola mundo bienvenido"
        element={
          <Button fullWidth variant="contained">
            Holaa mundo
          </Button>
        }
      ></HeaderComponent>
      {loading ? (
        <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
          <CircularProgress />
        </Box>
      ) : (
        <>
          <div>
            {allCharacters?.length !== 0 ? (
              <Grid sx={{ my: 2 }} container spacing={2} direction="row">
                {allCharacters!.map((character) => (
                  <Grid key={character.id} item xs={3}>
                    <CardComponent
                      image={character.image}
                      name={character.name}
                      species={character.species}
                      status={character.status}
                      id={character.id}
                    />
                  </Grid>
                ))}
              </Grid>
            ) : (
              "No data"
            )}
          </div>
          <Box sx={{width:"100%", display:"flex", justifyContent: "center"}}>
            <Pagination variant="outlined" color="primary" sx={{mb:3}} size="large"
                        count={count} page={page} onChange={handleChange} />
          </Box>
        </>
      )}
    </Container>
  );
};
