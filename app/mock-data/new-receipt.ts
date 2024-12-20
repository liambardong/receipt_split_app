import { Receipt } from "../models/receipt";

// Mock function to simulate processing the receipt image
export const processReceiptImage = (file: File): Promise<Receipt> => {
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
            price: 9.0,
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
