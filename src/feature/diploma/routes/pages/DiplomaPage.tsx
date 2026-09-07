import { useDiplomasList } from "../../apis/queries/use-diplomas";
import DiplomaCard from "../../components/Diploma-card";
import Heading from "@/feature/auth/shared/components/heading";
import { GraduationCap } from "lucide-react";
import InfiniteScrollIndicator from "../../components/InfiniteScrollIndicator";
import { useInfiniteScroll } from "@/shared/hooks/use-infinite-scroll";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/Ui/breadcrumb";
import Loading from "@/shared/components/Loading";

function DiplomaPage() {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    error,
    isPending,
  } = useDiplomasList();

  const observerTarget = useInfiniteScroll({
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
  });

  if (isPending) {
    return <Loading/>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <>
      {" "}
      <Breadcrumb className="mb-4">
        <BreadcrumbList className={"p-4"}>
          <BreadcrumbItem>
            <BreadcrumbLink href="/diplomas">Diplomas</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbSeparator />
        </BreadcrumbList>
      </Breadcrumb>
      <main className="p-6">
        <header className="mb-8">
          <Heading className="flex items-center gap-1 bg-blue-600 py-5 text-3xl text-white">
            <GraduationCap className="ms-4 size-11" />
            Diplomas
          </Heading>
        </header>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {data.pages.flatMap((page) =>
            page.payload.data.map((diploma) => (
              <DiplomaCard key={diploma.id} diploma={diploma} />
            )),
          )}
        </div>

        {hasNextPage && (
          <InfiniteScrollIndicator
            ref={observerTarget}
            isLoading={isFetchingNextPage}
          />
        )}
      </main>
    </>
  );
}

export default DiplomaPage;
