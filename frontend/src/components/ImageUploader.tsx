// This component is a simple image uploader that allows users to select an image file from their device.
const ImageUploader = () => {
    return (
        <div className="p-4 border rounded">
            <input type="file" accept="image/*" />
        </div>
    );
};

export default ImageUploader;
