import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "@/components/Ui/toast";
import { useProfile } from "../apis/queries/use-profile";
import { useUpdateProfile } from "../apis/mutations/use-update-profile";
import { useDeleteAccount } from "../apis/mutations/use-delete-account";
import {
  ProfileSchema,
  type ProfileFormValues,
} from "../schemas/profile-schema";

import { Input } from "@/components/Ui/inputs/input";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/Ui/field/field";
import { PhoneInput } from "@/components/Ui/phone-input";
import { Button } from "@/components/Ui/button/button";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/Ui/dialog";
import {  TriangleAlert } from "lucide-react";
import Loading from "@/shared/components/Loading";

import { ChangeEmailDialog } from "./change-email-dialog";

export function ProfileForm() {

  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const { data, isPending, error } = useProfile();


  const { mutateAsync: updateProfile, isPending: isUpdatingProfile } =
    useUpdateProfile();
  const { mutateAsync: deleteAccount, isPending: isDeletingAccount } =
    useDeleteAccount();

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors, isDirty },
  } = useForm<ProfileFormValues>({
    defaultValues: {
      firstName: data?.payload.user?.firstName || "",
      lastName: data?.payload.user?.lastName || "",
      phone: data?.payload.user?.phone || "",
      profileImage: data?.payload.user?.profilePhoto ?? "",
    },
    resolver: zodResolver(ProfileSchema),
  });

 
  useEffect(() => {
    if (!data?.payload?.user) {
      return;
    }

    reset({
      firstName: data.payload.user.firstName,
      lastName: data.payload.user.lastName,
      phone: data.payload.user.phone,
      profileImage: data.payload.user.profilePhoto ?? "",
    });
  }, [data, reset]);

  if (isPending) {
    return <Loading />;
  }

  if (error) {
    return <div className="p-6 font-mono text-red-500">{error.message}</div>;
  }

  async function onSubmit(formData: ProfileFormValues) {
    try {
      await updateProfile({
        firstName: formData.firstName,
        lastName: formData.lastName,
        phone: formData.phone.slice(2),
        profilePhoto: formData.profileImage!,
      });
      toast.add({
        type: "success",
        description: "Profile updated successfully!",
      });
    } catch {
      toast.add({
        type: "error",
        description: "Failed to update profile.",
      });
    }
  }

  const handleDeleteAccount = async () => {
    await deleteAccount();
    setIsDeleteDialogOpen(false);
  };

  const isSubmitting = isUpdatingProfile;

  return (
    <form
      onSubmit={handleSubmit(onSubmit, (error) => {
        console.log(error);
      })}
      className="mt-6 space-y-5 font-mono"
    >
      {/* First Name & Last Name */}
      <FieldGroup className="grid grid-cols-2 gap-4">
        <Field>
          <FieldLabel htmlFor="firstName">First name</FieldLabel>
          <Input
            id="firstName"
            placeholder="Ahmed"
            {...register("firstName")}
          />
          {errors.firstName && (
            <FieldError>{errors.firstName.message}</FieldError>
          )}
        </Field>

        <Field>
          <FieldLabel htmlFor="lastName">Last name</FieldLabel>
          <Input
            id="lastName"
            placeholder="Abdullah"
            {...register("lastName")}
          />
          {errors.lastName && (
            <FieldError>{errors.lastName.message}</FieldError>
          )}
        </Field>
      </FieldGroup>

      {/* Username (Disabled) */}
      <Field data-disabled className={"w-full "}>
        <FieldLabel htmlFor="username">Username</FieldLabel>
        <Input
          id="username"
          value={data?.payload.user?.username}
          disabled
          className=" max-w-full disabled:text-gray-700  disabled:bg-gray-300 "
          placeholder="user123"
        />
      </Field>

      {/* Email */}
      <Field>
        <div className="flex items-center justify-between">
          <FieldLabel htmlFor="email">Email</FieldLabel>
          <ChangeEmailDialog />
        </div>

        <Input
          id="email"
          readOnly
          value={data?.payload.user?.email}
          className="border-gray-200 max-w-full text-gray-900 bg-gray-100/80 cursor-not-allowed"
        />
      </Field>

      {/* Phone Input (Full Width) */}
      <Field className="w-full">
        <FieldLabel htmlFor="phone">Phone</FieldLabel>
        <Controller
          name="phone"
          control={control}
          render={({ field }) => (
            <div
              className="flex items-center w-full h-11 px-3
       border border-gray-200 rounded-lg bg-white 
        focus-within:ring-1 focus-within:ring-blue-500"
            >
              <PhoneInput
                {...field}
                id="phone"
                placeholder="1012345678"
                defaultCountry="EG"
                className="w-full flex items-center gap-2 [&_input]:border-none [&_input]:outline-none [&_input]:bg-transparent [&_input]:w-full [&_input]:focus:ring-0 [&_select]:bg-transparent [&_select]:outline-none"
              />
            </div>
          )}
        />
        {errors.phone && <FieldError>{errors.phone.message}</FieldError>}
      </Field>

      {/* Buttons Action Container (Side-by-side) */}
      <div className="pt-6 grid grid-cols-2 gap-4 w-full">
        {/* Delete Account Modal Trigger */}
        <Dialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
          <DialogTrigger
            render={
              <Button
                type="button"
                className="max-w-full bg-red-50 font-bold text-red-500 hover:bg-red-100 hover:text-red-600 border-none py-3"
              >
                Delete My Account
              </Button>
            }
          />
          <DialogContent className="font-mono sm:max-w-140 text-center">
            <div className="pt-8 pb-2 flex justify-center">
              <div className="p-4 bg-red-50 rounded-full">
                <div className="p-4 bg-red-100 rounded-full">
                  <TriangleAlert className="size-8 text-red-600" />
                </div>
              </div>
            </div>
            <DialogHeader>
              <DialogTitle
                className={"mb-2.5 font-medium text-xl text-red-600"}
              >
                Are you sure you want to delete your account?
              </DialogTitle>
              <DialogDescription className={"text-sm mb-12.5 text-gray-600"}>
                This action is permanent and cannot be undone.
              </DialogDescription>
            </DialogHeader>
            <DialogFooter className="flex mt-2  mx-auto ">
              <Button
                type="button"
                variant="ghost"
                className={"max-w-55  px-21 "}
                onClick={() => setIsDeleteDialogOpen(false)}
              >
                Cancel
              </Button>

              <Button
                type="button"
                className={"max-w-55  px-21 "}
                variant="destructive"
                disabled={isDeletingAccount}
                onClick={handleDeleteAccount}
              >
                {isDeletingAccount ? "Deleting..." : "yes , Delete "}
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        {/* Save Changes Button */}
        <Button
          type="submit"
          disabled={isSubmitting || !isDirty}
          className="w-full bg-blue-600 font-bold text-white hover:bg-blue-700 py-3 disabled:opacity-50"
        >
          {isSubmitting ? "Saving..." : "Save Changes"}
        </Button>
      </div>
    </form>
  );
}
