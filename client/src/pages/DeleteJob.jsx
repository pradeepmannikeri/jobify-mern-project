import { redirect } from "react-router-dom";
import { toast } from "react-toastify";
import customFetch from "../utils/customFetch";

export async function deleteAction({ request, params }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    await customFetch.delete(`/jobs/${params.id}`, data);
    toast.success("job deleted successfully");
    return redirect("/dashboard/all-jobs");
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
}
