import Heading from "@/feature/auth/shared/components/heading";
import { useDiplomaDetails } from "@/feature/diploma/apis/queries/use-diploma-details";
import { BookOpenCheck, Loader2 } from "lucide-react";
import { useParams } from "react-router";
import ExamCard from "../components/ExamCard";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/Ui/breadcrumb";

function ExamPage() {
  const { diplomaId } = useParams();
  const { data, isPending, error } = useDiplomaDetails(diplomaId!);
  const diploma = data?.payload.diploma;

  if (isPending) {
    return<div className="flex h-[500px] w-full flex-col items-center justify-center gap-3 font-mono text-blue-600">
      <Loader2 className="size-10 animate-spin text-blue-600" />
    </div>;;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <>
      {/* crumd */}

      <Breadcrumb className="p-4">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/diplomas">Diplomas</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="#">{diploma?.title}</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="#">Exams</BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <main className="p-6">
        {/* header */}
        <header className="mb-8">
          <Heading className="flex items-center gap-1 bg-blue-600 py-5 text-3xl text-white">
            <BookOpenCheck className="ms-4 size-11" />
            {data?.payload.diploma.title}
          </Heading>
        </header>
        {/* cardExams */}
        <div className="flex flex-col gap-4">
          {diploma?.exams.map((exam) => 
            <div key={exam.id}>
              <ExamCard key={exam.id} exam={exam} />
            </div>
          )}
        </div>
      </main>
    </>
  );
}

export default ExamPage;
