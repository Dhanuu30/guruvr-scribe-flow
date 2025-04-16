
import { Button } from "@/components/ui/button";

interface VideoPreviewProps {
  videoUrl: string;
  onConfirm: () => void;
}

export function VideoPreview({ videoUrl, onConfirm }: VideoPreviewProps) {
  const getVideoId = (url: string) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : null;
  };

  const videoId = getVideoId(videoUrl);
  const embedUrl = videoId ? `https://www.youtube.com/embed/${videoId}` : '';

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 space-y-8">
      <div className="w-full max-w-3xl space-y-6">
        <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
          <iframe
            src={embedUrl}
            title="Video Preview"
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
        
        <div className="text-center space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">
            Is this the video you want to analyze?
          </h2>
          <Button
            onClick={onConfirm}
            className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 transition-all duration-200"
          >
            Generate Transcript
          </Button>
        </div>
      </div>
    </div>
  );
}
