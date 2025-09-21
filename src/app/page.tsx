import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import SkillsSection from "@/components/SkillsSection";
export default function Home() {
  return (<><Navbar /><main><Hero /><AboutSection /><ExperienceSection /><SkillsSection /></main></>);
}
