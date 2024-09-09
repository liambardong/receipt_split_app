"use client";

import React, { createContext, useState, useContext, ReactNode } from "react";
export type Receipt = {
  restaurant: Restaurant;
  items: Item[];
  summary: Summary;
};

export type Restaurant = {
  name: string;
  address: string;
  phone: string;
};

export type Item = {
  name: string;
  quantity: number;
  price: number;
  sub_items?: SubItem[];
  descriptors: string[];
};

export type SubItem = {
  name: string;
  quantity: number;
  price: number;
};

export type Summary = {
  subtotal: number;
  tax: number;
  tip: number;
  total: number;
};
interface NewReceiptContextType {
  fileSelected: File | null;
  setFileSelected: React.Dispatch<React.SetStateAction<File | null>>;
  receipt: Receipt | null;
  setReceipt: React.Dispatch<React.SetStateAction<Receipt | null>>;
}

const NewReceiptContext = createContext<NewReceiptContextType | undefined>(
  undefined
);

interface NewReceiptProviderProps {
  children: ReactNode;
}

export function NewReceiptProvider({ children }: NewReceiptProviderProps) {
  const [fileSelected, setFileSelected] = useState<File | null>(null);
  const [receipt, setReceipt] = useState<Receipt | null>(null);
  // Add more states as needed

  return (
    <NewReceiptContext.Provider
      value={{ fileSelected, setFileSelected, receipt, setReceipt }}
    >
      {children}
    </NewReceiptContext.Provider>
  );
}

export function useNewReceiptContext() {
  const context = useContext(NewReceiptContext);
  if (context === undefined) {
    throw new Error("usePageContext must be used within a PageProvider");
  }
  return context;
}
