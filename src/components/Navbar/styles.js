import { makeStyles } from "@material-ui/core/styles";
import { deepPurple } from "@material-ui/core/colors";
export const useStyles = makeStyles((theme) => ({
  appBar: {
    borderRadius: "1rem",
    margin: "2rem 0",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "5px",
  },
  heading: {
    fontWeight: 500,
    color: "#303f9f",
    marginLeft: "1rem",
    textDecoration: "none",
    outline: "none",
  },
  image: {
    marginLeft: "15px",
  },
  toolbar: {
    display: "flex",
    justifyContent: "flex-end",
    width: "400px",
  },
  profile: {
    display: "flex",
    justifyContent: "space-between",
    width: "280px",
  },
  userName: {
    display: "flex",
    alignItems: "center",
  },
  brandContainer: {
    display: "flex",
    alignItems: "center",
    marginLeft: "15px",
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },
  [theme.breakpoints.down("sm")]: {
    heading: {
      fontWeight: 500,
      fontSize: "35px",
      color: "#303f9f",
      marginLeft: "1rem",
    },
  },
}));
