import React, { useState } from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import { FaCloudUploadAlt } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import ImageUploading from "react-images-uploading";
import Image from "next/image";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 600,
    height: 500,
    boxShadow: 24,
    borderRadius: "5px",
    p: 3,
};

const ImageUpload = ({ open, onClose, onSave }) => {
    const [images, setImages] = useState([]);

    const onChange = (imageList) => {
        setImages(imageList);
    };

    const handleSave = (imageList) => {
        onSave(imageList);
        onClose();
        setImages([]);
    };

    return (
        <Modal
            open={open}
            onClose={onClose}
        >
            <Paper sx={style}>
                <ImageUploading
                    multiple
                    value={images}
                    onChange={onChange}
                >
                    {({
                        imageList,
                        onImageUpload,
                        onImageRemove,
                        dragProps,
                    }) => (
                        <Stack sx={{ height: "100%" }}>
                            <Stack flexDirection="row" flexWrap="wrap">
                                {imageList.map((image, index) => (
                                    <Box key={image.dataURL} sx={{ border: "1px solid #ddd" }}>
                                        <Image src={image.dataURL} alt="" width={100} height={100} objectFit="cover" />
                                        <IconButton onClick={() => onImageRemove(index)}>
                                            <MdDelete />
                                        </IconButton>
                                    </Box>
                                ))}
                            </Stack>
                            <Stack
                                gap="10px"
                                justifyContent="center"
                                alignItems="center"
                                flexGrow={1}
                                sx={{
                                    border: "1px dashed black",
                                    maxHeight: "100%",
                                    backgroundColor: "grey.200",
                                    color: "grey.600",
                                    textAlign: "center",
                                    lineHeight: "30px",
                                }}
                                {...dragProps}
                            >
                                <Box sx={{ fontSize: "60px" }}><FaCloudUploadAlt /></Box>
                                <Box>
                                    Drag and Drop assets here
                                    <br />
                                    Or
                                </Box>
                                <Button
                                    sx={{ width: 200 }}
                                    onClick={onImageUpload}
                                >
                                    Browse
                                </Button>
                                {imageList.length > 0 && (
                                    <Button
                                        sx={{ width: 200 }}
                                        onClick={() => handleSave(imageList)}
                                    >
                                        Save Images
                                    </Button>
                                )}
                            </Stack>
                        </Stack>
                    )}
                </ImageUploading>
            </Paper>
        </Modal>
    );
};

ImageUpload.propTypes = {
    open: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    onSave: PropTypes.func.isRequired,
};

export default ImageUpload;
