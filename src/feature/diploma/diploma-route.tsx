import type { RouteObject } from "react-router";
import DiplomaPage from "./routes/pages/DiplomaPage";

export const diplomaRoutes: RouteObject[] = [

   {path: "diplomas", element: <DiplomaPage/>},
];
