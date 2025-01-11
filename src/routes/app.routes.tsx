import { NotFoundPage404 } from "@pages/404NotFound";
import { DetailsPage } from "@pages/Details";
import { HomePage } from "@pages/Home";
import { RankingPage } from "@pages/Ranking";
import { Routes, Route } from "react-router-dom";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/details" element={<DetailsPage />} />
      <Route path="/ranking" element={<RankingPage />} />
      <Route path="*" element={<NotFoundPage404 />} />
    </Routes>
  );
}
