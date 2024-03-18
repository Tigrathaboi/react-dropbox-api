import { useEffect, useState } from "react";

const File = ({ file, dbx }) => {
  const [exist, setExist] = useState("true");
  useEffect(() => {}, []);

  const deleteBtn = async () => {
    dbx
      .filesDeleteV2({ path: file.path_display })
      .then((response) => {
        console.log(response);
        setExist(false);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
      {exist == "true" ? (
        <li
          key={file.name}
          id={file.id}
          data-tag={file[".tag"]}
          data-path={file.path_display}
          data-pathlower={file.path_lower}
          className="file"
        >
          <p>{file.name}</p>
          <button onClick={deleteBtn}>⤬</button>
        </li>
      ) : (
        ""
      )}
    </>
  );
};

export default File;
