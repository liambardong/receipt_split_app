"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { Spinner } from "@nextui-org/spinner";
import { Receipt } from "@/app/models/receipt";
import { processReceiptImage } from "@/app/mock-data/new-receipt";

export default function ReceiptScanner() {
  const [file, setFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [receipt, setReceipt] = useState<Receipt | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [activeTab, setActiveTab] = useState("upload");

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
      setFile(selectedFile);
      const fileReader = new FileReader();
      fileReader.onload = (e) => {
        setPreviewUrl(e.target?.result as string);
      };
      fileReader.readAsDataURL(selectedFile);

      // Automatically process the receipt
      setIsProcessing(true);
      try {
        const processedReceipt = await processReceiptImage(selectedFile);
        setActiveTab("items"); // Switch to the receipt details tab
        setReceipt(processedReceipt);
      } catch (error) {
        console.error("Error processing receipt:", error);
      } finally {
        setIsProcessing(false);
      }
    }
  };

  const handleRemoveFile = () => {
    setFile(null);
    setPreviewUrl(null);
    setReceipt(null);
    setActiveTab("upload");
  };

  const handleUpload = async () => {
    if (file) {
      setIsProcessing(true);
      try {
        const processedReceipt = await processReceiptImage(file);
        setActiveTab("items");
        setReceipt(processedReceipt);
      } catch (error) {
        console.error("Error processing receipt:", error);
      } finally {
        setIsProcessing(false);
      }
    }
  };

  return (
    <Tabs
      defaultValue="upload"
      value={activeTab}
      onValueChange={setActiveTab}
      className=" h-full flex flex-col pb-8 align-middle"
    >
      <div className="h-full mb-4">
        <TabsContent value="upload" className="h-full">
          <div className="h-full flex items-center justify-center">
            {previewUrl ? (
              <div className="h-full flex items-center justify-center">
                {isProcessing ? (
                  <div className="flex items-center justify-center">
                    <Spinner color="primary" />
                  </div>
                ) : (
                  <div className="relative max-h-[60vh] overflow-y-auto">
                    <img
                      src={previewUrl}
                      alt="Receipt preview"
                      className="w-full h-auto rounded-lg object-contain"
                    />
                    <Button
                      variant="destructive"
                      size="icon"
                      className="absolute top-2 right-2"
                      onClick={handleRemoveFile}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                )}
              </div>
            ) : (
              <div className="grid w-full place-items-center gap-1.5">
                <Label
                  htmlFor="receipt"
                  className="cursor-pointer border-slate-400 p-4 border-2 border-dashed rounded-md text-center"
                >
                  Click to upload receipt
                  <Input
                    id="receipt"
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="hidden"
                    disabled={isProcessing}
                  />
                </Label>
              </div>
            )}
          </div>
        </TabsContent>
        <TabsContent value="items" className="h-full">
          {receipt ? (
            <div className="space-y-4">
              <div>
                <h4 className="text-md font-semibold mb-2">Items</h4>
                <ul className="space-y-2">
                  {receipt.items.map((item, index) => (
                    <li key={index} className="flex justify-between">
                      <span>
                        {item.quantity} x {item.name}{" "}
                        {item.descriptors.length > 0 &&
                          `(${item.descriptors.join(", ")})`}
                      </span>
                      <span>${(item.price * item.quantity).toFixed(2)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ) : (
            <p className="text-muted-foreground">
              No receipt data to display. Please upload and process a receipt
              first.
            </p>
          )}
        </TabsContent>
      </div>
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="upload">
          {receipt ? "Receipt Photo" : "Upload Receipt"}
        </TabsTrigger>
        <TabsTrigger value="items" disabled={!receipt}>
          Receipt Details
        </TabsTrigger>
      </TabsList>
    </Tabs>
  );
}
