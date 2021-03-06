import React, { useState } from "react";
import { TrackedItem } from "./Tracker";

type Props = {
  trackedItems: TrackedItem[];
};

const TrackedList: React.FC<Props> = ({ trackedItems }) => {

  const [modalData, setModalData] = useState<TrackedItem>({
    username: "",
    name: "",
    projectdes: "",
    projectname: "",
    timespent: "",
  });

  const renderItemList = () => {

    if (trackedItems.length > 0) {
      return(
      <ul className="list-group mt-3 shadow-sm">
        {trackedItems.map((trackedItem, index) => (

          <li
            className="list-group-item"
            key={index}
            onClick={() => setModalData(trackedItems[index])}
            data-bs-toggle="modal"
            data-bs-target="#detailsModal"
          >
            {trackedItem.projectname}
          </li>
        ))}
      </ul>)
    } else {
      return <h6 className="fst-italic mt-3">Add notes in the tracker to see it here.</h6>;
    }
  }

  return (
    <div>
      {renderItemList()}

      <div
        className="modal fade"
        id="detailsModal"
        tabIndex={-1}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">
                {modalData.projectname}
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
                <p>User: {modalData.username}</p>
                <p>Name: {modalData.name}</p>
                <p>Project Description: {modalData.projectdes}</p>
                <p>Time spent (in mins): {modalData.timespent}</p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrackedList;