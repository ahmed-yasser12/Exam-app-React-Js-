import { useState } from "react";
import { Pencil } from "lucide-react";
import { Button } from "@/components/Ui/button/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/Ui/dialog";
import { EmailStepContent } from "./email-step-content";
import { OtpStepContent } from "./otp-step-content";
import { requestEmailChange } from "../apis/req-email-change";
import { toast } from "@/components/Ui/toast";
type EmailStep = "email" | "otp";

export function ChangeEmailDialog() {
  const [isOpen, setIsOpen] = useState(false);
  const [emailStep, setEmailStep] = useState<EmailStep>("email");
  const [newEmail, setNewEmail] = useState("");

  function handleOpenChange(open: boolean) {
    setIsOpen(open);

    if (!open) {
      setEmailStep("email");
      setNewEmail("");
    }
  }
  const handleSaveNewEmail = async () => {
    try {
      if (!newEmail.trim()) {
        return;
      }
      await requestEmailChange({
        newEmail,
      });
      toast.add({
        type: "success",
        description: "the code is sent to your New Email ",
      });
      setEmailStep("otp");
    } catch {
      toast.add({
        type: "error",
        description: "Failed to update profile.",
      });
    }
  };

  function handleEditEmail() {
    setEmailStep("email");
  }

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogTrigger
        render={
          <Button
            type="button"
            variant="ghost"
            className="h-auto gap-1 p-0 text-blue-600 hover:bg-transparent hover:text-blue-700"
          >
            <Pencil className="size-4" />
            Change
          </Button>
        }
      />

      <DialogContent className="p-0 sm:max-w-120">
        {/* Step Indicator */}
        <div className="px-6 pt-5">
          <div className="flex items-center mt-8">
            <div
              className={`size-3 rotate-45 ${
                emailStep === "email" ? "bg-blue-600" : "bg-blue-200"
              }`}
            />

            <div className="h-px flex-1 border-t border-dashed border-blue-400" />

            <div
              className={`size-3 rotate-45 ${
                emailStep === "otp" ? "bg-blue-600" : "bg-blue-200"
              }`}
            />
          </div>
        </div>

        <DialogHeader className="px-6 pt-2">
          <DialogTitle className="text-2xl font-bold">Change Email</DialogTitle>
        </DialogHeader>

        {emailStep === "email" ? (
          <EmailStepContent
            email={newEmail}
            onEmailChange={setNewEmail}
            onNext={handleSaveNewEmail}
          />
        ) : (
          <OtpStepContent email={newEmail} onEdit={handleEditEmail} setIsOpen={setIsOpen} />
        )}
      </DialogContent>
    </Dialog>
  );
}
