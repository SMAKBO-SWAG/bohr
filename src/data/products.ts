import { Product } from "@/types/product";

const products: Product[] = [
	{
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
