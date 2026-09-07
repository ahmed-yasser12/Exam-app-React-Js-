import { cn } from "@/shared/lib/utils";
import { Outlet } from "react-router";
import ExamApp from "../ExamApp/Exam-app";

function AuthLayout() {
  return (
    <div className="grid min-h-screen grid-cols-1 lg:grid-cols-2 ">
      {/* main components auth */}
      <section
        className={cn(
          " bg-white backdrop-blur-xl flex relative overflow-hidden ",
          // before
          "before:absolute before:size-60 before:bg-blue-300 before:rounded-full before:top-14 before:-right-8  before:blur-3xl ",
          // after
          "after:absolute after:size-60 after:bg-blue-300 after:rounded-full after:-bottom-8 after:-left-8  after:blur-3xl ",
          "hidden lg:flex relative overflow-hidden bg-white backdrop-blur-xl",
        )}
      >
        <ExamApp />
      </section>
      <main className="flex items-center justify-center bg-white">
        <Outlet />
      </main>
    </div>
  );
}

export default AuthLayout;
