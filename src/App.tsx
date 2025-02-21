// import { Button, ButtonGroup } from "@chakra-ui/react"

import { Grid, GridItem, Show } from "@chakra-ui/react";

function App() {
  //  return <Button colorScheme="blue">Click me</Button>
  return(
    <Grid templateAreas={{
      base:`"nav" "main"`,
      lg:`"nav nav" "aside main"`
    }}>
      <GridItem area="nav" bg="coral" >
        Nav
      </GridItem>
      {/* <Show >  */}
      <GridItem area="aside" bg="gold" display={{ base: "none", lg: "block" }}>
        Aside
      </GridItem>
      {/* </Show> */}
      <GridItem area="main" bg="dodgerblue">
        Main
      </GridItem>
    </Grid>
  );
}

export default App;
