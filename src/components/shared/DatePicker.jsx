import React, { useRef } from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import PropTypes from "prop-types";
import OriginalDatePicker from "react-datepicker";

const DatePicker = ({
    value,
    label,
    disabled,
    onChange,
}) => {
    const dateRef = useRef();

    const transformDate = (date) => {
        if (!(date instanceof Date)) {
            return "";
        }

        return date.toLocaleDateString();
    };

    return (
        <OutlinedInput
            sx={{ maxWidth: "200px" }}
            label={label}
            value={transformDate(value)}
            disabled={disabled}
            onClick={() => {
                if (disabled) return;
                if (!dateRef.current.isCalendarOpen()) {
                    dateRef.current.setOpen(true);
                }
            }}
            endAdornment={(
                <InputAdornment position="end">
                    <OriginalDatePicker
                        ref={dateRef}
                        selected={value}
                        onChange={onChange}
                    />
                </InputAdornment>
            )}
        />
    );
};

DatePicker.propTypes = {
    value: PropTypes.instanceOf(Date),
    label: PropTypes.string,
    disabled: PropTypes.bool,
    onChange: PropTypes.func.isRequired,
};

DatePicker.defaultProps = {
    value: null,
    label: "",
    disabled: false,
};

export default DatePicker;
