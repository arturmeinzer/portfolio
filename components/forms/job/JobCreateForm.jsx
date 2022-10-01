import React from "react";
import { useForm } from "react-hook-form";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import Button from "@mui/material/Button";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import JobBullets from "./JobBullets";

const JobCreateForm = ({ onSubmit }) => {
    const { control, register, handleSubmit } = useForm();

    return (
        <Box sx={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            mt: 5,
        }}
        >
            <FormControl fullWidth>
                <InputLabel>Company</InputLabel>
                <OutlinedInput
                    label="Company"
                    name="company"
                    {...register("company")}
                />
            </FormControl>

            <FormControl fullWidth>
                <InputLabel>Position</InputLabel>
                <OutlinedInput
                    label="Position"
                    name="position"
                    {...register("position")}
                />
            </FormControl>

            <JobBullets control={control} register={register} />

            <FormControl fullWidth>
                <InputLabel>Start</InputLabel>
                <OutlinedInput
                    label="Start"
                    name="start"
                    {...register("start")}
                />
            </FormControl>

            <FormControl fullWidth>
                <InputLabel>End</InputLabel>
                <OutlinedInput
                    label="End"
                    name="end"
                    {...register("end")}
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

JobCreateForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};

export default JobCreateForm;
