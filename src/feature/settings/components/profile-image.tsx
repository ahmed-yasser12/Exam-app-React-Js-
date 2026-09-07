import { Camera } from "lucide-react";
import {  useState } from "react";

interface ProfileImageProps {
  imageUrl: string;
  onImageSelect: (image: string) => void;
}

function ProfileImage({
  imageUrl,
  onImageSelect,
}: ProfileImageProps) {
  const [previewUrl, setPreviewUrl] = useState(imageUrl);

//   useEffect(() => {
//     setPreviewUrl(imageUrl);
//   }, [imageUrl]);

  function handleImageChange(
    event: React.ChangeEvent<HTMLInputElement>,
  ) {
    const selectedFile = event.target.files?.[0];

    if (!selectedFile) {
      return;
    }

    const fileReader = new FileReader();

    fileReader.onload = () => {
      const imageResult = fileReader.result;

      if (typeof imageResult === "string") {
        setPreviewUrl(imageResult);
        onImageSelect(imageResult);
      }
    };

    fileReader.readAsDataURL(selectedFile);
  }

  return (
    <div className="relative size-32">
      <img
        src={previewUrl}
        alt="Profile"
        className="size-full rounded-full object-cover"
      />

      <label
        htmlFor="profile-image"
        className="
          absolute bottom-0 right-0 flex size-9 cursor-pointer
          items-center justify-center rounded-full
          bg-blue-600 text-white transition-colors
          hover:bg-blue-700
        "
      >
        <Camera className="size-4" />

        <input
          id="profile-image"
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="hidden"
        />
      </label>
    </div>
  );
}

export default ProfileImage;