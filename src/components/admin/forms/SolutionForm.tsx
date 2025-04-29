"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { solutionsSchema, SolutionsSchemaType } from "@/lib/schema";
import { Textarea } from "@/components/ui/textarea";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { ArrowRightCircle, Loader2 } from "lucide-react";
import { AlertTitle } from "@/components/ui/alert";
import { ReactNode } from "react";

const Placeholder = {
  title: "Workforce Capacity Development",
  category: "Training Solutions",
  description: "We design and deliver competency-based...",
  industriesServed:
    "Seperate with comma e.g: Banking,Manufacturing,Healthcare,Public Sector",
};

const InputType = {
  title: "text",
  category: "text",
  description: "text",
  industriesServed: "text",
};

const LabelText = {
  title: "Title",
  category: "Category",
  description: "Description",
  industriesServed: "Industries Served",
};

const SolutionForm = ({
  children,
  onSubmit,
  defaultValues,
}: {
  defaultValues?: SolutionsSchemaType;
  children?: ReactNode;
  onSubmit: (value: SolutionsSchemaType) => Promise<void>;
}) => {
  const method = useForm({
    resolver: zodResolver(solutionsSchema),
    defaultValues,
  });
  const {
    handleSubmit,
    control,
    formState: { isSubmitting, disabled },
  } = method;
  return (
    <AlertDialog>
      <AlertDialogTrigger>
        {children ? (
          children
        ) : (
          <Button>
            Add Solution <ArrowRightCircle />
          </Button>
        )}
      </AlertDialogTrigger>

      <AlertDialogContent className="flex-1 flex flex-col items-center justify-center">
        <AlertDialogHeader>
          <AlertTitle> Solution Form</AlertTitle>
        </AlertDialogHeader>

        <Form {...method}>
          <form
            className="flex flex-col items-center w-full gap-y-4  py-2"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="flex-1 flex flex-col max-h-96 overflow-y-scroll hide-scrollbar w-full h-full gap-y-4">
              <FormField
                control={control}
                name={"title"}
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>{LabelText["title"]}</FormLabel>
                    <FormControl>
                      <Input
                        type={InputType["title"]}
                        className=" placeholder:text-foreground/50 placeholder:text-xs"
                        placeholder={Placeholder["title"]}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-destructive" />
                  </FormItem>
                )}
              />

              <FormField
                control={control}
                name={"category"}
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>{LabelText["category"]}</FormLabel>
                    <FormControl>
                      <Input
                        type={InputType["category"]}
                        className=" placeholder:text-foreground/50 placeholder:text-xs"
                        placeholder={Placeholder["category"]}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-destructive" />
                  </FormItem>
                )}
              />

              <FormField
                control={control}
                name={"description"}
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>{LabelText["description"]}</FormLabel>
                    <FormControl>
                      <Textarea
                        className=" placeholder:text-foreground/50 placeholder:text-xs"
                        placeholder={Placeholder["description"]}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-destructive" />
                  </FormItem>
                )}
              />

              <FormField
                control={control}
                name={"industriesServed"}
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>{LabelText["industriesServed"]}</FormLabel>
                    <FormControl>
                      <Input
                        className=" placeholder:text-foreground/50 placeholder:text-xs"
                        placeholder={Placeholder["industriesServed"]}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-destructive" />
                  </FormItem>
                )}
              />
            </div>
            <div className="flex gap-x-2 items-center">
              <AlertDialogCancel className="border-none flex-1">
                <Button variant={"destructive"}>Cancel</Button>
              </AlertDialogCancel>
              <Button
                disabled={disabled}
                type="submit"
                className="cursor-pointer"
              >
                {isSubmitting ? <Loader2 className="animate-spin" /> : "Add"}
              </Button>
            </div>
          </form>
        </Form>
      </AlertDialogContent>
    </AlertDialog>
  );
};
export default SolutionForm;
