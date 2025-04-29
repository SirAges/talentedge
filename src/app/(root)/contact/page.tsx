"use client";
import ContactForm from "@/components/ContactForm";
import { ContactSchemaType } from "@/lib/schema";
import Image from "next/image";
import { toast } from "sonner";
import contactImage from "@/assets/images/img1.jpeg";
import { COMPANY_NAME } from "@/lib/constants";
import { sendEmail } from "@/lib/mailer";
const page = () => {
  const onSubmit = async (values: ContactSchemaType) => {
    try {
      await sendEmail({
        subject: `You've Received a New Message - ${values.name} Contact Form`,
        email: values.email,
        message: `
    <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f4f4f4;">
      <div style="max-width: 600px; margin: auto; background: #fff; padding: 20px; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
        <h2 style="color: #333;">New Contact Us Message</h2>
        <p style="font-size: 16px; color: #555;">You have received a new message from your ${COMPANY_NAME} contact form.</p>
        <hr style="margin: 20px 0;">
        <p style="font-size: 16px; color: #333;"><strong>Sender Email:</strong>${values.email}</p>
        <p style="font-size: 16px; color: #333;"><strong>Message:</strong><br>${values.message}</p>
        <hr style="margin: 20px 0;">
        <p style="font-size: 12px; color: #999;">This is an automated notification from ${COMPANY_NAME}.</p>
      </div>
    </div>
  `,
      });

      toast("submitted");
    } catch (error) {
      //@ts-expect-error error type
      if (error?.data) {
        //@ts-expect-error error type
        toast(error?.data?.message);
      }
    }
  };
  return (
    <main className="flex flex-col md:flex-row items-center h-[calc(100vh-3rem)]">
      <div className="hidden md:flex relative h-full flex-1">
        <Image
          fill
          src={contactImage}
          alt="contact image"
          className="object-cover"
        />
      </div>
      <div className="flex w-full flex-col justify-center items-center flex-1 ">
        <h1 className="text-2xl font-semibold">Contact us</h1>
        <div className="w-full max-w-md px-10">
          <ContactForm
            onSubmit={onSubmit}
            defaultValues={{}}
          />
        </div>
      </div>
    </main>
  );
};
export default page;
