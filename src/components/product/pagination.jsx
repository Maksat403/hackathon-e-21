import React from "react";
import { Pagination, Typography, Stack } from "@mui/material";

export default function PaginationControlled(props) {
  const { page, count, handleChange } = props;

  return (
    <Stack
      spacing={1}
      sx={{
        marginBottom: 10,
      }}
    >
      <Typography>Page: {page}</Typography>
      <Pagination count={count} page={page} onChange={handleChange} />
    </Stack>
  );
}
