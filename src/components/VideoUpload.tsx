
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface VideoUploadProps {
  onSubmit: (url: string) => void;
}

export function VideoUpload({ onSubmit }: VideoUploadProps) {
  const [url, setUrl] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (url) onSubmit(url);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
            GURUVR AI Transcript
          </h1>
          <p className="mt-2 text-gray-600">Transform video content into actionable insights</p>
        </div>
        
        <form onSubmit={handleSubmit} className="mt-8 space-y-4">
          <div className="rounded-lg border border-gray-200 bg-white shadow-sm">
            <Input
              type="url"
              placeholder="Paste Video URL"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              className="h-12 px-4"
              required
            />
          </div>
          <Button 
            type="submit"
            className="w-full h-12 bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 transition-all duration-200"
          >
            Process Video
          </Button>
        </form>
      </div>
    </div>
  );
}
