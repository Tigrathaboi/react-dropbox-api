import "./App.css";
import { useEffect, useState } from "react";
import { Dropbox } from "dropbox";
import { token } from "./services/constants.js";
import { sortAlphabet } from "./services/sortAlphabet.js";
import { cutPath } from "./services/cutPath.js"
import List from "./components/List";
import { useSelector, useDispatch } from "react-redux";
import { changeRoot } from "./store/rootSlice";
import { changeList } from "./store/listSlice";

function App() {
  const [pathNewFolder, setPathNewFolder] = useState("/");
  const [rootNewPath, setRootNewPath] = useState("/");

  const root = useSelector((state) => state.root.value);
  const list = useSelector((state) => state.list.value);

  const dispatch = useDispatch();
  const addRoot = (root) => dispatch(changeRoot(root));
  const addList = (list) => dispatch(changeList(list));

  const dbx = new Dropbox({
    accessToken: token,
  });

  const showList = (root) => {
    dbx.filesListFolder({ path: root === "/" ? "" : root }).then((response) => {
      addList(sortAlphabet(response.result.entries));
    });
  };

  const pathHandler = (event) => {
    setRootNewPath(event.target.value);
  };

  const pathNewFolderHandler = (event) => {
    setPathNewFolder(event.target.value);
  };

  const submitPathHandler = (event) => {
    event.preventDefault();
    showList(rootNewPath);

    addRoot(cutPath(rootNewPath));
  };

  const submitPathNewFolderHandler = async (event) => {
    event.preventDefault();
    await dbx.filesCreateFolderV2({ path: pathNewFolder }).then((response) => {
      console.log(response);
    });

    showList(rootNewPath);
  };

  useEffect(() => {
    showList(root);
  }, []);

  return (
    <>
      <h1>DBB</h1>
      <form>
        <div className="form-block">
          <input
            className="form-block__input"
            value={rootNewPath}
            onChange={pathHandler}
          />
          <button className="form-block__submit" onClick={submitPathHandler}>
            Go
          </button>
        </div>

        <div className="form-block">
          <input
            className="form-block__input"
            value={pathNewFolder}
            onChange={pathNewFolderHandler}
          />
          <button
            className="form-block__submit"
            onClick={submitPathNewFolderHandler}
          >
            Create
          </button>
        </div>
      </form>
      <List list={list} dbx={dbx}></List>
    </>
  );
}

export default App;
