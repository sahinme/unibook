import React from "react";
import {
  Grid,
  Paper,
  makeStyles,
  createStyles,
  Theme,
  Tabs,
  Tab,
  Typography,
  Box,
  useTheme
} from "@material-ui/core";
import NotifyList from "./components/notifyList";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      justifyContent: "center",
      flexWrap: "wrap"
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary
    }
  })
);

interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: any;
  value: any;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
}

function a11yProps(index: any) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`
  };
}

export default function NotifyTab() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  function handleChange(event: React.ChangeEvent<{}>, newValue: number) {
    setValue(newValue);
  }

  function handleChangeIndex(index: number) {
    setValue(index);
  }

  return (
    <div className={classes.root}>
      <Grid item xs={12}>
        <Paper className={classes.root}>
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"
            aria-label="full width tabs example"
          >
            <Tab label="Bildirimler" {...a11yProps(0)} />
          </Tabs>
          <TabPanel value={value} index={0}>
            <NotifyList />
          </TabPanel>
        </Paper>
      </Grid>
    </div>
  );
}
