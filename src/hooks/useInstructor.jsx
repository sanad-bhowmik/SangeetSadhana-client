import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useInstructor = () => {
  const { user, loading } = useAuth();
  const [axiosSecure] = useAxiosSecure();

  // Use axios secure with react query
  const { data: isInstructor, isLoading: isInstructorLoading } = useQuery(['isInstructor', user?.email], {
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/admin/${user?.email}`);
      return res.data.admin;
    }
  });

  return [isInstructor, isInstructorLoading];
};

export default useInstructor;
