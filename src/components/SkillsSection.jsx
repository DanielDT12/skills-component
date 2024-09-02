import SkillsList from "./SkillsList";

export default function SkillsSection({
	sectionClass,
	infoClass,
	h2Class,
	pClass,
	h2Text,
	pText,
}) {
	return (
		<section className={sectionClass}>
			<div className={infoClass}>
				<h2 className={h2Class}>{h2Text}</h2>
				<p className={pClass}>{pText}</p>
			</div>
			<SkillsList
				listClass={"skills-list"} // Class names tilhører _skills-list.scss
				listItemClass={"skills-list__item"} // Class names tilhører _skills-list.scss
			/>
		</section>
	);
}
