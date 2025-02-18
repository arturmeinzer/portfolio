import React from "react";
import MenuItem from "@mui/material/MenuItem";
import Checkbox from "@mui/material/Checkbox";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import PropTypes from "prop-types";
import TechStack from "../../shared/TechStack.jsx";

const techStackOptions = [
    "javascript",
    "typescript",
    "vuejs",
    "react",
    "redux",
    "nextjs",
    "graphql",
    "php",
    "firebase",
    "mongodb",
    "docker",
    "doctrine",
    "symfony",
    "mysql",
    "nodejs",
];

const TechStackSelect = ({ field: { value, onChange } }) => (
    <Select
        label="TechStack"
        multiple
        value={value}
        onChange={onChange}
        renderValue={(selected) => (
            <TechStack iconsArray={selected} />
        )}
        MenuProps={{
            PaperProps: {
                style: {
                    maxHeight: 400,
                },
            },
        }}
    >
        {techStackOptions.map((name) => (
            <MenuItem
                key={name}
                value={name}
            >
                <Checkbox checked={value.includes(name)} />
                <ListItemText primary={name} />
            </MenuItem>
        ))}
    </Select>
);

TechStackSelect.propTypes = {
    field: PropTypes.shape({
        value: PropTypes.arrayOf(PropTypes.string),
        onChange: PropTypes.func,
    }).isRequired,
};

export default TechStackSelect;
