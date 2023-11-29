import { generateComponents } from "@uploadthing/react";

import type { OurFileRouter } from "./core";

export const { UploadButton, UploadDropzone, Uploader } =
    generateComponents<OurFileRouter>();