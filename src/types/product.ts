interface ProductThumbnail {
	isNew: boolean;
	isPreOrder: boolean;
	accent: string;
	accentComplement: string;
}

export interface Product {
    id: string;
	name: string;
	type: string;
	price: number;
	size?: string;
	amount?: number;
	thumbnail?: ProductThumbnail;
}
