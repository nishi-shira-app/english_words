import * as React from 'react';
import { Grid, Typography, Box } from '@material-ui/core';

const Part: React.FC<{currentPart: string}> = ({currentPart}) => {
  return (
    <Grid
      container
      direction="row"
      justify="space-around"
      alignItems="flex-end"
    >
        <Typography component="div">
          <Box
            fontSize="h6.fontSize" m={1}
          >
            {currentPart}
          </Box>
        </Typography>        
    </Grid>
  );
}

export default Part;