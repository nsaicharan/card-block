const { registerBlockType } = wp.blocks;
const { RichText, MediaUpload, PlainText } = wp.editor;
const { Button } = wp.components;
import "./style.scss";
import "./editor.scss";

registerBlockType("card-block/main", {
	title: "Card Block",
	icon: "grid-view", // https://developer.wordpress.org/resource/dashicons/.
	category: "common",

	attributes: {
		imgURL: {
			type: "string",
			source: "attribute",
			attribute: "src",
			selector: "img"
		},
		imgID: {
			type: "number"
		},
		imgAlt: {
			type: "string",
			source: "attribute",
			attribute: "alt",
			selector: "img"
		},
		title: {
			type: "string",
			source: "text",
			selector: ".g-card__title"
		},
		body: {
			type: "array",
			source: "children",
			selector: ".g-card__body"
		}
	},

	edit: function({ attributes, setAttributes, isSelected }) {
		const handleSelect = img => {
			setAttributes({
				imgURL: img.url,
				imgAlt: img.alt,
				imgID: img.id
			});
		};

		const removeImage = () => {
			setAttributes({ imgURL: null });
		};

		const getImage = open => {
			if (attributes.imgURL) {
				return (
					<React.Fragment>
						<img
							className="g-card__img"
							src={attributes.imgURL}
							alt={attributes.imgAlt}
						/>

						{isSelected ? (
							<div className="text-center mb-small">
								<Button
									className="button button-primary button-small mr-small"
									onClick={open}
								>
									Change Image
								</Button>

								<Button className="button button-small" onClick={removeImage}>
									Remove Image
								</Button>
							</div>
						) : (
							""
						)}
					</React.Fragment>
				);
			} else {
				return (
					<div className="g-card__button-wrapper">
						<Button className="button" onClick={open}>
							Select Image
						</Button>
					</div>
				);
			}
		};

		return (
			<div className="g-card">
				<MediaUpload
					onSelect={handleSelect}
					value={attributes.imgID}
					render={({ open }) => getImage(open)}
				/>

				<div className="g-card__content-wrapper">
					<PlainText
						className="g-card__title"
						placeholder="Enter title..."
						value={attributes.title}
						onChange={title => setAttributes({ title })}
					/>

					<RichText
						className="g-card__body"
						placeholder="Body text here..."
						value={attributes.body}
						multiline="p"
						onChange={body => setAttributes({ body })}
					/>
				</div>
			</div>
		);
	},

	save: function({ attributes }) {
		return (
			<div className="g-card">
				<img
					src={attributes.imgURL}
					alt={attributes.imgAlt}
					className="g-card__img"
				/>
				<div className="g-card__content-wrapper">
					<h2 className="g-card__title">{attributes.title}</h2>
					<div className="g-card__body">{attributes.body}</div>
				</div>
			</div>
		);
	}
});
