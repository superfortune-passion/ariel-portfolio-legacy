import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import SkillsSection from "@/components/SkillsSection";
import EducationSection from "@/components/EducationSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
export default function Home() {
  return (<><Navbar /><main><Hero /><AboutSection /><ExperienceSection /><SkillsSection /><EducationSection /><ContactSection /></main><Footer /></>);
}
