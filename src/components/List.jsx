import { sortAlphabet } from "../services/sortAlphabet.js";
import { cutPath } from "../services/cutPath.js";
import { useSelector, useDispatch } from "react-redux";
import { changeList } from "../store/listSlice";
import { changeRoot } from "../store/rootSlice";
import Folder from "./Folder";
import File from "./File";

const List = ({ list, dbx }) => {
  const dispatch = useDispatch();

  const root = useSelector((state) => state.root.value);

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

  let listItemsTemp = [];
  if (list.length != undefined) {
    listItemsTemp = list.map((item) => {
      if (item[".tag"] === "folder") {
        return <Folder key={item.name} dbx={dbx} folder={item}></Folder>;
      } else {
        return <File key={item.name} dbx={dbx} file={item}></File>;
      }
    });
  }

  return (
    <ul>
      <li
        key="back"
        id="back"
        data-tag="folder"
        data-path=""
        data-pathlower=""
        className="folder folder--back"
        onClick={() => {
          updateFiles(root);
        }}
      >
        <img className="folder-thumbnail" src="/return.svg" />
        <p>BACK</p>
      </li>
      {list.length === 0 ? (
        <p>Empty</p>
      ) : list.length != undefined ? (
        listItemsTemp
      ) : (
        ""
      )}
    </ul>
  );
};

export default List;
