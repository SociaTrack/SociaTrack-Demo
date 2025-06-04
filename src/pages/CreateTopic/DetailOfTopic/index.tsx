import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFormContext } from "@/hooks/createProject/projectContext";
import { useAuth } from "@/hooks/AuthContext";
import { Button } from "@/components/ui/button";
import Stepper from "@/components/dashboard/Stepper";
import { useToast } from "@/components/ui/use-toast";

const DetailOfTopic = () => {
  const { formState, createProject, resetForm } = useFormContext();
  const { auth } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async () => {
    setIsSubmitting(true);
    try {
      const response = await createProject();

      if (response?.status === 201 || response?.status === 200) {
        toast({
          title: "Success",
          description: auth?.isOfflineMode
            ? "Project created successfully in offline mode!"
            : "Project created successfully!",
        });

        resetForm();
        navigate("/dashboard");
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to create project. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <section className="w-[688px] h-[58px] flex flex-col justify-start items-start gap-1">
        <h2>Create Project</h2>
        <p className="text-zinc-500 leading-tight">
          Review and confirm your project details
        </p>
      </section>
      <Stepper />
      <section className="w-[1169px] min-h-screen px-8 py-6 bg-white rounded-lg shadow border border-gray-200 flex flex-col justify-start items-start gap-6 mb-10">
        <div className="self-stretch flex-col justify-start items-start gap-8 flex">
          <div className="grow shrink basis-0 flex-col justify-start items-start gap-1 flex">
            <div className="self-stretch justify-start items-start gap-[197px] flex">
              <div className="justify-start items-center gap-2 flex">
                <h3 className="leading-loose">Project Summary</h3>
              </div>
            </div>
            <p className="self-stretch text-neutral-400 leading-tight">
              Review your project information before creating
            </p>
          </div>

          <div className="w-full space-y-6">
            <div className="grid grid-cols-3 gap-4">
              <div className="font-semibold">Project Title:</div>
              <div className="col-span-2">{formState.projectTitle}</div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div className="font-semibold">Description:</div>
              <div className="col-span-2">{formState.projectDescription}</div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div className="font-semibold">Category:</div>
              <div className="col-span-2">{formState.projectCategory}</div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div className="font-semibold">Keywords:</div>
              <div className="col-span-2">{formState.keywordCrawling}</div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div className="font-semibold">Language:</div>
              <div className="col-span-2">{formState.country}</div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div className="font-semibold">Date Range:</div>
              <div className="col-span-2">
                {formState.rangeTweet.from?.toDateString()} -{" "}
                {formState.rangeTweet.to?.toDateString()}
              </div>
            </div>

            {auth?.isOfflineMode && (
              <div className="bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded">
                <strong>Offline Mode:</strong> This project will be created
                locally and won't be synced to the server.
              </div>
            )}
          </div>

          <div className="w-full py-4 bg-white border-t border-gray-200 justify-between items-center flex">
            <Button
              type="button"
              variant="outline"
              onClick={() =>
                navigate("/dashboard/create-project/keyword-crawling")
              }
              disabled={isSubmitting}
            >
              Back
            </Button>
            <Button onClick={handleSubmit} disabled={isSubmitting}>
              {isSubmitting ? "Creating..." : "Create Project"}
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default DetailOfTopic;
