// import * as React from "react";
// import Box from "@mui/material/Box";
// import Rating from "@mui/material/Rating";
// import Typography from "@mui/material/Typography";

// export default function BasicRating({rating}) {
//   const [value, setValue] = React.useState(rating);

//   return (
//     <Box
//       sx={{
//         "& > legend": { mt: 4 },
//       }}
//     >
//       {/* <Typography component="legend">Read only</Typography> */}
//       <Rating name="read-only" value={value} readOnly />
//     </Box>
//   );
// }
import * as React from 'react';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

export default function BasicRating({ rating }) {
  return (
    <Stack spacing={1}>
      {/* <Rating name="half-rating" defaultValue={2.5} precision={0.5} /> */}
      <Rating name="half-rating-read" defaultValue={rating} precision={0.5} readOnly />
    </Stack>
  );
} 