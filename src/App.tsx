import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import { Footer, Navbar } from "./components";
import {
	Home,
	About,
	Quiz,
	HomeAr,
	QuizAr,
	AnswersAr,
	Answers,
	GradualModeAr,
} from "./pages";

export default function App() {
	return (
		<>
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/quiz" element={<Quiz />} />
					<Route path="/homeAr" element={<HomeAr />} />
					<Route path="/quizAr" element={<QuizAr />} />
					<Route path="/answers" element={<Answers />} />
					<Route path="/answersAr" element={<AnswersAr />} />
					<Route path="/gradualModeAr" element={<GradualModeAr />} />
					<Route path="/*" element={<Navigate to="/" />} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</>
	);
}
