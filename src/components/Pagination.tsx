import * as React from 'react';
import { Button, Grid } from '@material-ui/core';

const Pagination: React.FC<{onClickPrev: () => void, onClickNext: () => void}> = ({onClickPrev, onClickNext}) => {
  return (
    <Grid
    container
    direction="row"
    justify="space-around"
    alignItems="flex-end"
    >
      <Button
        variant="contained"
        color="primary"
        onClick={() => onClickPrev()}
      >
        Prev
      </Button>
      <Button
        variant="contained"
        color="primary"
        onClick={() => onClickNext()}
      >
        Next
      </Button>
    </Grid>
  );
}

export default Pagination;
