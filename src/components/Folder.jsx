import { useDispatch } from "react-redux";
import { changeList } from "../store/listSlice";
import { sortAlphabet } from "../services/sortAlphabet.js";
import { cutPath } from "../services/cutPath.js"
import { changeRoot } from "../store/rootSlice";

const Folder = ({ folder, dbx }) => {
  const dispatch = useDispatch();

  const addList = (list) => dispatch(changeList(list));
  const addRoot = (root) => dispatch(changeRoot(root));

  const updateFiles = async (path) => {
    await dbx
      .filesListFolder({ path: path === "/" ? "" : path })
      .then((response) => {
        addList(sortAlphabet(response.result.entries));
      });

    addRoot(cutPath(path));
  };

  const deleteBtn = async () => {
    await dbx
      .filesDeleteV2({ path: folder.path_display })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error(error);
      });

    updateFiles("");
  };

  return (
    <>
      <li
        key={folder.name}
        id={folder.id}
        data-tag={folder[".tag"]}
        data-path={folder.path_display}
        data-pathlower={folder.path_lower}
        className={folder[".tag"]}
        onClick={() => {
          updateFiles(folder.path_display);
        }}
      >
        <img className="folder-thumbnail" src="/open-folder.png" />
        <p>{folder.name}</p>
        <button
          onClick={() => {
            deleteBtn();
          }}
        >
          ⤬
        </button>
      </li>
    </>
  );
};

export default Folder;
