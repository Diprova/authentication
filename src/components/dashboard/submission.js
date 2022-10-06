import { Grid, TextField, Button, Avatar } from "@mui/material";
import { useState } from "react";
import { useDispatch } from 'react-redux';
import { submission } from '../Action/authAction';
import { ToastContainer } from 'react-toastify';

const Submission = () => {
  const [profileData, setProfileData] = useState({
    name: "",
    occupation: "",
    skills: "",
    projects: ""
  });
  const [pic, setPic] = useState();
  const dispatch = useDispatch()
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData({ ...profileData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(submission(profileData))
  };

  const imageController = (e) => {
    setPic(URL.createObjectURL(e.target.files[0]));
    profileData.image = URL.createObjectURL(e.target.files[0])
  };

  return (
    <div className="submission">
      <ToastContainer />
      <div>
        <Button component="label">
          <Avatar
            src={pic ? pic : "/broken-image.jpg"}
            className="avatar"
            aria-controls={open ? "simple-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            style={{ cursor: "pointer" }}
            sx={{ width: 70, height: 70 }}
          />
          <input
            hidden
            accept="image/*"
            type="file"
            onChange={imageController}
          />
        </Button>
        <form onSubmit={handleSubmit}>
          <Grid
            container
            alignItems="center"
            justify="center"
            direction="column"
            rowSpacing={1}
          >
            <Grid item>
              <TextField
                id="standard-multiline-static"
                name="name"
                label="Name"
                type="text"
                multiline
                rows={1}
                variant="standard"
                value={profileData.name}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item>
              <TextField
                id="outlined-multiline-static"
                name="occupation"
                label="Ocupation"
                type="text"
                multiline
                rows={3}
                variant="standard"
                value={profileData.ocupation}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item>
              <TextField
                id="standard-multiline-static"
                name="skills"
                label="Skill Set"
                type="text"
                multiline
                rows={2}
                variant="standard"
                value={profileData.skills}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item>
              <TextField
                id="standard-multiline-static"
                name="projects"
                label="Benchmark Poject"
                type="text"
                multiline
                rows={5}
                variant="standard"
                value={profileData.projects}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item>
              <Button variant="contained" color="primary" type="submit">
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      </div>
    </div>
  );
};
export default Submission;
