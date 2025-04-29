"use client";
import UserForm from "@/components/admin/forms/UserForm";
import { AlertTitle } from "@/components/ui/alert";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
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
  deleteUser,
  getAllUsers,
  updateUser,
} from "@/lib/actions/user.actions";
import { cn } from "@/lib/utils";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpDown,
  Delete,
  Edit,
  PlusCircle,
  User,
} from "lucide-react";
import { ChangeEvent, useEffect, useState } from "react";
import { toast } from "sonner";

const Page = () => {
  const [userId, setUserId] = useState<string>("");

  const [users, setUsers] = useState<UserFormType[]>([]);

  const [page, setPage] = useState(1);
  const [nextPage, setNextPage] = useState<number | null>(null);
  const [order, setOrder] = useState<"asc" | "desc">("desc");

  const [search, setSearch] = useState<string>("");
  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };
  useEffect(() => {
    const fetchData = async () => {
      const { data, nextPage } = await getAllUsers({
        page,
        order,
      });
      setNextPage(nextPage);
      setUsers(data);
    };
    fetchData();
    return () => {};
  }, [page, order]);
  const handleUpdate = async (data: UserFormType) => {
    try {
      const { message } = await updateUser({ userId, data });
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
            placeholder="search users"
            value={search}
            onChange={handleSearch}
            className="max-w-72 py-3 px-2 bg-background"
          />
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
                "company Name",
                "first Name",
                "last Name",
                "email",
                "role",
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
            {users.map(
              ({ id, companyName, email, firstName, role, lastName }) => (
                <TableRow key={id}>
                  <TableCell title={companyName}>{companyName}</TableCell>
                  <TableCell title={firstName}>{firstName}</TableCell>
                  <TableCell title={lastName}>{lastName}</TableCell>
                  <TableCell title={email}>{email}</TableCell>
                  <TableCell title={role}>{role}</TableCell>

                  <TableCell>
                    <AlertDialog>
                      <AlertDialogTrigger>
                        <Button
                          variant={"link"}
                          className=" hover:no-underline"
                        >
                          Change Role
                          <PlusCircle />
                        </Button>
                      </AlertDialogTrigger>

                      <AlertDialogContent className="flex-1 flex flex-col items-center justify-center">
                        <AlertDialogHeader>
                          <AlertTitle>
                            Are You Sure You Want to Change Role
                          </AlertTitle>
                        </AlertDialogHeader>
                        <div className="flex gap-x-2 flex-1 w-full items-center text-white  justify-center">
                          <AlertDialogCancel className="flex items-center gap-x-2  rounded-full bg-primary w-fit py-3 px-3 cursor-pointer">
                            <User />
                            Admin
                          </AlertDialogCancel>
                          <AlertDialogCancel className="flex items-center gap-x-2  rounded-full bg-green-500 w-fit py-3 px-3 cursor-pointer">
                            <User />
                            User
                          </AlertDialogCancel>
                        </div>
                      </AlertDialogContent>
                    </AlertDialog>
                    <UserForm
                      defaultValues={{
                        companyName,
                        email,
                        firstName,

                        lastName,
                      }}
                      onSubmit={handleUpdate}
                    >
                      <Button
                        onClick={() => setUserId(id!)}
                        variant={"link"}
                        className="hover:no-underline"
                      >
                        Edit
                        <Edit />
                      </Button>
                      <Button
                        onClick={() => deleteUser({ userId: id! })}
                        variant={"link"}
                        className="text-destructive hover:no-underline"
                      >
                        Delete
                        <Delete />
                      </Button>
                    </UserForm>
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
