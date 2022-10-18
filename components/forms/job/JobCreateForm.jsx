import React from "react";
import { Controller, useForm } from "react-hook-form";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import Button from "@mui/material/Button";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import JobBullets from "./JobBullets";
import Form from "../../shared/Form";
import DatePicker from "../../shared/DatePicker";

const newDate = () => new Date(
    (new Date()).setHours(0, 0, 0, 0),
);

const JobCreateForm = ({ onSubmit, initialData }) => {
    const {
        control,
        register,
        handleSubmit,
    } = useForm({
        defaultValues: initialData,
    });

    return (
        <Form>
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
                <InputLabel>Start Date</InputLabel>
                <Controller
                    control={control}
                    name="startDate"
                    render={({ field: { value, onChange } }) => (
                        <DatePicker
                            value={value}
                            label="Start Date"
                            onChange={onChange}
                        />
                    )}
                />
            </FormControl>

            <FormControl fullWidth>
                <InputLabel>End Date</InputLabel>
                <Controller
                    control={control}
                    name="endDate"
                    render={({ field: { value, onChange } }) => {
                        const disabled = !value;
                        return (
                            <Box>
                                <DatePicker
                                    value={value}
                                    label="End Date"
                                    onChange={onChange}
                                    disabled={disabled}
                                />
                                <Button
                                    sx={{ display: "inline-block", ml: 1 }}
                                    color={disabled ? "success" : "error"}
                                    onClick={() => onChange(disabled ? newDate() : null)}
                                >
                                    { disabled ? "Enable" : "Disable" }
                                </Button>
                            </Box>
                        );
                    }}
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

JobCreateForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    initialData: PropTypes.shape({}),
};

JobCreateForm.defaultProps = {
    initialData: {
        startDate: newDate(),
        endDate: null,
    },
};

export default JobCreateForm;
