import React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import { BsCircleFill } from "react-icons/bs";
import ListItemText from "@mui/material/ListItemText";
import AppLink from "../shared/AppLink";

const JobCard = ({ job, children }) => {
    const convertDate = (timestamp) => {
        if (timestamp === null) {
            return "today";
        }
        const date = new Date(parseInt(timestamp, 10));
        return date.toLocaleDateString("de");
    };

    return (
        <Box sx={{ width: "100%", padding: "10px" }}>
            <Card
                variant="outlined"
                onContextMenu={(e) => e.preventDefault()}
                sx={{ display: "flex", flexDirection: "column", height: "100%" }}
            >
                <AppLink
                    href="/jobs/[id]"
                    as={`/jobs/${job._id}`}
                >
                    <CardContent sx={{ display: "flex" }}>
                        <Box sx={{ width: "200px" }}>
                            {`${convertDate(job.startDate)} - ${convertDate(job.endDate)}`}
                        </Box>
                        <Box>
                            <Box sx={{ paddingLeft: "15px", fontWeight: "bold" }}>{job.company}</Box>
                            <Box sx={{ paddingLeft: "15px", marginTop: "10px" }}>{job.position}</Box>
                            <List>
                                {job.bullets.map((item) => (
                                    <ListItem key={item}>
                                        <ListItemIcon sx={{ minWidth: "30px" }}><BsCircleFill /></ListItemIcon>
                                        <ListItemText primary={item} />
                                    </ListItem>
                                ))}
                            </List>
                        </Box>
                    </CardContent>
                </AppLink>
                { children && (
                    <CardActions>
                        {children}
                    </CardActions>
                )}
            </Card>
        </Box>
    );
};

JobCard.propTypes = {
    job: PropTypes.shape({
        _id: PropTypes.string,
        company: PropTypes.string,
        position: PropTypes.string,
        bullets: PropTypes.arrayOf(PropTypes.string),
        startDate: PropTypes.string,
        endDate: PropTypes.string,
    }).isRequired,
    children: PropTypes.node,
};

JobCard.defaultProps = {
    children: null,
};

export default JobCard;
