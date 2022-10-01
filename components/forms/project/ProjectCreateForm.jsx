import React from "react";
import { Controller, useForm } from "react-hook-form";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import Button from "@mui/material/Button";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import TechStackSelect from "./TechStackSelect";

const ProjectCreateForm = ({ onSubmit }) => {
    const { control, register, handleSubmit } = useForm({
        defaultValues: {
            techStack: [],
        },
    });

    return (
        <Box sx={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            mt: 5,
        }}
        >
            <FormControl fullWidth>
                <InputLabel>Title</InputLabel>
                <OutlinedInput
                    label="Title"
                    name="title"
                    {...register("title")}
                />
            </FormControl>

            <FormControl fullWidth>
                <InputLabel>Content</InputLabel>
                <OutlinedInput
                    label="Content"
                    name="content"
                    {...register("content")}
                />
            </FormControl>

            <FormControl fullWidth>
                <InputLabel>TechStack</InputLabel>
                <Controller
                    control={control}
                    name="techStack"
                    render={({ field }) => <TechStackSelect field={field} />}
                />
            </FormControl>

            <FormControl fullWidth>
                <InputLabel>Github</InputLabel>
                <OutlinedInput
                    label="Github"
                    name="github"
                    {...register("github")}
                />
            </FormControl>

            <Button
                type="button"
                variant="contained"
                size="large"
                onClick={handleSubmit(onSubmit)}
            >
                Submit
            </Button>
        </Box>
    );
};

ProjectCreateForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};

export default ProjectCreateForm;
