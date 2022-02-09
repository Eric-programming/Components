import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";

export interface IPage {
  title: string;
  route: string;
  description: string;
  category: string;
}

type PageListProps = {
  pages: IPage[];
};

function PageList({ pages }: PageListProps) {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "row",
        justifyContent: "center",
      }}
    >
      {pages.map(({ title, description }: IPage) => {
        return (
          <Card
            sx={{
              ":hover": {
                boxShadow: 15,
              },
              width: 280,
              height: 150,
              display: "flex",
              margin: 3,
              boxShadow: 3,
            }}
            key={title}
          >
            <CardContent>
              <Typography
                sx={{ fontSize: 18 }}
                color="text.secondary"
                gutterBottom
              >
                {title}
              </Typography>
              <Typography variant="body2">{description}</Typography>
            </CardContent>
          </Card>
        );
      })}
    </Box>
  );
}

export default PageList;
