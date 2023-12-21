import React, { useState, ChangeEvent } from "react";
import Image from "next/image";
import { FormWrapper, UploadContent } from "./index.style";
import { UseFormRegister } from "react-hook-form";
import { Upload } from "../../../../assets/images/svg";

type UploaderComponentProps = {
  fieldName: string;
  register?: UseFormRegister<any>;
};

export const UploaderComponent: React.FC<UploaderComponentProps> = (props) => {
  const { register, fieldName, ...rest } = props;

  const [image, setImage] = useState<string | null>(null);
  const [fileName, setFileName] = useState<string>("No selected file");

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      const file = files[0];
      setFileName(file.name);
      setImage(URL.createObjectURL(file));
    }
  };

  const handleDelete = () => {
    setFileName("No selected File");
    setImage(null);
  };

  return (
    <main>
      <FormWrapper
        onClick={() =>
          (document.querySelector(".input-field") as HTMLInputElement)?.click()
        }
      >
        <input
          type="file"
          accept="image/*"
          className="input-field"
          hidden
          {...rest}
          {...(register &&
            register(fieldName!, {
              onChange: (e) => {
                handleFileChange(e);
              },
            }))}
        />

        {image ? (
          <>
            <Image src={image} width={150} height={150} alt={fileName} />
            <UploadContent>{fileName}</UploadContent>
          </>
        ) : (
          <>
            <p>
              <Upload /> &nbsp; Upload Image
            </p>
            <span style={{ marginTop: "6px" }}>format supported</span>
          </>
        )}
      </FormWrapper>
    </main>
  );
};
