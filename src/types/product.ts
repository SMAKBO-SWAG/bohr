interface ProductThumbnail {
	accent: string;
	accentComplement: string;
}

export interface Product {
    id: string;
	name: string;
	tag: string[];
	price: number;
	size: string;
	amount: number;
	thumbnail?: ProductThumbnail;
}
