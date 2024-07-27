import { ReactNode } from "react";

interface TagProps {
    children : ReactNode,
    accent : string,
    accentComplement : string
}

const Tag = ({children, accent, accentComplement} : TagProps) => {
	return (
		<div
			className="text-sm py-0.5 px-3 rounded-full font-medium"
			style={{
				backgroundColor: accent,
				color: accentComplement,
			}}
		>
			<p>{children}</p>
		</div>
	);
};

Tag.displayName = "Tag";

export { Tag };
