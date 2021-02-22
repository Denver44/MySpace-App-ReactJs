import { makeStyles } from "@material-ui/core/styles";
export const useStyles = makeStyles((theme) => ({
  appBar: {
    borderRadius: "1rem",
    margin: "2rem 0",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    fontWeight: 500,
    color: "#303f9f",
    marginRight: "1rem",
  },
  [theme.breakpoints.down("xs")]: {
    mainContainer: {
      flexDirection: "column-reverse",
    },
    heading: {
      fontWeight: 500,
      fontSize: "44px",
      color: "#303f9f",
      marginRight: "1rem",
    },
  },
}));
