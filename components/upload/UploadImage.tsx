import { uploadImage } from "@/server/upload-image";
import { useDropzone } from "react-dropzone";
import { Card, CardContent } from "../ui/card";
import { cn } from "@/lib/utils";

export default function UploadImage() {
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    maxFiles: 1,
    accept: {
      "image/png": [".png"],
      "image/jpg": [".jpg"],
      "image/webp": [".webp"],
      "image/jpeg": [".jpeg"],
    },
    onDrop: async (acceptedFiles, fileRejections) => {
      if (acceptedFiles.length) {
        const formData = new FormData();
        formData.append("image", acceptedFiles[0]);
        const objectUrl = URL.createObjectURL(acceptedFiles[0]);
        // here some state management stuff
        const res = await uploadImage({ image: formData });
        console.log(res);
      }
      if (fileRejections.length) {
        console.log("rejected");
      }
    },
  });
  return (
    <Card
      {...getRootProps()}
      className={cn(
        " hover:cursor-pointer hover:bg-secondary hover:border-primary transition-all  ease-in-out ",
        `${isDragActive ? "animate-pulse border-primary bg-secondary" : ""}`
      )}
    >
      <CardContent className="flex flex-col h-full items-center justify-center px-2 py-24  text-xs ">
        <input {...getInputProps()} />
        <div className="flex items-center flex-col justify-center gap-4">
          <p className="text-muted-foreground text-2xl">
            {isDragActive
              ? "Drop your image here!"
              : "Start by uploading an image"}
          </p>
          <p className="text-muted-foreground">
            Supported  By .jpeg .jpg .png .webp
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
