import React from "react";
import { Controller, useForm } from "react-hook-form";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import Button from "@mui/material/Button";
import PropTypes from "prop-types";
import TechStackSelect from "./TechStackSelect.jsx";
import Form from "../../shared/Form.jsx";
import Images from "./Images.jsx";

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
                    {...register("title")}
                />
            </FormControl>

            <FormControl fullWidth>
                <InputLabel>Content</InputLabel>
                <OutlinedInput
                    label="Content"
                    multiline
                    minRows={3}
                    {...register("content")}
                />
            </FormControl>

            <Images control={control} register={register} />

            <FormControl fullWidth>
                <InputLabel>TechStack</InputLabel>
                <Controller
                    control={control}
                    name="techStack"
                    render={({ field }) => <TechStackSelect field={field} />}
                />
            </FormControl>

            <FormControl fullWidth>
                <InputLabel>Website</InputLabel>
                <OutlinedInput
                    label="Website"
                    {...register("website")}
                />
            </FormControl>

            <FormControl fullWidth>
                <InputLabel>Github</InputLabel>
                <OutlinedInput
                    label="Github"
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
