import React, { useRef, ChangeEvent, DragEvent } from "react";
import { ReactComponent as Upload } from "../../assets/upload.svg";
import { FileInputProps} from "../../propTypes";


const FileInput: React.FC<FileInputProps> = ({handleInputChange, formData, category}) => {
  const imageInputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  return (
    <div
      className="bg-[#6484e614] rounded-lg border-dashed border-[#383940] border-2 w-[50%] p-5 flex flex-col items-center cursor-pointer"
      onDrop={(e:  DragEvent<HTMLDivElement>) =>  handleInputChange(e, category)}
      onDragOver={handleDragOver}
    >
      <Upload />
      <span className="text-center">
        <p className="text-xs 2xl:text-base text-[#383940]">
        {(formData[category as keyof typeof formData] as { image: File | null }).image ? (formData[category as keyof typeof formData] as { image: File | null }).image?.name : "Drop files to upload or"}
        </p>
        <p
          className="text-[#4BB543] font-semibold text-xs 2xl:text-base"
          onClick={() => imageInputRef.current && imageInputRef.current.click()}
        >
          browse
        </p>
      </span>
      <input
        type="file"
        className="hidden"
        accept=".jpg, .jpeg, .png"
        ref={imageInputRef}
        name="image"
        onChange={(e: ChangeEvent<HTMLInputElement> ) =>
          handleInputChange(e, category)
        }
      />
    </div>
  );
};

export default FileInput;
