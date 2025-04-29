"use client";
import SolutionForm from "@/components/admin/forms/SolutionForm";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { addSolution, deleteSolution, getAllSolutions, updateSolution } from "@/lib/actions/solution.action";
import { SolutionsSchemaType } from "@/lib/schema";
import { cn } from "@/lib/utils";
import { ArrowLeft, ArrowRight, ArrowUpDown, Delete, Edit } from "lucide-react";
import { ChangeEvent, useEffect, useState } from "react";
import { toast } from "sonner";

const Page = () => {
  const [solutionId, setSolutionId] = useState<string>("");

  const [solutions, setSolutions] = useState<SolutionType[]>([]);

  const [page, setPage] = useState(1);
  const [nextPage, setNextPage] = useState<number | null>(null);
  const [order, setOrder] = useState<"asc" | "desc">("desc");

  const [search, setSearch] = useState<string>("");
  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };
  useEffect(() => {
    const fetchData = async () => {
      const { data, nextPage } = await getAllSolutions({
        page,
        order,
      });
      setNextPage(nextPage);
      setSolutions(data);
    };
    fetchData();
    return () => {};
  }, [page, order]);

  const onSubmit = async (data: SolutionsSchemaType) => {
    try {
      const { message } = await addSolution({ data });
      toast(message);
    } catch (error) {
      //@ts-expect-error error type
      if (error?.data) {
        //@ts-expect-error error type
        toast(error?.data?.message);
      }
    }
  };

  const handleUpdate = async (data: SolutionsSchemaType) => {
    try {
      const { message } = await updateSolution({ solutionId, data });
      toast(message);
    } catch (error) {
      //@ts-expect-error error type
      if (error?.data) {
        //@ts-expect-error error type
        toast(error?.data?.message);
      }
    }
  };
  return (
    <div className="pl-5 ">
      <div className="bg-background flex items-center justify-between  sticky top-0 z-50 h-14 px-3">
        <div className="w-8 h-8 rounded-full flex items-center justify-center border bg-background/70">
          <ArrowUpDown
            onClick={() =>
              setOrder((prev) => (prev === "desc" ? "asc" : "desc"))
            }
            className="cursor-pointer"
            size={14}
          />
        </div>
        <div className="flex-1 px-4">
          <Input
            name="search"
            placeholder="search solutions"
            value={search}
            onChange={handleSearch}
            className="max-w-72 py-3 px-2 bg-background"
          />
        </div>
        <div className="px-5">
          <SolutionForm onSubmit={onSubmit} />
        </div>
        <div className="flex items-center gap-x-2">
          <div className="w-8 h-8 rounded-full flex items-center justify-center border bg-background/70">
            <ArrowLeft
              onClick={() => setPage((prev) => (prev > 1 ? prev - 1 : 1))}
              className="cursor-pointer"
              size={14}
            />
          </div>
          <div className="w-8 h-8 rounded-full flex items-center justify-center border bg-background/70">
            <ArrowRight
              onClick={() => setPage(nextPage!)}
              className="cursor-pointer"
              size={14}
            />
          </div>
        </div>
      </div>
      <div className="overflow-y-scroll hide-scrollbar  max-h-[calc(100vh-3rem)]">
        <Table>
          <TableHeader>
            <TableRow>
              {[
                "title",
                "category",
                "description",
                "industries served",
                "actions",
              ].map((key) => (
                <TableHead
                  className={cn(
                    "text-start capitalize",
                    key === "actions" && "text-right"
                  )}
                  key={key}
                >
                  {key}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {solutions.map(
              ({ id, category, description, industriesServed, title }) => (
                <TableRow key={id}>
                  <TableCell
                    title={title}
                    className="truncate"
                  >
                    {title}
                  </TableCell>
                  <TableCell title={category}>{category}</TableCell>
                  <TableCell
                    title={description}
                    className="max-w-60 truncate"
                  >
                    {description}
                  </TableCell>

                  <TableCell
                    title={industriesServed.join(", ")}
                    className="max-w-32 truncate"
                  >
                    {industriesServed.join(", ")}
                  </TableCell>
                  <TableCell>
                    <SolutionForm
                      defaultValues={{
                        category,
                        description,
                        industriesServed: industriesServed.join(","),
                        title,
                      }}
                      onSubmit={handleUpdate}
                    >
                      <Button
                        onClick={() => setSolutionId(id)}
                        variant={"link"}
                        className="hover:no-underline"
                      >
                        Edit
                        <Edit />
                      </Button>
                      <Button
                        onClick={() => deleteSolution({ solutionId: id })}
                        variant={"link"}
                        className="text-destructive hover:no-underline"
                      >
                        Delete
                        <Delete />
                      </Button>
                    </SolutionForm>
                  </TableCell>
                </TableRow>
              )
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};
export default Page;
