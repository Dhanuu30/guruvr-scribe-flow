
interface TranscriptViewProps {
  videoUrl: string;
  transcript: string;
  conceptBank: Array<{
    concept: string;
    description: string;
  }>;
}

export function TranscriptView({ videoUrl, transcript, conceptBank }: TranscriptViewProps) {
  const getVideoId = (url: string) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : null;
  };

  const videoId = getVideoId(videoUrl);
  const embedUrl = videoId ? `https://www.youtube.com/embed/${videoId}` : '';

  return (
    <div className="min-h-screen p-4 lg:p-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
        {/* Left Column */}
        <div className="space-y-6">
          <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
            <iframe
              src={embedUrl}
              title="Video Player"
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Transcript</h2>
            <div className="h-[500px] overflow-y-auto prose max-w-none">
              {transcript.split('\n').map((paragraph, i) => (
                <p key={i} className="mb-4 text-gray-700">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-6 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
            Concept Bank
          </h2>
          <div className="space-y-4">
            {conceptBank.map((item, index) => (
              <div key={index} className="p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors duration-200">
                <h3 className="font-semibold text-gray-800 mb-2">{item.concept}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
