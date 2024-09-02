import skillsData from "../data/skillsList";
import SkillIcon from "./SkillIcon";

export default function SkillsList({ listClass, listItemClass }) {
	return (
		<ul className={listClass} role="list">
			{skillsData.map((card, i) => (
				<li className={listItemClass} key={i}>
					<SkillIcon
						iconCardClass={"skills-list__card"}
						imgSrc={card.src}
						imgAlt={card.title}
						imgClass={"skills-list__card-img"}
						titleClass={"skills-list__title"}
						titleText={card.title}
					/>
				</li>
			))}
		</ul>
	);
}
