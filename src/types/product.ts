interface ProductThumbnail {
	isNew: boolean;
	isPreOrder: boolean;
	accent: string;
	accentComplement: string;
}

export interface Product {
	name: string;
	type: string;
	price: number;
	size?: string;
	amount?: number;
	thumbnail?: ProductThumbnail;
}
