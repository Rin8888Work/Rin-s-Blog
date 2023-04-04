import { visit } from 'unist-util-visit';
import { slug } from 'github-slugger';
import { toString } from 'mdast-util-to-string';
import type { RemarkTocHeadingOptions, UnistNodeType, UnistTreeType } from '~/types';

export function remarkTocHeading(options: RemarkTocHeadingOptions) {
	let parents: any[] = [];

	return (tree: UnistTreeType) => {
		let numbering = 0;
		let childNumbering = 0;
		visit(tree, 'heading', (node: UnistNodeType) => {
			const { depth } = node;

			if (depth === 2) {
				numbering++;
				childNumbering = 0;
			}

			if (depth === 3) {
				childNumbering++;
			}

			const textContent = toString(node);
			const heading = {
				value: `${numbering > 0 ? `${numbering}.` : ''}${
					childNumbering > 0 ? `${childNumbering}.` : ''
				} ${textContent}`,
				url: slug(textContent),
				depth: node.depth,
				children: [],
				numbering: `${numbering > 0 ? `${numbering}.` : ''}${
					childNumbering > 0 ? `${childNumbering}.` : ''
				}`,
			};

			// Determine the current depth level
			const depthLevel = node.depth - 2;

			// Remove all parent nodes at a higher depth level than the current depth
			parents = parents.slice(0, depthLevel);

			// If there are parent nodes, add the new heading as a child of the last parent
			if (parents.length > 0) {
				const lastParent = parents[parents.length - 1];
				lastParent.children.push(heading);
			} else {
				// If there are no parent nodes, add the new heading as a top-level heading
				options.exportRef.push(heading);
			}

			// Add the new heading to the parent nodes array
			parents.push(heading);
		});
	};
}
