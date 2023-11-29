import { generateComponents } from "@uploadthing/react";
import {OurFileRouter} from "../../app/api/uploadthing/core";

import "@uploadthing/react/styles.css";

export const { UploadButton, UploadDropzone, Uploader } =
    generateComponents<OurFileRouter>();