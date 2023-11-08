import { useMutation, useQueryClient } from "@tanstack/react-query";

import toast from "react-hot-toast";
import { updateCurrentUsser } from "../../services/apiAuth";

export function useUpdateUser() {
  const queryClient = useQueryClient();

  const { mutate: updateUser, isLoading: isUpdating } = useMutation({
    mutationFn: updateCurrentUsser,
    onSuccess: () => {
      toast.success("User account succesfylly updated");
      queryClient.invalidateQueries({ queryKey: ["user"] });
    },

    onError: (err) => toast.error(err.message),
  });

  return { updateUser, isUpdating };
}
