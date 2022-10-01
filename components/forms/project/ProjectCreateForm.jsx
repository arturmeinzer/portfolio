import React from "react";
import { Controller, useForm } from "react-hook-form";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import Button from "@mui/material/Button";
import PropTypes from "prop-types";
import TechStackSelect from "./TechStackSelect";
import Form from "../../shared/Form";

const ProjectCreateForm = ({ onSubmit, initialData }) => {
    const { control, register, handleSubmit } = useForm({
        defaultValues: initialData,
    });

    return (
        <Form>
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
                    multiline
                    minRows={3}
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
                size="large"
                onClick={handleSubmit(onSubmit)}
            >
                Submit
            </Button>
        </Form>
    );
};

ProjectCreateForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    initialData: PropTypes.shape({}),
};

ProjectCreateForm.defaultProps = {
    initialData: {
        techStack: [],
    },
};

export default ProjectCreateForm;
