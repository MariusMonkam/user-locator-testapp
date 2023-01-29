import React from "react";
import {
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  useTheme
} from "@mui/material";
import { Link } from "react-router-dom";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import IconButton from "@mui/material/IconButton";
import { IUser } from "../../../common/interfaces/user.interface";
import "./users-grid-item.component.css";

const UserGridItem: React.FC<{ user: IUser }> = ({ user }: { user: IUser }) => {
  const theme = useTheme();
  return (
    <ListItem
      sx={{
        padding: 1,
        margin: 1,
        maxWidth: "100%"
      }}
    >
      <ListItemAvatar>
        <Avatar sx={{ bgcolor: theme.palette.primary.main }}>{user.id}</Avatar>
      </ListItemAvatar>

      <ListItemText
        primaryTypographyProps={{
          fontSize: 20,
          fontWeight: "bold",
          letterSpacing: 0
        }}
        primary={user.name}
        secondary={
          <>
            <ListItemText
              primary={user.company.name}
              secondary={`${user.address.suite}, ${user.address.street}, ${user.address.zipcode}, ${user.address.city}`}
            />
          </>
        }
      />
      <ListItemButton>
        <Link
          to={`/user/${user.id}/${user.address.geo.lat}/${user.address.geo.lng}`}
        >
          <IconButton color="primary" aria-label="location">
            <LocationOnIcon />
          </IconButton>
        </Link>
      </ListItemButton>
    </ListItem>
  );
};

export default UserGridItem;
