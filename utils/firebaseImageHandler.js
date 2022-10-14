import { v4 as UUIDv4 } from "uuid";
import {
    getDownloadURL,
    getStorage,
    ref,
    uploadString,
    deleteObject,
} from "firebase/storage";

const storage = getStorage();

const getImage = async (image) => {
    const isOnline = image.url.search(/https/) !== -1;
    if (isOnline) {
        return image.url;
    }

    const uuid = UUIDv4();
    const mime = image.url.match(/[^:/]\w+(?=[;,])/)[0];
    const fileName = `${uuid}.${mime}`;
    const storageRef = ref(storage, fileName);

    await uploadString(storageRef, image.url, "data_url");
    return getDownloadURL(storageRef);
};

export const deleteImage = async (image) => {
    const matches = image.match(/[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}\.(png|jpg)/gm);
    if (!matches[0]) {
        return;
    }
    const storageRef = ref(storage, matches[0]);
    await deleteObject(storageRef);
};

export const handleImages = async (images, initialImages) => {
    const responseImages = await Promise.all(
        images.map((image) => getImage(image)),
    );

    if (initialImages) {
        initialImages.forEach((image) => {
            if (!responseImages.includes(image)) {
                deleteImage(image);
            }
        });
    }

    return responseImages;
};

export const deleteImages = async (images) => images.forEach((image) => deleteImage(image));
