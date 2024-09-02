import SkillsSection from "./components/SkillsSection";

function App() {
	return (
		<>
			<SkillsSection
				sectionClass={"skills-section"}
				infoClass={"skills-section__info-container"}
				h2Class={"skills-section__title"}
				pClass={"skills-section__text-info"}
				h2Text={"Current Skils"}
				pText={"Here are some of the current skills i am working with."}
			/>
		</>
	);
}

export default App;
