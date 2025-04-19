
import { useState } from "react";
import { Upload } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";

interface ImageUploadProps {
  value: string;
  onChange: (url: string) => void;
}

export function ImageUpload({ value, onChange }: ImageUploadProps) {
  const [isUploading, setIsUploading] = useState(false);

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsUploading(true);
    try {
      const fileExt = file.name.split('.').pop();
      const filePath = `${Math.random()}.${fileExt}`;

      const { error: uploadError } = await supabase.storage
        .from('products')
        .upload(filePath, file);

      if (uploadError) throw uploadError;

      const { data } = supabase.storage
        .from('products')
        .getPublicUrl(filePath);

      onChange(data.publicUrl);
    } catch (error: any) {
      console.error('Error uploading image:', error.message);
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <input
        type="file"
        accept="image/*"
        onChange={handleUpload}
        className="hidden"
        id="imageUpload"
      />
      <label
        htmlFor="imageUpload"
        className="cursor-pointer"
      >
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 hover:border-primary transition-colors">
          {value ? (
            <img
              src={value}
              alt="Product"
              className="max-w-[200px] max-h-[200px] object-cover mx-auto"
            />
          ) : (
            <div className="flex flex-col items-center gap-2 text-gray-500">
              <Upload className="h-8 w-8" />
              <span>Upload product image</span>
            </div>
          )}
        </div>
      </label>
      {isUploading && <p className="text-sm text-gray-500">Uploading...</p>}
    </div>
  );
}
