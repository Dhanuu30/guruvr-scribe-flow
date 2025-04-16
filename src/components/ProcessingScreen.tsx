
export function ProcessingScreen() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <div className="text-center space-y-6">
        <div className="relative w-24 h-24 mx-auto">
          <div className="absolute inset-0 border-4 border-gray-200 rounded-full"></div>
          <div className="absolute inset-0 border-4 border-t-purple-600 rounded-full animate-spin"></div>
        </div>
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold text-gray-800">
            Generating Transcript
          </h2>
          <p className="text-gray-600">Please wait while we analyze your video...</p>
        </div>
      </div>
    </div>
  );
}
