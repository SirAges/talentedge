"use client";
import ConsultantForm from "@/components/admin/forms/ConsultantForm";
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
import {
  addConsultant,
  deleteConsultant,
  getAllConsultants,
  updateConsultant,
} from "@/lib/actions/consultant.actions";
import { ConsultantSchemaType } from "@/lib/schema";
import { cn } from "@/lib/utils";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpDown,
  Delete,
  Edit,
  Linkedin,
  Mail,
  Phone,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { ChangeEvent, useEffect, useState } from "react";
import { toast } from "sonner";
const Page = () => {
  const [consultantId, setConsultantId] = useState<string>("");
  const [consultants, setConsultants] = useState<ConsultantType[]>([]);

  const [page, setPage] = useState(1);
  const [nextPage, setNextPage] = useState<number | null>(null);
  const [order, setOrder] = useState<"asc" | "desc">("desc");

  const [search, setSearch] = useState<string>("");

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };
  const router = useRouter();
  useEffect(() => {
    const fetchData = async () => {
      const { data, nextPage } = await getAllConsultants({
        page,
        order,
      });
      setNextPage(nextPage);
      setConsultants(data);
    };
    fetchData();
    return () => {};
  }, [page, order]);

  const onSubmit = async (data: ConsultantSchemaType) => {
    try {
      const { message } = await addConsultant({ data });
      toast(message);
    } catch (error) {
      //@ts-expect-error error type
      if (error?.data) {
        //@ts-expect-error error type
        toast(error?.data?.message);
      }
    }
  };

  const handleUpdate = async (data: ConsultantSchemaType) => {
    try {
      const { message } = await updateConsultant({ consultantId, data });
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
    consultants && (
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
              placeholder="search consultants"
              value={search}
              onChange={handleSearch}
              className="max-w-72 py-3 px-2 bg-background"
            />
          </div>
          <div className="px-5">
            <ConsultantForm onSubmit={onSubmit} />
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
                  "name",
                  "title",
                  "bio",
                  "qualifications",
                  "expertise",
                  "contact",
                  "actions",
                ].map((key) => (
                  <TableHead
                    className={cn("text-start capitalize")}
                    key={key}
                  >
                    {key}
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {consultants.map(
                ({
                  id,
                  bio,
                  contact,
                  expertise,
                  name,
                  qualifications,
                  title,
                }) => (
                  <TableRow key={id}>
                    <TableCell
                      title={name}
                      className="truncate"
                    >
                      {name}
                    </TableCell>
                    <TableCell title={title}>{title}</TableCell>
                    <TableCell
                      title={bio}
                      className="max-w-60 truncate"
                    >
                      {bio}
                    </TableCell>

                    <TableCell
                      title={qualifications.join(", ")}
                      className="max-w-32 truncate"
                    >
                      {qualifications.join(", ")}
                    </TableCell>
                    <TableCell
                      title={expertise.join(", ")}
                      className="max-w-32 truncate"
                    >
                      {expertise.join(", ")}
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-x-2">
                        <Phone
                          onClick={() => router.push(`tel:${contact.phone}`)}
                          size={16}
                          className="text-chart-2 cursor-pointer"
                        />
                        <Mail
                          onClick={() => router.push(`mailto:${contact.email}`)}
                          size={16}
                          className="text-chart-5 cursor-pointer"
                        />
                        <Linkedin
                          onClick={() => router.push(contact.linkedIn)}
                          size={16}
                          className="text-primary cursor-pointer"
                        />
                      </div>
                    </TableCell>
                    <TableCell>
                      <ConsultantForm
                        defaultValues={{
                          bio,
                          email: contact.email,
                          phone: contact.phone,
                          linkedIn: contact.linkedIn,
                          expertise: expertise.join(","),
                          name,
                          qualifications: qualifications.join(","),
                          title,
                        }}
                        onSubmit={handleUpdate}
                      >
                        <Button
                          onClick={() => setConsultantId(id)}
                          variant={"link"}
                          className="hover:no-underline"
                        >
                          Edit
                          <Edit />
                        </Button>
                      </ConsultantForm>

                      <Button
                        onClick={() => deleteConsultant({ consultantId: id })}
                        variant={"link"}
                        className="text-destructive hover:no-underline"
                      >
                        Delete
                        <Delete />
                      </Button>
                    </TableCell>
                  </TableRow>
                )
              )}
            </TableBody>
          </Table>
        </div>
      </div>
    )
  );
};
export default Page;
