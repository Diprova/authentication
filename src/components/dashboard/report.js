import { Avatar } from "@mui/material";
import { Grid, Box } from "@mui/material";

const Report = () => {
  return (
    <div className="report">
      <Avatar
        sx={{ bgcolor: "deepOrange[500]" }}
        src="/broken-image.jpg"
        aria-controls="simple-menu"
        aria-haspopup="true"
        // onClick={handleClick}
        className="profile_img"
      />
      <div className="report_data">
        <Grid
          container
          alignItems="center"
          justify="center"
          direction="column"
          rowSpacing={1}
        >
          <Grid item>
            <h3>Name : </h3>
            <Box
              sx={{
                width: 300,
                height: 50,
                border: "1px solid",
                borderRadius: "10px",
                "&:hover": {
                  backgroundColor: "primary.main",
                  opacity: [0.9, 0.8, 0.7]
                }
              }}
            />
          </Grid>
          <Grid item>
            <h3>Occupation :</h3>
            <Box
              sx={{
                width: 300,
                height: 50,
                border: "1px solid",
                borderRadius: "10px",
                "&:hover": {
                  backgroundColor: "primary.main",
                  opacity: [0.9, 0.8, 0.7]
                }
              }}
            />
          </Grid>
          <Grid item>
            <h3>Skill Sets :</h3>
            <Box
              sx={{
                width: 300,
                height: 80,
                border: "1px solid",
                borderRadius: "10px",
                "&:hover": {
                  backgroundColor: "primary.main",
                  opacity: [0.9, 0.8, 0.7]
                }
              }}
            />
          </Grid>
          <Grid item>
            <h3>Benchmark Project :</h3>
            <Box
              sx={{
                width: 300,
                height: 100,
                border: "1px solid",
                borderRadius: "10px",
                "&:hover": {
                  backgroundColor: "primary.main",
                  opacity: [0.9, 0.8, 0.7]
                }
              }}
            />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};
export default Report;
