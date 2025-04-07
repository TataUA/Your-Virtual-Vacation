"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Select } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export default function Home() {
  const [image, setImage] = useState<string | null>(null);
  const [selectedCountry, setSelectedCountry] = useState<string>("");
  const [processedImage, setProcessedImage] = useState<string | null>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  const handleProcessImage = () => {
    if (!image || !selectedCountry) return;

    // Здесь будет API-запрос к AI для обработки изображения
    setProcessedImage(image); // Временный заглушка
  };
  return (
    <div>
      <div className="flex flex-col items-center gap-4 p-6 max-w-xl mx-auto">
        <h1 className="text-2xl font-bold">Загрузка фото</h1>

        <input type="file" accept="image/*" onChange={handleImageUpload} />

        <Select
          options={[
            { value: "japan", label: "Япония" },
            { value: "france", label: "Франция" },
            { value: "egypt", label: "Египет" },
          ]}
          onChange={(e) => {
            setSelectedCountry(e.target.value);
          }}
        />

        <Button
          onClick={handleProcessImage}
          disabled={!image || !selectedCountry}
        >
          Обработать
        </Button>

        {image && (
          <Card className="w-full">
            <CardContent>
              <p className="text-center">Исходное изображение:</p>
              <Image
                src={image}
                width={600}
                height={600}
                alt="Uploaded"
                className="w-full rounded-lg"
              />
            </CardContent>
          </Card>
        )}

        {processedImage && (
          <Card className="w-full">
            <CardContent>
              <p className="text-center">Результат обработки:</p>
              <Image
                src={processedImage}
                alt="Processed"
                width={600}
                height={600}
                className="w-full rounded-lg"
              />
            </CardContent>
          </Card>
        )}
      </div>

      <footer></footer>
    </div>
  );
}
