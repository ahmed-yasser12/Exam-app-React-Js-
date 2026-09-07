import { UserRound } from "lucide-react";
import { useUserProfile } from "../apis/queries/use-user-profile";

function UserProfile() {
  const { data, isPending, error } = useUserProfile();
  const user = data?.payload.user;

  if (isPending) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }
  
  return (
    <div className="mt-auto flex items-center gap-3 border-t py-5 pe-5">
      <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-blue-100">
        {user?.profilePhoto ? (
          <img
            src={user.profilePhoto}
            alt={user.username}
            className="size-full rounded-full object-cover"
          />
        ) : (
          <UserRound className="size-5 text-blue-600" />
        )}
      </div>

      <div className="min-w-0">
        <p className="truncate font-base text-blue-500">{user?.username}</p>

        <p className="truncate text-sm text-gray-500">{user?.email}</p>
      </div>
    </div>
  );
}

export default UserProfile;
