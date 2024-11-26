import { Product } from "@/types/product";

const products: Product[] = [
    {
		id: "squad",
		name: "Bring Your Squad!",
		tag: ["Package", "Bracelet"],
		price: 100000,
		thumbnail: {
			accent: "#ffffff",
			accentComplement: "#011B29",
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
		id: "classic",
		name: "classic",
		tag: ["Bracelet"],
		price: 25000,
		thumbnail: {
			accent: "#132042",
			accentComplement: "#ffffff",
		},
	},
];

export { products };
