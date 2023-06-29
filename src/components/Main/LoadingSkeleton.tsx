import { Card, CardContent, Skeleton } from "@mui/material";

const LoadingSkeleton = () => {
  return (
    <Card sx={{ maxWidth: { xs: "400px", sm: "300px" }, borderRadius: "20px" }}>
      <Skeleton
        sx={{
          bgcolor: "grey.900",
        }}
        width="300px"
        height="300px"
      />
      <CardContent>
        <Skeleton
          sx={{
            bgcolor: "grey.900",
          }}
        />
      </CardContent>
    </Card>
  );
};

export default LoadingSkeleton;
