export default function SkillIcon({
	iconCardClass,
	imgSrc,
	imgAlt,
	imgClass,
	titleClass,
	titleText,
}) {
	return (
		<div className={iconCardClass}>
			<figure>
				<img className={imgClass} src={imgSrc} alt={imgAlt} />
				<figcaption className={titleClass}>{titleText}</figcaption>
			</figure>
		</div>
	);
}
