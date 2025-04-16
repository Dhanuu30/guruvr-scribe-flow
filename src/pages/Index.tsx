
import { useState } from "react";
import { VideoUpload } from "@/components/VideoUpload";
import { VideoPreview } from "@/components/VideoPreview";
import { ProcessingScreen } from "@/components/ProcessingScreen";
import { TranscriptView } from "@/components/TranscriptView";
import { generateTranscript } from "@/api/guruAPI";
import { useToast } from "@/components/ui/use-toast";

type Screen = "upload" | "preview" | "processing" | "result";

export default function Index() {
  const [currentScreen, setCurrentScreen] = useState<Screen>("upload");
  const [videoUrl, setVideoUrl] = useState("");
  const [transcript, setTranscript] = useState("");
  const [conceptBank, setConceptBank] = useState<Array<{ concept: string; description: string }>>([]);
  const { toast } = useToast();

  const handleUrlSubmit = (url: string) => {
    setVideoUrl(url);
    setCurrentScreen("preview");
  };

  const handleGenerate = async () => {
    setCurrentScreen("processing");
    try {
      const result = await generateTranscript(videoUrl);
      setTranscript(result.transcript);
      setConceptBank(result.concept_bank);
      setCurrentScreen("result");
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to generate transcript. Please try again.",
        variant: "destructive",
      });
      setCurrentScreen("preview");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {currentScreen === "upload" && <VideoUpload onSubmit={handleUrlSubmit} />}
      {currentScreen === "preview" && (
        <VideoPreview videoUrl={videoUrl} onConfirm={handleGenerate} />
      )}
      {currentScreen === "processing" && <ProcessingScreen />}
      {currentScreen === "result" && (
        <TranscriptView
          videoUrl={videoUrl}
          transcript={transcript}
          conceptBank={conceptBank}
        />
      )}
    </div>
  );
}
