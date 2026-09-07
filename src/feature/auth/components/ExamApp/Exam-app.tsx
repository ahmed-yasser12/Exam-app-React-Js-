import { FolderCode } from "lucide-react";
import ContentExamApp from "../ContentExamApp/ContentExamApp";
function ExamApp() {
  return (
    <div className="mx-auto flex-col max-w-114.5 max-h-198 items-center   " >
      {/* icon floder */}
      <div className="text-blue-600 flex  items-center gap-2.5">
        <FolderCode className=" w-10 h-10 " />
        <h3 className="text-xl">Exam App</h3>
      </div>
      {/* content  */}
      <ContentExamApp />
    </div>
  );
}

export default ExamApp;
