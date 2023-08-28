import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faTrash,
  faSignOutAlt,
  faEdit,
  faFolderMinus,
  faSpinner,
  faPlusCircle,
  faMinus,
  faMobile,
  faEnvelope,
  faMapPin,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";

const Icons = () => {
  return library.add(
    faTrash,
    faSignOutAlt,
    faEdit,
    faSpinner,
    faPlusCircle,
    faMinus,
    faMobile,
    faEnvelope,
    faMapPin,
    faMapMarkerAlt
  );
};
export default Icons;
