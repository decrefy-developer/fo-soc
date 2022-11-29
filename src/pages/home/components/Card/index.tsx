import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { SxProps } from "@mui/system";

const CardComponent = ({ sx }: { sx: SxProps }) => {
  return (
    <Card sx={{ ...sx }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Word of the Day
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CardComponent;
