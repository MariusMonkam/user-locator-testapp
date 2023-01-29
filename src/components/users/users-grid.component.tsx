import Paper from "@mui/material/Paper";
import UserGridItem from "./users-grid-item/users-grid-item.component";
import "./users-grid.component.tsx";
import {
  useAppDispatch,
  useAppSelector
} from "../../hook/users/useTypedSelector";
import { useEffect } from "react";
import { getUsers } from "../../features/slices/userSlice";

const UserGrid: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  const { data, loading } = useAppSelector((state) => state);

  return (
    <Paper elevation={3}>
      {loading
        ? loading
        : data &&
          data.map((user) => (
            <div key={user.id}>
              <UserGridItem user={user} />
            </div>
          ))}
    </Paper>
  );
};

export default UserGrid;
