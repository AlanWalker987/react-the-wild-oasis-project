import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { login as loginApi } from "../../services/apiAuth";
import { toast } from "react-hot-toast";

export function useLogin() {
  const navigate = useNavigate();
  //  const queryClient = useQueryClient();

  const { mutate: login, isLoading } = useMutation({
    mutationFn: ({ email, password }) => {
      console.log(email);
      console.log(password);
      loginApi({ email, password });
    },
    onSuccess: () => {
      toast.success("Login done successfully");
      //   console.log(user);
      //  queryClient.setQueryData(["user"], user.user);
      navigate("/dashboard", { replace: true });
    },
    onError: (err) => {
      console.log(err);
      toast.error("Provided mail and password are incorrect");
    },
  });

  return { login, isLoading };
}
