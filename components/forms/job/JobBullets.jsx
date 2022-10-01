import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import {
    BsFillArrowDownCircleFill,
    BsFillArrowUpCircleFill,
    BsFillPlusCircleFill,
    BsFillTrashFill,
} from "react-icons/bs";
import { useFieldArray } from "react-hook-form";
import PropTypes from "prop-types";

const JobBullets = ({ control, register }) => {
    const {
        fields,
        append,
        remove,
        swap,
    } = useFieldArray({
        control,
        name: "bullets",
    });

    useEffect(() => {
        if (fields.length === 0) {
            append();
        }
    }, [fields, append]);

    return (
        <Box sx={{
            display: "flex",
            flexDirection: "column",
            gap: "5px",
            border: "1px solid #bbb",
            background: "#eee",
            padding: "10px",
            borderRadius: "5px",
        }}
        >
            <h5>Bullet Points</h5>
            {fields.map((field, index) => (
                <OutlinedInput
                    sx={{ background: "#fff" }}
                    key={field.id}
                    {...register(`bullets.${index}`)}
                    endAdornment={(
                        <InputAdornment position="end">
                            <IconButton onClick={() => append("")}>
                                <BsFillPlusCircleFill color="green" />
                            </IconButton>
                            {fields.length > 1 && (
                                <>
                                    <IconButton
                                        disabled={index === (fields.length - 1)}
                                        onClick={() => swap(index, index + 1)}
                                    >
                                        <BsFillArrowDownCircleFill />
                                    </IconButton>
                                    <IconButton
                                        disabled={index === 0}
                                        onClick={() => swap(index, index - 1)}
                                    >
                                        <BsFillArrowUpCircleFill />
                                    </IconButton>
                                    <IconButton onClick={() => remove(index)}>
                                        <BsFillTrashFill color="tomato" />
                                    </IconButton>
                                </>
                            )}
                        </InputAdornment>
                    )}
                />
            ))}
        </Box>
    );
};

JobBullets.propTypes = {
    control: PropTypes.shape({}).isRequired,
    register: PropTypes.func.isRequired,
};

export default JobBullets;
