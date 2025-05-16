// This is a React component that serves as the main entry point for the application.
import ImageUploader from './components/ImageUploader';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-xl font-bold mb-4">VisionQA - Accessibility Audit</h1>
      <ImageUploader />
    </div>
  );
}

export default App;
