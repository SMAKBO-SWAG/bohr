import { Product } from "@/types/product";

const now = new Date();
const jakartaTime = new Date(now.toLocaleString("en-US", { timeZone: "Asia/Jakarta" }));
const squadAvailableDate = new Date("2024-08-22T18:00:00+07:00");

const products: Product[] = [
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

if (jakartaTime >= squadAvailableDate) {
	products.unshift({
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
	});
}

export { products };
