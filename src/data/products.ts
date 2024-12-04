import { Product } from "@/types/product";

const products: Product[] = [
    {
		id: "suit-up-your-squad",
		name: "Suit Up Your Squad!",
		tag: ["Package", "T-Shirt"],
		price: 285000,
		thumbnail: {
			accent: "#ffffff",
			accentComplement: "#011B29",
		},
	},
    {
		id: "bring-your-squad",
		name: "Bring Your Squad!",
		tag: ["Package", "Bracelet"],
		price: 100000,
		thumbnail: {
			accent: "#ffffff",
			accentComplement: "#011B29",
		},
	},
    {
		id: "luminous-legacy",
		name: "Luminous Legacy",
		tag: ["Package", "T-Shirt", "Bracelet"],
		price: 120000,
		thumbnail: {
			accent: "#ffffff",
			accentComplement: "#132042",
		},
	},
	{
		id: "fluore",
		name: "fluore",
		tag: ["Bracelet"],
		price: 25000,
		thumbnail: {
			accent: "#ffffff",
			accentComplement: "#132042",
		},
	},
	{
		id: "classic-bracelet",
		name: "classic",
		tag: ["Bracelet"],
		price: 25000,
		thumbnail: {
			accent: "#132042",
			accentComplement: "#ffffff",
		},
	},
    {
		id: "legacy",
		name: "Legacy",
		tag: ["T-Shirt"],
		price: 105000,
		thumbnail: {
			accent: "#ffffff",
			accentComplement: "#132042",
		},
	},
    {
		id: "classic-tshirt",
		name: "Classic",
		tag: ["T-Shirt"],
		price: 90000,
		thumbnail: {
			accent: "#132042",
			accentComplement: "#ffffff",
		},
	}
];

export { products };
