"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { Spinner } from "@nextui-org/spinner";

interface SubItem {
  name: string;
  quantity: number;
  price: number;
}

interface Item {
  name: string;
  quantity: number;
  price: number;
  sub_items: SubItem[];
  descriptors: string[];
}

interface Receipt {
  restaurant: {
    name: string;
    address: string;
    phone: string;
  };
  items: Item[];
  summary: {
    subtotal: number;
    tax: number;
    tip: number;
    total: number;
  };
}

// Mock function to simulate processing the receipt image
const processReceiptImage = (file: File): Promise<Receipt> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      // Simulated receipt data
      resolve({
        restaurant: {
          name: "Restaurant Name",
          address: "123 Main St, City, State, ZIP",
          phone: "123-456-7890",
        },
        items: [
          {
            name: "GRIMM WAVETABLE",
            quantity: 1,
            price: 99.0,
            sub_items: [],
            descriptors: [],
          },
          {
            name: "ALL OR NOTHING",
            quantity: 3,
            price: 11.0,
            sub_items: [],
            descriptors: ["PINT"],
          },
          {
            name: "CIGARETTES AFTER SEX",
            quantity: 2,
            price: 34.0,
            sub_items: [],
            descriptors: [],
          },
          {
            name: "DEVIL I KNOW",
            quantity: 2,
            price: 34.0,
            sub_items: [],
            descriptors: [],
          },
          {
            name: "INDUSTRIAL ARTS WRENCH",
            quantity: 3,
            price: 24.0,
            sub_items: [],
            descriptors: [],
          },
          {
            name: "GOOD TIME N/A IPA",
            quantity: 1,
            price: 6.0,
            sub_items: [],
            descriptors: [],
          },
          {
            name: "Chicken Dumplings",
            quantity: 1,
            price: 13.0,
            sub_items: [],
            descriptors: [],
          },
          {
            name: "Shishito Pepper",
            quantity: 1,
            price: 9.0,
            sub_items: [],
            descriptors: [],
          },
          {
            name: "Butternut Squash Dumplings",
            quantity: 1,
            price: 14.0,
            sub_items: [],
            descriptors: [],
          },
          {
            name: "Jungle Bird Fries",
            quantity: 1,
            price: 11.0,
            sub_items: [],
            descriptors: [],
          },
          {
            name: "JACK'S ABBY LAGER",
            quantity: 2,
            price: 18.0,
            sub_items: [],
            descriptors: [],
          },
          {
            name: "ALLAGASH WHITE",
            quantity: 1,
            price: 11.0,
            sub_items: [],
            descriptors: ["PINT"],
          },
        ],
        summary: {
          subtotal: 284.0,
          tax: 25.22,
          tip: 61.84,
          total: 371.06,
        },
      });
    }, 2000);
  });
};

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
        setReceipt(processedReceipt);
      } catch (error) {
        console.error("Error processing receipt:", error);
      } finally {
        setIsProcessing(false);
      }
    }
  };

  return (
    <Tabs defaultValue="upload" className=" h-full flex flex-col pb-8">
      <div className="flex-grow mb-4">
        <TabsContent value="upload">
          <div className="h-full flex flex-col justify-center">
            {previewUrl ? (
              <div className="flex justify-center h-full">
                {isProcessing ? (
                  <div>
                    <Spinner color="primary" />
                  </div>
                ) : (
                  <div className="relative">
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
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label
                  htmlFor="receipt"
                  className="cursor-pointer p-4 border-2 border-dashed rounded-md text-center"
                >
                  {isProcessing ? "Processing..." : "Click to upload receipt"}
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
        <TabsContent value="items">
          {receipt ? (
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold">
                  {receipt.restaurant.name}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {receipt.restaurant.address}
                </p>
                <p className="text-sm text-muted-foreground">
                  {receipt.restaurant.phone}
                </p>
              </div>
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
              <div className="border-t pt-2">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>${receipt.summary.subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Tax</span>
                  <span>${receipt.summary.tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Tip</span>
                  <span>${receipt.summary.tip.toFixed(2)}</span>
                </div>
                <div className="flex justify-between font-semibold">
                  <span>Total</span>
                  <span>${receipt.summary.total.toFixed(2)}</span>
                </div>
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
        <TabsTrigger value="upload">Upload Receipt</TabsTrigger>
        <TabsTrigger value="items" disabled={!receipt}>
          Receipt Details
        </TabsTrigger>
      </TabsList>
    </Tabs>
  );
}
