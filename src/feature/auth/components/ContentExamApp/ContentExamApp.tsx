import Heading from "@/feature/auth/shared/components/heading";
import { BookOpenCheck, Brain, RectangleEllipsis } from "lucide-react";

function ContentExamApp() {
  return (
    <div className=" max-h-18 ">
      {/* heading */}
      <Heading className="text-3xl w-full mt-34 mb-15">
        Empower your learning journey with our smart exam platform.
      </Heading>
      {/* Tailored Diplomas */}
      <div className="flex gap-5 mb-9 ">
        <Brain className="w-9 h-9 text-blue-600 border p-1  border-blue-600" />
        <div>
          <h3 className="text-xl text-blue-600 font-semibold">
            Tailored Diplomas
          </h3>
          <p className="text-base">
            Choose from specialized tracks like Frontend, Backend, and Mobile
            Development.
          </p>
        </div>
      </div>
      {/* Focused Exams */}
      <div className="flex gap-5 mb-9 ">
        <BookOpenCheck className="w-9 h-9 text-blue-600 border p-1  border-blue-600" />
        <div>
          <h3 className="text-xl text-blue-600 font-semibold">Focused Exams</h3>
          <p className="text-base">
            Access topic-specific tests including HTML, CSS, JavaScript, and
            more.
          </p>
        </div>
      </div>
      {/* Smart Multi-Step Forms */}
      <div className="flex gap-5 mb-9">
        <RectangleEllipsis className="w-9 h-9 text-blue-600 border p-1  border-blue-600" />
        <div>
          <h3 className="text-xl text-blue-600 font-semibold">
            Smart Multi-Step Forms
          </h3>
          <p className="text-base">
            Choose from specialized tracks like Frontend, Backend, and Mobile
            Development.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ContentExamApp;
