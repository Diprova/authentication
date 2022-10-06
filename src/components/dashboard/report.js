import { Avatar } from "@mui/material";
import { Grid, Box, Button } from "@mui/material";
import { useDispatch, useSelector } from 'react-redux';
import { getSubmissions } from '../Action/authAction';
import { ToastContainer } from 'react-toastify'

const Report = () => {
  const { submission, submissionData } = useSelector(state => state.auth)
  const dispatch = useDispatch()

  return (
    <div className="report">
      <ToastContainer />
      <div className='load'>
        <Avatar
          src={submissionData && submissionData.image ? submissionData.image : "/broken-image.jpg"}
          className="avatar"
          aria-controls="simple-menu"
          aria-haspopup="true"
          aria-expanded='true'
          sx={{ width: 70, height: 70 }}
        />
        {submission && <Button variant="outlined" size="small" style={{ fontSize: 'x-small', height: '2rem' }} onClick={() => dispatch(getSubmissions())}>Load</Button>}
      </div>
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
              style={{ padding: '5px' }}
            >{submissionData && submissionData.name}</Box>
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
              style={{ padding: '5px' }}
            >{submissionData && submissionData.occupation}</Box>
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
              style={{ padding: '5px' }}
            >{submissionData && submissionData.skills}</Box>
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
              style={{ padding: '5px' }}
            >{submissionData && submissionData.projects}</Box>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};
export default Report;
