import { Product } from "@/types/product";

const products: Product[] = [
    {
		id: "squad",
		name: "Bring Your Squad!",
		type: "Package",
		price: 100000,
		thumbnail: {
			isNew: false,
			isPreOrder: true,
			accent: "#ffffff",
			accentComplement: "#011B29",
		},
	},
	{
        id: "fluore",
		name: "fluore",
		type: "Bracelet",
		price: 25000,
		thumbnail: {
			isNew: true,
			isPreOrder: true,
			accent: "#ffffff",
			accentComplement: "#132042",
		},
	},
	{
        id: "classic",
		name: "classic",
		type: "Bracelet",
		price: 25000,
		thumbnail: {
			isNew: false,
			isPreOrder: true,
			accent: "#132042",
			accentComplement: "#ffffff",
		},
	},
];

export { products };
