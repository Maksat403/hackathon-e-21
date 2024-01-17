import React from "react";
import { Pagination, Typography, Stack } from "@mui/material";

export default function PaginationControlled(props) {
  const { page, count, handleChange } = props;

  return (
    <Stack spacing={2} sx={{ marginTop: 2, marginBottom: 2 }}>
      <Typography>Page: {page}</Typography>
      <Pagination count={count} page={page} onChange={handleChange} />
    </Stack>
  );
}
