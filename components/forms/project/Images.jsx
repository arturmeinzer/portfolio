import React, { useState } from "react";
import PropTypes from "prop-types";
import { useFieldArray } from "react-hook-form";
import IconButton from "@mui/material/IconButton";
import {
    BsFillArrowLeftCircleFill,
    BsFillArrowRightCircleFill,
    BsFillTrashFill,
} from "react-icons/bs";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Image from "next/image";
import Stack from "@mui/material/Stack";
import dynamic from "next/dynamic";

const ImageUpload = dynamic(() => import("./ImageUpload"));

const Images = ({ control }) => {
    const [openUpload, setOpenUpload] = useState(false);

    const {
        fields,
        append,
        remove,
        swap,
    } = useFieldArray({
        control,
        name: "images",
    });

    const onSave = (imageList) => {
        imageList.forEach((item) => {
            append({ url: item.dataURL });
        });
    };

    return (
        <FormControl sx={{
            display: "flex",
            flexDirection: "column",
            gap: "5px",
            border: "1px solid #bbb",
            background: "#fff",
            padding: "10px",
            borderRadius: "5px",
        }}
        >
            <InputLabel shrink sx={{ background: "#fff" }}>Images</InputLabel>
            <Button
                onClick={() => setOpenUpload(true)}
                sx={{ width: 100, margin: "5px 0" }}
            >
                Upload
            </Button>
            {openUpload && (
                <ImageUpload
                    open
                    onClose={() => setOpenUpload(false)}
                    onSave={onSave}
                />
            )}
            <Stack flexDirection="row" flexWrap="wrap" gap="10px">
                {fields.map((field, index) => (
                    <Stack key={field.id} flexDirection="row" sx={{ border: "1px solid #bbb", borderRadius: "5px" }}>
                        <Image src={field.url} alt="" width={200} height={200} objectFit="cover" />
                        <Stack justifyContent="center">
                            <IconButton
                                disabled={index === 0}
                                onClick={() => swap(index, index - 1)}
                            >
                                <BsFillArrowLeftCircleFill />
                            </IconButton>
                            <IconButton
                                disabled={index === (fields.length - 1)}
                                onClick={() => swap(index, index + 1)}
                            >
                                <BsFillArrowRightCircleFill />
                            </IconButton>
                            <IconButton
                                onClick={() => remove(index)}
                            >
                                <BsFillTrashFill color="tomato" />
                            </IconButton>
                        </Stack>
                    </Stack>
                ))}
            </Stack>
        </FormControl>
    );
};

Images.propTypes = {
    control: PropTypes.shape({}).isRequired,
};

export default Images;
